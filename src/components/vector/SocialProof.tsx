const cities = ["Mumbai", "New York", "London", "Berlin", "Dubai"];

export function SocialProof() {
  return (
    <section className="border-y border-border/60 bg-card/30 py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-6 md:flex-row md:justify-between">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          Trusted by businesses in
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-5">
          {cities.map((c) => (
            <span
              key={c}
              className="rounded-full border border-border bg-background/40 px-4 py-1.5 text-sm font-medium tracking-wide text-foreground/80"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
