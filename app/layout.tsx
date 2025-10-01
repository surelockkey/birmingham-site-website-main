import { Analytics } from '@vercel/analytics/next';
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import type { Metadata } from 'next';
import type React from 'react';
import { Suspense } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sure Lock & Key Birmingham | Locksmith Services in Birmingham, AL ',
  description:
    'Reliable locksmith in Birmingham, AL for homes, cars, and businesses. Sure Lock & Key delivers fast mobile help, expert repairs, and trusted security solutions.',
  generator: 'v0.app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  );
}
