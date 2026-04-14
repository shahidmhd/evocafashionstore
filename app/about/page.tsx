'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { MapPin, Users, Award, Truck, Scissors, Star, ArrowRight, CheckCircle } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

function AnimSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      variants={stagger}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const stats = [
  { icon: Award, value: '10+', label: 'Years of Excellence' },
  { icon: Users, value: '50,000+', label: 'Happy Customers' },
  { icon: MapPin, value: '4', label: 'Showrooms in Kerala' },
  { icon: Truck, value: 'Pan India', label: 'Delivery Available' },
]

const values = [
  {
    title: 'Craftsmanship',
    desc: 'Every garment is crafted with meticulous attention to detail, using premium fabrics sourced from the finest mills.',
    icon: Scissors,
  },
  {
    title: 'Heritage',
    desc: 'Rooted in Kerala\'s rich textile tradition, we blend timeless elegance with contemporary fashion sensibilities.',
    icon: Star,
  },
  {
    title: 'Trust',
    desc: 'Over a decade of serving families across Kerala has built a reputation for quality, honesty, and exceptional service.',
    icon: CheckCircle,
  },
]

const milestones = [
  { year: '2013', event: 'Evoca Fashion opened its first showroom in Cherpulassery, Palakkad.' },
  { year: '2016', event: 'Expanded to Perinthalmanna, Malappuram with a dedicated bridal & groom wing.' },
  { year: '2019', event: 'Launched the Pattambi store, introducing the signature Wedding Rental service.' },
  { year: '2022', event: 'Opened the Koppam showroom and introduced All India Delivery.' },
  { year: '2024', event: 'Celebrated 50,000+ satisfied customers with an expanded bespoke stitching unit.' },
]

const locations = [
  { city: 'Cherpulassery', district: 'Palakkad', address: 'Main Rd, Near Town Bus Stand, Cherpulassery', phone: '+91 98765 43210' },
  { city: 'Perinthalmanna', district: 'Malappuram', address: 'Market Rd, Perinthalmanna', phone: '+91 98765 43211' },
  { city: 'Pattambi', district: 'Palakkad', address: 'NH 966, Pattambi', phone: '+91 98765 43212' },
  { city: 'Koppam', district: 'Palakkad', address: 'Koppam Town Centre, Palakkad', phone: '+91 98765 43213' },
]

