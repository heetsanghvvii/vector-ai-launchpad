import {
  Pen,
  Search,
  Palette,
  Settings,
  BarChart3,
  MessageSquare,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Section } from "./Section";

interface Service {
  icon: LucideIcon;
  title: string;
  desc: string;
  to: string;
}

const services: Service[] = [
  {
    icon: Pen,
    title: "Content & Copywriting",
    desc: "Website copy, blogs, email sequences, social media calendars, product descriptions",
    to: "/services/content-copywriting",
  },
  {
    icon: Search,
    title: "Research & Intelligence",
    desc: "Market reports, competitor analysis, document analysis, due diligence",
    to: "/services/research-intelligence",
  },
  {
    icon: Palette,
    title: "Creative & Visual",
    desc: "Brochures, pitch decks, brand naming, social media templates",
    to: "/services/creative-visual",
  },
  {
    icon: Settings,
    title: "Business Operations",
    desc: "SOPs, HR docs, meeting summaries, customer support templates",
    to: "/services/business-operations",
  },
  {
    icon: BarChart3,
    title: "Data & Analysis",
    desc: "Survey analysis, Google Sheets automation, financial models, dashboards",
    to: "/services/data-analysis",
  },
  {
    icon: MessageSquare,
    title: "Chatbots & Automation",
    desc: "WhatsApp chatbots, website chatbots, Instagram DM automation, custom AI assistants",
    to: "/services/chatbots-automation",
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
        {services.map(({ icon: Icon, title, desc, to }) => (
          <Link
            key={title}
            to={to}
            className="group relative block rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/60 hover:shadow-[0_0_30px_-10px_oklch(0.62_0.18_258_/_0.5)]"
          >
            <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            <ArrowUpRight className="absolute right-5 top-5 h-4 w-4 text-muted-foreground transition-all group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        ))}
      </div>
    </Section>
  );
}
