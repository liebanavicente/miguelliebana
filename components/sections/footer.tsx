"use client"

import { useLanguage } from "@/components/language-provider"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer>
      <div className="container footer__inner">
        <span>{t("footer.copy")}</span>
        <nav className="footer__links" aria-label="Enlaces rápidos">
          <a href="https://www.linkedin.com/in/mliebanavicente" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://noflagpatriotshop.com" target="_blank" rel="noopener noreferrer">
            No Flag Patriots Shop
          </a>
        </nav>
      </div>
    </footer>
  )
}
