'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, MessageCircle, Clock, Truck, Check } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'

const locations = [
  {
    city: 'Cherpulassery',
    district: 'Palakkad District',
    address: 'Main Road, Cherpulassery, Kerala 679501',
    phone: '+91 98765 43210',
    hours: 'Mon–Sat: 9am – 8pm, Sun: 10am – 6pm',
  },
  {
    city: 'Perinthalmanna',
    district: 'Malappuram District',
    address: 'Town Centre, Perinthalmanna, Kerala 679322',
    phone: '+91 98765 43211',
    hours: 'Mon–Sat: 9am – 8pm, Sun: 10am – 6pm',
  },
  {
    city: 'Pattambi',
    district: 'Palakkad District',
    address: 'Market Road, Pattambi, Kerala 679303',
    phone: '+91 98765 43212',
    hours: 'Mon–Sat: 9am – 8pm, Sun: 10am – 6pm',
  },
  {
    city: 'Koppam',
    district: 'Palakkad District',
    address: 'Near Bus Stand, Koppam, Kerala 679501',
    phone: '+91 98765 43213',
    hours: 'Mon–Sat: 9am – 8pm, Sun: 10am – 6pm',
  },
]

const services = [
  "Men's Clothing",
  "Boys' Wear",
  'Bridal Collection',
  'Wedding Rentals',
  'Custom Stitching',
  'All India Delivery',
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    location: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Build WhatsApp message from form data
    const msg = `*New Enquiry from Evoca Fashion Website*\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nService: ${formData.service}\nLocation: ${formData.location}\nMessage: ${formData.message}`
    const url = `https://wa.me/919876543210?text=${encodeURIComponent(msg)}`
    window.open(url, '_blank')
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const inputClass = "w-full bg-white/[0.03] border border-white/10 focus:border-gold/50 text-white text-sm px-4 py-3 outline-none transition-colors duration-200 placeholder:text-white/20"
  const labelClass = "block text-[10px] tracking-[0.2em] uppercase text-gold/60 mb-2"

  return (
    <div className="min-h-screen bg-obsidian-900">
      {/* Hero */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at 40% 40%, #1a1208 0%, #0a0a0a 60%)' }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="h-px w-12 bg-gold/50" />
            <span className="section-label text-[10px]">Get in Touch</span>
            <div className="h-px w-12 bg-gold/50" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display font-light text-white leading-[1.05] mb-6"
            style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
          >
            <span className="block text-5xl md:text-7xl">Let&apos;s</span>
            <span className="block text-6xl md:text-8xl text-gold-gradient italic">Connect</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-white/40 text-sm max-w-md mx-auto leading-relaxed"
          >
            Book an appointment, enquire about our collections, or get a custom stitching quote. We&apos;re here to help.
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left — Form */}
          <div>
            <ScrollReveal direction="right">
              <div className="mb-10">
                <h2
                  className="text-3xl font-display font-light text-white mb-2"
                  style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
                >
                  Send an Enquiry
                </h2>
                <p className="text-white/40 text-sm">
                  Fill in the form below and we&apos;ll get back to you via WhatsApp.
                </p>
              </div>
            </ScrollReveal>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="border border-gold/30 bg-gold/5 p-10 text-center"
              >
                <div className="w-14 h-14 border border-gold flex items-center justify-center mx-auto mb-5">
                  <Check size={22} className="text-gold" />
                </div>
                <h3
                  className="text-2xl font-display font-light text-gold mb-2"
                  style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
                >
                  Message Sent!
                </h3>
                <p className="text-white/50 text-sm">
                  Your enquiry has been opened on WhatsApp. Our team will respond shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-gold mt-8 text-[10px]"
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <ScrollReveal delay={0.1}>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>Full Name *</label>
                      <input
                        required
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Phone Number *</label>
                      <input
                        required
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>Email Address</label>
                    <input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={inputClass}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>Service Interested In</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className={`${inputClass} cursor-pointer`}
                      >
                        <option value="" className="bg-obsidian-900">Select service</option>
                        {services.map((s) => (
                          <option key={s} value={s} className="bg-obsidian-900">{s}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>Nearest Location</label>
                      <select
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className={`${inputClass} cursor-pointer`}
                      >
                        <option value="" className="bg-obsidian-900">Select location</option>
                        {locations.map((l) => (
                          <option key={l.city} value={l.city} className="bg-obsidian-900">{l.city}</option>
                        ))}
                        <option value="Online / All India Delivery" className="bg-obsidian-900">All India Delivery</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>Your Message *</label>
                    <textarea
                      required
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell us about your requirements — occasion, budget, preferences..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <button type="submit" className="btn-gold-filled w-full justify-center">
                    <MessageCircle size={14} />
                    Send via WhatsApp
                  </button>

                  <p className="text-white/25 text-xs text-center">
                    This will open WhatsApp with your message pre-filled.
                  </p>
                </form>
              </ScrollReveal>
            )}

            {/* Quick contact */}
            <ScrollReveal delay={0.2}>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 border border-[#25D366]/30 text-[#25D366] px-5 py-3 text-xs tracking-wider hover:bg-[#25D366]/10 transition-colors"
                >
                  <MessageCircle size={14} />
                  WhatsApp Us
                </a>
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-3 border border-white/10 text-white/60 px-5 py-3 text-xs tracking-wider hover:border-gold/30 hover:text-gold transition-all"
                >
                  <Phone size={14} />
                  Call Now
                </a>
                <a
                  href="mailto:hello@evocafashion.com"
                  className="flex items-center gap-3 border border-white/10 text-white/60 px-5 py-3 text-xs tracking-wider hover:border-gold/30 hover:text-gold transition-all"
                >
                  <Mail size={14} />
                  Email Us
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right — Locations */}
          <div>
            <ScrollReveal direction="left">
              <div className="mb-10">
                <h2
                  className="text-3xl font-display font-light text-white mb-2"
                  style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
                >
                  Visit Our Stores
                </h2>
                <p className="text-white/40 text-sm">
                  Four convenient locations across Kerala — or order online for All India delivery.
                </p>
              </div>
            </ScrollReveal>

            <div className="space-y-4">
              {locations.map((loc, i) => (
                <motion.div
                  key={loc.city}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group border border-white/6 hover:border-gold/25 bg-gradient-to-b from-white/[0.02] to-transparent p-6 transition-all duration-400"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 border border-gold/30 group-hover:border-gold flex items-center justify-center shrink-0 mt-0.5 transition-colors duration-300">
                      <MapPin size={14} className="text-gold" />
                    </div>
                    <div className="flex-1">
                      <h3
                        className="text-lg font-display font-light text-white mb-0.5 group-hover:text-gold transition-colors duration-300"
                        style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
                      >
                        {loc.city}
                      </h3>
                      <p className="text-gold/50 text-[10px] tracking-wider uppercase mb-3">{loc.district}</p>
                      <div className="space-y-1.5">
                        <p className="text-white/40 text-xs flex items-start gap-2">
                          <MapPin size={10} className="text-gold/40 mt-0.5 shrink-0" />
                          {loc.address}
                        </p>
                        <a href={`tel:${loc.phone.replace(/\s/g, '')}`} className="text-white/40 text-xs flex items-center gap-2 hover:text-gold transition-colors">
                          <Phone size={10} className="text-gold/40 shrink-0" />
                          {loc.phone}
                        </a>
                        <p className="text-white/30 text-xs flex items-start gap-2">
                          <Clock size={10} className="text-gold/40 mt-0.5 shrink-0" />
                          {loc.hours}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Delivery Banner */}
            <ScrollReveal delay={0.3}>
              <div className="mt-6 border border-gold/20 bg-gold/5 p-6 flex items-center gap-5">
                <div className="w-12 h-12 border border-gold/40 flex items-center justify-center shrink-0">
                  <Truck size={18} className="text-gold" />
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm mb-1">All India Delivery</h4>
                  <p className="text-white/40 text-xs leading-relaxed">
                    We ship anywhere in India. Premium packaging ensures your outfit arrives in perfect condition.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  )
}
