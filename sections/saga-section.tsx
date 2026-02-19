import Image from 'next/image';
import Link from 'next/link';

import type { SiteData } from '@/data/site-data';

type SagaSectionProps = {
  saga: SiteData['saga'];
};

export function SagaSection({ saga }: SagaSectionProps) {
  return (
    <section id="saga" className="relative z-10 bg-ink pb-20 pt-8 md:pt-10">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <div className="motion-fade-up rounded-[2rem] border border-gold/20 bg-[linear-gradient(155deg,rgba(20,12,18,0.95),rgba(9,6,10,0.9))] p-6 shadow-luxe md:p-10">
          <div className="motion-fade-up motion-delay-1 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">{saga.eyebrow}</p>
              <h2 className="mt-3 font-display text-3xl text-white md:text-5xl">{saga.title}</h2>
              <p className="mt-3 text-base text-rose-mist md:text-lg">{saga.subtitle}</p>
              <p className="mt-3 max-w-3xl text-slate-200">{saga.premise}</p>
            </div>
            <Link
              href="/series"
              className="hover-lift rounded-lg border border-gold/35 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              View Series Page
            </Link>
          </div>

          <div className="sheen-line mt-8 hidden h-px w-full bg-gradient-to-r from-transparent via-gold/60 to-transparent md:block" />

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {saga.books.map((book, index) => (
              <article
                key={`${book.installment}-${book.title}`}
                className="motion-fade-up hover-lift relative rounded-2xl border border-gold/20 bg-[rgba(19,11,16,0.78)] p-4"
                style={{ animationDelay: `${120 + index * 80}ms` }}
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="grid h-8 w-8 place-items-center rounded-full border border-gold/45 bg-gold/10 text-sm font-semibold text-gold">
                    {index + 1}
                  </span>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">{book.installment}</p>
                </div>

                <div className="relative mb-4 aspect-[2/3] overflow-hidden rounded-xl border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.06),rgba(255,255,255,0.01))]">
                  {book.coverUrl ? (
                    <Image src={book.coverUrl} alt={`Cover of ${book.title}`} fill className="object-cover" />
                  ) : (
                    <div className="h-full w-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.14),transparent_45%),linear-gradient(140deg,rgba(97,51,63,0.7),rgba(21,15,20,0.92))]" />
                  )}
                </div>
                {!book.coverUrl && <p className="mb-4 text-xs uppercase tracking-[0.1em] text-slate-400">Cover reveal coming soon.</p>}

                <h3 className="font-display text-2xl leading-tight text-white">{book.title}</h3>
                <p className="mt-1 text-sm text-rose-mist">({book.subtitle})</p>
                <p className="mt-3 text-sm text-slate-200">{book.teaser}</p>

                <div className="mt-4 flex items-center justify-between gap-3">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] ${
                      book.available
                        ? 'border border-emerald-300/35 bg-emerald-500/10 text-emerald-200'
                        : 'border border-gold/35 bg-gold/10 text-gold'
                    }`}
                  >
                    {book.status}
                  </span>

                  {book.available && book.buyUrl ? (
                    <Link
                      href={book.buyUrl}
                      className="hover-lift rounded-md bg-[linear-gradient(135deg,#7a2f3e,#b8707f)] px-3 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5"
                    >
                      Buy Book 1
                    </Link>
                  ) : (
                    <Link
                      href="#newsletter-signup"
                      className="hover-lift rounded-md border border-gold/35 bg-white/5 px-3 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
                    >
                      Get Updates
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
