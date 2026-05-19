import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/vector/Navbar";
import { Footer } from "@/components/vector/Footer";
import { Section } from "@/components/vector/Section";
import { DeliverablePricingTable } from "@/components/vector/DeliverablePricingTable";
import { bundles, categories, contactHref, pricingRows } from "@/data/pricing";
import type { CategoryKey } from "@/data/pricing";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/pricing")({
  component: PricingPage,
  head: () => ({
    meta: [
      { title: "Pricing — Vector AI" },
      {
        name: "description",
        content:
          "Transparent per-deliverable pricing for content, research, creative, ops, data, and chatbot work. India and international rates.",
      },
      { property: "og:title", content: "Pricing — Vector AI" },
      {
        property: "og:description",
        content:
          "Every service, every deliverable, every price. Pick what you need or bundle for better value.",
      },
    ],
  }),
});

function PricingPage() {
  const [active, setActive] = useState<CategoryKey | "all">("all");

  const rows = useMemo(
    () => (active === "all" ? pricingRows : pricingRows.filter((r) => r.category === active)),
    [active],
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="border-b border-border">
          <div className="mx-auto w-full max-w-6xl px-6 py-20 text-center md:py-28">
            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-6xl">
              Transparent pricing. <span className="text-primary">No surprises.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
              Every service, every deliverable, every price. Pick what you need or bundle for
              better value.
            </p>
          </div>
        </section>

        {/* Filter + Table */}
        <Section id="table">
          <div className="mb-6 flex flex-wrap gap-2">
            {categories.map((c) => {
              const isActive = active === c.key;
              return (
                <button
                  key={c.key}
                  onClick={() => setActive(c.key as CategoryKey | "all")}
                  className={cn(
                    "cursor-pointer rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "border border-border bg-transparent text-muted-foreground hover:text-foreground",
                  )}
                >
                  {c.label}
                </button>
              );
            })}
          </div>
          <DeliverablePricingTable rows={rows} showService />
        </Section>

        {/* Bundles */}
        <Section id="bundles">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
              Bundle & Save
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Better value, bundled
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {bundles.map((b) => (
              <div
                key={b.name}
                className="flex flex-col rounded-2xl border border-border bg-card p-8"
              >
                <h3 className="text-lg font-semibold text-foreground">{b.name}</h3>
                <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                  {b.includes.map((i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 space-y-3 border-t border-border pt-5">
                  <PriceLine
                    label="India"
                    original={b.indiaOriginal}
                    price={b.indiaPrice}
                    save={b.indiaSave}
                  />
                  <PriceLine
                    label="Intl"
                    original={b.intlOriginal}
                    price={b.intlPrice}
                    save={b.intlSave}
                  />
                </div>

                <Button asChild className="mt-8 w-full rounded-full">
                  <a href={contactHref(b.name)}>Get this bundle</a>
                </Button>
              </div>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

function PriceLine({
  label,
  original,
  price,
  save,
}: {
  label: string;
  original: string;
  price: string;
  save: string;
}) {
  return (
    <div className="flex items-baseline justify-between gap-3">
      <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
      <div className="flex items-baseline gap-2">
        <span className="text-sm text-muted-foreground line-through">{original}</span>
        <span className="text-lg font-bold text-primary">{price}</span>
        <span className="text-xs text-foreground/70">({save})</span>
      </div>
    </div>
  );
}
