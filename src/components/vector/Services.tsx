import {
  Pen,
  Search,
  Palette,
  Settings,
  BarChart3,
  MessageSquare,
  type LucideIcon,
} from "lucide-react";
import { Section } from "./Section";

interface Service {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const services: Service[] = [
  {
    icon: Pen,
    title: "Content & Copywriting",
    desc: "Website copy, blogs, email sequences, social media calendars, product descriptions",
  },
  {
    icon: Search,
    title: "Research & Intelligence",
    desc: "Market reports, competitor analysis, document analysis, due diligence",
  },
  {
    icon: Palette,
    title: "Creative & Visual",
    desc: "Brochures, pitch decks, brand naming, social media templates",
  },
  {
    icon: Settings,
    title: "Business Operations",
    desc: "SOPs, HR docs, meeting summaries, customer support templates",
  },
  {
    icon: BarChart3,
    title: "Data & Analysis",
    desc: "Survey analysis, Google Sheets automation, financial models, dashboards",
  },
  {
    icon: MessageSquare,
    title: "Chatbots & Automation",
    desc: "WhatsApp chatbots, website chatbots, Instagram DM automation, custom AI assistants",
  },
];

export function Services() {
  return (
    <Section id="services">
      <div className="mb-14 max-w-2xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">Services</p>
        <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          What we do
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="group relative rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/60 hover:shadow-[0_0_30px_-10px_oklch(0.62_0.18_258_/_0.5)]"
          >
            <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
