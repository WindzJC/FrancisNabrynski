import type { SiteData } from '@/data/site-data';

type ContactSectionProps = {
  contact: SiteData['contact'];
};

export function ContactSection({ contact }: ContactSectionProps) {
  return (
    <section id="contact" className="bg-ink py-20">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <div className="grid gap-8 rounded-[2rem] border border-gold/20 bg-[linear-gradient(165deg,rgba(22,14,20,0.9),rgba(10,7,11,0.88))] p-7 shadow-luxe md:p-10 lg:grid-cols-[0.85fr,1.15fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">Contact</p>
            <h2 className="mt-4 font-display text-4xl text-white md:text-5xl">{contact.heading}</h2>
            <p className="mt-4 max-w-md text-lg text-slate-200">{contact.intro}</p>
          </div>
          <form className="grid gap-4" action="#" method="post">
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                className="rounded-lg border border-white/15 bg-white/[0.03] px-4 py-3 text-white placeholder:text-slate-400 focus:border-accent focus:outline-none"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                className="rounded-lg border border-white/15 bg-white/[0.03] px-4 py-3 text-white placeholder:text-slate-400 focus:border-accent focus:outline-none"
                required
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="rounded-lg border border-white/15 bg-white/[0.03] px-4 py-3 text-white placeholder:text-slate-400 focus:border-accent focus:outline-none"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                className="rounded-lg border border-white/15 bg-white/[0.03] px-4 py-3 text-white placeholder:text-slate-400 focus:border-accent focus:outline-none"
              />
            </div>
            <select
              name="topic"
              className="rounded-lg border border-white/15 bg-white/[0.03] px-4 py-3 text-white focus:border-accent focus:outline-none"
              defaultValue=""
              required
            >
              <option value="" disabled>
                Select a topic
              </option>
              {contact.topics.map((topic) => (
                <option key={topic} value={topic} className="bg-panel text-white">
                  {topic}
                </option>
              ))}
            </select>
            <textarea
              name="message"
              rows={5}
              placeholder="Tell us what you need"
              className="rounded-lg border border-white/15 bg-white/[0.03] px-4 py-3 text-white placeholder:text-slate-400 focus:border-accent focus:outline-none"
              required
            />
            <button
              type="submit"
              className="inline-flex w-fit rounded-lg bg-[linear-gradient(135deg,#7a2f3e,#b8707f)] px-6 py-3 font-semibold text-white shadow-[0_12px_30px_rgba(143,49,71,0.4)] transition hover:-translate-y-0.5"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
