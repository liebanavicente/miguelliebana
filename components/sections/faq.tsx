"use client"

import * as React from "react"
import { AnimatePresence, motion } from "framer-motion"

import { useLanguage } from "@/components/language-provider"
import { Reveal } from "@/components/reveal"
import type { I18nKey } from "@/lib/i18n/dictionary"

const ITEMS: { qKey: I18nKey; aKey: I18nKey }[] = [
  { qKey: "faq.q1", aKey: "faq.a1" },
  { qKey: "faq.q2", aKey: "faq.a2" },
  { qKey: "faq.q3", aKey: "faq.a3" },
  { qKey: "faq.q4", aKey: "faq.a4" },
  { qKey: "faq.q5", aKey: "faq.a5" },
  { qKey: "faq.q6", aKey: "faq.a6" },
  { qKey: "faq.q7", aKey: "faq.a7" },
  { qKey: "faq.q8", aKey: "faq.a8" },
  { qKey: "faq.q9", aKey: "faq.a9" },
]

export function Faq() {
  const { t } = useLanguage()
  const [openIndex, setOpenIndex] = React.useState<number | null>(0)

  return (
    <section id="faq">
      <div className="container">
        <Reveal>
          <p className="section-label">{t("faq.label")}</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="section-title">{t("faq.title")}</h2>
        </Reveal>

        <div className="faq__list">
          {ITEMS.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div className="faq-item glass-card" key={item.qKey}>
                <button
                  className="faq-item__trigger"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <span>{t(item.qKey)}</span>
                  <span className="faq-item__icon" aria-hidden="true">
                    {isOpen ? "×" : "+"}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      style={{ overflow: "hidden" }}
                    >
                      <p className="faq-item__answer">{t(item.aKey)}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
