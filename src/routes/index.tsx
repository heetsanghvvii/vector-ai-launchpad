import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/vector/Navbar";
import { Hero } from "@/components/vector/Hero";
import { SocialProof } from "@/components/vector/SocialProof";
import { Services } from "@/components/vector/Services";
import { HowItWorks } from "@/components/vector/HowItWorks";
import { Pricing } from "@/components/vector/Pricing";
import { About } from "@/components/vector/About";
import { Contact } from "@/components/vector/Contact";
import { Footer } from "@/components/vector/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Vector AI — Your AI team. Fraction of the cost." },
      {
        name: "description",
        content:
          "AI-powered agency for content, research, decks, ops, and automation. Delivered in 24–48 hours. Serving India, USA, and Europe.",
      },
      { property: "og:title", content: "Vector AI — Your AI team. Fraction of the cost." },
      {
        property: "og:description",
        content:
          "Agency-quality content, research, decks, and automation in 24–48 hours. Powered by Claude, ChatGPT, Gemini & NotebookLM.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Services />
        <HowItWorks />
        <Pricing />
        <About />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
