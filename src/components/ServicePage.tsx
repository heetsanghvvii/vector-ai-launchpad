import { Check, Quote, MessageCircle, Mail } from "lucide-react";
import { Toaster } from "@/components/ui/sonner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Navbar } from "@/components/vector/Navbar";
import { Footer } from "@/components/vector/Footer";
import { Section } from "@/components/vector/Section";
import { DeliverablePricingTable } from "@/components/vector/DeliverablePricingTable";
import { pricingRows, contactHref } from "@/data/pricing";
import type { ServiceContent } from "@/data/services";
import { cn } from "@/lib/utils";

const WA_URL = "https://wa.me/91XXXXXXXXXX";
const EMAIL = "hello@vectorai.co";

export function ServicePage({ service }: { service: ServiceContent }) {
  const deliverableRows = pricingRows.filter((r) => r.category === service.categoryKey);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 -z-10 opacity-30">
            <div className="absolute left-1/2 top-0 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-primary/30 blur-[120px]" />
          </div>
          <div className="mx-auto w-full max-w-6xl px-6 py-20 md:py-28">
            <Badge className="rounded-full bg-primary/15 px-3 py-1 text-primary hover:bg-primary/15">
              {service.category}
            </Badge>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              {service.title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground md:text-xl">
              {service.tagline}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="rounded-full">
                <a href={contactHref(service.title)}>Get started</a>
              </Button>
              <Button asChild variant="outline" className="rounded-full">
                <a href={WA_URL} target="_blank" rel="noreferrer">
                  <MessageCircle className="mr-1 h-4 w-4" /> WhatsApp us
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* What's included */}
        <Section id="included">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
              What's included
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Every deliverable, done right
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {service.deliverables.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/60"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Tools we use */}
        <Section id="tools" className="py-12 md:py-16">
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
            <p className="mb-4 text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Tools we use
            </p>
            <div className="flex flex-wrap gap-2">
              {service.tools.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm text-foreground"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Section>

        {/* How we deliver */}
        <Section id="process">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
              How we deliver
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Three steps. Always.
            </h2>
          </div>
          <div className="relative grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="absolute left-0 right-0 top-7 hidden border-t border-dashed border-border md:block" />
            {service.process.map((step, i) => (
              <div
                key={step.title}
                className="relative rounded-2xl border border-border bg-card p-6"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full border border-primary bg-background text-sm font-semibold text-primary">
                  0{i + 1}
                </div>
                <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Testimonial */}
        <Section id="testimonial" className="py-12 md:py-16">
          <div className="rounded-2xl border border-border bg-card p-8 md:p-12">
            <Quote className="h-8 w-8 text-primary" />
            <p className="mt-4 text-xl font-medium leading-relaxed text-foreground md:text-2xl">
              "{service.testimonial.quote}"
            </p>
            <p className="mt-6 text-sm text-muted-foreground">
              <span className="font-medium text-foreground">{service.testimonial.name}</span> ·{" "}
              {service.testimonial.company} · {service.testimonial.city}
            </p>
          </div>
        </Section>

        {/* Deliverable pricing (Task 2) */}
        <Section id="deliverable-pricing">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
              Deliverable pricing
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Per-deliverable rates
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              India pricing shown. International pricing on the{" "}
              <a href="/pricing" className="text-primary hover:underline">
                full pricing page
              </a>
              .
            </p>
          </div>
          <SimpleDeliverableTable
            rows={deliverableRows.map((r) => ({
              deliverable: r.deliverable,
              included: r.included,
              turnaround: r.turnaround,
              price: r.india,
            }))}
          />
        </Section>

        {/* Pricing tiers */}
        <Section id="tiers">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
              Pricing
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Pick the model that fits
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {service.tiers.map((tier, i) => (
              <div
                key={tier.name}
                className={cn(
                  "flex flex-col rounded-2xl border bg-card p-8",
                  i === 1 ? "border-primary lg:scale-[1.02]" : "border-border",
                )}
              >
                <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                  {tier.name}
                </h3>
                <p className="mt-4 text-3xl font-bold text-foreground">{tier.price}</p>
                <p className="mt-1 text-sm text-muted-foreground">{tier.blurb}</p>
                <ul className="mt-6 flex-1 space-y-3">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-foreground/90">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className={cn("mt-8 w-full rounded-full")}
                  variant={i === 1 ? "default" : "outline"}
                >
                  <a href={contactHref(`${service.title} — ${tier.name}`)}>Get started</a>
                </Button>
              </div>
            ))}
          </div>
        </Section>

        {/* FAQ */}
        <Section id="faq">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">FAQ</p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Frequently asked questions
            </h2>
          </div>
          <Accordion type="single" collapsible className="rounded-2xl border border-border bg-card px-6">
            {service.faqs.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`item-${i}`}
                className={cn(i === service.faqs.length - 1 && "border-b-0")}
              >
                <AccordionTrigger className="text-left text-base font-medium text-foreground">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Section>

        {/* Bottom CTA */}
        <section className="px-6 pb-20">
          <div className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-[oklch(0.45_0.18_258)] p-10 md:p-16">
            <div className="relative z-10 flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
                  Ready to get started?
                </h2>
                <p className="mt-3 max-w-xl text-base text-primary-foreground/90">
                  Send us a message. We reply within 2 hours.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  variant="secondary"
                  className="rounded-full bg-background text-foreground hover:bg-background/90"
                >
                  <a href={WA_URL} target="_blank" rel="noreferrer">
                    <MessageCircle className="mr-1 h-4 w-4" /> WhatsApp us
                  </a>
                </Button>
                <Button
                  asChild
                  className="rounded-full bg-foreground text-background hover:bg-foreground/90"
                >
                  <a href={contactHref(service.title)}>
                    <Mail className="mr-1 h-4 w-4" /> Contact form
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

function SimpleDeliverableTable({
  rows,
}: {
  rows: { deliverable: string; included: string; turnaround: string; price: string }[];
}) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-border bg-card">
      <table className="w-full min-w-[640px] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-border bg-[oklch(0.18_0.03_264)] text-xs uppercase tracking-wider text-muted-foreground">
            <th className="px-5 py-4 font-semibold">Deliverable</th>
            <th className="px-5 py-4 font-semibold">What's included</th>
            <th className="px-5 py-4 font-semibold">Turnaround</th>
            <th className="px-5 py-4 font-semibold">Price</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr
              key={r.deliverable}
              className={
                i % 2 === 0
                  ? "border-b border-border/60 bg-card"
                  : "border-b border-border/60 bg-[oklch(0.14_0.03_264)]"
              }
            >
              <td className="px-5 py-4 align-top font-medium text-foreground">{r.deliverable}</td>
              <td className="px-5 py-4 align-top text-sm text-muted-foreground">{r.included}</td>
              <td className="px-5 py-4 align-top text-sm text-foreground/80">{r.turnaround}</td>
              <td className="px-5 py-4 align-top text-sm font-medium text-foreground">{r.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
