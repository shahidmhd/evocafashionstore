import type { Metadata, Viewport } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a0a0a',
}

export const metadata: Metadata = {
  title: 'Evoca Fashion | Premium Men\'s & Bridal Collection — Kerala',
  description: 'Evoca Fashion offers premium men\'s clothing, bridal collections, wedding rentals, and customized stitching across Cherpulassery, Perinthalmanna, Pattambi, and Koppam. All India delivery available.',
  keywords: [
    'Evoca Fashion',
    'men\'s clothing Kerala',
    'bridal collection Kerala',
    'wedding rentals Kerala',
    'customized stitching',
    'fashion store Cherpulassery',
    'fashion store Perinthalmanna',
    'fashion Pattambi',
    'fashion Koppam',
    'luxury fashion Kerala',
    'boys clothing Kerala',
    'sherwani rental Kerala',
  ],
  authors: [{ name: 'Evoca Fashion' }],
  creator: 'Evoca Fashion',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    title: 'Evoca Fashion | Premium Men\'s & Bridal Collection',
    description: 'Premium men\'s clothing, bridal collections, wedding rentals & customized stitching across Kerala. All India delivery.',
    siteName: 'Evoca Fashion',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Evoca Fashion | Premium Men\'s & Bridal Collection',
    description: 'Premium men\'s clothing, bridal collections, wedding rentals & customized stitching across Kerala.',
  },
  icons: {
    icon: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/assets/favicon.ico`,
    shortcut: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/assets/favicon.ico`,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-obsidian-900 text-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
