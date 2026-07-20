import type { I18nKey } from "@/lib/i18n/dictionary"

export type ProjectCardData = {
  title: string
  href: string
  statusKeys: I18nKey[]
  descKey: I18nKey
  meta?: { roleKey: I18nKey; resultKey: I18nKey }
}

export const enerpro = {
  href: "https://enerpro.vercel.app/presentacion.html",
  image: "/enerpro-mockup.png",
  statusKeys: ["status.real", "status.saas", "status.activo"] satisfies I18nKey[],
  typeKey: "enerpro.type" as I18nKey,
  subtitleKey: "enerpro.subtitle" as I18nKey,
  descKey: "enerpro.desc" as I18nKey,
  featureKeys: ["enerpro.f1", "enerpro.f2", "enerpro.f3", "enerpro.f4"] satisfies I18nKey[],
  ctaKey: "enerpro.cta" as I18nKey,
}

export const featuredProjects: ProjectCardData[] = [
  {
    title: "SuscripScan",
    href: "https://suscripscan.vercel.app",
    statusKeys: ["status.destacado", "status.activo"],
    descKey: "proj.suscripscan.desc",
  },
  {
    title: "No Flag Patriots Shop",
    href: "https://noflagpatriotshop.com",
    statusKeys: ["status.destacado", "status.activo"],
    descKey: "proj.nfp.desc",
    meta: { roleKey: "proj.nfp.role", resultKey: "proj.nfp.result" },
  },
  {
    title: "La Llar del Dolç",
    href: "https://lallardeldolc.vercel.app",
    statusKeys: ["status.destacado", "status.activo"],
    descKey: "proj.llar.desc",
    meta: { roleKey: "proj.llar.role", resultKey: "proj.llar.result" },
  },
  {
    title: "GLP-1 Lab",
    href: "https://glp1lab.vercel.app/",
    statusKeys: ["status.activo"],
    descKey: "lab.glp1.desc",
  },
  {
    title: "Sparta Fit Coach",
    href: "https://spartafitcoach-v2.vercel.app/",
    statusKeys: ["status.activo"],
    descKey: "lab.sparta.desc",
  },
  {
    title: "apuestaclara",
    href: "https://gananesbets.framer.website",
    statusKeys: ["status.destacado", "status.activo"],
    descKey: "proj.apuestaclara.desc",
  },
]

export const labProjects: ProjectCardData[] = [
  {
    title: "Mente Inclusiva",
    href: "https://menteinclusiva.vercel.app/",
    statusKeys: ["status.dev"],
    descKey: "lab.mente.desc",
  },
  {
    title: "Longevid",
    href: "https://longevidapp.vercel.app/",
    statusKeys: ["status.dev"],
    descKey: "lab.longevid.desc",
  },
]
