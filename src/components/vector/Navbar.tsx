import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

type NavLink = { label: string } & ({ href: string } | { to: string });

const links: NavLink[] = [
  { href: "/#services", label: "Services" },
  { to: "/pricing", label: "Pricing" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const renderLink = (l: NavLink, mobile = false) => {
    const cls = mobile
      ? "text-base text-foreground"
      : "text-sm text-muted-foreground transition-colors hover:text-foreground";
    if ("to" in l) {
      return (
        <Link key={l.label} to={l.to} onClick={() => setOpen(false)} className={cls}>
          {l.label}
        </Link>
      );
    }
    return (
      <a key={l.label} href={l.href} onClick={() => setOpen(false)} className={cls}>
        {l.label}
      </a>
    );
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-lg"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <Link to="/" className="text-lg font-bold tracking-tight text-foreground">
          Vector<span className="text-primary">AI</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => renderLink(l))}
        </nav>

        <div className="hidden md:block">
          <Button asChild className="rounded-full">
            <a href="/#contact">Get a free audit</a>
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background">
              <SheetTitle className="text-foreground">Menu</SheetTitle>
              <nav className="mt-8 flex flex-col gap-4">
                {links.map((l) => renderLink(l, true))}
                <Button asChild className="mt-4 rounded-full">
                  <a href="/#contact" onClick={() => setOpen(false)}>
                    Get a free audit
                  </a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
