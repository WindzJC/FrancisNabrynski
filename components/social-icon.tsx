import type { SocialPlatform } from '@/data/site-data';

type SocialIconProps = {
  platform: SocialPlatform;
  className?: string;
};

const iconClass = 'h-4 w-4';

export function SocialIcon({ platform, className = iconClass }: SocialIconProps) {
  switch (platform) {
    case 'facebook':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M13.5 8.75V6.9c0-.76.5-.94.85-.94h2.12V2.45h-2.92C10.8 2.45 10 5.2 10 6.97v1.78H7.8v3.64H10v9.17h3.5v-9.17h2.73l.37-3.64H13.5Z" />
        </svg>
      );
    case 'x':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M18.9 3h2.9l-6.33 7.24L23 21h-5.89l-4.61-6.03L7.2 21H4.3l6.77-7.73L1 3h6.04l4.16 5.49L18.9 3Zm-1.03 16.2h1.61L6.15 4.7H4.42L17.87 19.2Z" />
        </svg>
      );
    case 'instagram':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.9A3.85 3.85 0 0 0 3.9 7.75v8.5A3.85 3.85 0 0 0 7.75 20.1h8.5a3.85 3.85 0 0 0 3.85-3.85v-8.5a3.85 3.85 0 0 0-3.85-3.85h-8.5Zm9.1 1.6a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.9a3.1 3.1 0 1 0 0 6.2 3.1 3.1 0 0 0 0-6.2Z" />
        </svg>
      );
    case 'pinterest':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12.15 2a9.9 9.9 0 0 0-3.56 19.14c-.05-1.46 0-3.22.36-4.8.4-1.7 2.62-11.07 2.62-11.07s-.65-1.3-.65-3.21c0-3 1.74-5.25 3.9-5.25 1.84 0 2.73 1.38 2.73 3.03 0 1.85-1.18 4.62-1.79 7.18-.51 2.16 1.09 3.93 3.22 3.93 3.87 0 6.47-4.98 6.47-10.88C25.45 6.67 19.5 2 12.15 2Z" />
        </svg>
      );
    case 'tiktok':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M14.7 2h3.02c.27 2.2 1.57 3.75 3.73 4v3.03a7.05 7.05 0 0 1-3.7-1.2v6.11a6.38 6.38 0 1 1-6.37-6.37c.3 0 .6.03.9.07v3.15a3.24 3.24 0 1 0 2.42 3.14V2Z" />
        </svg>
      );
    case 'youtube':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M23 7.5c-.2-1.4-1.3-2.5-2.7-2.7C18 4.5 12 4.5 12 4.5s-6 0-8.3.3C2.3 5 1.2 6.1 1 7.5.7 9.8.7 12 .7 12s0 2.2.3 4.5c.2 1.4 1.3 2.5 2.7 2.7 2.3.3 8.3.3 8.3.3s6 0 8.3-.3c1.4-.2 2.5-1.3 2.7-2.7.3-2.3.3-4.5.3-4.5s0-2.2-.3-4.5ZM9.6 15.7V8.3L16.1 12l-6.5 3.7Z" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M4.98 3.5A2.48 2.48 0 1 1 5 8.46a2.48 2.48 0 0 1-.02-4.96ZM3 9h4v12H3V9Zm7 0h3.83v1.7h.06c.53-1 1.84-2.05 3.78-2.05 4.04 0 4.79 2.65 4.79 6.1V21h-4v-5.58c0-1.33-.02-3.05-1.86-3.05-1.87 0-2.16 1.46-2.16 2.95V21h-4V9Z" />
        </svg>
      );
    default:
      return null;
  }
}
