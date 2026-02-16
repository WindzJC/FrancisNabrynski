import Link from 'next/link';

import type { SiteData } from '@/data/site-data';

type SeenOnSectionProps = {
  seenOn: SiteData['seenOn'];
};

export function SeenOnSection({ seenOn }: SeenOnSectionProps) {
  return (
    <section className="bg-[#070b13] py-14">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">As Seen On</p>
        </div>
        <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {seenOn.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="grid h-20 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-center text-sm font-semibold text-slate-100 transition hover:border-gold/40 hover:text-gold"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
