'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Truck } from 'lucide-react'
import ScrollReveal from './ScrollReveal'
import Link from 'next/link'

const locations = [
  {
    city: 'Cherpulassery',
    district: 'Palakkad',
    phone: '+91 98765 43210',
  },
  {
    city: 'Perinthalmanna',
    district: 'Malappuram',
    phone: '+91 98765 43211',
  },
  {
    city: 'Pattambi',
    district: 'Palakkad',
    phone: '+91 98765 43212',
  },
  {
    city: 'Koppam',
    district: 'Palakkad',
    phone: '+91 98765 43213',
  },
]

export default function LocationsBanner() {
  return (
    <section className="py-28 px-6 bg-obsidian-800" id="locations">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <ScrollReveal>
            <span className="section-label">Find Us</span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2
              className="text-5xl md:text-6xl font-display font-light text-white mt-4 mb-4"
              style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
            >
              Our <span className="text-gold-gradient italic">Locations</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="inline-flex items-center gap-3 mt-4 px-6 py-3 border border-gold/30 bg-gold/5">
              <Truck size={14} className="text-gold" />
              <span className="text-gold text-xs tracking-[0.2em] uppercase">All India Delivery Available</span>
            </div>
          </ScrollReveal>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.city}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group border border-white/6 hover:border-gold/30 bg-gradient-to-b from-white/[0.02] to-transparent p-8 transition-all duration-400"
            >
              <div className="w-10 h-10 border border-gold/30 flex items-center justify-center mb-5 group-hover:border-gold transition-colors duration-300">
                <MapPin size={16} className="text-gold" />
              </div>
              <h3
                className="text-xl font-display font-light text-white mb-1 group-hover:text-gold transition-colors duration-300"
                style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
              >
                {loc.city}
              </h3>
              <p className="text-white/40 text-xs tracking-widest uppercase mb-5">{loc.district}</p>
              <div className="divider-gold opacity-20 mb-5 group-hover:opacity-50 transition-opacity duration-300" />
              <div className="flex items-center gap-2 text-white/50 text-xs">
                <Phone size={10} className="text-gold/60" />
                <span>{loc.phone}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <ScrollReveal delay={0.2}>
          <div className="text-center mt-14">
            <p className="text-white/40 text-sm mb-6">
              Can&apos;t visit? We deliver anywhere in India.
            </p>
            <Link href="/contact" className="btn-gold-filled">
              Get in Touch
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
