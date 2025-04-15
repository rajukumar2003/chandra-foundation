import en from "./locales/en"
import hi from "./locales/hi"

export type Language = "en" | "hi"

export const languages: Record<Language, string> = {
  en: "English",
  hi: "हिंदी",
}

export const getTranslations = (language: Language) => {
  switch (language) {
    case "hi":
      return hi
    case "en":
    default:
      return en
  }
}

export const defaultLanguage: Language = "en"
