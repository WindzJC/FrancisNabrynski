import type { SiteData } from '@/data/site-data';

type TrailerSectionProps = {
  trailer: SiteData['trailer'];
};

export function TrailerSection({ trailer }: TrailerSectionProps) {
  const hasVideo = Boolean(trailer.videoUrl && trailer.videoUrl.trim());

  return (
    <section id="trailer" className="relative z-10 bg-ink pb-20 pt-6 md:pt-10">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <div className="rounded-[2rem] border border-gold/20 bg-[linear-gradient(145deg,rgba(19,12,18,0.95),rgba(9,6,10,0.9))] p-6 shadow-luxe md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">{trailer.eyebrow}</p>
          <div className="mt-4 grid gap-8 lg:grid-cols-[1fr,320px] lg:items-center">
            <div>
              <h2 className="font-display text-4xl text-white md:text-5xl">{trailer.title}</h2>
              <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-200">{trailer.description}</p>
            </div>
            <div className="rounded-2xl border border-gold/30 bg-gold/10 px-5 py-4 text-center text-sm font-semibold uppercase tracking-[0.18em] text-gold">
              {hasVideo ? 'Now Playing' : trailer.comingSoonLabel}
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-gold/20 bg-[linear-gradient(135deg,rgba(143,49,71,0.28),rgba(9,6,10,0.78)_50%,rgba(213,187,139,0.18))]">
            <div className="relative aspect-video">
              {hasVideo ? (
                <video
                  className="h-full w-full bg-black object-cover"
                  controls
                  preload="metadata"
                  playsInline
                  poster={trailer.posterUrl || '/book-cover.png'}
                  aria-label={`${trailer.title} trailer`}
                >
                  <source src={trailer.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_56%)]" />
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="rounded-full border border-white/25 bg-white/10 p-6 backdrop-blur">
                      <span className="block text-2xl text-white">▶</span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 rounded-md bg-black/45 px-3 py-1 text-xs uppercase tracking-[0.12em] text-slate-200">
                    Trailer Coming Soon
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
