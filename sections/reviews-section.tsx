import type { SiteData } from '@/data/site-data';

type ReviewsSectionProps = {
  testimonials: SiteData['testimonials'];
};

export function ReviewsSection({ testimonials }: ReviewsSectionProps) {
  return (
    <section id="reviews" className="bg-[#09060b] py-20">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Reviews</p>
            <h2 className="mt-3 font-display text-4xl text-white md:text-5xl">What Readers Are Saying</h2>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.quote}
              className="flex h-full flex-col rounded-2xl border border-gold/20 bg-[linear-gradient(160deg,rgba(22,14,20,0.88),rgba(9,6,10,0.84))] p-6"
            >
              <p className="text-lg leading-relaxed text-slate-100">“{item.quote}”</p>
              <div className="mt-auto border-t border-white/10 pt-4">
                <p className="font-semibold text-white">{item.name}</p>
                <p className="text-sm text-slate-300">{item.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
