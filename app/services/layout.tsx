import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Evoca Fashion services — custom stitching, wedding coat rental, groom packages, bulk orders, all India delivery & alterations. Visit any of our 4 Kerala showrooms.',
  keywords: [
    'custom stitching Kerala',
    'wedding coat rental Kerala',
    'sherwani rental Kerala',
    'groom package Kerala',
    'tailor Cherpulassery',
    'tailor Perinthalmanna',
    'men\'s alteration Kerala',
    'bulk clothing order Kerala',
    'all India delivery fashion',
    'Evoca Fashion services',
    'bespoke stitching Kerala',
  ],
  openGraph: {
    title: 'Services | Evoca Fashion — Custom Stitching & Wedding Rentals Kerala',
    description: 'Custom stitching, wedding coat rental, groom packages & all India delivery. Kerala\'s best men\'s fashion services at Evoca Fashion.',
  },
  alternates: {
    canonical: 'https://shahidmhd.github.io/evocafashionstore/services',
  },
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
