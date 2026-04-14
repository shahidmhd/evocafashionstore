'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: '4', suffix: '+', label: 'Store Locations' },
  { value: '10', suffix: 'K+', label: 'Happy Customers' },
  { value: '500', suffix: '+', label: 'Bridal Outfits' },
  { value: '15', suffix: '+', label: 'Years of Excellence' },
]

function StatItem({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="text-center px-8 py-10 border-r border-white/5 last:border-r-0"
    >
      <div className="flex items-end justify-center gap-0.5 mb-2">
        <span
          className="text-5xl md:text-6xl font-display font-light text-gold-gradient leading-none"
          style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
        >
          {stat.value}
        </span>
        <span className="text-3xl text-gold/70 font-light pb-1">{stat.suffix}</span>
      </div>
      <p className="text-white/40 text-xs tracking-[0.2em] uppercase">{stat.label}</p>
    </motion.div>
  )
}

export default function StatsBar() {
  return (
    <section className="border-y border-white/5 bg-gradient-to-r from-obsidian-900 via-[#111008] to-obsidian-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
