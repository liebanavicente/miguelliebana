"use client"

import { motion } from "framer-motion"

import { useLanguage } from "@/components/language-provider"
import { Reveal } from "@/components/reveal"
import { fadeUp, staggerContainer } from "@/lib/motion"
import type { I18nKey } from "@/lib/i18n/dictionary"

const CARDS: { titleKey: I18nKey; descKey: I18nKey }[] = [
  { titleKey: "services.1.title", descKey: "services.1.desc" },
  { titleKey: "services.2.title", descKey: "services.2.desc" },
  { titleKey: "services.3.title", descKey: "services.3.desc" },
  { titleKey: "services.4.title", descKey: "services.4.desc" },
]

export function Services() {
  const { t } = useLanguage()

  return (
    <section id="servicios">
      <div className="container">
        <span className="section-num" aria-hidden="true">02</span>
        <Reveal>
          <p className="section-label">{t("services.label")}</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="section-title">{t("services.title")}</h2>
        </Reveal>

        <motion.div
          className="services-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -30px 0px" }}
          variants={staggerContainer(0.08)}
        >
          {CARDS.map((card) => (
            <motion.div key={card.titleKey} variants={fadeUp} className="glass-card glass-card--lift service-card">
              <h3>{t(card.titleKey)}</h3>
              <p>{t(card.descKey)}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
