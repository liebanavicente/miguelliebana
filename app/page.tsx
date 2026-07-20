import { LanguageProvider } from "@/components/language-provider"
import { SiteBackground } from "@/components/site-background"
import { Nav } from "@/components/sections/nav"
import { Hero } from "@/components/sections/hero"
import { Ticker } from "@/components/sections/ticker"
import { About } from "@/components/sections/about"
import { Tools } from "@/components/sections/tools"
import { Process } from "@/components/sections/process"
import { Services } from "@/components/sections/services"
import { Lab } from "@/components/sections/lab"
import { Music } from "@/components/sections/music"
import { CV } from "@/components/sections/cv"
import { Faq } from "@/components/sections/faq"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/sections/footer"
import { ScrollFab } from "@/components/sections/scroll-fab"

export default function Page() {
  return (
    <LanguageProvider>
      <SiteBackground />
      <a href="#inicio" className="skip-link">
        Saltar al contenido
      </a>
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <About />
        <Tools />
        <Process />
        <Services />
        <Lab />
        <Music />
        <CV />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <ScrollFab />
    </LanguageProvider>
  )
}
