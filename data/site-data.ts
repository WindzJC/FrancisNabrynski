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
    videoUrl?: string;
    posterUrl?: string;
  };
  saga: {
    eyebrow: string;
    title: string;
    subtitle: string;
    premise: string;
    updatesEmail: string;
    books: Array<{
      title: string;
      subtitle: string;
      installment: string;
      teaser: string;
      status: string;
      available: boolean;
      coverUrl?: string;
      buyUrl?: string;
    }>;
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
    sagaMicrocopy?: string;
    copyright: string;
    socials: SocialLink[];
  };
};

export const siteData: SiteData = {
  brand: {
    logoText: 'Frank Roberts',
    mark: 'FR'
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
    { label: 'Books', href: '#saga' },
    { label: 'Trailer', href: '#trailer' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' }
  ],
  hero: {
    image: '/hero-bg.png',
    signature: 'Frank Roberts',
    headline: 'Join Me on the Path to Compelling Storytelling',
    tagline: 'Author. Veteran. Speaker.',
    bio: 'From small-town roots and military service to a life shaped by global work and lived experience, Frank writes stories about ambition, love, and consequence.',
    ctaLabel: 'Explore Featured Book',
    ctaHref: '#featured-book',
    headshot: '/francis-headshot.png',
    headshotAlt: 'Portrait of Frank Roberts'
  },
  featuredBook: {
    title: 'My West Coast Lisa',
    subtitle: 'by Frank Roberts (Author) • Kindle Edition',
    description:
      'Having recently loved and lost, Mr. Roberts now wants only one affair: Corporate America, steady employment, and long-term security. But indiscretions with married and single women leave his personal and professional life conflicted. As addiction, desire, and ethics collide, he struggles to do right by the one person he is most afraid to love. Continue the saga with The Other Girl with the Black Hair: Another Reluctant Love Affair and My West Coast Lisa.',
    cover: '/book-cover.png',
    coverAlt: 'Cover of My West Coast Lisa',
    isbns: ['9798889826194 (Print)', '9798889826200 (eText)'],
    buttons: [
      {
        label: 'Buy on Barnes & Noble',
        href: 'https://www.barnesandnoble.com/w/the-girl-with-the-black-hair-frank-roberts/1145849279'
      },
      {
        label: 'Buy on Amazon',
        href: 'https://www.amazon.com/GIRL-BLACK-HAIR-Reluctant-Affair-ebook/dp/B0DBWZ756K'
      },
      { label: 'Contact for Events', href: '#contact' }
    ]
  },
  trailer: {
    eyebrow: 'Book Trailer',
    title: 'The Girl with the Black Hair',
    description:
      '(A Reluctant Love Affair) - A dangerous attraction collides with ambition, loyalty, and personal consequence.',
    comingSoonLabel: 'Trailer Coming Soon',
    videoUrl: '/girl-with-the-black-hair-teaser.mp4',
    posterUrl: '/book-cover.png'
  },
  saga: {
    eyebrow: 'Romantic Saga',
    title: 'Romantic Saga: Girls with Black Hair (4-book series)',
    subtitle: 'Books by Frank Roberts',
    premise:
      'A sweeping romantic saga of love, consequence, and second chances told across four interconnected books.',
    updatesEmail: 'nabrynskif@gmail.com',
    books: [
      {
        title: 'The Girl with the Black Hair',
        subtitle: 'A Reluctant Love Affair',
        installment: 'Book One',
        teaser: 'A dangerous attraction collides with ambition, loyalty, and personal consequence.',
        status: 'Published',
        available: true,
        coverUrl: '/book-cover.png',
        buyUrl: 'https://www.barnesandnoble.com/w/the-girl-with-the-black-hair-frank-roberts/1145849279'
      },
      {
        title: 'The Girl with the Black Hair',
        subtitle: 'A Reluctant Love Affair',
        installment: 'Book Two',
        teaser: 'The affair deepens, and past choices return with higher stakes.',
        status: 'Coming Soon',
        available: false
      },
      {
        title: 'The Other Girl with the Black Hair',
        subtitle: 'Another Reluctant Love Affair',
        installment: 'Book Three',
        teaser: 'A new connection tests old promises and rewrites the rules of love.',
        status: 'Coming Soon',
        available: false
      },
      {
        title: 'Another Girl with Black Hair',
        subtitle: 'My West Coast Lisa',
        installment: 'Book Four',
        teaser: 'The saga reaches the west coast for a final chapter of reckoning and renewal.',
        status: 'Coming Soon',
        available: false
      }
    ]
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
    imageAlt: 'Frank Roberts portrait',
    body: 'Frank grew up in a mill town in the Merrimack Valley of northern Massachusetts. After serving as a draftee in the United States Marine Corps, including one Vietnam tour, he returned home and spent the next four-and-a-half decades traveling across the U.S. and internationally while working in engineering and construction. Today he is retired, remarried, and writing the Girls with Black Hair saga from Florida.',
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
        'Frank writes from lived experience - you feel the depth in every chapter. The voice is raw, honest, and compelling.',
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
    heading: 'Work With Frank',
    intro: 'Use this form for speaking requests, interviews, collaborations, and reader inquiries.',
    topics: ['Speaking Request', 'Media Interview', 'Book Club Appearance', 'General Inquiry']
  },
  footer: {
    newsletterHeading: 'Get Updates',
    newsletterCopy: 'Join the mailing list for launch news, appearances, and exclusive updates.',
    sagaMicrocopy: 'This romantic saga continues in Books Two-Four.',
    copyright: '© 2026 Frank Roberts. All rights reserved.',
    socials: [
      { platform: 'facebook', href: '#', label: 'Facebook' },
      { platform: 'instagram', href: '#', label: 'Instagram' },
      { platform: 'youtube', href: '#', label: 'YouTube' },
      { platform: 'linkedin', href: '#', label: 'LinkedIn' }
    ]
  }
};
