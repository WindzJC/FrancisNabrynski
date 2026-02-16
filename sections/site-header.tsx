import Link from 'next/link';

type SiteHeaderProps = {
  nav: Array<{ label: string; href: string }>;
};

export function SiteHeader({ nav }: SiteHeaderProps) {
  return (
    <header className="absolute inset-x-0 top-[4.3rem] z-20 md:top-10">
      <div className="mx-auto flex w-full max-w-7xl justify-center px-4 md:px-6">
        <nav className="max-w-full overflow-x-auto whitespace-nowrap rounded-full border border-gold/35 bg-[rgba(11,7,10,0.62)] px-3 py-2 text-sm text-white/90 shadow-[0_14px_26px_rgba(0,0,0,0.25)] backdrop-blur md:px-5 md:text-base">
          <ul className="flex items-center gap-5">
            {nav.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="font-medium transition hover:text-gold">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
