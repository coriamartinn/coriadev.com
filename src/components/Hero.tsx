import { useEffect, useRef, useState } from 'react'
import { ArrowRight, ArrowDownRight } from 'lucide-react'

type Line = { prompt: string; output?: string }

const script: Line[] = [
  { prompt: 'whoami', output: 'coria dev — estudio de desarrollo de software' },
  { prompt: 'cat mission.txt', output: 'Construimos productos digitales prolijos, rápidos y a medida.' },
  { prompt: './deploy.sh --client=vos', output: '✓ listo para arrancar' },
]

function useReducedMotion() {
  const [reduced, setReduced] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handler = () => setReduced(mq.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])
  return reduced
}

export default function Hero() {
  const reduced = useReducedMotion()
  const [visibleLines, setVisibleLines] = useState(reduced ? script.length : 0)
  const [typedPrompt, setTypedPrompt] = useState(reduced ? script[script.length - 1]?.prompt ?? '' : '')
  const [showOutput, setShowOutput] = useState(reduced)
  const [done, setDone] = useState(reduced)
  const timeouts = useRef<number[]>([])

  useEffect(() => {
    if (reduced) return

    let cancelled = false
    const push = (fn: () => void, delay: number) => {
      const id = window.setTimeout(() => {
        if (!cancelled) fn()
      }, delay)
      timeouts.current.push(id)
    }

    const t = 300

    const runLine = (index: number) => {
      if (index >= script.length) {
        push(() => setDone(true), 200)
        return
      }
      const line = script[index]
      setTypedPrompt('')
      setShowOutput(false)

      let charIndex = 0
      const typeChar = () => {
        charIndex += 1
        setTypedPrompt(line.prompt.slice(0, charIndex))
        if (charIndex < line.prompt.length) {
          push(typeChar, 28)
        } else {
          push(() => {
            setShowOutput(true)
            push(() => {
              setVisibleLines(index + 1)
              runLine(index + 1)
            }, 420)
          }, 260)
        }
      }
      push(typeChar, 120)
    }

    push(() => runLine(0), t)

    return () => {
      cancelled = true
      timeouts.current.forEach((id) => window.clearTimeout(id))
      timeouts.current = []
    }
  }, [reduced])

  const currentIndex = Math.min(visibleLines, script.length - 1)
  const currentLine = script[currentIndex]

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-bg pb-20 pt-36 md:pb-28 md:pt-44"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_40%,transparent_100%)]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[620px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-6 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div className="animate-fade-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border-light bg-surface px-3 py-1 font-mono text-xs text-ink-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            disponibles para nuevos proyectos
          </div>

          <h1 className="text-balance font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
            Software a medida,
            <br />
            código que <span className="text-accent">dura</span>.
          </h1>

          <p className="mt-6 max-w-md text-balance text-base leading-relaxed text-ink-muted">
            Somos un estudio de desarrollo que diseña y construye productos digitales
            para negocios que necesitan verse — y funcionar — a la altura.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#proyectos"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 font-mono text-sm font-medium text-bg transition-transform hover:-translate-y-0.5"
            >
              Ver proyectos
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 rounded-full border border-border-light px-5 py-3 font-mono text-sm text-ink transition-colors hover:border-accent hover:text-accent"
            >
              Hablemos
              <ArrowDownRight size={16} />
            </a>
          </div>
        </div>

        <div className="animate-fade-up [animation-delay:150ms]">
          <div className="overflow-hidden rounded-xl border border-border-light bg-surface shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_30px_60px_-30px_rgba(0,0,0,0.7)]">
            <div className="flex items-center gap-1.5 border-b border-border bg-[#0E0E10] px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#3A3A3F]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#3A3A3F]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#3A3A3F]" />
              <span className="ml-3 font-mono text-xs text-ink-faint">coriadev — zsh</span>
            </div>

            <div className="min-h-[220px] p-5 font-mono text-[13px] leading-6 sm:text-sm">
              {script.slice(0, visibleLines).map((line, i) => (
                <div key={i} className="mb-3">
                  <p className="text-ink-muted">
                    <span className="text-accent">➜</span> ~ {line.prompt}
                  </p>
                  {line.output && <p className="pl-4 text-ink">{line.output}</p>}
                </div>
              ))}

              {!done && (
                <div>
                  <p className="text-ink-muted">
                    <span className="text-accent">➜</span> ~ {typedPrompt}
                    {!showOutput && <span className="ml-0.5 inline-block h-4 w-[7px] translate-y-0.5 animate-blink bg-accent" />}
                  </p>
                  {showOutput && currentLine && <p className="pl-4 text-ink">{currentLine.output}</p>}
                </div>
              )}

              {done && (
                <p className="text-ink-muted">
                  <span className="text-accent">➜</span> ~{' '}
                  <span className="ml-0.5 inline-block h-4 w-[7px] translate-y-0.5 animate-blink bg-accent" />
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
