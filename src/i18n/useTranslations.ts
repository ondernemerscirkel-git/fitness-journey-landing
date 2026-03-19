import { useParams } from "react-router-dom";
import translations from "./translations.json";

export type Locale = "en" | "nl";

type Translations = typeof translations;

export function useLocale(): Locale {
  const { lang } = useParams<{ lang?: string }>();
  return lang === "nl" ? "nl" : "en";
}

export function useTranslations(): Translations["en"] {
  const locale = useLocale();
  return translations[locale];
}
