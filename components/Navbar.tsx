'use client'

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-obsidian-900/95 backdrop-blur-md border-b border-gold/20 shadow-dark'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center leading-none group select-none">
              <Image
                src={`${BASE}/assets/logo.png`}
                alt="EVOCA Fashion Store"
                width={160}
                height={52}
                priority
                className={`object-contain transition-all duration-500 ${
                  scrolled
                    ? 'invert brightness-[1.8] drop-shadow-[0_0_6px_rgba(255,210,80,0.55)]'
                    : 'invert brightness-[2.0] drop-shadow-[0_0_12px_rgba(255,200,60,0.65)]'
                } group-hover:brightness-[2.2] group-hover:drop-shadow-[0_0_18px_rgba(255,220,80,0.80)]`}
              />
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-xs tracking-[0.25em] uppercase font-medium transition-colors duration-300 group ${
                    pathname === link.href ? 'text-gold' : 'text-white/70 hover:text-white'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-gold transition-all duration-300 ${
                      pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              ))}
            </div>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-5">
              <Link
                href="/contact"
                className="hidden md:inline-flex items-center btn-gold text-[10px]"
              >
                Book Appointment
              </Link>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden text-white/80 hover:text-gold transition-colors p-1"
                aria-label="Toggle menu"
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-obsidian-900 flex flex-col"
          >
            {/* Gold top accent */}
            <div className="h-0.5 bg-gold-gradient" />

            <div className="flex flex-col justify-center items-center flex-1 gap-10 px-8">
              <div className="flex flex-col items-center mb-6">
                <Image
                  src={`${BASE}/assets/logo.png`}
                  alt="EVOCA Fashion Store"
                  width={260}
                  height={84}
                  className="object-contain invert brightness-[2.0] drop-shadow-[0_0_22px_rgba(255,210,80,0.70)]"
                />
              </div>
              <div className="divider-gold w-24 mb-2" />
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                >
                  <Link
                    href={link.href}
                    className={`text-2xl font-display font-light tracking-[0.2em] transition-colors ${
                      pathname === link.href ? 'text-gold' : 'text-white/80 hover:text-gold'
                    }`}
                    style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="mt-4"
              >
                <Link href="/contact" className="btn-gold">
                  Book Appointment
                </Link>
              </motion.div>
            </div>

            <div className="text-center pb-8 text-white/30 text-xs tracking-widest">
              ALL INDIA DELIVERY AVAILABLE
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
