# Vector AI — Agency Site Build Plan

Single-page marketing site. Dark navy theme, electric blue accents, Inter font. All content per spec, no placeholders.

## Design Tokens (src/styles.css)

Override `:root` to use dark theme as default (no light mode toggle needed):
- `--background`: oklch equivalent of `#0A0F1E` (deep navy)
- `--foreground`: `#FFFFFF`
- `--primary`: `#3B7BF5` (electric blue), `--primary-foreground`: white
- `--muted-foreground`: `#8892A4`
- `--card`: `#111827`
- `--border`: subtle white/10
- Inter font via Google Fonts `<link>` in `__root.tsx` head, applied via `font-family` on body

## File Changes

1. **`src/styles.css`** — replace `:root` color tokens with the dark palette above; set Inter as base font-family.
2. **`src/routes/__root.tsx`** — add Google Fonts preconnect + Inter link in `head().links`; update title to "Vector AI — Your AI team. Fraction of the cost." and meta description.
3. **`src/routes/index.tsx`** — replace placeholder; compose page from section components below. Include sonner `<Toaster />`.
4. **New components in `src/components/vector/`**:
   - `Navbar.tsx` — sticky, backdrop blur when scrolled, logo + 4 anchor links (`#services`, `#pricing`, `#about`, `#contact`) + primary CTA.
   - `Hero.tsx` — headline, subheadline, 2 CTAs, location badge row. Background: inline SVG abstract geometric pattern (dots + diagonal lines in blue tones, low opacity) absolutely positioned.
   - `SocialProof.tsx` — muted label + 5 text badges (Mumbai, New York, London, Berlin, Dubai) in pill style.
   - `Services.tsx` — section title + 3×2 grid of 6 cards using shadcn `Card`; Lucide icons (`Pen`, `Search`, `Palette`, `Settings`, `BarChart3`, `MessageSquare`); hover adds blue ring via `hover:ring-1 hover:ring-primary/50 transition`.
   - `HowItWorks.tsx` — 3 numbered steps in a row; dashed connector line via pseudo-element/absolute div, hidden on mobile.
   - `Pricing.tsx` — 3 cards; middle one has `ring-2 ring-primary shadow-[0_0_40px_-10px_theme(colors.primary)]` and "Most popular" badge.
   - `About.tsx` — 3-column grid of value props.
   - `Contact.tsx` — left: heading + WhatsApp button + email link; right: shadcn `Form` with zod validation (name, email, company, message), submit triggers `toast.success("Thanks — we'll reply within 2 hours.")` and resets form.
   - `Footer.tsx` — logo, tagline, link row, copyright.
5. **`src/hooks/useFadeInOnScroll.ts`** — small IntersectionObserver hook adding `opacity-100 translate-y-0` to sections (initial `opacity-0 translate-y-4 transition-all duration-700`).

## Behavior

- WhatsApp links → `https://wa.me/91XXXXXXXXXX` (per spec, keep placeholder number as given).
- Email link → `mailto:hello@vectorai.co`.
- Nav links scroll to section IDs (`scroll-mt-20` on sections for sticky-nav offset, `scroll-behavior: smooth` on html).
- Form: zod schema (name 1–100, email valid, company 0–100, message 1–1000), shadcn `Form` + `useForm`, toast via sonner, no network call.
- Mobile (375px): grids collapse to 1 column, nav collapses to a `Sheet` drawer triggered by a `Menu` icon button.

## Technical Notes

- shadcn components used: `button`, `card`, `input`, `textarea`, `form`, `label`, `sheet`, `sonner` (all already present).
- No new dependencies. Icons from existing `lucide-react`. Validation via existing `zod` + `react-hook-form`.
- All colors via tokens (`bg-background`, `text-foreground`, `text-primary`, `bg-card`, `text-muted-foreground`) — no raw hex in components.
- Section structure: each section wrapped in `<section id="..." className="scroll-mt-20 py-20 md:py-28">` with a `max-w-6xl mx-auto px-6` container.

## Out of Scope

No backend, no auth, no Cloud, no real form submission, no real logos, no animation libraries.
