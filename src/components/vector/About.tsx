import { Section } from "./Section";

const items = [
  {
    title: "AI-native, not AI-curious",
    desc: "We don't consult on AI. We run our entire operation on it.",
  },
  {
    title: "Delivered in 24–48 hrs",
    desc: "No agency timelines. No bloated teams.",
  },
  {
    title: "India-built, globally trusted",
    desc: "Serving clients across Mumbai, New York, London, and beyond.",
  },
];

export function About() {
  return (
    <Section id="about">
      <div className="mb-14 max-w-2xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">About</p>
        <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Why Vector AI
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {items.map((it) => (
          <div key={it.title} className="border-l border-border pl-6">
            <h3 className="text-lg font-semibold text-foreground">{it.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
