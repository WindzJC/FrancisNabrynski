import type { Metadata } from 'next';
import { Fraunces, Inter } from 'next/font/google';

import './globals.css';

const display = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '600', '700']
});

const body = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600', '700']
});

export const metadata: Metadata = {
  metadataBase: new URL('https://frankroberts.pages.dev'),
  title: 'Frank Roberts | Author of the Girls with Black Hair Saga',
  description:
    'Official author website of Frank Roberts, U.S. Marine Corps veteran and author of the Girls with Black Hair romantic saga. Explore his books, trailer, biography, and contact information.',
  alternates: {
    canonical: '/'
  },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'Frank Roberts',
    title: 'Frank Roberts | Author of the Girls with Black Hair Saga',
    description:
      'Explore the books, story, trailer, and background of Frank Roberts, author of the Girls with Black Hair romantic saga.',
    images: [
      {
        url: '/hero-bg.png',
        alt: 'Frank Roberts author website'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frank Roberts | Author of the Girls with Black Hair Saga',
    description:
      'Explore the books, story, trailer, and background of Frank Roberts, author of the Girls with Black Hair romantic saga.',
    images: ['/hero-bg.png']
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable} bg-ink text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
