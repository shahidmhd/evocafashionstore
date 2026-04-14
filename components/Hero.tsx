'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1920&q=80',
    tag: "Men's Signature Collection",
    headline: ['Dressed for', 'Legends'],
    sub: 'Premium sherwanis, kurtas & indo-westerns — crafted for the modern gentleman.',
    cta: { label: "Explore Men's", href: '/collections#mens' },
    accent: 'For him',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1480429370139-e0132c086e2a?auto=format&fit=crop&w=1920&q=80',
    tag: 'Groom Collection',
    headline: ['Your Perfect', 'Wedding Look'],
    sub: 'Royal sherwanis, elegant bandhgalas & complete groom sets — dressed for the most important day.',
    cta: { label: 'Groom Collection', href: '/collections#bridal' },
    accent: 'For the groom',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1920&q=80',
    tag: 'Wedding Coats — Buy & Rental',
    headline: ['Make Your', 'Grand Entry'],
    sub: 'Premium wedding coats, bandhgalas & blazers — available to buy or rent for any special occasion.',
    cta: { label: 'Wedding Coats', href: '/collections#coats' },
    accent: 'Coats & blazers',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=1920&q=80',
    tag: 'Shirts · Pants · T-Shirts · Dhothi · Caps',
    headline: ['Every Day,', 'Every Style'],
    sub: 'Shirts, pants, T-shirts, tracks, shorts, dhothi, innerwears & caps — everything under one roof.',
    cta: { label: 'Explore All', href: '/collections' },
    accent: 'Daily essentials',
  },
]

const INTERVAL = 5500

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [prev, setPrev] = useState<number | null>(null)
  const [direction, setDirection] = useState<1 | -1>(1)
  const [progress, setProgress] = useState(0)
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const autoRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const goTo = useCallback((index: number, dir: 1 | -1 = 1) => {
    setPrev(current)
    setDirection(dir)
    setCurrent(index)
    setProgress(0)
  }, [current])

  const next = useCallback(() => {
    goTo((current + 1) % slides.length, 1)
  }, [current, goTo])

  const prev_ = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length, -1)
  }, [current, goTo])

  // Auto-advance + progress bar
  useEffect(() => {
    setProgress(0)
    let elapsed = 0
    const step = 50
    progressRef.current = setInterval(() => {
      elapsed += step
      setProgress(Math.min((elapsed / INTERVAL) * 100, 100))
    }, step)
    autoRef.current = setTimeout(next, INTERVAL)
    return () => {
      if (progressRef.current) clearInterval(progressRef.current)
      if (autoRef.current) clearTimeout(autoRef.current)
    }
  }, [current, next])

  const slide = slides[current]

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden bg-obsidian-900">
      {/* Slides */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={slide.id}
          custom={direction}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.0, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          {/* Background image with Ken Burns zoom */}
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.08 }}
            animate={{ scale: 1.0 }}
            transition={{ duration: INTERVAL / 1000 + 1, ease: 'linear' }}
          >
            <Image
              src={slide.image}
              alt={slide.tag}
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
          </motion.div>

          {/* Dark gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian-900/90 via-obsidian-900/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian-900/80 via-transparent to-obsidian-900/30" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${slide.id}`}
              initial={{ opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -30 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-2xl"
            >
              {/* Tag */}
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-10 bg-gold" />
                <span className="section-label text-[10px]">{slide.tag}</span>
              </div>

              {/* Headline */}
              <h1
                className="font-display font-light leading-[1.0] mb-6"
                style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
              >
                <span className="block text-5xl md:text-7xl lg:text-8xl text-white">
                  {slide.headline[0]}
                </span>
                <span className="block text-6xl md:text-8xl lg:text-[100px] text-gold-gradient italic">
                  {slide.headline[1]}
                </span>
              </h1>

              {/* Sub */}
              <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-md mb-10 font-light">
                {slide.sub}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <Link href={slide.cta.href} className="btn-gold-filled group">
                  {slide.cta.label}
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/contact" className="btn-gold text-[10px]">
                  Book Appointment
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide counter + nav (right side) */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col items-center gap-6">
        <button
          onClick={prev_}
          className="w-10 h-10 border border-white/20 hover:border-gold flex items-center justify-center text-white/50 hover:text-gold transition-all duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft size={16} />
        </button>

        {/* Dot indicators */}
        <div className="flex flex-col gap-2">
          {slides.map((s, i) => (
            <button
              key={s.id}
              onClick={() => goTo(i, i > current ? 1 : -1)}
              aria-label={`Go to slide ${i + 1}`}
              className={`transition-all duration-400 rounded-full ${
                i === current
                  ? 'w-1.5 h-8 bg-gold'
                  : 'w-1.5 h-2 bg-white/25 hover:bg-gold/50'
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="w-10 h-10 border border-white/20 hover:border-gold flex items-center justify-center text-white/50 hover:text-gold transition-all duration-300"
          aria-label="Next slide"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      {/* Mobile navigation arrows */}
      <div className="absolute bottom-24 right-6 flex gap-2 z-20 lg:hidden">
        <button
          onClick={prev_}
          className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/50 hover:text-gold hover:border-gold transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft size={14} />
        </button>
        <button
          onClick={next}
          className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/50 hover:text-gold hover:border-gold transition-all"
          aria-label="Next slide"
        >
          <ChevronRight size={14} />
        </button>
      </div>

      {/* Slide info + accent (bottom left) */}
      <div className="absolute bottom-10 left-6 lg:left-12 z-20 flex items-center gap-5">
        <AnimatePresence mode="wait">
          <motion.span
            key={`accent-${slide.id}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-[9px] tracking-[0.35em] uppercase text-gold/50"
          >
            {slide.accent}
          </motion.span>
        </AnimatePresence>
        <div className="text-white/20 text-xs tabular-nums">
          {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </div>
      </div>

      {/* Progress bar (bottom) */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/10 z-20">
        <motion.div
          className="h-full bg-gold"
          style={{ width: `${progress}%` }}
          transition={{ duration: 0 }}
        />
      </div>

      {/* Location pills (bottom center) */}
      <div className="absolute bottom-14 left-1/2 -translate-x-1/2 z-20 hidden md:flex gap-3">
        {['Cherpulassery', 'Perinthalmanna', 'Pattambi', 'Koppam'].map((loc) => (
          <span
            key={loc}
            className="px-3 py-1 border border-white/10 text-white/30 text-[9px] tracking-[0.2em] uppercase backdrop-blur-sm"
          >
            {loc}
          </span>
        ))}
      </div>
    </section>
  )
}
