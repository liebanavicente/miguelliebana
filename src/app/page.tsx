import Image from "next/image";
import Link from "next/link";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

const projects = [
  {
    title: "SuscripScan",
    description: "Detecta y gestiona tus suscripciones activas. Herramienta para controlar gastos recurrentes.",
    link: "https://suscripscan.vercel.app",
    badge: "Destacado",
  },
  {
    title: "No Flag Patriots Shop",
    description: "Tienda oficial de merchandising de mi banda. E-commerce con catálogo y pasarela de pago.",
    link: "https://noflagpatriotshop.com",
    badge: "Activo",
    meta: { role: "diseño, catálogo y enfoque comercial", result: "tienda activa para vender merchandising propio" },
  },
  {
    title: "La Llar del Dolç",
    description: "Web de lotes y packs regalo personalizados. Diseño, catálogo y gestión de pedidos.",
    link: "https://lallardeldolc.vercel.app",
    badge: "Activo",
    meta: { role: "web, estructura de oferta y presentación visual", result: "catálogo claro para pedidos personalizados" },
  },
  {
    title: "GLP-1 Lab",
    description: "Recursos e información sobre medicamentos GLP-1 para el control del peso. Prototipo funcional.",
    link: "https://glp1lab.vercel.app",
    badge: "Activo",
  },
  {
    title: "Sparta Fit Coach",
    description: "Coach de entrenamiento con enfoque motivacional. Segunda versión con flujo mejorado y nuevas funcionalidades.",
    link: "https://spartafitcoach-v2.vercel.app",
    badge: "Activo",
  },
];

