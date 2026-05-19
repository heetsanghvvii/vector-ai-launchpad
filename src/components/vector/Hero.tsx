import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

const WA_URL = "https://wa.me/91XXXXXXXXXX";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28">
      {/* Background pattern */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <svg
          aria-hidden="true"
          className="absolute inset-0 h-full w-full opacity-[0.15]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="48"
              height="48"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 48 0 L 0 0 0 48"
                fill="none"
                stroke="#3B7BF5"
                strokeWidth="0.5"
              />
            </pattern>
            <radialGradient id="fade" cx="50%" cy="0%" r="60%">
              <stop offset="0%" stopColor="white" stopOpacity="1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
            <mask id="fadeMask">
              <rect width="100%" height="100%" fill="url(#fade)" />
            </mask>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" mask="url(#fadeMask)" />
        </svg>
        <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />
      </div>

      <div className="mx-auto w-full max-w-4xl px-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Your AI team.{" "}
          <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Fraction of the cost.
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
          We use Claude, ChatGPT, Gemini & NotebookLM to deliver agency-quality content, research,
          decks, and automation — in 24–48 hours.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" className="w-full rounded-full sm:w-auto">
            <a href="#services">
              See our services <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="w-full rounded-full border-border bg-transparent text-foreground hover:bg-card sm:w-auto"
          >
            <a href={WA_URL} target="_blank" rel="noreferrer">
              <MessageCircle className="mr-1 h-4 w-4" /> WhatsApp us
            </a>
          </Button>
        </div>

        <div className="mt-10 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <span>India</span>
          <span className="h-1 w-1 rounded-full bg-muted-foreground/60" />
          <span>USA</span>
          <span className="h-1 w-1 rounded-full bg-muted-foreground/60" />
          <span>Europe</span>
        </div>
      </div>
    </section>
  );
}
