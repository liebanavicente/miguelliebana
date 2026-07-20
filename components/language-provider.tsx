"use client"

import * as React from "react"

import { dictionary, type I18nKey, type Lang } from "@/lib/i18n/dictionary"

type LanguageContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  t: (key: I18nKey) => string
}

const LanguageContext = React.createContext<LanguageContextValue | null>(null)

const STORAGE_KEY = "lang"

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = React.useState<Lang>("es")

  React.useEffect(() => {
    // One-time hydration of a persisted preference after mount (avoids SSR/client
    // markup mismatch, matching the original site's own "flash then swap" behavior).
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === "es" || stored === "ca") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLangState(stored)
    }
  }, [])

  React.useEffect(() => {
    document.documentElement.lang = lang
    document.title = dictionary[lang]["page.title"]
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", dictionary[lang]["meta.desc"])
  }, [lang])

  const setLang = React.useCallback((next: Lang) => {
    setLangState(next)
    window.localStorage.setItem(STORAGE_KEY, next)
  }, [])

  const t = React.useCallback((key: I18nKey) => dictionary[lang][key], [lang])

  const value = React.useMemo(() => ({ lang, setLang, t }), [lang, setLang, t])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = React.useContext(LanguageContext)
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return ctx
}
