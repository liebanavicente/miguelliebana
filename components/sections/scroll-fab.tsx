"use client"

import * as React from "react"
import { AnimatePresence, motion } from "framer-motion"

import { useLanguage } from "@/components/language-provider"

export function ScrollFab() {
  const { t } = useLanguage()
  const [visible, setVisible] = React.useState(false)

  React.useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 400)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="#contacto"
          className="fab"
          aria-label={t("fab.aria")}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          whileHover={{ y: -3, scale: 1.06 }}
          transition={{ duration: 0.3 }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
        </motion.a>
      )}
    </AnimatePresence>
  )
}
