import Image from 'next/image';
import Link from 'next/link';

import { siteData } from '@/data/site-data';

export default function SeriesPage() {
  const { saga } = siteData;

  return (
    <main className="min-h-screen bg-ink pb-20 pt-14 text-white">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <div className="motion-fade-up rounded-[2rem] border border-gold/20 bg-[linear-gradient(160deg,rgba(20,12,18,0.95),rgba(9,6,10,0.92))] p-6 shadow-luxe md:p-10">
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <Link href="/" className="hover-lift rounded-md border border-gold/35 bg-white/5 px-4 py-2 text-sm font-semibold text-white">
              Back to Home
            </Link>
            <Link href="#reading-order" className="hover-lift rounded-md border border-gold/35 bg-white/5 px-4 py-2 text-sm font-semibold text-white">
              Reading Order
            </Link>
          </div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">{saga.eyebrow}</p>
          <h1 className="mt-3 font-display text-4xl text-white md:text-6xl">{saga.title}</h1>
          <p className="mt-4 max-w-4xl text-lg text-slate-200">{saga.premise}</p>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {saga.books.map((book, index) => (
              <article
                key={`${book.installment}-${book.title}`}
                className="motion-fade-up hover-lift rounded-xl border border-gold/20 bg-[rgba(18,11,16,0.8)] p-3"
                style={{ animationDelay: `${120 + index * 80}ms` }}
              >
                <div className="relative aspect-[2/3] overflow-hidden rounded-lg border border-white/10 bg-[linear-gradient(140deg,rgba(97,51,63,0.7),rgba(21,15,20,0.92))]">
                  {book.coverUrl ? (
                    <Image src={book.coverUrl} alt={`Cover of ${book.title}`} fill className="object-cover" />
                  ) : (
                    <div className="h-full w-full bg-[radial-gradient(circle_at_26%_24%,rgba(255,255,255,0.14),transparent_45%),linear-gradient(140deg,rgba(97,51,63,0.7),rgba(21,15,20,0.92))]" />
                  )}
                </div>
                {!book.coverUrl && <p className="mt-2 text-xs uppercase tracking-[0.08em] text-slate-400">Cover reveal coming soon.</p>}
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-gold">{book.installment}</p>
                <h2 className="mt-1 font-display text-xl leading-tight text-white">{book.title}</h2>
              </article>
            ))}
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
            <section id="reading-order" className="motion-fade-up motion-delay-2 rounded-2xl border border-gold/20 bg-[rgba(18,11,16,0.75)] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Reading Order</p>
              <ol className="mt-4 grid gap-3 text-slate-100">
                {saga.books.map((book) => (
                  <li key={`order-${book.installment}`}>
                    <span className="font-semibold text-gold">{book.installment}:</span> {book.title} ({book.subtitle})
                  </li>
                ))}
              </ol>
            </section>

            <section className="motion-fade-up motion-delay-3 rounded-2xl border border-gold/20 bg-[rgba(18,11,16,0.75)] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Updates</p>
              <p className="mt-4 text-slate-200">
                Books Two-Four are in development. Join updates to get cover reveals, release dates, and launch announcements.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/#newsletter-signup"
                  className="hover-lift rounded-md bg-[linear-gradient(135deg,#7a2f3e,#b8707f)] px-4 py-2 text-sm font-semibold text-white"
                >
                  Get Updates
                </Link>
                <a
                  href={`mailto:${saga.updatesEmail}?subject=${encodeURIComponent('Series updates request')}`}
                  className="hover-lift rounded-md border border-gold/35 bg-white/5 px-4 py-2 text-sm font-semibold text-white"
                >
                  Email Directly
                </a>
                <Link href="/" className="hover-lift rounded-md border border-gold/35 bg-white/5 px-4 py-2 text-sm font-semibold text-white">
                  Back to Home
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
