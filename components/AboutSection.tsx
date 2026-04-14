'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import ScrollReveal from './ScrollReveal'
import { Scissors, Award, Truck, Heart } from 'lucide-react'

const values = [
  { icon: Scissors, title: 'Masterful Craft', description: 'Each piece is tailored with precision — from bespoke stitching to curated collections.' },
  { icon: Award, title: 'Premium Quality', description: 'Only the finest fabrics and materials make it into the Evoca collection.' },
  { icon: Heart, title: 'Personal Touch', description: 'We understand every occasion is unique. Your vision, our craftsmanship.' },
  { icon: Truck, title: 'All India Delivery', description: 'From our 4 Kerala stores to your doorstep, anywhere in India.' },
]

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%'])

  return (
    <section ref={ref} className="py-28 px-6 bg-obsidian-900 overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — image with parallax */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative h-[500px] md:h-[600px] overflow-hidden">
              <motion.div style={{ y: imageY }} className="absolute inset-0 scale-110">
                <Image
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80"
                  alt="Evoca Fashion store"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </motion.div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-obsidian-900/60 via-transparent to-transparent" />
            </div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-6 -right-4 md:right-8 bg-obsidian-900 border border-gold/30 p-5 shadow-gold"
            >
              <div
                className="text-4xl font-display font-light text-gold-gradient leading-none"
                style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
              >
                15+
              </div>
              <div className="text-white/50 text-[10px] tracking-[0.2em] uppercase mt-1">Years of Excellence</div>
            </motion.div>

            {/* Gold border accent */}
            <div className="absolute -top-3 -left-3 w-24 h-24 border-t-2 border-l-2 border-gold/40" />
            <div className="absolute -bottom-3 -right-3 w-24 h-24 border-b-2 border-r-2 border-gold/40 md:right-5" />
          </motion.div>

          {/* Right — Text */}
          <div className="order-1 lg:order-2">
            <ScrollReveal direction="left">
              <span className="section-label">Our Story</span>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={0.1}>
              <h2
                className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-white mt-5 mb-8 leading-[1.1]"
                style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
              >
                Where Tradition Meets{' '}
                <span className="text-gold-gradient italic">Modern Luxury</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={0.2}>
              <p className="text-white/50 text-sm leading-relaxed mb-5">
                Born in the heartland of Kerala, Evoca Fashion has been redefining the sartorial landscape for men, women, and children across the Malabar region. Our journey began with a single vision: to bring world-class fashion to Kerala&apos;s doorstep.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={0.3}>
              <p className="text-white/50 text-sm leading-relaxed mb-8">
                Today, with four thriving stores in Cherpulassery, Perinthalmanna, Pattambi, and Koppam — and delivery across India — we serve thousands of happy customers who trust Evoca for life&apos;s most important moments.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={0.4}>
              <div className="divider-gold max-w-[80px] mb-8" />
            </ScrollReveal>
            <ScrollReveal direction="left" delay={0.45}>
              <p className="text-gold/70 font-display italic text-lg mb-10" style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}>
                &ldquo;Every thread tells a story. Let yours be unforgettable.&rdquo;
              </p>
            </ScrollReveal>

            {/* Values mini grid */}
            <div className="grid grid-cols-2 gap-3">
              {values.map((val, i) => (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.08 }}
                  className="border border-white/6 hover:border-gold/25 p-4 transition-all duration-400 group"
                >
                  <val.icon size={14} className="text-gold mb-2.5" />
                  <h4 className="text-white text-sm font-medium mb-1 group-hover:text-gold transition-colors duration-300">
                    {val.title}
                  </h4>
                  <p className="text-white/35 text-xs leading-relaxed">{val.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
