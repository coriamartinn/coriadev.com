import { ArrowUpRight } from 'lucide-react'
import type { Project } from '../data/projects'
import { GithubIcon } from './icons'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-colors duration-300 hover:border-border-light">
      <div className="relative aspect-[16/10] overflow-hidden border-b border-border">
        <img
          src={project.image}
          alt={`Captura del proyecto ${project.title}`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-surface/60 via-transparent to-transparent" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-accent/25 bg-accent-soft px-2.5 py-1 font-mono text-[11px] font-medium text-accent"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="font-display text-xl font-semibold leading-snug text-ink">
          {project.title}
        </h3>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
          {project.description}
        </p>

        <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-ink px-4 py-2.5 font-mono text-sm font-medium text-bg transition-opacity hover:opacity-90"
          >
            Ver proyecto
            <ArrowUpRight size={15} />
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Repositorio de GitHub de ${project.title}`}
            className="inline-flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full border border-border-light text-ink-muted transition-colors hover:border-accent hover:text-accent"
          >
            <GithubIcon size={17} />
          </a>
        </div>
      </div>
    </article>
  )
}
