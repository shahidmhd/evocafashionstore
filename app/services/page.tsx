'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import {
  Scissors, Package, Truck, Crown, Shirt, Star, ArrowRight,
  CheckCircle, MessageCircle, Phone, ChevronDown
} from 'lucide-react'

/* ── Animation helpers ── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
}
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}
function Anim({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-70px' })
  return (
    <motion.div ref={ref} variants={stagger} initial="hidden" animate={inView ? 'visible' : 'hidden'} className={className}>
      {children}
    </motion.div>
  )
}

/* ── Services Data ── */
const services = [
  {
    id: 'stitching',
    icon: Scissors,
    title: 'Custom Stitching',
    tagline: 'Tailored to Perfection',
    description: 'Bring your fabric or choose from our premium range — our master tailors craft garments to your exact measurements and style preferences. Shirts, kurtas, pants, sherwanis and more.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=85',
    features: ['Exact body measurement fitting', 'Choice of collar, cuff & pleat styles', 'Ready in 5–7 working days', 'Alterations & adjustments included'],
    price: 'Stitching from ₹299',
    tag: 'Most Popular',
    whatsapp: 'I%20want%20to%20enquire%20about%20Custom%20Stitching',
  },
  {
    id: 'rental',
    icon: Crown,
    title: 'Wedding Coat Rental',
    tagline: 'Look Royal, Pay Less',
    description: 'Rent premium tuxedos, sherwanis, bandhgalas and designer wedding coats for your special day. All garments are dry-cleaned and freshly pressed before every rental.',
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=1200&q=85',
    features: ['100+ coat & sherwani styles', 'Dry-cleaned & pressed before use', 'Available for 1–7 days', 'Free alteration for fit'],
    price: 'Rental from ₹999/day',
    tag: 'Exclusive',
    whatsapp: 'I%20want%20to%20enquire%20about%20Wedding%20Coat%20Rental',
  },
  {
    id: 'groom',
    icon: Star,
    title: 'Groom Package',
    tagline: 'Complete Wedding Look',
    description: 'Our all-inclusive groom package covers head to toe — sherwani or suit, dhoti or trousers, footwear coordination, and accessories — styled to match your wedding theme.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=85',
    features: ['Complete outfit consultation', 'Sherwani / Suit / Kurta set', 'Matching accessories & turban', 'Same-day trial fitting available'],
    price: 'Packages from ₹4,999',
    tag: 'Premium',
    whatsapp: 'I%20want%20to%20enquire%20about%20the%20Groom%20Package',
  },
  {
    id: 'bulk',
    icon: Package,
    title: 'Bulk & Corporate Orders',
    tagline: 'Uniforms & Group Wear',
    description: 'Outfitting a team, school, or event? We handle bulk orders for uniforms, event wear, and corporate clothing with consistent quality and quick turnaround.',
    image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200&q=85',
    features: ['Minimum 10 pieces per order', 'Custom logo / branding available', 'Schools, hotels, corporates welcome', 'Special pricing for large orders'],
    price: 'Call for quote',
    tag: 'B2B',
    whatsapp: 'I%20want%20to%20enquire%20about%20Bulk%20%2F%20Corporate%20Orders',
  },
  {
    id: 'delivery',
    icon: Truck,
    title: 'All India Delivery',
    tagline: 'Kerala Style, Anywhere',
    description: 'Shop from Evoca from anywhere in India. We pack and ship every order with care — whether it\'s a single shirt or a full wedding ensemble — through trusted courier partners.',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&q=85',
    features: ['Ships within 2–3 business days', 'Secure packaging for garments', 'Tracking provided on dispatch', 'Easy returns & exchanges'],
    price: 'Free shipping above ₹1,499',
    tag: 'Pan India',
    whatsapp: 'I%20want%20to%20enquire%20about%20All%20India%20Delivery',
  },
  {
    id: 'alteration',
    icon: Shirt,
    title: 'Alteration & Repairs',
    tagline: 'Perfect Fit Guaranteed',
    description: 'Already own a garment that doesn\'t fit right? Our tailors resize, repair, and restyle any garment quickly and affordably — for clothes bought at Evoca or elsewhere.',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&q=85',
    features: ['Waist, length & sleeve alterations', 'Zipper & button repairs', 'Express 24-hr service available', 'All brands & garment types accepted'],
    price: 'Alterations from ₹99',
    tag: 'Quick Service',
    whatsapp: 'I%20want%20to%20enquire%20about%20Alteration%20%26%20Repairs',
  },
]

