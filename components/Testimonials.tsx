'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const testimonials = [
  {
    name: 'Rahul Menon',
    location: 'Cherpulassery',
    role: 'Groom',
    text: 'The sherwani I rented from Evoca Fashion was absolutely stunning. The quality was exceptional and the fit was perfect. Got so many compliments at my wedding. Highly recommend their rental service!',
    stars: 5,
    initials: 'RM',
  },
  {
    name: 'Priya Krishnan',
    location: 'Perinthalmanna',
    role: 'Customer',
    text: 'My husband\'s groom sherwani from Evoca was absolutely breathtaking. The team was so helpful and the quality is genuinely luxurious. It was delivered pan-India and arrived in perfect condition!',
    stars: 5,
    initials: 'PK',
  },
  {
    name: 'Arun Nair',
    location: 'Pattambi',
    role: 'Customer',
    text: 'The custom stitching service is outstanding. They captured exactly what I wanted and the turnaround time was impressive. The quality of fabric and craftsmanship is top-notch.',
    stars: 5,
    initials: 'AN',
  },
  {
    name: 'Sana Fathima',
    location: 'Koppam',
    role: 'Customer',
    text: "Ordered boys' festive wear for my son's first Onam. The outfit was beautiful, perfectly stitched, and the packaging was premium. Will definitely order again from Evoca!",
    stars: 5,
    initials: 'SF',
  },
  {
    name: 'Vishnu Raj',
    location: 'Thrissur',
    role: 'Groom',
    text: 'Opted for wedding rental as I wanted to try different looks without the investment. Evoca delivered two premium sherwanis on time, in perfect condition. Incredible value for money.',
    stars: 5,
    initials: 'VR',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState<'left' | 'right'>('right')

  const next = useCallback(() => {
    setDirection('right')
    setCurrent((c) => (c + 1) % testimonials.length)
  }, [])

  const prev = useCallback(() => {
    setDirection('left')
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  const variants = {
    enter: (dir: 'left' | 'right') => ({
      opacity: 0,
      x: dir === 'right' ? 60 : -60,
    }),
    center: { opacity: 1, x: 0 },
    exit: (dir: 'left' | 'right') => ({
      opacity: 0,
      x: dir === 'right' ? -60 : 60,
    }),
  }

  const t = testimonials[current]

  return (
    <section className="py-28 px-6 bg-obsidian-900 overflow-hidden" id="testimonials">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <ScrollReveal>
            <span className="section-label">Client Stories</span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2
              className="text-5xl md:text-7xl font-display font-light text-white mt-4"
              style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
            >
              What They{' '}
              <span className="text-gold-gradient italic">Say</span>
            </h2>
          </ScrollReveal>
        </div>

        {/* Testimonial Card */}
        <div className="relative">
          {/* Background decoration */}
          <div
            className="absolute -top-10 left-1/2 -translate-x-1/2 text-[200px] font-display text-gold/[0.04] leading-none select-none pointer-events-none"
            style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
          >
            "
          </div>

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10"
            >
              <div className="border border-white/8 bg-gradient-to-br from-white/[0.03] to-transparent p-10 md:p-16 text-center">
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-8">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} size={14} className="fill-gold text-gold" />
                  ))}
                </div>

                {/* Quote */}
                <p
                  className="text-white/80 text-lg md:text-xl font-display font-light leading-relaxed italic mb-10 max-w-3xl mx-auto"
                  style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
                >
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Divider */}
                <div className="divider-gold max-w-[80px] mx-auto mb-8" />

                {/* Author */}
                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-12 rounded-full border border-gold/40 flex items-center justify-center bg-gold/10">
                    <span className="text-gold text-sm font-medium">{t.initials}</span>
                  </div>
                  <div className="text-left">
                    <p className="text-white font-medium text-sm">{t.name}</p>
                    <p className="text-gold/60 text-xs tracking-wider">
                      {t.role} · {t.location}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              onClick={prev}
              className="w-10 h-10 border border-gold/30 flex items-center justify-center text-gold/60 hover:text-gold hover:border-gold transition-all duration-300"
              aria-label="Previous"
            >
              <ChevronLeft size={16} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 'right' : 'left')
                    setCurrent(i)
                  }}
                  className={`transition-all duration-300 ${
                    i === current
                      ? 'w-8 h-0.5 bg-gold'
                      : 'w-2 h-0.5 bg-white/20 hover:bg-gold/40'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 border border-gold/30 flex items-center justify-center text-gold/60 hover:text-gold hover:border-gold transition-all duration-300"
              aria-label="Next"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
