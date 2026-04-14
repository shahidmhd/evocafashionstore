import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube } from 'lucide-react'

const footerLinks = {
  collections: [
    { label: 'Custom Stitching', href: '/services#stitching' },
    { label: 'Wedding Coat Rental', href: '/services#rental' },
    { label: 'Groom Package', href: '/services#groom' },
    { label: 'Bulk & Corporate', href: '/services#bulk' },
    { label: 'All India Delivery', href: '/services#delivery' },
    { label: 'Alteration & Repairs', href: '/services#alteration' },
  ],
  company: [
    { label: 'About Evoca', href: '/about' },
    { label: 'Our Locations', href: '/about#locations' },
    { label: 'Testimonials', href: '/#testimonials' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'All India Delivery', href: '/contact' },
  ],
}

const locations = [
  'Cherpulassery, Palakkad',
  'Perinthalmanna, Malappuram',
  'Pattambi, Palakkad',
  'Koppam, Palakkad',
]

export default function Footer() {
  return (
    <footer className="bg-obsidian-900 border-t border-white/5">
      {/* Gold top accent */}
      <div className="h-0.5 bg-gold-gradient" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6 select-none group">
              <Image
                src="/assets/logo.png"
                alt="EVOCA Fashion Store"
                width={170}
                height={56}
                className="object-contain invert brightness-[1.6] opacity-80 group-hover:opacity-100 group-hover:brightness-[2.0] drop-shadow-[0_0_8px_rgba(255,200,60,0.40)] group-hover:drop-shadow-[0_0_16px_rgba(255,210,80,0.60)] transition-all duration-300"
              />
            </Link>
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              Kerala&apos;s premier fashion destination for men&apos;s & boys&apos; clothing, groom collections, wedding rentals, and bespoke stitching. Delivering luxury across India.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              {[
                { Icon: Instagram, href: '#', label: 'Instagram' },
                { Icon: Facebook, href: '#', label: 'Facebook' },
                { Icon: Youtube, href: '#', label: 'YouTube' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 border border-white/10 hover:border-gold/50 flex items-center justify-center text-white/40 hover:text-gold transition-all duration-300"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Collections */}
          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-gold mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.collections.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/40 hover:text-gold text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-gold mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/40 hover:text-gold text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Locations */}
          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-gold mb-6">Visit Us</h4>
            <ul className="space-y-3 mb-6">
              {locations.map((loc) => (
                <li key={loc} className="flex items-start gap-2">
                  <MapPin size={11} className="text-gold/50 mt-0.5 shrink-0" />
                  <span className="text-white/40 text-sm">{loc}</span>
                </li>
              ))}
            </ul>
            <div className="divider-gold opacity-20 mb-5" />
            <div className="space-y-3">
              <a href="tel:+919876543210" className="flex items-center gap-2 text-white/40 hover:text-gold text-sm transition-colors">
                <Phone size={11} className="text-gold/50" />
                +91 98765 43210
              </a>
              <a href="mailto:hello@evocafashion.com" className="flex items-center gap-2 text-white/40 hover:text-gold text-sm transition-colors">
                <Mail size={11} className="text-gold/50" />
                hello@evocafashion.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="divider-gold opacity-20 mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs tracking-wide">
            © {new Date().getFullYear()} Evoca Fashion. All rights reserved.
          </p>
          <div className="flex items-center gap-1">
            <span className="text-[9px] tracking-[0.2em] uppercase text-gold/30">All India Delivery</span>
            <span className="text-gold/20 mx-3">·</span>
            <span className="text-[9px] tracking-[0.2em] uppercase text-gold/30">Premium Quality</span>
            <span className="text-gold/20 mx-3">·</span>
            <span className="text-[9px] tracking-[0.2em] uppercase text-gold/30">Crafted in Kerala</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
