import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "./Section";
import { cn } from "@/lib/utils";

interface Plan {
  name: string;
  price: string;
  blurb: string;
  desc?: string;
  features: string[];
  cta: string;
  ctaHref: string;
  featured?: boolean;
}

const plans: Plan[] = [
  {
    name: "Starter",
    price: "₹2,000 – ₹10,000",
    blurb: "per project",
    desc: "One-off deliverables",
    features: ["Single brochure or report", "24–48 hr delivery", "1 revision"],
    cta: "Get started",
    ctaHref: "#contact",
  },
  {
    name: "Retainer",
    price: "₹15,000 – ₹40,000",
    blurb: "per month",
    desc: "Ongoing AI work: content, research, ops",
    features: [
      "10–20 hrs AI work/month",
      "All service categories",
      "Priority delivery",
      "Monthly strategy call",
    ],
    cta: "Start retainer",
    ctaHref: "#contact",
    featured: true,
  },
  {
    name: "International",
    price: "$200 – $800",
    blurb: "per month",
    desc: "For US & Europe clients",
    features: ["USD billing", "Async communication", "Slack or email", "Weekly delivery"],
    cta: "Book a call",
    ctaHref: "#contact",
  },
];

export function Pricing() {
  return (
    <Section id="pricing">
      <div className="mb-14 max-w-2xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">Pricing</p>
        <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Simple pricing
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {plans.map((p) => (
          <div
            key={p.name}
            className={cn(
              "relative flex flex-col rounded-2xl border bg-card p-8 transition-all",
              p.featured
                ? "border-primary shadow-[0_0_40px_-10px_oklch(0.62_0.18_258_/_0.6)] lg:scale-[1.02]"
                : "border-border",
            )}
          >
            {p.featured && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                Most popular
              </span>
            )}

            <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              {p.name}
            </h3>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-3xl font-bold text-foreground">{p.price}</span>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">{p.blurb}</p>
            {p.desc && <p className="mt-4 text-sm text-foreground/80">{p.desc}</p>}

            <ul className="mt-6 flex-1 space-y-3">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-foreground/90">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <Button
              asChild
              className={cn(
                "mt-8 w-full rounded-full",
                !p.featured && "bg-card text-foreground border border-border hover:bg-secondary",
              )}
              variant={p.featured ? "default" : "outline"}
            >
              <a href={p.ctaHref}>{p.cta}</a>
            </Button>
          </div>
        ))}
      </div>
    </Section>
  );
}
