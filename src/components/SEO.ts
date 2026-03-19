import { useEffect } from "react";

type StructuredData = Record<string, unknown> | Array<Record<string, unknown>>;

type SEOProps = {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  locale?: "en" | "nl";
  type?: "website" | "article";
  siteName?: string;
  author?: string;
  keywords?: string[];
  noIndex?: boolean;
  alternateLanguages?: Partial<Record<"en" | "nl", string>>;
  structuredData?: StructuredData;
};

const MANAGED_ATTR = "data-seo-managed";
const DEFAULT_SITE_NAME = "Vellic";
const DEFAULT_AUTHOR = "Vellic";
const DEFAULT_IMAGE = "/og-image.png";
const DEFAULT_THEME_COLOR = "#f4f6fb";

function upsertMeta(attribute: "name" | "property", key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute(MANAGED_ATTR, "true");
  element.setAttribute("content", content);
}

function upsertLink(rel: string, href: string, extraAttributes: Record<string, string> = {}) {
  const selectorParts = [`link[rel="${rel}"]`];

  for (const [key, value] of Object.entries(extraAttributes)) {
    selectorParts.push(`[${key}="${value}"]`);
  }

  let element = document.head.querySelector<HTMLLinkElement>(selectorParts.join(""));

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }

  element.setAttribute(MANAGED_ATTR, "true");
  element.setAttribute("href", href);

  for (const [key, value] of Object.entries(extraAttributes)) {
    element.setAttribute(key, value);
  }
}

function upsertJsonLd(content: string) {
  let element = document.head.querySelector<HTMLScriptElement>(`script[type="application/ld+json"][${MANAGED_ATTR}="true"]`);

  if (!element) {
    element = document.createElement("script");
    element.type = "application/ld+json";
    document.head.appendChild(element);
  }

  element.setAttribute(MANAGED_ATTR, "true");
  element.textContent = content;
}

function removeManagedMeta(attribute: "name" | "property", key: string) {
  document.head.querySelector(`meta[${attribute}="${key}"][${MANAGED_ATTR}="true"]`)?.remove();
}

function removeManagedJsonLd() {
  document.head.querySelector(`script[type="application/ld+json"][${MANAGED_ATTR}="true"]`)?.remove();
}

function removeManagedAlternates() {
  document.head
    .querySelectorAll(`link[rel="alternate"][${MANAGED_ATTR}="true"]`)
    .forEach((element) => element.remove());
}

function toAbsoluteUrl(value: string, origin: string) {
  return new URL(value, origin).toString();
}

export default function SEO({
  title,
  description,
  path,
  image = DEFAULT_IMAGE,
  imageAlt,
  locale = "en",
  type = "website",
  siteName = DEFAULT_SITE_NAME,
  author = DEFAULT_AUTHOR,
  keywords = [],
  noIndex = false,
  alternateLanguages,
  structuredData,
}: SEOProps) {
  const alternateLanguagesJson = JSON.stringify(alternateLanguages ?? {});
  const keywordsJson = JSON.stringify(keywords);
  const structuredDataJson = structuredData ? JSON.stringify(structuredData) : "";

  useEffect(() => {
    const origin = window.location.origin;
    const canonicalUrl = toAbsoluteUrl(path, origin);
    const imageUrl = toAbsoluteUrl(image, origin);
    const resolvedImageAlt = imageAlt ?? `${siteName} app preview`;
    const localeTag = locale === "nl" ? "nl_NL" : "en_US";
    const alternateLocaleTag = locale === "nl" ? "en_US" : "nl_NL";
    const robots = noIndex ? "noindex, nofollow" : "index, follow";
    const keywordsContent = keywords.join(", ");
    const parsedAlternates = JSON.parse(alternateLanguagesJson) as Partial<Record<"en" | "nl", string>>;

    document.title = title;
    document.documentElement.lang = locale;

    upsertMeta("name", "description", description);
    upsertMeta("name", "author", author);
    upsertMeta("name", "publisher", siteName);
    upsertMeta("name", "robots", robots);
    upsertMeta("name", "googlebot", robots);
    upsertMeta("name", "referrer", "strict-origin-when-cross-origin");
    upsertMeta("name", "format-detection", "telephone=no");
    upsertMeta("name", "application-name", siteName);
    upsertMeta("name", "apple-mobile-web-app-title", siteName);
    upsertMeta("name", "apple-mobile-web-app-capable", "yes");
    upsertMeta("name", "apple-mobile-web-app-status-bar-style", "default");
    upsertMeta("name", "mobile-web-app-capable", "yes");
    upsertMeta("name", "theme-color", DEFAULT_THEME_COLOR);

    if (keywordsContent) {
      upsertMeta("name", "keywords", keywordsContent);
    } else {
      removeManagedMeta("name", "keywords");
    }

    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:type", type);
    upsertMeta("property", "og:url", canonicalUrl);
    upsertMeta("property", "og:site_name", siteName);
    upsertMeta("property", "og:locale", localeTag);
    upsertMeta("property", "og:locale:alternate", alternateLocaleTag);
    upsertMeta("property", "og:image", imageUrl);
    upsertMeta("property", "og:image:alt", resolvedImageAlt);

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", imageUrl);
    upsertMeta("name", "twitter:image:alt", resolvedImageAlt);

    upsertLink("canonical", canonicalUrl);

    removeManagedAlternates();
    Object.entries(parsedAlternates).forEach(([lang, href]) => {
      if (!href) {
        return;
      }

      upsertLink("alternate", toAbsoluteUrl(href, origin), { hreflang: lang });
    });

    if (structuredDataJson) {
      upsertJsonLd(structuredDataJson);
    } else {
      removeManagedJsonLd();
    }
  }, [
    alternateLanguagesJson,
    author,
    description,
    image,
    imageAlt,
    keywordsJson,
    locale,
    noIndex,
    path,
    siteName,
    structuredDataJson,
    title,
    type,
  ]);

  return null;
}
