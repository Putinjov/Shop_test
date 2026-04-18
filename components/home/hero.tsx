import Image from "next/image";
import { Button } from "@/components/ui/button";
import type { HeroContent } from "@/types/shopify";

export function Hero({ hero }: { hero: HeroContent }) {
  return (
    <section className="section-space">
      <div className="container-mobile">
        <div className="overflow-hidden rounded-premium bg-white shadow-card">
          <div className="relative aspect-[4/5] sm:aspect-[16/9]">
            <Image src={hero.imageUrl} alt={hero.title} fill priority className="object-cover" sizes="100vw" />
            <div className="absolute inset-x-0 bottom-0 space-y-3 bg-gradient-to-t from-black/60 to-transparent p-5 text-white sm:max-w-lg sm:p-8">
              <p className="text-xs uppercase tracking-[0.2em]">{hero.eyebrow}</p>
              <h1 className="text-2xl font-semibold leading-tight sm:text-4xl">{hero.title}</h1>
              <p className="text-sm text-white/90">{hero.subtitle}</p>
              <Button href={hero.ctaHref}>{hero.ctaLabel}</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
