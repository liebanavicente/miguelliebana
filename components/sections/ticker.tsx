"use client"

import { useLanguage } from "@/components/language-provider"

const KEYS = ["ticker.1", "ticker.2", "ticker.3", "ticker.4", "ticker.5", "ticker.6", "ticker.7", "ticker.8"] as const

export function Ticker() {
  const { t } = useLanguage()
  const items = [...KEYS, ...KEYS]

  return (
    <div className="ticker">
      <div className="marquee-track marquee-track--ticker">
        {items.map((key, i) => (
          <span key={`${key}-${i}`} className="ticker__item">
            {t(key)}
            <span className="ticker__sep"> · </span>
          </span>
        ))}
      </div>
    </div>
  )
}
