import type { SiteData } from '@/data/site-data';

type SiteFooterProps = {
  footer: SiteData['footer'];
};

export function SiteFooter({ footer }: SiteFooterProps) {
  return (
    <footer className="border-t border-gold/20 bg-[#060408] py-14">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 md:grid-cols-[1.1fr,1fr] md:items-end md:px-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">Newsletter</p>
          <h3 className="mt-3 font-display text-3xl text-white md:text-4xl">{footer.newsletterHeading}</h3>
          <p className="mt-3 max-w-md text-slate-300">{footer.newsletterCopy}</p>
        </div>
        <form id="newsletter-signup" className="flex flex-col gap-3 sm:flex-row sm:items-start" action="#" method="post">
          <input
            type="email"
            placeholder="Your email"
            aria-label="Email address"
            className="h-12 flex-1 rounded-lg border border-white/15 bg-white/[0.03] px-4 text-white placeholder:text-slate-400 focus:border-accent focus:outline-none"
            required
          />
          <button
            type="submit"
            className="hover-lift h-12 rounded-lg bg-[linear-gradient(135deg,#7a2f3e,#b8707f)] px-5 font-semibold text-white"
          >
            Subscribe
          </button>
        </form>
      </div>

      <div className="mx-auto mt-10 flex w-full max-w-7xl flex-wrap items-center justify-between gap-4 border-t border-white/10 px-4 pt-6 md:px-6">
        <div className="grid gap-1">
          <p className="text-sm text-slate-400">{footer.copyright}</p>
          {footer.sagaMicrocopy && <p className="text-xs text-slate-500">{footer.sagaMicrocopy}</p>}
        </div>
      </div>
    </footer>
  );
}
