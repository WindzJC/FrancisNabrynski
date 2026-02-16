# Reusable Prompt For New Author Sites

Use my existing Next.js author website in this repo as a reusable template.

## Goal
Create a new author version for a different client **without changing the core premium layout/style**.

## Rules
1. Keep the same design system, section order, spacing rhythm, and component structure.
2. Only update content/data and media:
   - `data/site-data.ts`
   - `public/` images (headshot, hero, book cover) if needed
   - metadata in `app/layout.tsx` (title/description/og image) to match new author
3. Do not add/remove sections unless I explicitly ask.
4. Keep it responsive and accessible.
5. After edits, run build and report any issues.

## New Author Data
- Author Name:
- Pen Name / Public Listing Name:
- Tagline:
- Bio:
- Location:
- Headshot Path/URL:

## Featured Book
- Title:
- Subtitle:
- Description:
- ISBNs:
- Buy Link:
- Cover Path/URL:

## Trailer
- Status text (example: `Trailer Coming Soon`):
- Description:

## Testimonials (3)
1. 
2. 
3. 

## Contact
- Email:
- Form topics:
- CTA label:

## Output Requirements
- Keep all edits production-ready.
- Show:
  - files changed
  - exact content updated
  - final run commands: `npm run dev` and `npm run build`

## Ready-To-Paste Data Code
Use this when updating `data/site-data.ts` for a new author:

```ts
export const siteData: SiteData = {
  brand: {
    logoText: 'AUTHOR NAME',
    mark: 'AN'
  },
  utility: {
    socials: [
      { platform: 'facebook', href: '#', label: 'Facebook' },
      { platform: 'x', href: '#', label: 'X' },
      { platform: 'instagram', href: '#', label: 'Instagram' },
      { platform: 'pinterest', href: '#', label: 'Pinterest' },
      { platform: 'tiktok', href: '#', label: 'TikTok' },
      { platform: 'youtube', href: '#', label: 'YouTube' },
      { platform: 'linkedin', href: '#', label: 'LinkedIn' }
    ],
    phone: 'OPTIONAL PHONE',
    phoneHref: 'tel:+10000000000',
    email: 'author@email.com',
    emailHref: 'mailto:author@email.com'
  },
  nav: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Books', href: '#featured-book' },
    { label: 'Trailer', href: '#trailer' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' }
  ],
  hero: {
    image: '/hero-bg.png',
    signature: 'AUTHOR SIGNATURE',
    headline: 'MAIN HEADLINE',
    tagline: 'SHORT TAGLINE',
    bio: 'SHORT BIO INTRO',
    ctaLabel: 'Explore Featured Book',
    ctaHref: '#featured-book',
    headshot: '/author-headshot.png',
    headshotAlt: 'Portrait of AUTHOR NAME'
  },
  featuredBook: {
    title: 'BOOK TITLE',
    subtitle: 'BOOK SUBTITLE',
    description: 'BOOK BLURB',
    cover: '/book-cover.png',
    coverAlt: 'Cover of BOOK TITLE',
    isbns: ['ISBN 1', 'ISBN 2'],
    buttons: [
      { label: 'Buy on Amazon', href: 'https://www.amazon.com/dp/ASIN' },
      { label: 'Contact for Events', href: '#contact' }
    ]
  },
  trailer: {
    eyebrow: 'Book Trailer',
    title: 'Official Trailer',
    description: 'Trailer description or status.',
    comingSoonLabel: 'Trailer Coming Soon'
  },
  awards: ['AWARD 1', 'AWARD 2', 'AWARD 3', 'AWARD 4'],
  seenOn: [
    { name: 'Outlet 1', href: '#' },
    { name: 'Outlet 2', href: '#' },
    { name: 'Outlet 3', href: '#' }
  ],
  about: {
    title: 'About the Author',
    image: '/author-headshot.png',
    imageAlt: 'AUTHOR NAME portrait',
    body: 'Long-form author bio paragraph.',
    stats: [
      { value: '10+', label: 'Years Writing' },
      { value: '3', label: 'Books Published' },
      { value: '25', label: 'Appearances' }
    ]
  },
  testimonials: [
    { quote: 'Testimonial 1', name: 'Reviewer 1', role: 'Role 1' },
    { quote: 'Testimonial 2', name: 'Reviewer 2', role: 'Role 2' },
    { quote: 'Testimonial 3', name: 'Reviewer 3', role: 'Role 3' }
  ],
  contact: {
    heading: 'Work With AUTHOR NAME',
    intro: 'Use this form for bookings, interviews, and inquiries.',
    topics: ['Speaking Request', 'Media Interview', 'General Inquiry']
  },
  footer: {
    newsletterHeading: 'Get Updates',
    newsletterCopy: 'Join the mailing list for new releases and appearances.',
    copyright: '© 2026 AUTHOR NAME. All rights reserved.',
    socials: [
      { platform: 'facebook', href: '#', label: 'Facebook' },
      { platform: 'instagram', href: '#', label: 'Instagram' },
      { platform: 'youtube', href: '#', label: 'YouTube' },
      { platform: 'linkedin', href: '#', label: 'LinkedIn' }
    ]
  }
};
```

## Quick Commands
```bash
npm install
npm run dev
npm run build
```
