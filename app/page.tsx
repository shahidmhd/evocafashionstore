import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import Collections from '@/components/Collections'
import StatsBar from '@/components/StatsBar'
import ProductGrid from '@/components/ProductGrid'
import BannerSection from '@/components/BannerSection'
import AboutSection from '@/components/AboutSection'
import Testimonials from '@/components/Testimonials'
import LocationsBanner from '@/components/LocationsBanner'

export const metadata: Metadata = {
  title: 'Evoca Fashion | Premium Men\'s & Bridal Collection — Kerala',
  description: 'Discover premium men\'s clothing, bridal collections, wedding rentals & bespoke stitching at Evoca Fashion. Stores in Cherpulassery, Perinthalmanna, Pattambi, Koppam. All India delivery.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <Collections />
      <BannerSection />
      <ProductGrid />
      <AboutSection />
      <Testimonials />
      <LocationsBanner />
    </>
  )
}
