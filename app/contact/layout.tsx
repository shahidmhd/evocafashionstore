import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Evoca Fashion. Visit our showrooms in Cherpulassery, Perinthalmanna, Pattambi or Koppam. Book an appointment, enquire about custom stitching or wedding rentals. All India delivery available.',
  keywords: [
    'contact Evoca Fashion',
    'Evoca Fashion phone number',
    'Evoca Fashion address',
    'fashion store Cherpulassery address',
    'fashion store Perinthalmanna address',
    'book appointment Kerala fashion',
    'Evoca Fashion WhatsApp',
  ],
  openGraph: {
    title: 'Contact Evoca Fashion | 4 Showrooms Across Kerala',
    description: 'Reach Evoca Fashion at our 4 showrooms in Cherpulassery, Perinthalmanna, Pattambi & Koppam. Book an appointment or enquire via WhatsApp.',
  },
  alternates: {
    canonical: 'https://shahidmhd.github.io/evocafashionstore/contact',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
