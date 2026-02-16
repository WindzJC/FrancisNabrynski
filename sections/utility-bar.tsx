import Link from 'next/link';

import type { SiteData } from '@/data/site-data';
import { SocialIcon } from '@/components/social-icon';

type UtilityBarProps = {
  utility: SiteData['utility'];
};

export function UtilityBar({ utility }: UtilityBarProps) {
  return (
    <div className="relative z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-2 px-4 py-2 text-sm md:flex-row md:px-6">
        <div className="flex items-center gap-3 text-slate-900">
          {utility.socials.map((social, index) => (
            <Link
              key={social.platform}
              href={social.href}
              aria-label={social.label}
              className={`rounded-full p-1.5 text-slate-900 transition hover:bg-slate-100 hover:text-accent ${
                index > 3 ? 'hidden md:inline-flex' : 'inline-flex'
              }`}
            >
              <SocialIcon platform={social.platform} />
            </Link>
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-slate-800">
          <p>
            <span className="font-semibold">Phone:</span>{' '}
            <Link href={utility.phoneHref} className="font-semibold text-violet-900 underline-offset-2 hover:underline">
              {utility.phone}
            </Link>
          </p>
          <p>
            <span className="font-semibold">Email:</span>{' '}
            <Link href={utility.emailHref} className="font-semibold text-violet-900 underline-offset-2 hover:underline">
              {utility.email}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
