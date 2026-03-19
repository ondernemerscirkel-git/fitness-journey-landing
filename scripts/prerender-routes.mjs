import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { JSDOM } from "jsdom";

const DIST_DIR = path.resolve("dist");
const TEMPLATE_PATH = path.join(DIST_DIR, "index.html");
const MANAGED_ATTR = "data-prerender-managed";

const routes = [
  {
    route: "/",
    outputPath: "index.html",
    lang: "en",
    title: "Leanify | Fitness Tracking, Guided Workouts, and Progress Insights",
    description:
      "Track workouts, follow guided bench press programs, and build better routines with Leanify's clear analytics, smart reminders, and calm fitness experience.",
    ogType: "website",
    ogLocale: "en_US",
    alternateLocale: "nl_NL",
    ogImage: "/og-image-en.png",
    imageAlt: "Leanify fitness app hero preview showing workout tracking and progress insights",
    alternates: {
      en: "/",
      nl: "/nl",
      "x-default": "/",
    },
    keywords: [
      "Leanify",
      "fitness app",
      "workout tracker",
      "progress insights",
      "bench press program",
      "training log",
    ],
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          name: "Leanify",
          url: "/",
          logo: "/favicon.png",
        },
        {
          "@type": "SoftwareApplication",
          name: "Leanify",
          applicationCategory: "HealthApplication",
          operatingSystem: "iOS",
          description:
            "Track workouts, follow guided bench press programs, and build better routines with Leanify's clear analytics, smart reminders, and calm fitness experience.",
          image: "/og-image-en.png",
        },
        {
          "@type": "WebSite",
          name: "Leanify",
          url: "/",
          inLanguage: "en",
        },
      ],
    },
  },
  {
    route: "/nl",
    outputPath: "nl/index.html",
    lang: "nl",
    title: "Leanify | Fitnessregistratie, begeleide workouts en voortgangsinzichten",
    description:
      "Houd workouts bij, volg begeleide bench press-programma's en bouw betere routines op met Leanify's heldere inzichten, slimme herinneringen en rustige fitnesservaring.",
    ogType: "website",
    ogLocale: "nl_NL",
    alternateLocale: "en_US",
    ogImage: "/og-image-nl.png",
    imageAlt: "Leanify fitness app preview met workoutregistratie en voortgangsinzichten",
    alternates: {
      en: "/",
      nl: "/nl",
      "x-default": "/",
    },
    keywords: [
      "Leanify",
      "fitness app",
      "workout tracker",
      "progress insights",
      "bench press program",
      "training log",
    ],
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          name: "Leanify",
          url: "/nl",
          logo: "/favicon.png",
        },
        {
          "@type": "SoftwareApplication",
          name: "Leanify",
          applicationCategory: "HealthApplication",
          operatingSystem: "iOS",
          description:
            "Houd workouts bij, volg begeleide bench press-programma's en bouw betere routines op met Leanify's heldere inzichten, slimme herinneringen en rustige fitnesservaring.",
          image: "/og-image-nl.png",
        },
        {
          "@type": "WebSite",
          name: "Leanify",
          url: "/nl",
          inLanguage: "nl",
        },
      ],
    },
  },
  {
    route: "/privacy",
    outputPath: "privacy/index.html",
    lang: "en",
    title: "Privacy Policy | Leanify",
    description:
      "Read how Leanify collects, uses, protects, and manages personal data across its fitness tracking platform.",
    ogType: "article",
    ogLocale: "en_US",
    alternateLocale: "nl_NL",
    ogImage: "/og-image-en.png",
    imageAlt: "Leanify fitness app hero preview showing workout tracking and progress insights",
    alternates: {
      en: "/privacy",
      nl: "/nl/privacy",
      "x-default": "/privacy",
    },
    keywords: ["Leanify", "privacy policy", "fitness app privacy", "data protection"],
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Privacy Policy | Leanify",
      description:
        "Read how Leanify collects, uses, protects, and manages personal data across its fitness tracking platform.",
      url: "/privacy",
      inLanguage: "en",
    },
  },
  {
    route: "/nl/privacy",
    outputPath: "nl/privacy/index.html",
    lang: "nl",
    title: "Privacybeleid | Leanify",
    description:
      "Lees hoe Leanify persoonsgegevens verzamelt, gebruikt, beschermt en beheert binnen het fitnessplatform.",
    ogType: "article",
    ogLocale: "nl_NL",
    alternateLocale: "en_US",
    ogImage: "/og-image-nl.png",
    imageAlt: "Leanify fitness app preview met workoutregistratie en voortgangsinzichten",
    alternates: {
      en: "/privacy",
      nl: "/nl/privacy",
      "x-default": "/privacy",
    },
    keywords: ["Leanify", "privacy policy", "fitness app privacy", "data protection"],
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Privacybeleid | Leanify",
      description:
        "Lees hoe Leanify persoonsgegevens verzamelt, gebruikt, beschermt en beheert binnen het fitnessplatform.",
      url: "/nl/privacy",
      inLanguage: "nl",
    },
  },
];

