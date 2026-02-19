import Image from 'next/image';

import type { SiteData } from '@/data/site-data';

type AboutSectionProps = {
  about: SiteData['about'];
};

export function AboutSection({ about }: AboutSectionProps) {
  return (
    <section id="about" className="bg-ink py-20">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <div className="motion-fade-up grid gap-8 rounded-[2rem] border border-gold/20 bg-[linear-gradient(160deg,rgba(18,12,17,0.92),rgba(10,7,11,0.88))] p-7 shadow-luxe md:p-10 xl:grid-cols-[320px,1fr,260px] xl:items-center">
          <div className="motion-fade-up motion-delay-1 hover-lift relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border border-gold/25 bg-black/30 xl:max-w-none">
            <Image src={about.image} alt={about.imageAlt} fill className="object-cover object-top" />
          </div>

          <div className="motion-fade-up motion-delay-2">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">{about.title}</p>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-200 md:text-[1.1rem]">{about.body}</p>
          </div>

          <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-1">
            {about.stats.map((stat, index) => (
              <div
                key={stat.label}
                className="motion-fade-up hover-lift rounded-xl border border-white/10 bg-white/[0.03] p-5 text-center"
                style={{ animationDelay: `${190 + index * 70}ms` }}
              >
                <p className="font-display text-5xl leading-none text-rose-mist">{stat.value}</p>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-slate-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
