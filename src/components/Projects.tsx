import { projects, emptySlots } from '../data/projects'
import ProjectCard from './ProjectCard'
import EmptyProjectCard from './EmptyProjectCard'

export default function Projects() {
  return (
    <section id="proyectos" className="relative border-t border-border bg-bg py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 max-w-xl">
          <p className="font-mono text-xs uppercase tracking-wider text-accent">
            $ ls ./proyectos --status=live
          </p>
          <h2 className="mt-4 text-balance font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Lo que construimos
          </h2>
          <p className="mt-4 text-balance text-ink-muted">
            Cada proyecto es un problema real resuelto para un negocio real. Estos son
            algunos de los que ya salieron a producción.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}

          {Array.from({ length: emptySlots }).map((_, i) => (
            <EmptyProjectCard key={i} index={projects.length + i + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
