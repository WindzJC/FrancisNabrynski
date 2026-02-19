import Image from 'next/image';
import Link from 'next/link';

import type { SiteData } from '@/data/site-data';

type HeroSectionProps = {
  hero: SiteData['hero'];
};

export function HeroSection({ hero }: HeroSectionProps) {
  const roleChips = hero.tagline
    .split('.')
    .map((item) => item.trim())
    .filter(Boolean);

  return (
    <section id="home" className="relative min-h-[560px] overflow-hidden md:min-h-[700px]">
      <Image
        src={hero.image}
        alt="Hero background"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,4,6,0.9)_0%,rgba(10,6,8,0.76)_45%,rgba(14,9,11,0.34)_72%,rgba(6,4,5,0.76)_100%)]" />
      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center px-4 py-28 md:px-6 md:py-36">
        <div className="w-full max-w-6xl rounded-3xl border border-gold/20 bg-[rgba(13,8,11,0.45)] p-6 text-white backdrop-blur-sm md:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.25fr,0.75fr] lg:items-end">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-gold md:text-base">
                {hero.signature}
              </p>
              <h1 className="max-w-4xl text-balance text-[clamp(2rem,5.2vw,4rem)] font-normal uppercase leading-[1.04] tracking-tight text-rose-mist">
                {hero.headline}
              </h1>
              <p className="mt-4 text-xl font-semibold uppercase tracking-wide text-gold md:text-2xl">{hero.tagline}</p>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-100">{hero.bio}</p>
              <Link
                href={hero.ctaHref}
                className="mt-7 inline-flex rounded-xl bg-[linear-gradient(135deg,#7a2f3e,#b8707f)] px-7 py-3 text-lg font-semibold text-white shadow-[0_14px_30px_rgba(143,49,71,0.45)] transition hover:-translate-y-0.5"
              >
                {hero.ctaLabel}
              </Link>
            </div>

            <aside className="rounded-2xl border border-gold/20 bg-[rgba(13,8,11,0.4)] p-5 lg:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">Author Focus</p>
              <p className="mt-3 text-base leading-relaxed text-slate-200">
                Real-world experience, service, and human complexity power every story in this saga.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {roleChips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-slate-100"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
