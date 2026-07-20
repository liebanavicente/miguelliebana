"use client"

import { useLanguage } from "@/components/language-provider"
import { Reveal } from "@/components/reveal"

const CHIP_KEYS = [
  "about.chip1",
  "about.chip2",
  "about.chip3",
  "about.chip4",
  "about.chip5",
  "about.chip6",
  "about.chip7",
] as const

export function About() {
  const { t } = useLanguage()

  return (
    <section id="sobre-mi">
      <div className="container">
        <span className="section-num" aria-hidden="true">01</span>
        <Reveal>
          <p className="section-label">{t("about.label")}</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="section-title">{t("about.title")}</h2>
        </Reveal>

        <div className="about__grid">
          <div className="about__text">
            <p>{t("about.p1")}</p>
          </div>
          <div className="about__chips">
            {CHIP_KEYS.map((key) => (
              <span key={key} className="about__chip">
                {t(key)}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
