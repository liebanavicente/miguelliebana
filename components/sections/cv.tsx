"use client"

import { useLanguage } from "@/components/language-provider"
import { Reveal } from "@/components/reveal"
import { experience, stats } from "@/lib/data/cv"

export function CV() {
  const { t } = useLanguage()

  return (
    <section id="cv">
      <div className="container">
        <span className="section-num" aria-hidden="true">05</span>
        <Reveal>
          <p className="section-label">{t("cv.label")}</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="section-title">{t("cv.title")}</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="cv-intro">{t("cv.intro")}</p>
        </Reveal>

        <div className="cv-actions">
          <a href="/newcv2026.pdf" className="btn btn--primary" download>
            {t("cv.btn.download")}
          </a>
          <a
            href="https://www.linkedin.com/in/mliebanavicente"
            className="btn btn--outline"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>

        <div className="cv-block">
          <h3>{t("cv.exp.h")}</h3>
          {experience.map((item) => (
            <div className="cv-item" key={item.titleKey}>
              <p className="cv-item__title">{t(item.titleKey)}</p>
              <p className="cv-item__meta">{t(item.metaKey)}</p>
            </div>
          ))}
        </div>

        <div className="cv-stats">
          {stats.map((stat) => (
            <div className="cv-stat" key={stat.valueKey}>
              <span className="cv-stat__value">{t(stat.valueKey)}</span>
              <span className="cv-stat__label">{t(stat.labelKey)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
