import type { LucideIcon } from "lucide-react";
import {
  Pen,
  Search,
  Palette,
  Settings,
  BarChart3,
  MessageSquare,
  FileText,
  Mail,
  Calendar,
  ShoppingBag,
  MessageCircle,
  Video,
  Megaphone,
  BookOpen,
  TrendingUp,
  Users,
  Briefcase,
  Building2,
  Layout,
  Award,
  ClipboardList,
  UserCheck,
  ClipboardCheck,
  Headphones,
  LineChart,
  Sheet,
  Gauge,
  Calculator,
  Database,
  Bot,
  Globe,
  Instagram,
  Sparkles,
  Workflow,
} from "lucide-react";
import type { CategoryKey } from "./pricing";

export interface Deliverable {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface ServiceTier {
  name: string;
  price: string;
  blurb: string;
  features: string[];
}

export interface FAQ {
  q: string;
  a: string;
}

export interface ServiceContent {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  categoryKey: CategoryKey;
  deliverables: Deliverable[];
  tools: string[];
  process: { title: string; desc: string }[];
  testimonial: { quote: string; name: string; company: string; city: string };
  tiers: ServiceTier[];
  faqs: FAQ[];
}

export const services: ServiceContent[] = [
  {
    slug: "content-copywriting",
    title: "Content & Copywriting",
    tagline: "Words that work as hard as you do.",
    category: "Content & Copywriting",
    categoryKey: "content",
    deliverables: [
      { icon: FileText, title: "Website Copy", desc: "Full homepage, about, services, contact pages. SEO-optimised, conversion-focused. Includes meta titles and descriptions." },
      { icon: BookOpen, title: "Blog Articles", desc: "1,000–1,500 word articles. Keyword-researched, structured for Google, ready to publish. Bulk pricing available." },
      { icon: Mail, title: "Email Sequences", desc: "Welcome flows, drip campaigns, sales sequences, re-engagement. 5–10 email flows with subject lines." },
      { icon: Calendar, title: "Social Media Calendar", desc: "30 posts per month. Platform-specific captions, hooks, hashtags for Instagram, LinkedIn, Twitter." },
      { icon: ShoppingBag, title: "Product Descriptions", desc: "Bulk ecommerce descriptions. Tone-matched to your brand. 50–500 products." },
      { icon: MessageCircle, title: "WhatsApp & DM Scripts", desc: "Cold outreach, follow-up sequences, broadcast templates. High open-rate language." },
      { icon: Video, title: "Video & Reel Scripts", desc: "Hook, body, CTA format. Optimised for 30–90 second formats. Bulk friendly." },
      { icon: Megaphone, title: "Brand Voice Guide", desc: "Complete tone-of-voice document. Vocabulary, do's and don'ts, example copy. For teams." },
    ],
    tools: ["Claude", "ChatGPT", "Gemini", "Canva AI"],
    process: [
      { title: "You brief us", desc: "Share your brand, audience, and goals. 10-minute form." },
      { title: "We write & review", desc: "AI drafts, human-reviewed for quality and tone." },
      { title: "You receive & publish", desc: "Delivered in 24–48 hrs. One round of revisions included." },
    ],
    testimonial: {
      quote: "Vector AI rewrote our entire website in 48 hours. It reads like our best writer wrote it — and we book twice as many demos now.",
      name: "Ananya Mehta", company: "Founder, Lumen Studio", city: "Bengaluru",
    },
    tiers: [
      { name: "Per Project", price: "₹1,500–₹8,000", blurb: "Single deliverable", features: ["Blog article, email sequence, or social calendar", "24 hr delivery", "One revision round"] },
      { name: "Monthly Retainer", price: "₹12,000–₹25,000/mo", blurb: "Ongoing content", features: ["4 blogs + 30 social posts + 2 email sequences/month", "Priority turnaround", "Monthly strategy call"] },
      { name: "International", price: "$150–$500/mo", blurb: "USD billing", features: ["Same deliverables", "Async Slack/email workflow", "Weekly delivery"] },
    ],
    faqs: [
      { q: "Will it sound like AI wrote it?", a: "No. Everything is prompted with your brand voice and reviewed before delivery. Clients consistently say it sounds more like them than what they'd write themselves." },
      { q: "Can you match our existing tone?", a: "Yes — send us 3–5 samples of content you love and we replicate the style precisely." },
      { q: "How many revisions are included?", a: "One full revision round per deliverable. Additional revisions at ₹500 each." },
      { q: "Can you write in Hindi or regional languages?", a: "We write in English, Hinglish, and basic Hindi. Regional language support coming soon." },
      { q: "Do you need a briefing call?", a: "No. Our onboarding form captures everything we need. Most projects start within 2 hours of form submission." },
    ],
  },
  {
    slug: "research-intelligence",
    title: "Research & Intelligence",
    tagline: "Know your market before your competitors do.",
    category: "Research & Intelligence",
    categoryKey: "research",
    deliverables: [
      { icon: TrendingUp, title: "Market Research Report", desc: "Industry size, growth trends, key players, customer segments, opportunities. 10–20 page PDF with executive summary." },
      { icon: Search, title: "Competitor Analysis", desc: "Deep-dive on 5–10 competitors. Pricing, positioning, strengths, gaps. Delivered in teardown format." },
      { icon: FileText, title: "Document Analysis", desc: "Upload contracts, reports, financial statements, legal docs. Get key insights, red flags, and summaries in hours." },
      { icon: Users, title: "Customer Interview Synthesis", desc: "Upload 10–20 interview transcripts. Receive themes, patterns, quotes, and actionable recommendations." },
      { icon: LineChart, title: "Trend Report", desc: "What's happening in your industry right now. Sources, data points, implications for your business. Updated monthly option." },
      { icon: Briefcase, title: "Due Diligence Pack", desc: "For investors and business partners. Company background, financials, news, market position, risk factors." },
    ],
    tools: ["NotebookLM", "Perplexity", "Claude", "ChatGPT"],
    process: [
      { title: "Share your brief", desc: "Tell us what decisions this research needs to support." },
      { title: "We research & synthesise", desc: "Multi-source research using AI + verified databases." },
      { title: "You get a decision-ready report", desc: "Clean PDF with executive summary, findings, and recommendations." },
    ],
    testimonial: {
      quote: "We were about to enter a market we knew nothing about. Vector AI's report saved us six weeks and probably a very expensive mistake.",
      name: "Rajiv Khanna", company: "MD, Aster Ventures", city: "Mumbai",
    },
    tiers: [
      { name: "Single Report", price: "₹5,000–₹15,000", blurb: "One research deliverable", features: ["Market report or competitor analysis", "48 hr delivery", "Sourced citations"] },
      { name: "Research Retainer", price: "₹20,000–₹40,000/mo", blurb: "Ongoing intelligence", features: ["2 reports/month", "Ad-hoc document analysis", "Priority turnaround"] },
      { name: "International", price: "$250–$800/project", blurb: "USD billing", features: ["Full research reports for US/Europe markets", "English-first", "Async delivery"] },
    ],
    faqs: [
      { q: "How accurate is AI research?", a: "We cross-verify all key data points across multiple sources. Every claim is sourced. We flag areas of uncertainty clearly." },
      { q: "Can you research niche industries?", a: "Yes. We've researched everything from EV charging infrastructure to artisan food markets. If data exists publicly, we find it." },
      { q: "What format are reports delivered in?", a: "PDF with a clean executive summary, plus editable Google Docs version." },
      { q: "Can you analyse confidential documents?", a: "Yes. We use private, non-training AI sessions. Your documents are never stored or shared." },
      { q: "How is this different from a Google search?", a: "We synthesise 50–100 sources, extract what's relevant to your specific question, and present it in a format you can act on — in hours, not days." },
    ],
  },
  {
    slug: "creative-visual",
    title: "Creative & Visual",
    tagline: "Designs that close deals.",
    category: "Creative & Visual",
    categoryKey: "creative",
    deliverables: [
      { icon: FileText, title: "Brochures & One-Pagers", desc: "Print and digital ready. Copy + design. Tri-fold, bifold, A4 formats. Sent as PDF and editable Canva file." },
      { icon: Layout, title: "Pitch Decks", desc: "10–15 slides. Investor-ready narrative, compelling design, data visualisation. Includes story structure." },
      { icon: Sparkles, title: "Brand Naming & Taglines", desc: "10+ name options with rationale, availability check, tagline variations, and brand story." },
      { icon: Palette, title: "Social Media Templates", desc: "5–10 reusable Canva templates. On-brand, editable, platform-specific sizes included." },
      { icon: Award, title: "Case Studies", desc: "Problem → solution → result format. Designed for sales teams. PDF + web format." },
      { icon: BookOpen, title: "Brand Voice & Visual Guide", desc: "Complete brand document: colors, fonts, tone, logo usage, do's and don'ts." },
    ],
    tools: ["Claude", "ChatGPT", "Canva AI", "Gemini"],
    process: [
      { title: "Share your brief & assets", desc: "Logo, brand colors, target audience, purpose of the asset." },
      { title: "We design & write", desc: "Copy and design produced together for maximum coherence." },
      { title: "You receive print-ready files", desc: "PDF, Canva file, and web-optimised versions delivered." },
    ],
    testimonial: {
      quote: "Our pitch deck went from 'meh' to 'investor-ready' in 3 days. We closed our pre-seed two weeks later.",
      name: "Priya Iyer", company: "Co-founder, Notewell", city: "Pune",
    },
    tiers: [
      { name: "Per Asset", price: "₹2,500–₹20,000", blurb: "Single deliverable", features: ["Brochure, deck, or case study", "24–72 hr delivery", "PDF + Canva file"] },
      { name: "Creative Retainer", price: "₹15,000–₹35,000/mo", blurb: "Ongoing creative", features: ["2 decks or 4 brochures/month", "Social templates included", "Priority queue"] },
      { name: "International", price: "$200–$600/project", blurb: "USD billing", features: ["International-standard design and copy", "USD invoicing", "Async delivery"] },
    ],
    faqs: [
      { q: "Do you need our brand guidelines?", a: "If you have them, yes. If not, we derive a style from your existing materials and create a mini brand guide as part of the project." },
      { q: "Can you redesign an existing deck?", a: "Yes. Send us your current deck and brief. We redesign and rewrite from scratch." },
      { q: "What file formats do you deliver?", a: "PDF (print-ready), Canva (editable), PNG (web), and PowerPoint on request." },
      { q: "How many design concepts do you provide?", a: "One direction executed fully, with one revision round. This keeps turnaround fast." },
      { q: "Can you match a specific competitor's design style?", a: "We can match the aesthetic (clean, bold, minimal, etc.) without copying. We don't replicate specific brand identities." },
    ],
  },
  {
    slug: "business-operations",
    title: "Business Operations",
    tagline: "Run tighter. Scale faster.",
    category: "Business Operations",
    categoryKey: "operations",
    deliverables: [
      { icon: ClipboardList, title: "Standard Operating Procedures (SOPs)", desc: "5–10 processes documented. Step-by-step, with decision trees, responsible roles, and tools used. Team-ready format." },
      { icon: Users, title: "HR Policy Documents", desc: "Leave policy, code of conduct, onboarding guide, performance review framework. Legally sensible, humanly readable." },
      { icon: UserCheck, title: "Job Descriptions", desc: "Clear, structured, ready to post on LinkedIn or Naukri. Includes responsibilities, requirements, and culture fit signals." },
      { icon: ClipboardCheck, title: "Meeting Summaries", desc: "Upload any transcript or recording. Receive decisions, action items, owners, and deadlines. Same-day delivery." },
      { icon: Headphones, title: "Customer Support Templates", desc: "50–100 response templates for common queries, complaints, and escalations. Tone-matched to your brand." },
      { icon: Building2, title: "Business Plans & Teasers", desc: "Executive summary to full business plan. Market context, financials, strategy. Investor and bank-ready." },
    ],
    tools: ["Claude", "ChatGPT", "NotebookLM", "Gemini"],
    process: [
      { title: "Tell us how you operate", desc: "Share your current processes, team structure, and pain points." },
      { title: "We document & structure", desc: "AI-assisted documentation reviewed for clarity and completeness." },
      { title: "You receive team-ready docs", desc: "Google Docs + PDF. Editable, shareable, immediately usable." },
    ],
    testimonial: {
      quote: "We onboarded 8 people in a month using the SOPs Vector AI wrote. Our HR lead said it would have taken her two months to write them herself.",
      name: "Vikram Shah", company: "COO, Brightline Logistics", city: "Ahmedabad",
    },
    tiers: [
      { name: "Per Document", price: "₹1,000–₹12,000", blurb: "Single deliverable", features: ["SOP, JD, or policy doc", "24–48 hr delivery", "Editable Google Doc + PDF"] },
      { name: "Ops Retainer", price: "₹15,000–₹30,000/mo", blurb: "Ongoing ops support", features: ["10 SOPs or docs/month", "Meeting summaries included", "Priority turnaround"] },
      { name: "International", price: "$200–$500/project", blurb: "USD billing", features: ["US/UK-compliant HR and ops documents", "Async workflow", "USD invoicing"] },
    ],
    faqs: [
      { q: "Are your HR documents legally compliant?", a: "We write them to be legally sensible based on Indian labour law best practices. We recommend a one-time legal review for critical policies." },
      { q: "Can you document processes you haven't seen?", a: "Yes — we interview you (via form or call) and reconstruct the process. Most founders are surprised how well this works." },
      { q: "What format are SOPs delivered in?", a: "Google Docs (editable), PDF (final), and Notion template on request." },
      { q: "Can you handle confidential business information?", a: "Yes. We use private AI sessions. NDAs available on request." },
      { q: "How detailed are the SOPs?", a: "As detailed as you need. We cover every decision point, tool, and responsible role. Nothing left to interpretation." },
    ],
  },
  {
    slug: "data-analysis",
    title: "Data & Analysis",
    tagline: "Your data is telling you something. We translate it.",
    category: "Data & Analysis",
    categoryKey: "data",
    deliverables: [
      { icon: BarChart3, title: "Survey & Form Analysis", desc: "Upload raw responses from Typeform, Google Forms, or Excel. Receive themes, charts, key findings, and recommendations." },
      { icon: Sheet, title: "Google Sheets Automation", desc: "AI-powered formulas, pivot tables, automated dashboards, Apps Script automations. Eliminates manual work." },
      { icon: Gauge, title: "Sales & Operations Dashboard", desc: "Looker Studio dashboard connected to your data. Live updates, visual KPIs, shareable with your team." },
      { icon: Calculator, title: "Financial Model", desc: "Revenue projections, P&L, unit economics, break-even analysis. Editable Excel/Sheets. Investor-ready." },
      { icon: Database, title: "Data Cleaning & Structuring", desc: "Messy CSVs, duplicate records, inconsistent formats — cleaned, structured, and ready to use." },
    ],
    tools: ["ChatGPT", "Gemini", "Google Sheets AI", "Looker Studio"],
    process: [
      { title: "Share your data", desc: "Upload files or connect your sheet. Tell us the question you need answered." },
      { title: "We analyse & build", desc: "Models, dashboards, and insights built on your actual data." },
      { title: "You make better decisions", desc: "Delivered with an explanation of what the data means for your business." },
    ],
    testimonial: {
      quote: "The dashboard Vector AI built replaced four spreadsheets and a weekly review meeting. I now run my business from one screen.",
      name: "Sneha Reddy", company: "Founder, Kora Skincare", city: "Hyderabad",
    },
    tiers: [
      { name: "Per Project", price: "₹3,000–₹18,000", blurb: "Single deliverable", features: ["Survey analysis, financial model, or dashboard", "48–72 hr delivery", "Walkthrough video included"] },
      { name: "Data Retainer", price: "₹20,000–₹40,000/mo", blurb: "Ongoing data work", features: ["Monthly reports", "Dashboard maintenance", "Ad-hoc analysis"] },
      { name: "International", price: "$200–$700/project", blurb: "USD billing", features: ["Advanced financial models for US/Europe", "Async delivery", "USD invoicing"] },
    ],
    faqs: [
      { q: "Do I need to know Excel to use your dashboards?", a: "No. We build them so anyone can read them. We include a 5-minute walkthrough video with every dashboard." },
      { q: "Can you work with our existing Google Sheets?", a: "Yes. Share access and we build on what you already have." },
      { q: "How accurate are your financial models?", a: "As accurate as your inputs. We build the structure and formulas — you provide the business assumptions. We guide you through what assumptions to use." },
      { q: "Can you analyse data in Hindi or regional language forms?", a: "We can handle bilingual forms and translate before analysis." },
      { q: "Is my data kept confidential?", a: "Yes. We use private sessions, never store your data, and delete files after delivery." },
    ],
  },
  {
    slug: "chatbots-automation",
    title: "Chatbots & Automation",
    tagline: "Your business, working 24/7 without you.",
    category: "Chatbots & Automation",
    categoryKey: "chatbots",
    deliverables: [
      { icon: MessageCircle, title: "WhatsApp Business Chatbot", desc: "Automated responses, lead qualification, order updates, FAQs. Built on Interakt or Wati. Handles 80% of incoming messages automatically." },
      { icon: Globe, title: "Website Chatbot", desc: "Lead generation + FAQ bot embedded on your site. Trained on your content. Hands off to human when needed. Built on Voiceflow or Botpress." },
      { icon: Instagram, title: "Instagram DM Automation", desc: "Auto-reply to story mentions, DM keywords, and new followers. Lead capture built in. Built on ManyChat." },
      { icon: Bot, title: "Custom AI Assistant", desc: "Trained on your documents, FAQs, product catalogue, and tone of voice. Deployed on your website, WhatsApp, or internal tool. Powered by Claude API." },
      { icon: Workflow, title: "Automation Workflows", desc: "Connect your tools. Form submission → WhatsApp notification → Google Sheet → follow-up email. No manual steps. Built on Make.com or Zapier." },
    ],
    tools: ["Claude API", "Voiceflow", "ManyChat", "Interakt", "Make.com", "Zapier"],
    process: [
      { title: "Map your workflow", desc: "We identify exactly where automation saves you the most time and money." },
      { title: "We build & train", desc: "Bot built, trained on your content, tested thoroughly before handover." },
      { title: "You receive a 24/7 system", desc: "Full handover with documentation. We handle the first month of issues free." },
    ],
    testimonial: {
      quote: "Our WhatsApp bot handles 200+ messages a day. Our team only steps in for the 10% that actually need a human. Game changer.",
      name: "Arjun Bose", company: "Founder, Trail & Co.", city: "Goa",
    },
    tiers: [
      { name: "Starter Bot", price: "₹8,000–₹20,000", blurb: "Single chatbot", features: ["WhatsApp or website", "Setup + 30-day support", "Full handover documentation"] },
      { name: "Full Automation Suite", price: "₹25,000–₹60,000", blurb: "Multi-channel", features: ["WhatsApp + website + workflows", "Setup + 60-day support", "Multi-channel handoff"] },
      { name: "International", price: "$300–$1,500/project", blurb: "USD billing", features: ["Custom AI assistants for US/Europe", "English-first", "Async setup"] },
    ],
    faqs: [
      { q: "Do I need technical knowledge to manage the bot after handover?", a: "No. We build a simple dashboard where you can update responses, see conversations, and make changes without code." },
      { q: "What happens when the bot can't answer?", a: "It escalates to a human seamlessly. You set the trigger (keyword, sentiment, or request type)." },
      { q: "How long does setup take?", a: "Simple WhatsApp bots: 3–5 days. Custom AI assistants: 1–2 weeks. Full automation suites: 2–3 weeks." },
      { q: "Can the bot handle payments?", a: "Yes — we can integrate Razorpay (India) or Stripe (international) into WhatsApp and website flows." },
      { q: "What if I want to change the bot's responses later?", a: "You'll have full access. We also offer a monthly maintenance retainer at ₹3,000/mo for ongoing updates." },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
