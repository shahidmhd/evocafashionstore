import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Evoca Fashion — Kerala\'s trusted men\'s clothing store since 2013. 4 showrooms in Cherpulassery, Perinthalmanna, Pattambi & Koppam. Over 50,000 happy customers.',
  keywords: [
    'about Evoca Fashion',
    'Evoca Fashion history',
    'Evoca Fashion Kerala',
    'men\'s fashion store Kerala',
    'clothing store Cherpulassery',
    'clothing store Perinthalmanna',
    'Evoca Fashion locations',
  ],
  openGraph: {
    title: 'About Evoca Fashion | Men\'s Fashion Store — Kerala',
    description: 'Kerala\'s trusted men\'s clothing store since 2013. 50,000+ happy customers across 4 showrooms in Palakkad and Malappuram.',
  },
  alternates: {
    canonical: 'https://shahidmhd.github.io/evocafashionstore/about',
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