export default function AboutPage() {
  return (
    <div className="bg-obsidian-900 min-h-screen">
      {/* ── Hero ── */}
      <section className="relative h-[60vh] min-h-[420px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1600&q=80"
            alt="Evoca Fashion store interior"
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian-900 via-obsidian-900/60 to-obsidian-900/20" />
        </div>
        {/* gold top accent */}
        <div className="absolute top-0 inset-x-0 h-0.5 bg-gold-gradient" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pb-16 pt-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <p className="text-[10px] tracking-[0.4em] uppercase text-gold mb-4">Our Story</p>
            <h1 className="font-display text-5xl md:text-7xl font-light text-white mb-4 leading-none">
              About <span className="text-gold-gradient">Evoca</span>
            </h1>
            <p className="text-white/50 text-base max-w-xl">
              Kerala&apos;s premier destination for men&apos;s fashion — where tradition meets contemporary style.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section className="border-y border-white/5 bg-obsidian-800/40">
        <AnimSection className="max-w-7xl mx-auto px-6 lg:px-12 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(({ icon: Icon, value, label }) => (
            <motion.div key={label} variants={fadeUp} className="flex flex-col items-center text-center gap-2">
              <Icon size={18} className="text-gold/70 mb-1" />
              <span className="font-display text-3xl text-white font-light">{value}</span>
              <span className="text-[10px] tracking-[0.25em] uppercase text-white/40">{label}</span>
            </motion.div>
          ))}
        </AnimSection>
      </section>

      {/* ── Story ── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimSection>
            <motion.p variants={fadeUp} className="text-[10px] tracking-[0.35em] uppercase text-gold mb-4">Who We Are</motion.p>
            <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl text-white font-light leading-tight mb-6">
              Crafting Elegance<br />
              <span className="text-gold-gradient">Since 2013</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/50 text-sm leading-relaxed mb-4">
              Evoca Fashion was born from a simple belief — every man deserves to look his finest, whether it&apos;s a weekday morning or the most important day of his life. Starting with a single showroom in Cherpulassery, we have grown into one of Kerala&apos;s most trusted names in men&apos;s fashion.
            </motion.p>
            <motion.p variants={fadeUp} className="text-white/50 text-sm leading-relaxed mb-8">
              From premium shirts and daily wear to bespoke wedding sherwanis and rental coats, we bring together curated style, exceptional fabric quality, and personalized service under one roof — across four locations in Palakkad and Malappuram.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link href="/collections" className="btn-gold inline-flex items-center gap-2">
                Explore Collections <ArrowRight size={13} />
              </Link>
            </motion.div>
          </AnimSection>

          <AnimSection className="relative">
            <motion.div variants={fadeUp} className="relative rounded-sm overflow-hidden aspect-[4/5]">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
                alt="Premium men's fashion"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian-900/60 to-transparent" />
              {/* Gold corner accent */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-gold/50" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-gold/50" />
            </motion.div>
            {/* Floating badge */}
            <motion.div
              variants={fadeUp}
              className="absolute -bottom-5 -left-5 bg-obsidian-800 border border-gold/20 p-5"
            >
              <p className="font-display text-2xl text-gold">10+</p>
              <p className="text-[9px] tracking-widest uppercase text-white/40">Years of Trust</p>
            </motion.div>
          </AnimSection>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="border-y border-white/5 bg-obsidian-800/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
          <AnimSection>
            <motion.p variants={fadeUp} className="text-[10px] tracking-[0.35em] uppercase text-gold mb-3 text-center">What Drives Us</motion.p>
            <motion.h2 variants={fadeUp} className="font-display text-4xl text-white font-light text-center mb-14">
              Our Core Values
            </motion.h2>
          </AnimSection>
          <AnimSection className="grid md:grid-cols-3 gap-8">
            {values.map(({ title, desc, icon: Icon }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="border border-white/8 bg-obsidian-800/40 p-8 hover:border-gold/30 transition-colors duration-300 group"
              >
                <div className="w-10 h-10 border border-gold/30 flex items-center justify-center mb-5 group-hover:border-gold/60 transition-colors">
                  <Icon size={16} className="text-gold" />
                </div>
                <h3 className="font-display text-xl text-white mb-3">{title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </AnimSection>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <AnimSection>
          <motion.p variants={fadeUp} className="text-[10px] tracking-[0.35em] uppercase text-gold mb-3">Our Journey</motion.p>
          <motion.h2 variants={fadeUp} className="font-display text-4xl text-white font-light mb-14">
            Milestones
          </motion.h2>
        </AnimSection>
        <AnimSection className="relative">
          {/* Vertical line */}
          <div className="absolute left-[7px] md:left-1/2 top-0 bottom-0 w-px bg-gold/15 -translate-x-px" />
          <div className="space-y-10">
            {milestones.map(({ year, event }, i) => (
              <motion.div
                key={year}
                variants={fadeUp}
                className={`relative flex gap-8 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Content */}
                <div className={`md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} pl-8 md:pl-0`}>
                  <span className="text-[10px] tracking-[0.3em] uppercase text-gold">{year}</span>
                  <p className="text-white/60 text-sm mt-1 leading-relaxed">{event}</p>
                </div>
                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 top-1 w-3.5 h-3.5 rounded-full bg-obsidian-900 border-2 border-gold/60 -translate-x-[3px] md:-translate-x-1/2 md:translate-x-[-7px]" />
                {/* Spacer for right side */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </AnimSection>
      </section>

      {/* ── Locations ── */}
      <section id="locations" className="border-t border-white/5 bg-obsidian-800/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
          <AnimSection>
            <motion.p variants={fadeUp} className="text-[10px] tracking-[0.35em] uppercase text-gold mb-3 text-center">Find Us</motion.p>
            <motion.h2 variants={fadeUp} className="font-display text-4xl text-white font-light text-center mb-12">
              Our Showrooms
            </motion.h2>
          </AnimSection>
          <AnimSection className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {locations.map(({ city, district, address, phone }) => (
              <motion.div
                key={city}
                variants={fadeUp}
                className="border border-white/8 bg-obsidian-800/40 p-6 hover:border-gold/30 transition-colors duration-300 group"
              >
                <div className="flex items-center gap-2 mb-4">
                  <MapPin size={13} className="text-gold shrink-0" />
                  <span className="text-[9px] tracking-widest uppercase text-gold/70">{district}</span>
                </div>
                <h3 className="font-display text-xl text-white mb-2">{city}</h3>
                <p className="text-white/40 text-xs leading-relaxed mb-4">{address}</p>
                <a
                  href={`tel:${phone.replace(/\s/g, '')}`}
                  className="text-xs text-gold/60 hover:text-gold transition-colors"
                >
                  {phone}
                </a>
              </motion.div>
            ))}
          </AnimSection>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600&q=80"
            alt="Visit Evoca Fashion"
            fill
            className="object-cover opacity-20"
            unoptimized
          />
          <div className="absolute inset-0 bg-obsidian-900/80" />
        </div>
        <div className="h-0.5 bg-gold-gradient" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 py-24 text-center">
          <AnimSection>
            <motion.p variants={fadeUp} className="text-[10px] tracking-[0.4em] uppercase text-gold mb-4">Visit Us Today</motion.p>
            <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl text-white font-light mb-6">
              Experience Evoca<br />
              <span className="text-gold-gradient">In Person</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/45 text-sm mb-10 max-w-lg mx-auto">
              Walk into any of our four showrooms and let our style experts guide you to your perfect look. Custom stitching, wedding rentals, and exclusive collections await.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-gold inline-flex items-center gap-2">
                Book Appointment <ArrowRight size={13} />
              </Link>
              <Link href="/collections" className="btn-gold inline-flex items-center gap-2 opacity-70 hover:opacity-100">
                View Collections <ArrowRight size={13} />
              </Link>
            </motion.div>
          </AnimSection>
        </div>
      </section>
    </div>
  )
}
