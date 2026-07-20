"use client"

import Image from "next/image"

import { useLanguage } from "@/components/language-provider"
import { Reveal } from "@/components/reveal"

export function Music() {
  const { t } = useLanguage()

  return (
    <section id="musica">
      <div className="container">
        <span className="section-num" aria-hidden="true">04</span>
        <Reveal>
          <p className="section-label">{t("music.label")}</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="section-title">{t("music.title")}</h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="music-block">
            <div className="music-block__main">
              <Image
                src="/nfplogo.jpg"
                alt="No Flag Patriots"
                width={80}
                height={80}
                className="music-block__logo"
              />
              <div>
                <h3>No Flag Patriots</h3>
                <p className="genre">Punk Rock · Barcelona</p>
              </div>
            </div>
            <a href="https://noflagpatriotshop.com" className="btn btn--outline" target="_blank" rel="noopener noreferrer">
              {t("music.shop")}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
