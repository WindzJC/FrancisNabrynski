import type { SiteData } from '@/data/site-data';

type AwardsStripProps = {
  awards: SiteData['awards'];
};

export function AwardsStrip({ awards }: AwardsStripProps) {
  return (
    <section className="border-y border-gold/20 bg-[rgba(12,8,11,0.9)] py-6">
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-center gap-3 px-4 md:px-6">
        {awards.map((award) => (
          <span
            key={award}
            className="rounded-full border border-gold/35 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-gold"
          >
            {award}
          </span>
        ))}
      </div>
    </section>
  );
}
