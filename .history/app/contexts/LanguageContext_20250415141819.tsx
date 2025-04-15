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
      if (translation && translation[k] !== undefined) {
        translation = translation[k]
      } else {
        // If translation not found, try to get it from English as fallback
        let fallback: typeof en = en
        for (const fk of keys) {
          if (fallback && fallback[fk] !== undefined) {
            fallback = fallback[fk]
          } else {
            return key // Return the key itself if not found in fallback
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
