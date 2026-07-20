"use client"

import * as React from "react"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"

import { useLanguage } from "@/components/language-provider"
import { ProjectCard } from "@/components/project-card"
import { Reveal } from "@/components/reveal"
import { StatusBadge } from "@/components/status-badge"
import { enerpro, featuredProjects, labProjects } from "@/lib/data/projects"
import { fadeUp, staggerContainer } from "@/lib/motion"

export function Lab() {
  const { t } = useLanguage()
  const [open, setOpen] = React.useState(false)

  return (
    <section id="laboratorio">
      <div className="container">
        <span className="section-num" aria-hidden="true">03</span>
        <Reveal>
          <p className="section-label">{t("projects.label")}</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="section-title">{t("projects.title")}</h2>
        </Reveal>

        <Reveal delay={0.1}>
          <a href={enerpro.href} target="_blank" rel="noopener noreferrer" className="project-hero group">
            <span className="project-hero__arrow" aria-hidden="true">↗</span>

            <div className="project-hero__header">
              <div className="project-hero__badges">
                {enerpro.statusKeys.map((key) => (
                  <StatusBadge key={key} statusKey={key} />
                ))}
              </div>
              <p className="project-hero__type">{t(enerpro.typeKey)}</p>
              <h3>
                ENERPRO
                <br />
                <span>{t(enerpro.subtitleKey)}</span>
              </h3>
            </div>

            <div className="project-hero__main">
              <div className="project-hero__content">
                <p className="project-hero__desc">{t(enerpro.descKey)}</p>
                <ul className="project-hero__features">
                  {enerpro.featureKeys.map((key) => (
                    <li key={key}>{t(key)}</li>
                  ))}
                </ul>
              </div>
              <div className="project-hero__visual">
                <div className="project-hero__screenshot">
                  <Image src={enerpro.image} alt="ENERPRO dashboard" width={1536} height={1024} loading="lazy" />
                </div>
              </div>
            </div>

            <div className="project-hero__footer">
              <span className="project-hero__cta">{t(enerpro.ctaKey)}</span>
            </div>
          </a>
        </Reveal>

        <motion.div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -30px 0px" }}
          variants={staggerContainer(0.08)}
        >
          {featuredProjects.map((project) => (
            <motion.div key={project.title} variants={fadeUp}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        <hr className="lab-divider" />
        <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="subsection-label">{t("lab.label")}</p>
            <h3 className="subsection-title">{t("lab.title")}</h3>
            <p className="subsection-desc">{t("lab.desc")}</p>
          </div>
          <button
            className="btn btn--outline"
            aria-expanded={open}
            aria-controls="labMore"
            onClick={() => setOpen((v) => !v)}
          >
            <span>{open ? t("lab.btn.hide") : t("lab.btn.show")}</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ transform: open ? "rotate(180deg)" : undefined, transition: "transform 0.3s" }}
              aria-hidden="true"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        </div>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id="labMore"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              style={{ overflow: "hidden" }}
            >
              <div className="grid grid-cols-1 gap-4 pt-1 sm:grid-cols-2">
                {labProjects.map((project) => (
                  <ProjectCard key={project.title} project={project} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
