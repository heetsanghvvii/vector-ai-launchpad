import { Button } from "@/components/ui/button";
import type { PricingRow } from "@/data/pricing";
import { contactHref } from "@/data/pricing";

interface Props {
  rows: PricingRow[];
  showService?: boolean;
  showIntl?: boolean;
}

export function DeliverablePricingTable({ rows, showService = false, showIntl = true }: Props) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-border bg-card">
      <table className="w-full min-w-[760px] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-border bg-[oklch(0.18_0.03_264)] text-xs uppercase tracking-wider text-muted-foreground">
            {showService && <th className="px-5 py-4 font-semibold">Service</th>}
            <th className="px-5 py-4 font-semibold">Deliverable</th>
            <th className="px-5 py-4 font-semibold">What's included</th>
            <th className="px-5 py-4 font-semibold">Turnaround</th>
            <th className="px-5 py-4 font-semibold">India Price</th>
            {showIntl && <th className="px-5 py-4 font-semibold">Intl Price</th>}
            <th className="px-5 py-4 font-semibold"></th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr
              key={`${r.service}-${r.deliverable}`}
              className={
                i % 2 === 0
                  ? "border-b border-border/60 bg-card"
                  : "border-b border-border/60 bg-[oklch(0.14_0.03_264)]"
              }
            >
              {showService && (
                <td className="px-5 py-4 align-top text-xs text-muted-foreground">{r.service}</td>
              )}
              <td className="px-5 py-4 align-top font-medium text-foreground">{r.deliverable}</td>
              <td className="px-5 py-4 align-top text-sm text-muted-foreground">{r.included}</td>
              <td className="px-5 py-4 align-top text-sm text-foreground/80">{r.turnaround}</td>
              <td className="px-5 py-4 align-top text-sm font-medium text-foreground">{r.india}</td>
              {showIntl && (
                <td className="px-5 py-4 align-top text-sm font-medium text-foreground">{r.intl}</td>
              )}
              <td className="px-5 py-4 align-top">
                <Button asChild size="sm" className="rounded-full">
                  <a href={contactHref(r.deliverable)}>Get this</a>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
