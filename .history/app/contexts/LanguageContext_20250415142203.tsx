"use client"

import type React from "react"
import { createContext, useState, useContext, useEffect, type ReactNode } from "react"
import en from "../i18n/locales/en"
import hi from "../i18n/locales/hi"

// Define available languages
export type Language = "en" | "hi"

// Define the shape of our translations
export type TranslationsType = typeof en

// Define the context shape
interface LanguageContextType {
  language: Language
  translations: TranslationsType
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

// Create the context with default values
const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  translations: en,
  setLanguage: () => {},
  t: () => "",
})

// Provider component
interface LanguageProviderProps {
  children: ReactNode
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  // Get initial language from localStorage if available, otherwise default to 'en'
  const [language, setLanguage] = useState<Language>("en")
  const [translations, setTranslations] = useState<TranslationsType>(en)

  // Load saved language preference from localStorage on initial render
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "hi")) {
      setLanguage(savedLanguage)
    }
  }, [])

  // Update translations when language changes
  useEffect(() => {
    // Save language preference to localStorage
    localStorage.setItem("language", language)

    // Set translations based on selected language
    setTranslations(language === "en" ? en : hi)
  }, [language])

  // Translation function
  const t = (key: string): string => {
    // Split the key by dots to access nested properties
    const keys = key.split(".")

    // Try to get the translation
    let translation: any = translations

    for (const k of keys) {
      if (typeof translation === "object" && translation !== null && k in translation) {
        translation = (translation as Record<string, unknown>)[k]
      } else {
        let fallback: unknown = en
        for (const fk of keys) {
          if (typeof fallback === "object" && fallback !== null && fk in fallback) {
            fallback = (fallback as Record<string, unknown>)[fk]
          } else {
            return key
          }
        }
        return typeof fallback === "string" ? fallback : key
      }
    }
    

    return typeof translation === "string" ? translation : key
  }

  return (
    <LanguageContext.Provider value={{ language, translations, setLanguage, t }}>{children}</LanguageContext.Provider>
  )
}

// Custom hook for using the language context
export const useLanguage = () => useContext(LanguageContext)
