"use client"

import * as React from "react"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"

import { useLanguage } from "@/components/language-provider"
import { cn } from "@/lib/utils"

const LINKS: { href: string; key: "nav.sobre" | "nav.servicios" | "nav.proyectos" | "nav.cv" | "nav.contacto" }[] = [
  { href: "#sobre-mi", key: "nav.sobre" },
  { href: "#servicios", key: "nav.servicios" },
  { href: "#laboratorio", key: "nav.proyectos" },
  { href: "#cv", key: "nav.cv" },
  { href: "#contacto", key: "nav.contacto" },
]

export function Nav() {
  const { lang, setLang, t } = useLanguage()
  const [scrolled, setScrolled] = React.useState(false)
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const hero = document.getElementById("inicio")
    function onScroll() {
      if (!hero) return
      const heroBottom = hero.offsetTop + hero.offsetHeight
      setScrolled(window.scrollY + 76 >= heroBottom)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  function closeMenu() {
    setOpen(false)
  }

  return (
    <header className={cn("nav", scrolled && "nav--scrolled")} id="nav">
      <div className="nav__inner">
        <a href="#inicio" className="nav__logo">
          <Image src="/logomiguel-192.png" alt="" width={38} height={38} className="rounded-full" />
          Miguel <strong>Liébana</strong>
        </a>

        <ul className="nav__links">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{t(link.key)}</a>
            </li>
          ))}
        </ul>

        <div className="nav__end">
          <div className="lang-switch" role="group" aria-label="Idioma / Idioma">
            <button
              className={cn("lang-btn", lang === "es" && "active")}
              aria-pressed={lang === "es"}
              onClick={() => setLang("es")}
            >
              ES
            </button>
            <span className="lang-sep">/</span>
            <button
              className={cn("lang-btn", lang === "ca" && "active")}
              aria-pressed={lang === "ca"}
              onClick={() => setLang("ca")}
            >
              CA
            </button>
          </div>
          <button
            className="nav__toggle"
            aria-label={t("nav.menu.aria")}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.ul
            className="nav__links-mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={closeMenu}>
                  {t(link.key)}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  )
}
