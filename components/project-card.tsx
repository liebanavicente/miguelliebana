"use client"

import { useLanguage } from "@/components/language-provider"
import { StatusBadge } from "@/components/status-badge"
import type { ProjectCardData } from "@/lib/data/projects"

export function ProjectCard({ project }: { project: ProjectCardData }) {
  const { t } = useLanguage()

  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className="glass-card glass-card--lift group relative flex min-h-[20rem] flex-col justify-between gap-4 p-7 no-underline sm:p-8"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 85% 15%, rgba(255,255,255,0.06) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />
      <span className="pointer-events-none absolute top-5 right-5 z-10 text-base text-[rgba(240,237,230,0.55)] opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 -translate-x-1 translate-y-1">
        ↗
      </span>
      <div>
        <div className="relative z-10 mb-4 flex flex-wrap gap-1.5">
          {project.statusKeys.map((key) => (
            <StatusBadge key={key} statusKey={key} />
          ))}
        </div>
        <h3 className="relative z-10 pr-6 text-3xl leading-tight font-semibold text-[rgba(240,237,230,0.9)]">
          {project.title}
        </h3>
      </div>
      <div>
        <p className="relative z-10 text-[0.9rem] leading-relaxed text-[rgba(240,237,230,0.42)]">
          {t(project.descKey)}
        </p>
        {project.meta && (
          <ul className="relative z-10 mt-3 grid gap-1 border-t border-[rgba(255,255,255,0.06)] pt-3 text-[0.76rem] leading-snug text-[rgba(240,237,230,0.38)]">
            <li>
              <strong className="font-semibold text-[rgba(240,237,230,0.72)]">{t("project.meta.role")}</strong>:{" "}
              {t(project.meta.roleKey)}
            </li>
            <li>
              <strong className="font-semibold text-[rgba(240,237,230,0.72)]">{t("project.meta.result")}</strong>:{" "}
              {t(project.meta.resultKey)}
            </li>
          </ul>
        )}
      </div>
    </a>
  )
}
