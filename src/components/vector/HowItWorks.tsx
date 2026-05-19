import { Section } from "./Section";

const steps = [
  {
    n: "01",
    title: "Brief us",
    desc: "You tell us what you need via WhatsApp or email.",
  },
  {
    n: "02",
    title: "We build it",
    desc: "Our AI stack gets to work. Most deliverables in 24–48 hrs.",
  },
  {
    n: "03",
    title: "You grow",
    desc: "Agency-quality output at a fraction of agency cost.",
  },
];

export function HowItWorks() {
  return (
    <Section id="how">
      <div className="mb-14 max-w-2xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">Process</p>
        <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          How it works
        </h2>
      </div>

      <div className="relative grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
        {/* Dashed connector (desktop only) */}
        <div
          aria-hidden="true"
          className="absolute left-0 right-0 top-7 hidden md:block"
        >
          <div className="mx-[16%] border-t border-dashed border-border" />
        </div>

        {steps.map((s) => (
          <div key={s.n} className="relative flex flex-col items-start">
            <div className="z-10 flex h-14 w-14 items-center justify-center rounded-full border border-border bg-card text-sm font-semibold text-primary">
              {s.n}
            </div>
            <h3 className="mt-5 text-lg font-semibold text-foreground">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
