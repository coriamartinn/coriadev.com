import { ArrowUpRight, Mail } from 'lucide-react'
import { GithubIcon, InstagramIcon, LinkedinIcon, WhatsappIcon } from './icons'

const EMAIL = 'coria.dev26@gmail.com'
const WHATSAPP_NUMBER = '5491121737187'
const WHATSAPP_MESSAGE =
  'Hola! Quiero pedir un presupuesto. Mi proyecto es sobre... y el problema que necesito solucionar es...'
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

const socials = [
  { label: 'GitHub', href: 'https://github.com/', icon: GithubIcon },
  { label: 'LinkedIn', href: 'https://linkedin.com/', icon: LinkedinIcon },
  { label: 'Instagram', href: 'https://instagram.com/', icon: InstagramIcon },
]

export default function Contact() {
  return (
    <section id="contacto" className="relative overflow-hidden border-t border-border bg-bg py-24 md:py-32">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-accent/10 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6">
        <p className="font-mono text-xs uppercase tracking-wider text-accent">
          $ contact --init
        </p>

        <h2 className="mt-4 max-w-2xl text-balance font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
          ¿Tenés un proyecto en mente? Hablemos.
        </h2>

        <p className="mt-5 max-w-lg text-balance text-ink-muted">
          Contanos qué necesitás y te respondemos con una propuesta clara,
          sin vueltas ni jerga innecesaria.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${EMAIL}`}
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 font-mono text-sm font-medium text-bg transition-transform hover:-translate-y-0.5"
          >
            <Mail size={16} />
            {EMAIL}
            <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Pedir presupuesto por WhatsApp"
            className="group inline-flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-full border border-border-light text-ink-muted transition-colors hover:border-accent hover:text-accent"
          >
            <WhatsappIcon size={22} />
          </a>
        </div>

        <p className="mt-3 font-mono text-xs text-ink-faint">
          El botón de WhatsApp abre un mensaje con presupuesto y detalle del problema a resolver, listo para completar.
        </p>

        <div className="mt-14 flex flex-wrap items-center gap-3 border-t border-border pt-8">
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border-light px-4 py-2 font-mono text-sm text-ink-muted transition-colors hover:border-accent hover:text-accent"
            >
              <Icon size={15} />
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
