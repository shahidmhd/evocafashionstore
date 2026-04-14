import type { Metadata, Viewport } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
const SITE_URL = 'https://shahidmhd.github.io/evocafashionstore'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a0a0a',
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Evoca Fashion | Men\'s Clothing & Wedding Collection — Kerala',
    template: '%s | Evoca Fashion',
  },
  description: 'Evoca Fashion — Kerala\'s premier men\'s clothing store. Shop shirts, pants, T-shirts, wedding sherwanis, groom packages & rental coats. Custom stitching & all India delivery. 4 showrooms in Cherpulassery, Perinthalmanna, Pattambi & Koppam.',
  keywords: [
    'Evoca Fashion',
    'Evoca Fashion Store',
    'Evoca Fashion Cherpulassery',
    'Evoca Fashion Perinthalmanna',
    'evoca fashion Kerala',
    'men\'s clothing Kerala',
    'men\'s fashion store Kerala',
    'wedding dress Kerala',
    'groom collection Kerala',
    'sherwani Kerala',
    'wedding coat rental Kerala',
    'custom stitching Kerala',
    'tailor Kerala',
    'mens wear Cherpulassery',
    'fashion store Palakkad',
    'fashion store Malappuram',
    'wedding rental Perinthalmanna',
    'boys clothing Kerala',
    'dhothi Kerala',
    'formal shirts Kerala',
    'Evoca',
  ],
  authors: [{ name: 'Evoca Fashion' }],
  creator: 'Evoca Fashion',
  publisher: 'Evoca Fashion',
  category: 'Fashion & Clothing',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    title: 'Evoca Fashion | Men\'s Clothing & Wedding Collection — Kerala',
    description: 'Kerala\'s premier men\'s clothing store. Wedding sherwanis, groom packages, custom stitching & rental coats. 4 showrooms across Kerala. All India delivery.',
    siteName: 'Evoca Fashion',
    images: [
      {
        url: `${SITE_URL}/assets/logo.png`,
        width: 1200,
        height: 630,
        alt: 'Evoca Fashion Store — Kerala',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Evoca Fashion | Men\'s Clothing & Wedding Collection — Kerala',
    description: 'Kerala\'s premier men\'s clothing store. Wedding sherwanis, custom stitching & rental coats across 4 locations.',
    images: [`${SITE_URL}/assets/logo.png`],
  },
  icons: {
    icon: `${BASE}/assets/favicon.ico`,
    shortcut: `${BASE}/assets/favicon.ico`,
    apple: `${BASE}/assets/favicon.ico`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ClothingStore',
      '@id': `${SITE_URL}/#organization`,
      name: 'Evoca Fashion',
      alternateName: 'Evoca Fashion Store',
      url: SITE_URL,
      logo: `${SITE_URL}/assets/logo.png`,
      description: "Kerala's premier men's fashion destination for clothing, wedding collections, groom packages, rental coats and custom stitching.",
      telephone: '+919876543210',
      email: 'hello@evocafashion.com',
      priceRange: '₹₹',
      servesCuisine: undefined,
      currenciesAccepted: 'INR',
      paymentAccepted: 'Cash, UPI, Card',
      areaServed: 'India',
      hasMap: 'https://maps.google.com',
      sameAs: [],
      address: [
        {
          '@type': 'PostalAddress',
          streetAddress: 'Main Rd, Near Town Bus Stand',
          addressLocality: 'Cherpulassery',
          addressRegion: 'Palakkad, Kerala',
          addressCountry: 'IN',
        },
        {
          '@type': 'PostalAddress',
          streetAddress: 'Market Rd',
          addressLocality: 'Perinthalmanna',
          addressRegion: 'Malappuram, Kerala',
          addressCountry: 'IN',
        },
        {
          '@type': 'PostalAddress',
          streetAddress: 'NH 966',
          addressLocality: 'Pattambi',
          addressRegion: 'Palakkad, Kerala',
          addressCountry: 'IN',
        },
        {
          '@type': 'PostalAddress',
          streetAddress: 'Koppam Town Centre',
          addressLocality: 'Koppam',
          addressRegion: 'Palakkad, Kerala',
          addressCountry: 'IN',
        },
      ],
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '09:00',
        closes: '21:00',
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Evoca Fashion',
      publisher: { '@id': `${SITE_URL}/#organization` },
      potentialAction: {
        '@type': 'SearchAction',
        target: `${SITE_URL}/services`,
        'query-input': 'required name=search_term_string',
      },
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to Google Fonts to avoid render blocking */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400&family=Playfair+Display:wght@400;500;700&family=Inter:wght@300;400;500;600&family=Montserrat:wght@700;900&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-obsidian-900 text-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
