export type CategoryKey =
  | "content"
  | "research"
  | "creative"
  | "operations"
  | "data"
  | "chatbots";

export interface PricingRow {
  category: CategoryKey;
  service: string;
  deliverable: string;
  included: string;
  turnaround: string;
  india: string;
  intl: string;
}

export const categories: { key: CategoryKey | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "content", label: "Content" },
  { key: "research", label: "Research" },
  { key: "creative", label: "Creative" },
  { key: "operations", label: "Operations" },
  { key: "data", label: "Data" },
  { key: "chatbots", label: "Chatbots" },
];

export const pricingRows: PricingRow[] = [
  // Content
  { category: "content", service: "Content & Copywriting", deliverable: "Website Copy", included: "Full site (home, about, services, contact) + SEO meta", turnaround: "48 hrs", india: "₹4,000–₹8,000", intl: "$100–$200" },
  { category: "content", service: "Content & Copywriting", deliverable: "Blog Article", included: "1,000–1,500 words, keyword-researched", turnaround: "12 hrs", india: "₹1,500/article", intl: "$30/article" },
  { category: "content", service: "Content & Copywriting", deliverable: "Email Sequence", included: "5–10 emails with subject lines", turnaround: "24 hrs", india: "₹3,000–₹6,000", intl: "$80–$150" },
  { category: "content", service: "Content & Copywriting", deliverable: "Social Media Calendar", included: "30 posts, captions + hashtags", turnaround: "48 hrs", india: "₹5,000/mo", intl: "$120/mo" },
  { category: "content", service: "Content & Copywriting", deliverable: "Product Descriptions", included: "Per product, bulk pricing", turnaround: "6–24 hrs", india: "₹100/product", intl: "$2.50/product" },
  { category: "content", service: "Content & Copywriting", deliverable: "WhatsApp/DM Scripts", included: "Cold outreach + follow-up set", turnaround: "12 hrs", india: "₹2,000–₹4,000", intl: "$60–$100" },
  { category: "content", service: "Content & Copywriting", deliverable: "Reel/Video Scripts", included: "Per script, hook+body+CTA", turnaround: "6 hrs", india: "₹500–₹1,000/script", intl: "$15/script" },
  { category: "content", service: "Content & Copywriting", deliverable: "Brand Voice Guide", included: "Full tone-of-voice document", turnaround: "48 hrs", india: "₹5,000–₹10,000", intl: "$150–$250" },
  // Research
  { category: "research", service: "Research & Intelligence", deliverable: "Market Research Report", included: "10–20 page PDF, executive summary", turnaround: "48 hrs", india: "₹7,500–₹15,000", intl: "$200–$400" },
  { category: "research", service: "Research & Intelligence", deliverable: "Competitor Analysis", included: "5–10 competitors, teardown format", turnaround: "48 hrs", india: "₹5,000–₹10,000", intl: "$150–$300" },
  { category: "research", service: "Research & Intelligence", deliverable: "Document Analysis", included: "Contracts, reports, PDFs", turnaround: "12–24 hrs", india: "₹3,000–₹8,000", intl: "$80–$200" },
  { category: "research", service: "Research & Intelligence", deliverable: "Customer Interview Synthesis", included: "Up to 20 transcripts", turnaround: "24 hrs", india: "₹4,000–₹7,000", intl: "$120–$200" },
  { category: "research", service: "Research & Intelligence", deliverable: "Trend Report", included: "Industry trends + implications", turnaround: "48 hrs", india: "₹5,000–₹12,000", intl: "$150–$350" },
  { category: "research", service: "Research & Intelligence", deliverable: "Due Diligence Pack", included: "Full company research pack", turnaround: "3–5 days", india: "₹10,000–₹25,000", intl: "$300–$700" },
  // Creative
  { category: "creative", service: "Creative & Visual", deliverable: "Brochure / One-Pager", included: "Copy + design, print-ready PDF + Canva", turnaround: "24 hrs", india: "₹2,500–₹5,000", intl: "$70–$130" },
  { category: "creative", service: "Creative & Visual", deliverable: "Pitch Deck", included: "10–15 slides, investor-ready", turnaround: "48–72 hrs", india: "₹8,000–₹20,000", intl: "$200–$500" },
  { category: "creative", service: "Creative & Visual", deliverable: "Brand Naming + Taglines", included: "10+ names, rationale, availability check", turnaround: "24 hrs", india: "₹3,000–₹6,000", intl: "$80–$150" },
  { category: "creative", service: "Creative & Visual", deliverable: "Social Media Templates", included: "5–10 Canva templates, all sizes", turnaround: "24–48 hrs", india: "₹3,000–₹6,000", intl: "$80–$150" },
  { category: "creative", service: "Creative & Visual", deliverable: "Case Study", included: "Problem→solution→result, PDF + web", turnaround: "24 hrs", india: "₹3,000–₹6,000", intl: "$80–$150" },
  { category: "creative", service: "Creative & Visual", deliverable: "Brand Voice + Visual Guide", included: "Colors, fonts, tone, usage rules", turnaround: "48 hrs", india: "₹5,000–₹10,000", intl: "$150–$250" },
  // Operations
  { category: "operations", service: "Business Operations", deliverable: "SOP Writing", included: "5–10 processes, decision trees included", turnaround: "24–48 hrs", india: "₹3,000–₹8,000", intl: "$80–$200" },
  { category: "operations", service: "Business Operations", deliverable: "HR Policy Documents", included: "Leave, conduct, onboarding, review", turnaround: "48 hrs", india: "₹5,000–₹12,000", intl: "$150–$300" },
  { category: "operations", service: "Business Operations", deliverable: "Job Description", included: "Per JD, ready to post", turnaround: "6 hrs", india: "₹1,000–₹1,500/JD", intl: "$25–$40/JD" },
  { category: "operations", service: "Business Operations", deliverable: "Meeting Summary", included: "Per transcript/recording", turnaround: "2 hrs", india: "₹500–₹1,000", intl: "$15–$25" },
  { category: "operations", service: "Business Operations", deliverable: "Customer Support Templates", included: "50–100 response templates", turnaround: "24 hrs", india: "₹3,000–₹6,000", intl: "$80–$150" },
  { category: "operations", service: "Business Operations", deliverable: "Business Plan", included: "Executive summary to full plan", turnaround: "3–5 days", india: "₹10,000–₹20,000", intl: "$300–$500" },
  // Data
  { category: "data", service: "Data & Analysis", deliverable: "Survey Analysis", included: "Themes, charts, recommendations", turnaround: "24 hrs", india: "₹4,000–₹8,000", intl: "$100–$200" },
  { category: "data", service: "Data & Analysis", deliverable: "Google Sheets Automation", included: "Formulas, dashboards, Apps Script", turnaround: "24–48 hrs", india: "₹3,000–₹7,000", intl: "$80–$180" },
  { category: "data", service: "Data & Analysis", deliverable: "Sales/Ops Dashboard", included: "Looker Studio, live data", turnaround: "48–72 hrs", india: "₹5,000–₹12,000", intl: "$150–$300" },
  { category: "data", service: "Data & Analysis", deliverable: "Financial Model", included: "P&L, projections, unit economics", turnaround: "48–72 hrs", india: "₹8,000–₹18,000", intl: "$200–$450" },
  { category: "data", service: "Data & Analysis", deliverable: "Data Cleaning", included: "Messy CSVs/sheets structured", turnaround: "24 hrs", india: "₹2,000–₹5,000", intl: "$60–$130" },
  // Chatbots
  { category: "chatbots", service: "Chatbots & Automation", deliverable: "WhatsApp Chatbot", included: "Setup + training + 30-day support", turnaround: "3–5 days", india: "₹8,000–₹20,000", intl: "$200–$500" },
  { category: "chatbots", service: "Chatbots & Automation", deliverable: "Website Chatbot", included: "Lead gen + FAQ bot, embedded", turnaround: "5–7 days", india: "₹10,000–₹25,000", intl: "$250–$600" },
  { category: "chatbots", service: "Chatbots & Automation", deliverable: "Instagram DM Automation", included: "ManyChat setup + flows", turnaround: "3–5 days", india: "₹5,000–₹15,000", intl: "$150–$400" },
  { category: "chatbots", service: "Chatbots & Automation", deliverable: "Custom AI Assistant", included: "Trained on your docs, deployed", turnaround: "1–2 weeks", india: "₹15,000–₹40,000", intl: "$400–$1,000" },
  { category: "chatbots", service: "Chatbots & Automation", deliverable: "Automation Workflows", included: "Make.com/Zapier multi-step flows", turnaround: "3–5 days", india: "₹5,000–₹15,000", intl: "$150–$400" },
];

