import './global.css';
import type { Metadata } from 'next';
import { Inconsolata } from 'next/font/google';
import { Navbar } from './components/nav';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Footer from './components/footer';
import { baseUrl } from './sitemap';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Brendan Ng Portfolio',
    template: '%s | Brendan Ng Portfolio',
  },
  description: "This is Brendan Ng's portfolio.",
  openGraph: {
    title: 'Brendan Ng Portfolio',
    description: "This is Brendan Ng's portfolio.",
    url: baseUrl,
    siteName: 'Brendan Ng Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const cx = (...classes) => classes.filter(Boolean).join(' ');

const insonsolata = Inconsolata({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black',
        // GeistSans.variable,
        // GeistMono.variable
        insonsolata.className
      )}
    >
      <body className="antialiased mt-8">
        <main className="flex-auto mt-6 flex flex-col px-2 items-center">
          <Navbar />
          <div className="">
            {children}
            <Footer />
            <Analytics />
            <SpeedInsights />
          </div>
        </main>
      </body>
    </html>
  );
}
