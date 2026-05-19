export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-lg font-bold text-foreground">
            Vector<span className="text-primary">AI</span>
          </p>
          <p className="mt-2 max-w-xs text-sm text-muted-foreground">
            AI-powered work. Human-level quality.
          </p>
        </div>

        <nav className="flex gap-6 text-sm text-muted-foreground">
          <a href="#services" className="hover:text-foreground">
            Services
          </a>
          <a href="#pricing" className="hover:text-foreground">
            Pricing
          </a>
          <a href="#contact" className="hover:text-foreground">
            Contact
          </a>
        </nav>
      </div>
      <div className="mx-auto mt-10 w-full max-w-6xl px-6 text-xs text-muted-foreground">
        © 2025 Vector AI. Mumbai, India.
      </div>
    </footer>
  );
}
