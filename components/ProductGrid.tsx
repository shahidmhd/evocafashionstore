'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from './ScrollReveal'
import { Heart, Eye } from 'lucide-react'

const products = [
  {
    name: 'Formal Shirts',
    category: 'Shirts',
    price: 'From ₹799',
    tag: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Casual T-Shirts',
    category: 'T-Shirts',
    price: 'From ₹399',
    tag: 'Trending',
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Wedding Sherwani',
    category: 'Wedding Dress',
    price: 'From ₹8,999',
    rentalPrice: '₹1,499/day',
    tag: 'Exclusive',
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Formal Trousers',
    category: 'Pants',
    price: 'From ₹999',
    tag: 'New',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Wedding Coat',
    category: 'Wedding Coats',
    price: 'From ₹6,999',
    rentalPrice: '₹999/day',
    tag: 'Premium',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Track Pants',
    category: 'Tracks',
    price: 'From ₹599',
    tag: 'Comfort',
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Kerala Dhothi',
    category: 'Dhothi',
    price: 'From ₹499',
    tag: 'Traditional',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: "Men's Caps",
    category: 'Caps',
    price: 'From ₹299',
    tag: 'New Arrivals',
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=600&q=80',
  },
]

function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden border border-white/5 hover:border-gold/25 transition-all duration-500 bg-obsidian-900"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-900/80 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-obsidian-900/0 group-hover:bg-obsidian-900/20 transition-colors duration-500" />

        {product.tag && (
          <div className="absolute top-3 left-3">
            <span className="px-2 py-0.5 bg-obsidian-900/80 backdrop-blur-sm border border-gold/40 text-gold text-[9px] tracking-[0.2em] uppercase">
              {product.tag}
            </span>
          </div>
        )}

        {/* Quick actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
          <button className="w-8 h-8 bg-obsidian-900/80 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/60 hover:text-gold hover:border-gold transition-all">
            <Heart size={13} />
          </button>
          <Link
            href="/collections"
            className="w-8 h-8 bg-obsidian-900/80 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/60 hover:text-gold hover:border-gold transition-all"
          >
            <Eye size={13} />
          </Link>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <p className="text-[9px] tracking-[0.25em] uppercase text-gold/50 mb-1">{product.category}</p>
        <h4
          className="text-white font-display font-light text-lg group-hover:text-gold transition-colors duration-300 leading-tight"
          style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
        >
          {product.name}
        </h4>
        <div className="divider-gold mt-2.5 mb-2.5 opacity-20 group-hover:opacity-50 transition-opacity duration-300" />
        <div className="flex items-center justify-between">
          <span className="text-white/80 text-sm font-medium">{product.price}</span>
          {product.rentalPrice && (
            <span className="text-gold/55 text-[10px]">Rent: {product.rentalPrice}</span>
          )}
        </div>
      </div>

      <div className="h-0.5 bg-gold-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  )
}

export default function ProductGrid() {
  return (
    <section className="py-28 px-6 bg-obsidian-800 border-t border-white/5" id="products">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <ScrollReveal>
            <span className="section-label">Featured Products</span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2
              className="text-5xl md:text-7xl font-display font-light text-white mt-4 mb-6"
              style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
            >
              The{' '}
              <span className="text-gold-gradient italic">Evoca</span>{' '}
              Edit
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-white/40 text-sm max-w-md mx-auto leading-relaxed">
              From daily essentials to grand occasion wear — everything under one roof.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product, i) => (
            <ProductCard key={product.name} product={product} index={i} />
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <div className="text-center mt-14">
            <Link href="/collections" className="btn-gold">
              View All Categories
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
