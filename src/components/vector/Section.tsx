import type { ReactNode } from "react";
import { useFadeInOnScroll } from "@/hooks/useFadeInOnScroll";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}

export function Section({ id, children, className, containerClassName }: SectionProps) {
  const ref = useFadeInOnScroll<HTMLElement>();
  return (
    <section
      id={id}
      ref={ref}
      className={cn("fade-in-section scroll-mt-24 py-20 md:py-28", className)}
    >
      <div className={cn("mx-auto w-full max-w-6xl px-6", containerClassName)}>{children}</div>
    </section>
  );
}