const services = [
  {
    title: "Webs funcionales desde cero",
    description: "Desarrollo e implemento webs, tiendas y herramientas digitales con stack moderno: HTML, Supabase, JavaScript y Vercel. Del prototipo al despliegue real.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18"/><path d="M9 21V9"/>
      </svg>
    ),
    className: "md:col-span-1",
  },
  {
    title: "Gestión y soporte administrativo",
    description: "Organización de procesos, gestión documental y soporte en entornos digitales. Formación en Administración y Finanzas y experiencia en entornos institucionales.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
    className: "md:col-span-1",
  },
  {
    title: "Formación y acompañamiento TIC",
    description: "Explico herramientas digitales a personas y equipos que no tienen por qué ser técnicos. Catorce años de docencia y coordinación TIC en centros educativos.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    className: "md:col-span-1",
  },
  {
    title: "IA y automatizaciones prácticas",
    description: "Integro IA generativa y automatizaciones para crear contenido, estructurar procesos y construir prototipos. Conectado a APIs reales, sin teoría de más.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full" aria-hidden="true">
        <circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/>
      </svg>
    ),
    className: "md:col-span-1 md:row-span-1",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO — Aurora Background */}
      <AuroraBackground>
        <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 h-[4.75rem]">
          <a href="#inicio" className="flex items-center gap-2">
            <Image src="/logomiguel-192.png" alt="" width={36} height={36} className="rounded-full" />
            <span className="font-serif text-lg font-semibold text-[#f0ede6]">
              Miguel <strong>Liébana</strong>
            </span>
          </a>
          <ul className="hidden md:flex gap-6 text-[0.75rem] font-medium uppercase tracking-widest text-[#f0ede6]/60">
            {["Sobre mí", "Servicios", "Proyectos", "Contacto"].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase().replace(" ", "-").replace("é", "e")}`} className="hover:text-[#f0ede6] transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="relative z-10 flex flex-col justify-end min-h-[92svh] px-6 md:px-10 pb-16 pt-28 max-w-[82rem] mx-auto w-full">
          <p className="text-[0.68rem] uppercase tracking-[0.22em] text-[#f0ede6]/50 flex items-center gap-3 mb-6">
            <span className="block w-8 h-px bg-current" />
            Orientación digital · Barcelona
          </p>
          <h1 className="font-serif font-bold text-[#f0ede6] leading-[0.82] tracking-[-0.04em] text-[clamp(4.8rem,12vw,11.5rem)] mb-6">
            Miguel<br />Liébana.
          </h1>
          <p className="text-[clamp(1.2rem,2.2vw,1.9rem)] text-[#f0ede6]/90 leading-snug max-w-[38rem] mb-8">
            Orientación digital, IA práctica y comunicación clara.
          </p>
          <p className="text-[1rem] text-[#f0ede6]/60 max-w-[46rem] leading-relaxed mb-8">
            Este es mi laboratorio digital: un espacio donde documento ideas, pruebo herramientas y construyo proyectos mientras sigo aprendiendo.
          </p>
          <div className="flex flex-wrap gap-3 items-center">
            <a href="#proyectos" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#f0ede6] text-[#0c0c0a] text-sm font-medium hover:bg-[#f0ede6]/88 transition-colors">
              Ver proyectos
            </a>
            <a href="#contacto" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#f0ede6]/30 text-[#f0ede6] text-sm font-medium hover:bg-[#f0ede6] hover:text-[#0c0c0a] transition-colors">
              Contactar
            </a>
          </div>
          <span className="mt-8 inline-flex items-center gap-2 text-sm text-[#f0ede6]/40 self-start">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Disponible · Barcelona
          </span>
        </div>

        <Image
          src="/foto-miguel.jpg"
          alt="Miguel Liébana"
          fill
          className="object-cover object-[68%_32%] opacity-[0.52] saturate-90 contrast-[1.04] -z-10"
          priority
        />
      </AuroraBackground>

      {/* SOBRE MÍ */}
      <section id="sobre-mi" className="py-24 md:py-32 bg-[#fbfaf7]" style={{ backgroundImage: "radial-gradient(circle, rgba(42,42,40,0.055) 1px, transparent 1px)", backgroundSize: "22px 22px" }}>
        <div className="max-w-[82rem] mx-auto px-6 md:px-10">
          <p className="text-[0.68rem] uppercase tracking-[0.22em] text-[#6b6b66]/80 flex items-center gap-3 mb-4">
            <span className="block w-6 h-px bg-current" />Perfil
          </p>
          <h2 className="font-serif text-[clamp(3.3rem,7vw,6rem)] font-medium leading-[0.9] tracking-[-0.04em] text-[#2a2a28] mb-10 max-w-[10ch]">
            Sobre mí
          </h2>
          <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            <div className="flex flex-col gap-5">
              <p className="text-[clamp(1.2rem,2vw,1.55rem)] text-[#2a2a28] leading-snug">
                Trabajo como recepcionista en el CTTI de la Generalitat de Catalunya y, en paralelo, construyo proyectos digitales propios: portales web, herramientas con IA y aplicaciones desplegadas con stack moderno.
              </p>
              <p className="text-base text-[#6b6b66] leading-relaxed italic">
                Vengo de la docencia y la coordinación TIC, con formación en Administración y Finanzas. Esa mezcla me permite entender tanto los procesos internos de una organización como lo que se puede construir con tecnología accesible hoy.
              </p>
            </div>
            <ul className="flex flex-col divide-y divide-[#2a2a28]/[0.06]">
              {[
                "Desarrollo web: HTML, Supabase, JavaScript, Vercel",
                "Gestión documental y soporte administrativo digital",
                "Coordinación TIC y formación tecnológica",
                "IA generativa y automatizaciones con APIs externas",
                "Músico activo — No Flag Patriots · Barcelona",
                "Español / Català · Inglés B2 · Alemán C2",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 py-3 text-[0.95rem] text-[#6b6b66]">
                  <span className="text-[#1a1a18] font-medium mt-0.5 flex-shrink-0">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SERVICIOS — Bento Grid */}
      <section id="servicios" className="py-24 md:py-32 bg-[#f3f1ec]" style={{ backgroundImage: "radial-gradient(circle, rgba(42,42,40,0.055) 1px, transparent 1px)", backgroundSize: "22px 22px" }}>
        <div className="max-w-[82rem] mx-auto px-6 md:px-10">
          <p className="text-[0.68rem] uppercase tracking-[0.22em] text-[#6b6b66]/80 flex items-center gap-3 mb-4">
            <span className="block w-6 h-px bg-current" />Valor
          </p>
          <h2 className="font-serif text-[clamp(3.3rem,7vw,6rem)] font-medium leading-[0.9] tracking-[-0.04em] text-[#2a2a28] mb-10 max-w-[12ch]">
            Qué puedo aportar
          </h2>
          <BentoGrid>
            {services.map((service) => (
              <BentoGridItem
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
                className={service.className}
              />
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* PROYECTOS — Card Hover Effect */}
      <section id="proyectos" className="py-24 md:py-32 bg-[#0c0c0a]" style={{ backgroundImage: "radial-gradient(circle, rgba(240,237,230,0.04) 1px, transparent 1px)", backgroundSize: "22px 22px" }}>
        <div className="max-w-[82rem] mx-auto px-6 md:px-10">
          <p className="text-[0.68rem] uppercase tracking-[0.22em] text-[#f0ede6]/40 flex items-center gap-3 mb-4">
            <span className="block w-6 h-px bg-current" />Proyectos
          </p>
          <h2 className="font-serif text-[clamp(3.3rem,7vw,6rem)] font-medium leading-[0.9] tracking-[-0.04em] text-[#f0ede6] mb-4 max-w-[12ch]">
            Proyectos destacados
          </h2>

          {/* ENERPRO — featured */}
          <a
            href="https://enerpro.vercel.app/presentacion.html"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col md:flex-row gap-6 rounded-xl border border-[#f0ede6]/10 bg-[#11110f] p-6 md:p-8 mb-4 overflow-hidden hover:border-[#f0ede6]/20 transition-colors"
          >
            <span className="absolute top-5 right-5 text-[#f0ede6]/20 group-hover:text-[#f0ede6]/50 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-lg">↗</span>
            <div className="flex flex-col gap-4 flex-1">
              <div className="flex gap-2 flex-wrap">
                <span className="text-[0.62rem] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#f0ede6]/10 text-[#f0ede6]/70">Proyecto real</span>
                <span className="text-[0.62rem] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-900/40 text-emerald-400">Activo</span>
              </div>
              <p className="text-[0.72rem] uppercase tracking-[0.15em] text-[#f0ede6]/40">RRHH · Seguridad privada · Gestión interna</p>
              <h3 className="font-serif text-[clamp(1.7rem,2.8vw,2.45rem)] text-[#f0ede6] leading-[0.95]">
                ENERPRO<br /><span className="font-normal">Portal del Empleado</span>
              </h3>
              <p className="text-sm text-[#f0ede6]/65 leading-relaxed max-w-[42ch]">
                Portal interno para centralizar recursos humanos, documentación y solicitudes en una empresa de seguridad privada.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Gestión documental", "Turnos y vacaciones", "Solicitudes internas", "Importación Excel"].map((f) => (
                  <span key={f} className="text-[0.72rem] font-semibold uppercase tracking-wide px-3 py-1.5 rounded-full border border-[#f0ede6]/14 bg-[#f0ede6]/06 text-[#f0ede6]/72">
                    {f}
                  </span>
                ))}
              </div>
            </div>
            <div className="md:w-[45%] flex-shrink-0">
              <Image src="/enerpro-mockup.png" alt="ENERPRO dashboard" width={800} height={540} className="rounded-lg w-full h-auto" />
            </div>
          </a>

          {/* Grid de proyectos — Card Hover Effect */}
          <HoverEffect items={projects} />
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="py-24 md:py-32 bg-[#f3f1ec]" style={{ backgroundImage: "radial-gradient(circle, rgba(42,42,40,0.055) 1px, transparent 1px)", backgroundSize: "22px 22px" }}>
        <div className="max-w-[82rem] mx-auto px-6 md:px-10 text-center">
          <p className="text-[0.68rem] uppercase tracking-[0.22em] text-[#6b6b66]/80 flex items-center justify-center gap-3 mb-4">
            <span className="block w-6 h-px bg-current" />Hablemos<span className="block w-6 h-px bg-current" />
          </p>
          <h2 className="font-serif text-[clamp(2.7rem,7vw,6rem)] font-medium leading-[0.92] tracking-[-0.04em] text-[#2a2a28] mb-5">
            ¿Tienes una idea, una web o un proceso que quieras convertir en algo funcional?
          </h2>
          <p className="text-[1.05rem] text-[#6b6b66] max-w-[44ch] mx-auto leading-relaxed mb-8">
            Hablemos. Puedo ayudarte a ordenar la idea, crear un prototipo o convertirla en una primera versión presentable.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="mailto:mlieban3@gmail.com" className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#1a1a18] text-[#f8f7f4] text-sm font-medium hover:bg-[#3d3d38] transition-colors">
              Contactar
            </a>
            <a href="#proyectos" className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-[#1a1a18] text-[#1a1a18] text-sm font-medium hover:bg-[#1a1a18] hover:text-[#f8f7f4] transition-colors">
              Ver proyectos
            </a>
            <a href="https://www.linkedin.com/in/mliebanavicente" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-[#1a1a18] text-[#1a1a18] text-sm font-medium hover:bg-[#1a1a18] hover:text-[#f8f7f4] transition-colors">
              LinkedIn
            </a>
          </div>
          <a href="mailto:mlieban3@gmail.com" className="mt-5 text-sm text-[#6b6b66] hover:text-[#1a1a18] transition-colors inline-block">
            mlieban3@gmail.com
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 border-t border-[#1a1a18]/07 bg-[#fbfaf7]">
        <div className="max-w-[82rem] mx-auto px-6 md:px-10 flex flex-wrap items-center justify-between gap-4 text-sm text-[#6b6b66]">
          <span>© 2026 Miguel Liébana · Hecho con creatividad y muchas reconstrucciones.</span>
          <nav className="flex gap-5">
            <a href="https://www.linkedin.com/in/mliebanavicente" target="_blank" rel="noopener noreferrer" className="hover:text-[#1a1a18] transition-colors">LinkedIn</a>
            <a href="https://noflagpatriotshop.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#1a1a18] transition-colors">No Flag Patriots Shop</a>
          </nav>
        </div>
      </footer>
    </>
  );
}
