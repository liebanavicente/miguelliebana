"use client"

import { Mail } from "lucide-react"

import { useLanguage } from "@/components/language-provider"
import { Reveal } from "@/components/reveal"

export function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contacto">
      <div className="container">
        <span className="section-num" aria-hidden="true">06</span>
        <Reveal>
          <p className="section-label">{t("contact.label")}</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="section-title">{t("contact.title")}</h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="contact__inner">
            <p className="contact__question">{t("contact.question")}</p>
            <p className="contact__sub">{t("contact.sub")}</p>
            <div className="contact__actions">
              <a href="mailto:mlieban3@gmail.com" className="btn btn--primary">
                {t("contact.btn.contact")}
              </a>
              <a href="#laboratorio" className="btn btn--outline">
                {t("contact.btn.projects")}
              </a>
            </div>
            <div className="contact__social">
              <a
                href="https://www.linkedin.com/in/mliebanavicente"
                className="contact__social-icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/icons/linkedin.svg" alt="" aria-hidden="true" />
              </a>
              <a
                href="https://wa.me/34610175512"
                className="contact__social-icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("contact.whatsapp.aria")}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/icons/whatsapp.svg" alt="" aria-hidden="true" />
              </a>
              <a href="mailto:mlieban3@gmail.com" className="contact__social-icon" aria-label="Email">
                <Mail strokeWidth={1.75} />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
