import { Plus } from 'lucide-react'

export default function EmptyProjectCard({ index }: { index: number }) {
  return (
    <a
      href="#contacto"
      className="group flex min-h-[420px] flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-border-light bg-transparent p-6 text-center transition-colors duration-300 hover:border-accent hover:bg-accent-soft"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-full border border-border-light text-ink-faint transition-colors group-hover:border-accent group-hover:text-accent">
        <Plus size={18} />
      </span>
      <div>
        <p className="font-mono text-xs uppercase tracking-wider text-ink-faint transition-colors group-hover:text-accent">
          proyecto #{index}
        </p>
        <p className="mt-2 font-display text-base font-medium text-ink-muted transition-colors group-hover:text-ink">
          Este espacio te espera
        </p>
      </div>
    </a>
  )
}
