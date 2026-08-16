export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 font-mono text-xs text-ink-faint sm:flex-row">
        <p>© {new Date().getFullYear()} coriadev. Todos los derechos reservados.</p>
        <p>Buenos Aires, Argentina</p>
      </div>
    </footer>
  )
}
