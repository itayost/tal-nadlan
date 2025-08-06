import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'טל אזולאי - יועץ ומשווק נדל״ן | רמת גן, גבעתיים, תל אביב',
  description: 'טל אזולאי, שחקן עבר במכבי חיפה כדורסל, יועץ ומשווק נדל״ן עם מעל 10 שנות ניסיון. מתמחה בקנייה, מכירה והשכרת נדל״ן ברמת גן, גבעתיים ותל אביב. ייעוץ חינם: 0543-999490',
  keywords: 'טל אזולאי, נדל״ן, מתווך, יועץ נדל״ן, רמת גן, גבעתיים, תל אביב, דירות למכירה, דירות להשכרה, נכסים, השקעות נדל״ן, מכבי חיפה, כדורסל',
  authors: [{ name: 'טל אזולאי' }],
  openGraph: {
    title: 'טל אזולאי - יועץ ומשווק נדל״ן',
    description: 'מהמגרש לעולם הנדל״ן 🏡🏀 מעל 10 שנות ניסיון בליווי מקצועי ואישי. התמדה, עבודת צוות ורצון לנצח בכל עסקה.',
    type: 'website',
    locale: 'he_IL',
    siteName: 'טל אזולאי נדל״ן',
    images: [
      {
        url: '/images/profile.jpg', // התמונה האמיתית של טל
        width: 1200,
        height: 630,
        alt: 'טל אזולאי - יועץ ומשווק נדל״ן',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'טל אזולאי - יועץ ומשווק נדל״ן',
    description: 'מהמגרש לעולם הנדל״ן. מעל 10 שנות ניסיון ברמת גן, גבעתיים ותל אביב',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#2563eb',
  verification: {
    google: '', // הוסף את קוד האימות של Google Search Console
  },
  alternates: {
    canonical: 'https://tal-azulai.co.il', // עדכן לדומיין האמיתי
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl">
      <head>
        {/* Google Fonts for Hebrew */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              "name": "טל אזולאי",
              "description": "יועץ ומשווק נדל״ן עם מעל 10 שנות ניסיון",
              "telephone": "+972-54-399-9490",
              "email": "tal@azulairealestate.co.il",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "רמת גן",
                "addressRegion": "תל אביב",
                "addressCountry": "IL"
              },
              "areaServed": ["רמת גן", "גבעתיים", "תל אביב"],
              "priceRange": "$$",
              "openingHours": "Mo-Th 09:00-18:00, Fr 09:00-14:00",
            })
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}