export interface Bundle {
  name: string;
  includes: string[];
  indiaOriginal: string;
  indiaPrice: string;
  indiaSave: string;
  intlOriginal: string;
  intlPrice: string;
  intlSave: string;
}

export const bundles: Bundle[] = [
  {
    name: "Starter Bundle",
    includes: ["Website copy", "2 blog articles", "Social media calendar"],
    indiaOriginal: "₹15,000",
    indiaPrice: "₹12,000",
    indiaSave: "Save ₹3,000",
    intlOriginal: "$370",
    intlPrice: "$300",
    intlSave: "Save $70",
  },
  {
    name: "Growth Bundle",
    includes: ["Market research report", "Competitor analysis", "Pitch deck"],
    indiaOriginal: "₹30,500",
    indiaPrice: "₹25,000",
    indiaSave: "Save ₹5,500",
    intlOriginal: "$800",
    intlPrice: "$650",
    intlSave: "Save $150",
  },
  {
    name: "Full Stack Bundle",
    includes: ["Content retainer", "Chatbot setup", "Monthly dashboard"],
    indiaOriginal: "₹53,000",
    indiaPrice: "₹45,000/mo",
    indiaSave: "Save ₹8,000",
    intlOriginal: "$1,300",
    intlPrice: "$1,100/mo",
    intlSave: "Save $200",
  },
];

export function contactHref(service: string) {
  return `/?service=${encodeURIComponent(service)}#contact`;
}
