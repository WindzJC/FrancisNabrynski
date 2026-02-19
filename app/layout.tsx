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
  title: 'My West Coast Lisa',
  description:
    'Official website for My West Coast Lisa by Frank Roberts.'
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
