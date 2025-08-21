// app/layout.js - Root Layout for Next.js 15
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'Köp IPTV Sverige - Premium Streaming med 50 000+ Kanaler | Bästa IPTV 2025',
    template: '%s | Köpa IPTV Sverige'
  },
  description: 'Köp IPTV i Sverige med över 50 000 kanaler. Sport, filmer och serier i 4K-kvalitet. Snabb leverans, stabila servrar och 24/7 support. Testa gratis i 24 timmar!',
  keywords: ['IPTV Sverige', 'Köp IPTV', 'IPTV kanaler Sverige', 'Svenska TV kanaler', 'Streaming Sverige', 'IPTV abonnemang'],
  authors: [{ name: 'Köpa IPTV Sverige' }],
  creator: 'Köpa IPTV Sverige',
  publisher: 'Köpa IPTV Sverige',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Köp IPTV Sverige - Premium Streaming med 50 000+ Kanaler',
    description: 'Upptäck den ultimata IPTV-upplevelsen i Sverige. Över 50 000 kanaler i 4K-kvalitet. Testa gratis!',
    url: '/',
    siteName: 'Köpa IPTV Sverige',
    locale: 'sv_SE',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Köpa IPTV Sverige - Premium Streaming',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Köp IPTV Sverige - Premium Streaming med 50 000+ Kanaler',
    description: 'Upptäck den ultimata IPTV-upplevelsen i Sverige. Testa gratis!',
    images: ['/og-image.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
    // Add other verification codes as needed
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="sv" className="scroll-smooth">
      <head>
        {/* Additional meta tags for Swedish market */}
        <meta name="geo.region" content="SE" />
        <meta name="geo.country" content="Sweden" />
        <meta name="language" content="Swedish" />
        <meta name="target_country" content="SE" />
        
        {/* Preconnect to WordPress API for performance */}
        <link rel="preconnect" href={process.env.NEXT_PUBLIC_WORDPRESS_API_URL} />
        <link rel="dns-prefetch" href={process.env.NEXT_PUBLIC_WORDPRESS_API_URL} />
        
        {/* Structured Data for Swedish IPTV Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Köpa IPTV Sverige",
              "description": "Premium IPTV-tjänst för Sverige med över 50 000 kanaler",
              "url": process.env.NEXT_PUBLIC_SITE_URL,
              "logo": `${process.env.NEXT_PUBLIC_SITE_URL}/loading.png`,
              "sameAs": [
                "https://facebook.com/kopaiptvsverige",
                "https://twitter.com/kopaiptvsverige"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "SE",
                "addressLocality": "Stockholm"
              },
              "areaServed": "SE",
              "serviceType": "IPTV Streaming Service",
              "priceRange": "99-199 SEK",
              "telephone": "+46-8-123-456-78",
              "email": "support@kopaiptv.se"
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}