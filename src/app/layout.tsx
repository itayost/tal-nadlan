import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'משרד תיווך מוביל ברמת גן | טל אזולאי נדל״ן',
  description: 'משרד תיווך מוביל ברמת גן בניהול טל אזולאי. מעל 10 שנות ניסיון בקנייה, מכירה והשכרת נדל״ן ברמת גן, גבעתיים ותל אביב. בעל תואר במנהל עסקים ושחקן עבר במכבי חיפה. ייעוץ חינם: 054-3999490',
  keywords: 'משרד תיווך רמת גן, טל אזולאי, נדל״ן רמת גן, מתווך רמת גן, יועץ נדל״ן, גבעתיים, תל אביב, דירות למכירה רמת גן, דירות להשכרה, נכסים, השקעות נדל״ן, תיווך מקצועי, משרד תיווך מוביל',
  authors: [{ name: 'טל אזולאי - משרד תיווך מוביל ברמת גן' }],
  creator: 'טל אזולאי',
  publisher: 'משרד תיווך טל אזולאי',
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    title: 'משרד תיווך מוביל ברמת גן | טל אזולאי נדל״ן',
    description: 'משרד תיווך מוביל עם מעל 10 שנות ניסיון. בניהול טל אזולאי - בעל תואר במנהל עסקים ושחקן עבר במכבי חיפה. מתמחים בנדל״ן ברמת גן, גבעתיים ות״א 🏡🏀',
    type: 'website',
    locale: 'he_IL',
    siteName: 'משרד תיווך טל אזולאי',
    url: 'https://www.tanadlan.com',
    countryName: 'ישראל',
    images: [
      {
        url: '/images/og-image.jpg', // תמונת OG ראשית
        width: 1200,
        height: 630,
        alt: 'משרד תיווך טל אזולאי - מוביל ברמת גן',
        type: 'image/jpeg',
      },
      {
        url: '/images/profile.jpg', // תמונה משנית
        width: 800,
        height: 800,
        alt: 'טל אזולאי - מנהל ובעלים',
        type: 'image/jpeg',
      }
    ],
    emails: ['talazulay88@gmail.com'],
    phoneNumbers: ['+972-54-399-9490'],
    faxNumbers: [],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@talazulai_nadlan', // עדכן אם יש חשבון טוויטר
    creator: '@talazulai_nadlan',
    title: 'משרד תיווך מוביל ברמת גן | טל אזולאי',
    description: 'משרד תיווך מוביל עם מעל 10 שנות ניסיון בנדל״ן. מתמחים ברמת גן, גבעתיים ותל אביב',
    images: ['/images/og-image.jpg'],
  },
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  themeColor: '#2563eb',
  manifest: '/manifest.json', // אם יש PWA manifest
  verification: {
    google: '', // הוסף את קוד האימות של Google Search Console
  },
  alternates: {
    canonical: 'https://www.tanadlan.com',
    languages: {
      'he-IL': 'https://www.tanadlan.com',
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' },
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  category: 'נדל״ן',
  classification: 'Business',
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
        
        {/* Additional Meta Tags */}
        <meta name="format-detection" content="telephone=yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="mobile-web-app-capable" content="yes" />
        
        {/* Geo Tags for Local SEO */}
        <meta name="geo.region" content="IL" />
        <meta name="geo.placename" content="רמת גן" />
        <meta name="geo.position" content="32.0853;34.8136" />
        <meta name="ICBM" content="32.0853, 34.8136" />
        
        {/* Enhanced Structured Data for Real Estate Office */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              "name": "משרד תיווך טל אזולאי",
              "alternateName": "טל אזולאי נדל״ן",
              "description": "משרד תיווך מוביל ברמת גן עם מעל 10 שנות ניסיון בקנייה, מכירה והשכרת נדל״ן",
              "url": "https://www.tanadlan.com",
              "logo": "/images/logo.png",
              "image": "/images/profile.jpg",
              "telephone": "+972-54-399-9490",
              "email": "talazulay88@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "רמת גן",
                "addressLocality": "רמת גן",
                "addressRegion": "מחוז תל אביב",
                "postalCode": "",
                "addressCountry": "IL"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 32.0853,
                "longitude": 34.8136
              },
              "areaServed": [
                {
                  "@type": "City",
                  "name": "רמת גן"
                },
                {
                  "@type": "City",
                  "name": "גבעתיים"
                },
                {
                  "@type": "City",
                  "name": "תל אביב"
                }
              ],
              "priceRange": "$$",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
                  "opens": "09:00",
                  "closes": "18:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Friday",
                  "opens": "09:00",
                  "closes": "14:00"
                }
              ],
              "founder": {
                "@type": "Person",
                "name": "טל אזולאי",
                "jobTitle": "מנהל ובעלים",
                "description": "בעל תואר ראשון במנהל עסקים, בוגר תיכון בית הספר הריאלי העברי בחיפה, שחקן עבר במכבי חיפה כדורסל",
                "alumniOf": [
                  {
                    "@type": "EducationalOrganization",
                    "name": "בית הספר הריאלי העברי בחיפה"
                  }
                ],
                "knowsAbout": ["נדל״ן", "מנהל עסקים", "כדורסל"]
              },
              "knowsAbout": ["נדל״ן", "תיווך", "השקעות", "דירות למכירה", "דירות להשכרה"],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "שירותי תיווך",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "קנייה ומכירה של נכסים"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "השכרת דירות ובתים"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "ייעוץ להשקעות נדל״ן"
                    }
                  }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5",
                "reviewCount": "100",
                "bestRating": "5",
                "worstRating": "1"
              },
              "sameAs": [
                "https://www.facebook.com/t.a.nadlan",
                "https://www.instagram.com/t.a.real.estate",
                "https://wa.me/c/972543999490"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+972-54-399-9490",
                "contactType": "sales",
                "availableLanguage": ["Hebrew", "English"],
                "areaServed": "IL"
              },
              "slogan": "כי אצלנו, תיווך הוא רק חלק קטן מהשירות",
              "license": "31927984"
            })
          }}
        />
        
        {/* Breadcrumb Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "דף הבית",
                  "item": "https://www.tanadlan.com"
                }
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}