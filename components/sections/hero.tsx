"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"

import { useLanguage } from "@/components/language-provider"

export function Hero() {
  const { t } = useLanguage()
  const { scrollY } = useScroll()
  const photoY = useTransform(scrollY, [0, 900], [0, 900 * 0.22])

  return (
    <section className="hero" id="inicio">
      <div className="hero__techgrid" aria-hidden="true" />
      <div className="hero__rings" aria-hidden="true">
        <div className="hero__ring hero__ring--1" />
        <div className="hero__ring hero__ring--2" />
        <div className="hero__ring hero__ring--3" />
      </div>

      <div className="relative z-10 grid min-h-[calc(100svh-var(--nav-h))] gap-8 md:grid-cols-2">
        <div className="hero__left flex flex-col justify-end px-5 pt-10 pb-14 sm:px-8 lg:pl-[max(2.5rem,calc((100vw-82rem)/2+2.5rem))]">
          <p className="hero__eyebrow">{t("hero.eyebrow")}</p>
          <h1>
            Miguel
            <br />
            Liébana.
          </h1>
          <p className="hero__claim">{t("hero.claim")}</p>

          <div className="mt-10 flex flex-col gap-5">
            <p className="hero__subtitle">{t("hero.subtitle")}</p>
            <div className="flex flex-wrap items-center gap-3">
              <a href="#laboratorio" className="btn btn--primary">
                {t("hero.btn.projects")}
              </a>
              <a href="#contacto" className="btn btn--outline">
                {t("hero.btn.contact")}
              </a>
              <a href="/newcv2026.pdf" download className="hero__cv-link">
                {t("hero.btn.cv")}
              </a>
            </div>
            <span className="badge">{t("hero.badge")}</span>
          </div>
        </div>

        <div className="hero__right">
          <motion.div className="hero__photo-wrap" style={{ y: photoY }}>
            <Image src="/foto-miguel.jpg" alt="Miguel Liébana" fill className="hero__photo" priority />
          </motion.div>
          <div className="hero__right-overlay" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
