"use client"

import { Compass, FlaskConical, Rocket } from "lucide-react"
import { motion } from "framer-motion"

import { useLanguage } from "@/components/language-provider"
import { Reveal } from "@/components/reveal"
import { fadeUp, staggerContainer } from "@/lib/motion"
import type { I18nKey } from "@/lib/i18n/dictionary"

const STEPS: { icon: typeof Compass; titleKey: I18nKey; descKey: I18nKey }[] = [
  { icon: Compass, titleKey: "process.step1.title", descKey: "process.step1.desc" },
  { icon: FlaskConical, titleKey: "process.step2.title", descKey: "process.step2.desc" },
  { icon: Rocket, titleKey: "process.step3.title", descKey: "process.step3.desc" },
]

export function Process() {
  const { t } = useLanguage()

  return (
    <section id="proceso">
      <div className="container">
        <Reveal>
          <p className="section-label">{t("process.label")}</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="section-title">{t("process.title")}</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="process__desc">{t("process.desc")}</p>
        </Reveal>

        <motion.div
          className="process__steps"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -30px 0px" }}
          variants={staggerContainer(0.1)}
        >
          {STEPS.map((step, i) => (
            <motion.div className="process-step glass-card" key={step.titleKey} variants={fadeUp}>
              <span className="process-step__num">{i + 1}</span>
              <step.icon className="process-step__icon" strokeWidth={1.5} />
              <h3>{t(step.titleKey)}</h3>
              <hr className="process-step__divider" />
              <p>{t(step.descKey)}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