function upsertMeta(document, attribute, key, content) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
  element.setAttribute(MANAGED_ATTR, "true");
}

function upsertLink(document, rel, href, extraAttributes = {}) {
  const selector = [`link[rel="${rel}"]`]
    .concat(Object.entries(extraAttributes).map(([key, value]) => `[${key}="${value}"]`))
    .join("");

  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }

  element.setAttribute("href", href);
  element.setAttribute(MANAGED_ATTR, "true");

  for (const [key, value] of Object.entries(extraAttributes)) {
    element.setAttribute(key, value);
  }
}

function replaceJsonLd(document, structuredData) {
  document.head
    .querySelectorAll(`script[type="application/ld+json"][${MANAGED_ATTR}="true"]`)
    .forEach((element) => element.remove());

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.setAttribute(MANAGED_ATTR, "true");
  script.textContent = JSON.stringify(structuredData);
  document.head.appendChild(script);
}

function replaceAlternates(document, alternates) {
  document.head
    .querySelectorAll(`link[rel="alternate"][${MANAGED_ATTR}="true"]`)
    .forEach((element) => element.remove());

  for (const [hreflang, href] of Object.entries(alternates)) {
    upsertLink(document, "alternate", href, { hreflang });
  }
}

async function writeRoute(templateHtml, routeMeta) {
  const dom = new JSDOM(templateHtml);
  const { document } = dom.window;

  document.documentElement.lang = routeMeta.lang;
  document.title = routeMeta.title;

  upsertMeta(document, "name", "description", routeMeta.description);
  upsertMeta(document, "name", "author", "Leanify");
  upsertMeta(document, "name", "publisher", "Leanify");
  upsertMeta(document, "name", "application-name", "Leanify");
  upsertMeta(document, "name", "apple-mobile-web-app-title", "Leanify");
  upsertMeta(document, "name", "theme-color", "#f4f6fb");
  upsertMeta(document, "name", "robots", "index, follow");
  upsertMeta(document, "name", "googlebot", "index, follow");
  upsertMeta(document, "name", "keywords", routeMeta.keywords.join(", "));

  upsertMeta(document, "property", "og:title", routeMeta.title);
  upsertMeta(document, "property", "og:description", routeMeta.description);
  upsertMeta(document, "property", "og:type", routeMeta.ogType);
  upsertMeta(document, "property", "og:site_name", "Leanify");
  upsertMeta(document, "property", "og:url", routeMeta.route);
  upsertMeta(document, "property", "og:locale", routeMeta.ogLocale);
  upsertMeta(document, "property", "og:locale:alternate", routeMeta.alternateLocale);
  upsertMeta(document, "property", "og:image", routeMeta.ogImage);
  upsertMeta(document, "property", "og:image:alt", routeMeta.imageAlt);

  upsertMeta(document, "name", "twitter:card", "summary_large_image");
  upsertMeta(document, "name", "twitter:title", routeMeta.title);
  upsertMeta(document, "name", "twitter:description", routeMeta.description);
  upsertMeta(document, "name", "twitter:image", routeMeta.ogImage);
  upsertMeta(document, "name", "twitter:image:alt", routeMeta.imageAlt);

  upsertLink(document, "canonical", routeMeta.route);
  replaceAlternates(document, routeMeta.alternates);
  replaceJsonLd(document, routeMeta.structuredData);

  const outputFile = path.join(DIST_DIR, routeMeta.outputPath);
  await mkdir(path.dirname(outputFile), { recursive: true });
  await writeFile(outputFile, dom.serialize());
}

async function main() {
  const templateHtml = await readFile(TEMPLATE_PATH, "utf8");

  for (const route of routes) {
    await writeRoute(templateHtml, route);
  }
}

main().catch((error) => {
  console.error("Failed to prerender route HTML:", error);
  process.exitCode = 1;
});
