import Image from 'next/image';
import Link from 'next/link';

import type { SiteData } from '@/data/site-data';

type FeaturedBookSectionProps = {
  featuredBook: SiteData['featuredBook'];
};

export function FeaturedBookSection({ featuredBook }: FeaturedBookSectionProps) {
  return (
    <section id="featured-book" className="relative z-10 -mt-10 bg-ink pb-20 pt-12 md:-mt-14 md:pt-16">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <div className="motion-fade-up rounded-[2rem] border border-gold/20 bg-[linear-gradient(160deg,rgba(22,14,20,0.95),rgba(10,7,11,0.9))] p-6 shadow-luxe md:p-10">
          <div className="grid gap-8 lg:grid-cols-[360px,1fr] lg:items-start">
            <div className="motion-fade-up motion-delay-1 mx-auto w-full max-w-[340px] lg:max-w-[360px]">
              <div className="hover-lift relative aspect-[2/3] overflow-hidden rounded-2xl border border-gold/25 bg-black/35">
                <Image src={featuredBook.cover} alt={featuredBook.coverAlt} fill className="object-cover" />
              </div>
            </div>
            <div className="motion-fade-up motion-delay-2">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Featured Book</p>
              <h2 className="mt-4 font-display text-5xl text-white md:text-6xl">{featuredBook.title}</h2>
              <p className="mt-2 text-xl font-semibold text-rose-mist">{featuredBook.subtitle}</p>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-200">{featuredBook.description}</p>

              <div className="mt-6 grid gap-2 text-slate-300">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold">ISBNs</p>
                {featuredBook.isbns.map((isbn) => (
                  <p key={isbn} className="text-base">
                    {isbn}
                  </p>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {featuredBook.buttons.map((button, index) => (
                  <Link
                    key={button.label}
                    href={button.href}
                    className={
                      index === 0
                        ? 'hover-lift rounded-lg bg-[linear-gradient(135deg,#7a2f3e,#b8707f)] px-5 py-3 font-semibold text-white shadow-[0_12px_30px_rgba(143,49,71,0.4)] transition hover:-translate-y-0.5'
                        : 'hover-lift rounded-lg border border-gold/35 bg-white/5 px-5 py-3 font-semibold text-white transition hover:bg-white/10'
                    }
                  >
                    {button.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
