export type SocialPlatform =
  | 'facebook'
  | 'x'
  | 'instagram'
  | 'pinterest'
  | 'tiktok'
  | 'youtube'
  | 'linkedin';

export type SocialLink = {
  platform: SocialPlatform;
  href: string;
  label: string;
};

export type SiteData = {
  brand: {
    logoText: string;
    mark: string;
  };
  utility: {
    socials: SocialLink[];
    phone: string;
    phoneHref: string;
    email: string;
    emailHref: string;
  };
  nav: Array<{ label: string; href: string }>;
  hero: {
    image: string;
    signature: string;
    headline: string;
    tagline: string;
    bio: string;
    ctaLabel: string;
    ctaHref: string;
    headshot: string;
    headshotAlt: string;
  };
  featuredBook: {
    title: string;
    subtitle: string;
    description: string;
    cover: string;
    coverAlt: string;
    isbns: string[];
    buttons: Array<{ label: string; href: string }>;
  };
  trailer: {
    eyebrow: string;
    title: string;
    description: string;
    comingSoonLabel: string;
  };
  awards: string[];
  seenOn: Array<{ name: string; href: string }>;
  about: {
    title: string;
    image: string;
    imageAlt: string;
    body: string;
    stats: Array<{ value: string; label: string }>;
  };
  testimonials: Array<{
    quote: string;
    name: string;
    role: string;
  }>;
  contact: {
    heading: string;
    intro: string;
    topics: string[];
  };
  footer: {
    newsletterHeading: string;
    newsletterCopy: string;
    copyright: string;
    socials: SocialLink[];
  };
};

export const siteData: SiteData = {
  brand: {
    logoText: 'Francis Nabrynski',
    mark: 'FN'
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
    phone: '360-607-4767',
    phoneHref: 'tel:+13606074767',
    email: 'nabrynskif@gmail.com',
    emailHref: 'mailto:nabrynskif@gmail.com'
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
    signature: 'Francis Nabrynski',
    headline: 'Join Me on the Path to Compelling Storytelling',
    tagline: 'Author. Veteran. Speaker.',
    bio: 'From small-town roots and military service to a life shaped by global work and lived experience, Francis writes stories about ambition, love, and consequence.',
    ctaLabel: 'Explore Featured Book',
    ctaHref: '#featured-book',
    headshot: '/francis-headshot.png',
    headshotAlt: 'Portrait of Francis Nabrynski'
  },
  featuredBook: {
    title: 'THE GIRL WITH THE BLACK HAIR: A Reluctant Love Affair',
    subtitle: 'by Frank Roberts (Author) • Kindle Edition',
    description:
      'Having recently loved and lost, Mr. Roberts now wants only one affair: Corporate America, steady employment, and long-term security. But indiscretions with married and single women leave his personal and professional life conflicted. As addiction, desire, and ethics collide, he struggles to do right by the one person he is most afraid to love: The Girl with the Black Hair. Continue the saga with: The Girl with the Black Hair, A Reluctant Love Affair (Book Two), The Other Girl with the Black Hair: Another Reluctant Love Affair, and Another Girl with Black Hair: My West Coat Lisa.',
    cover: '/book-cover.png',
    coverAlt: 'Cover of The Girl with the Black Hair',
    isbns: ['9798889826194 (Print)', '9798889826200 (eText)'],
    buttons: [
      {
        label: 'Buy on Amazon',
        href: 'https://www.amazon.com/GIRL-BLACK-HAIR-Reluctant-Affair-ebook/dp/B0DBWZ756K'
      },
      { label: 'Contact for Events', href: '#contact' }
    ]
  },
  trailer: {
    eyebrow: 'Book Trailer',
    title: 'Official Trailer',
    description:
      'A cinematic teaser for The Girl with the Black Hair is currently in production. Check back soon for the first release.',
    comingSoonLabel: 'Trailer Coming Soon'
  },
  awards: ['Marine Corps Veteran', '45+ Years in Engineering & Construction', 'Debut 4-Book Saga', 'Featured in Independent Press Releases'],
  seenOn: [
    { name: 'PR.com', href: '#' },
    { name: 'Fulton Books', href: '#' },
    { name: 'Barnes & Noble', href: '#' },
    { name: 'Independent Author Network', href: '#' },
    { name: 'Book Industry Listings', href: '#' }
  ],
  about: {
    title: 'About the Author',
    image: '/francis-headshot.png',
    imageAlt: 'Francis Nabrynski portrait',
    body: 'Francis grew up in a mill town in the Merrimack Valley of northern Massachusetts. After serving as a draftee in the United States Marine Corps, including one Vietnam tour, he returned home and spent the next four-and-a-half decades traveling across the U.S. and internationally while working in engineering and construction. Today he is retired, remarried, and writing the Girls with Black Hair saga from Florida.',
    stats: [
      { value: '45+', label: 'Years of Experience' },
      { value: '15', label: 'Countries Worked In' },
      { value: '4', label: 'Planned Books in Saga' }
    ]
  },
  testimonials: [
    {
      quote:
        'A bold, emotionally charged debut - cinematic scenes, conflicted characters, and a story that lingers.',
      name: 'Editorial Reader',
      role: 'Advance Reviewer'
    },
    {
      quote:
        'Francis writes from lived experience - you feel the depth in every chapter. The voice is raw, honest, and compelling.',
      name: 'Book Community Host',
      role: 'Literary Commentary'
    },
    {
      quote:
        'Tight pacing, real stakes, and moral tension throughout - this reads like a story built for adaptation.',
      name: 'Independent Critic',
      role: 'Story Consultant'
    }
  ],
  contact: {
    heading: 'Work With Francis',
    intro: 'Use this form for speaking requests, interviews, collaborations, and reader inquiries.',
    topics: ['Speaking Request', 'Media Interview', 'Book Club Appearance', 'General Inquiry']
  },
  footer: {
    newsletterHeading: 'Get Updates',
    newsletterCopy: 'Join the mailing list for launch news, appearances, and exclusive updates.',
    copyright: '© 2026 Francis Nabrynski. All rights reserved.',
    socials: [
      { platform: 'facebook', href: '#', label: 'Facebook' },
      { platform: 'instagram', href: '#', label: 'Instagram' },
      { platform: 'youtube', href: '#', label: 'YouTube' },
      { platform: 'linkedin', href: '#', label: 'LinkedIn' }
    ]
  }
};