const faqs = [
  { q: 'How long does custom stitching take?', a: 'Standard stitching is ready in 5–7 working days. Express 2–3 day stitching is available at extra cost.' },
  { q: 'Can I bring my own fabric for stitching?', a: 'Yes, absolutely. Bring your fabric to any of our 4 showrooms and our tailors will guide you on the best cut and style.' },
  { q: 'How does rental work?', a: 'Visit the store, select your coat or sherwani, get fitted, and collect it 1 day before your event. Return it within your rental period. Dry-cleaning charges are included.' },
  { q: 'Do you ship outside Kerala?', a: 'Yes — we deliver across India. Orders are shipped within 2–3 business days via reliable courier with full tracking.' },
  { q: 'What is the minimum for bulk orders?', a: 'Minimum 10 pieces per order. For corporate uniforms, we offer custom embroidery and branding options.' },
]

/* ── FAQ Item ── */
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-white/8 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
      >
        <span className="text-white/80 text-sm group-hover:text-white transition-colors">{q}</span>
        <ChevronDown
          size={14}
          className={`text-gold/60 shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <p className="text-white/45 text-sm leading-relaxed pb-5">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function ServicesPage() {
  return (
    <div className="bg-obsidian-900 min-h-screen">

      {/* ── Hero ── */}
      <section className="relative h-[58vh] min-h-[400px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80"
            alt="Evoca Fashion Services"
            fill className="object-cover" unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian-900 via-obsidian-900/65 to-obsidian-900/25" />
        </div>
        <div className="absolute top-0 inset-x-0 h-0.5 bg-gold-gradient" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pb-16 pt-32">
          <motion.div initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-[10px] tracking-[0.45em] uppercase text-gold mb-4">What We Offer</p>
            <h1 className="font-display text-5xl md:text-7xl font-light text-white mb-4 leading-none">
              Our <span className="text-gold-gradient">Services</span>
            </h1>
            <p className="text-white/50 text-base max-w-lg">
              From bespoke stitching to all-India delivery — everything you need for the perfect look.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <Anim>
          <motion.p variants={fadeUp} className="text-[10px] tracking-[0.35em] uppercase text-gold mb-3 text-center">All Services</motion.p>
          <motion.h2 variants={fadeUp} className="font-display text-4xl text-white font-light text-center mb-16">
            How We Can Help You
          </motion.h2>
        </Anim>

        <div className="space-y-6">
          {services.map((svc, i) => {
            const Icon = svc.icon
            const isEven = i % 2 === 0
            return (
              <Anim key={svc.id}>
                <motion.div
                  variants={fadeUp}
                  className="group border border-white/8 hover:border-gold/25 transition-colors duration-400 overflow-hidden"
                >
                  <div className={`grid lg:grid-cols-2 ${isEven ? '' : 'lg:grid-flow-col-dense'}`}>
                    {/* Image */}
                    <div className={`relative h-64 lg:h-80 overflow-hidden ${!isEven ? 'lg:col-start-2' : ''}`}>
                      <Image
                        src={svc.image}
                        alt={svc.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-obsidian-900/80 to-transparent lg:from-transparent lg:to-transparent" />
                      {/* Tag */}
                      <div className="absolute top-4 left-4 lg:top-5 lg:left-5">
                        <span className="px-3 py-1 text-[9px] tracking-widest uppercase bg-gold text-obsidian-900 font-semibold">
                          {svc.tag}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`flex flex-col justify-center p-8 lg:p-12 bg-obsidian-800/30 ${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-9 h-9 border border-gold/30 flex items-center justify-center group-hover:border-gold/60 transition-colors">
                          <Icon size={15} className="text-gold" />
                        </div>
                        <span className="text-[9px] tracking-[0.3em] uppercase text-gold/60">{svc.tagline}</span>
                      </div>
                      <h3 className="font-display text-3xl text-white font-light mb-3">{svc.title}</h3>
                      <p className="text-white/45 text-sm leading-relaxed mb-6">{svc.description}</p>

                      {/* Features */}
                      <ul className="space-y-2 mb-7">
                        {svc.features.map((f) => (
                          <li key={f} className="flex items-center gap-2.5 text-white/55 text-xs">
                            <CheckCircle size={11} className="text-gold/60 shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap items-center gap-4">
                        <span className="text-gold text-sm font-medium">{svc.price}</span>
                        <a
                          href={`https://wa.me/919876543210?text=${svc.whatsapp}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-gold inline-flex items-center gap-2 text-[10px]"
                        >
                          <MessageCircle size={12} /> Enquire Now
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Anim>
            )
          })}
        </div>
      </section>

      {/* ── Process Steps ── */}
      <section className="border-y border-white/5 bg-obsidian-800/25">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
          <Anim>
            <motion.p variants={fadeUp} className="text-[10px] tracking-[0.35em] uppercase text-gold mb-3 text-center">How It Works</motion.p>
            <motion.h2 variants={fadeUp} className="font-display text-4xl text-white font-light text-center mb-14">
              Simple. Fast. Premium.
            </motion.h2>
          </Anim>
          <Anim className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Visit or Call', desc: 'Walk into any of our 4 showrooms or reach us via WhatsApp / phone.' },
              { step: '02', title: 'Consult & Choose', desc: 'Our style experts guide you to the right fabric, cut, and service.' },
              { step: '03', title: 'We Craft', desc: 'Our tailors stitch, press, and prepare your garment to perfection.' },
              { step: '04', title: 'Delivered to You', desc: 'Collect in-store or have it shipped pan-India at your doorstep.' },
            ].map(({ step, title, desc }) => (
              <motion.div key={step} variants={fadeUp} className="text-center">
                <div className="font-display text-5xl text-gold/15 font-light mb-4">{step}</div>
                <div className="w-8 h-px bg-gold/30 mx-auto mb-4" />
                <h4 className="text-white text-sm font-medium mb-2 tracking-wide">{title}</h4>
                <p className="text-white/40 text-xs leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </Anim>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="max-w-3xl mx-auto px-6 lg:px-12 py-24">
        <Anim>
          <motion.p variants={fadeUp} className="text-[10px] tracking-[0.35em] uppercase text-gold mb-3 text-center">Got Questions?</motion.p>
          <motion.h2 variants={fadeUp} className="font-display text-4xl text-white font-light text-center mb-12">
            Frequently Asked
          </motion.h2>
        </Anim>
        <Anim>
          <motion.div variants={fadeUp} className="border border-white/8 px-6 md:px-10 py-2">
            {faqs.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </motion.div>
        </Anim>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1600&q=80"
            alt="Visit Evoca"
            fill className="object-cover opacity-15" unoptimized
          />
          <div className="absolute inset-0 bg-obsidian-900/85" />
        </div>
        <div className="h-0.5 bg-gold-gradient" />
        <div className="relative z-10 max-w-2xl mx-auto px-6 py-24 text-center">
          <Anim>
            <motion.p variants={fadeUp} className="text-[10px] tracking-[0.4em] uppercase text-gold mb-4">Ready to Get Started?</motion.p>
            <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl text-white font-light mb-6">
              Let&apos;s Create Your<br />
              <span className="text-gold-gradient">Perfect Look</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/45 text-sm mb-10">
              Visit any showroom or reach us on WhatsApp — we&apos;re ready to help you find the perfect service.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/919876543210?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-flex items-center gap-2"
              >
                <MessageCircle size={13} /> WhatsApp Us
              </a>
              <Link href="/contact" className="btn-gold inline-flex items-center gap-2 opacity-60 hover:opacity-100">
                <Phone size={13} /> Book Appointment
              </Link>
            </motion.div>
          </Anim>
        </div>
      </section>

    </div>
  )
}
