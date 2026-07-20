"use client"

import { useLanguage } from "@/components/language-provider"
import { ToolChip } from "@/components/tool-chip"
import { tools } from "@/lib/data/tools"

export function Tools() {
  const { t } = useLanguage()
  const chips = [...tools, ...tools]

  return (
    <section id="herramientas" aria-label="Herramientas y tecnologías">
      <div className="tools-section__head">
        <p className="tools-section__label">{t("tools.label")}</p>
        <h2 className="tools-section__title">{t("tools.title")}</h2>
      </div>

      <div className="marquee-outer">
        <div className="marquee-track">
          {chips.map((tool, i) => (
            <ToolChip key={`${tool.name}-${i}`} tool={tool} />
          ))}
        </div>
      </div>
    </section>
  )
}
