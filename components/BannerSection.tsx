'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const banners = [
  {
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1920&q=80',
    eyebrow: 'New Season 2025',
    heading: 'Groom',
    subheading: 'Collection',
    body: "Look your absolute best on your wedding day. Royal sherwanis, bandhgalas & groom sets crafted with intricate embroidery and the finest fabrics.",
    cta: { label: 'Shop Groom Wear', href: '/collections#bridal' },
    align: 'right' as const,
  },
  {
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1920&q=80',
    eyebrow: 'Limited Edition',
    heading: 'Wedding',
    subheading: 'Rentals',
    body: 'Experience the finest sherwanis, indo-westerns & bridal wear — available for rent. Luxury for every budget.',
    cta: { label: 'Explore Rentals', href: '/collections#rentals' },
    align: 'left' as const,
  },
]

function ParallaxBanner({ banner, index }: { banner: typeof banners[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  const isRight = banner.align === 'right'

  return (
    <div ref={ref} className="relative h-[70vh] min-h-[500px] overflow-hidden group">
      {/* Parallax background */}
      <motion.div style={{ y }} className="absolute inset-0 scale-110">
        <Image
          src={banner.image}
          alt={`${banner.heading} ${banner.subheading}`}
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>

      {/* Overlays */}
      <div
        className={`absolute inset-0 ${
          isRight
            ? 'bg-gradient-to-l from-obsidian-900/95 via-obsidian-900/60 to-transparent'
            : 'bg-gradient-to-r from-obsidian-900/95 via-obsidian-900/60 to-transparent'
        }`}
      />
      <div className="absolute inset-0 bg-obsidian-900/20" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <motion.div
            initial={{ opacity: 0, x: isRight ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className={`max-w-lg ${isRight ? 'ml-auto' : ''}`}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-gold" />
              <span className="section-label text-[10px]">{banner.eyebrow}</span>
            </div>

            <h2
              className="font-display font-light leading-none mb-2"
              style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
            >
              <span className="block text-4xl md:text-6xl text-white">{banner.heading}</span>
              <span className="block text-5xl md:text-7xl text-gold-gradient italic">{banner.subheading}</span>
            </h2>

            <div className="divider-gold max-w-[80px] my-6" />

            <p className="text-white/55 text-sm leading-relaxed mb-8 max-w-sm">
              {banner.body}
            </p>

            <Link href={banner.cta.href} className="btn-gold-filled group/btn">
              {banner.cta.label}
              <ArrowRight size={13} className="group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Side index */}
      <div className={`absolute top-1/2 -translate-y-1/2 ${isRight ? 'left-8' : 'right-8'} hidden lg:block`}>
        <span
          className="text-[120px] font-display font-light text-white/[0.04] leading-none select-none"
          style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
        >
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
    </div>
  )
}

export default function BannerSection() {
  return (
    <section className="overflow-hidden" id="banner">
      {banners.map((banner, i) => (
        <ParallaxBanner key={banner.heading} banner={banner} index={i} />
      ))}
    </section>
  )
}
