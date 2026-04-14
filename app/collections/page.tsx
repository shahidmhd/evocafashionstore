'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ChevronRight, ShoppingBag, MessageCircle } from 'lucide-react'

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const categories = [
  {
    id: 'shirts', label: 'Shirts', emoji: '👔',
    subtitle: 'Formal & Casual',
    description: 'From crisp formal shirts to stylish casual checks and designer prints — our shirt collection covers every man for every occasion.',
    image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=1400&q=85',
    accent: '#d4a020',
    items: [
      { name: 'Formal Shirts',      price: 'From ₹799',   tag: 'Bestseller', image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=600&q=80', desc: 'Crisp cotton & linen shirts for office, events & formal wear' },
      { name: 'Casual Check Shirts',price: 'From ₹599',   tag: 'Trending',   image: 'https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=600&q=80', desc: 'Relaxed check & plaid shirts for weekends & outings' },
      { name: 'Designer Shirts',    price: 'From ₹1,299', tag: 'New',        image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=600&q=80', desc: 'Premium designer prints in high-quality fabrics' },
      { name: 'Party Shirts',       price: 'From ₹999',   tag: null,         image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80', desc: 'Bold statement shirts for festivals, events & celebrations' },
      { name: 'Linen Shirts',       price: 'From ₹899',   tag: 'Summer',     image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=600&q=80', desc: 'Breathable linen — perfect for Kerala\'s warm climate' },
      { name: "Boys' Shirts",       price: 'From ₹399',   tag: 'Junior',     image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=600&q=80', desc: 'Neat & comfortable shirts for school & functions' },
    ],
  },
  {
    id: 'pants', label: 'Pants', emoji: '👖',
    subtitle: 'Formal & Casual Trousers',
    description: 'Complete your look with formal trousers, chinos, casual pants and more — tailored for a perfect fit every time.',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=1400&q=85',
    accent: '#8a9a6e',
    items: [
      { name: 'Formal Trousers', price: 'From ₹999',  tag: 'Bestseller', image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=600&q=80', desc: 'Slim & regular fit in wool, poly & blended fabrics' },
      { name: 'Chinos',          price: 'From ₹799',  tag: 'Trending',   image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=600&q=80', desc: 'Smart casual — office meets outing in one pair' },
      { name: 'Casual Pants',    price: 'From ₹699',  tag: null,         image: 'https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?auto=format&fit=crop&w=600&q=80', desc: 'Comfortable relaxed-fit for daily wear & travel' },
      { name: "Boys' Pants",     price: 'From ₹499',  tag: 'Junior',     image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=600&q=80', desc: 'Durable school trousers & casual pants for boys 2–15' },
    ],
  },
  {
    id: 'tshirts', label: 'T-Shirts', emoji: '👕',
    subtitle: 'Everyday Comfort',
    description: 'Premium cotton T-shirts, polos and graphic tees — effortless comfort and style for every day of the week.',
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=1400&q=85',
    accent: '#6e8ad4',
    items: [
      { name: 'Plain Round Neck', price: 'From ₹399', tag: 'Bestseller', image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=600&q=80', desc: 'Solid-colour premium cotton tees — the everyday essential' },
      { name: 'Polo T-Shirts',   price: 'From ₹599', tag: 'Popular',    image: 'https://images.unsplash.com/photo-1598032895397-b9472444bf93?auto=format&fit=crop&w=600&q=80', desc: 'Classic collar polo — smart-casual for work & leisure' },
      { name: 'Graphic Tees',    price: 'From ₹499', tag: 'New',        image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=600&q=80', desc: 'Bold prints for those who like to make a statement' },
      { name: "Boys' T-Shirts",  price: 'From ₹299', tag: 'Junior',     image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=600&q=80', desc: 'Fun, comfortable and durable tees for boys of all ages' },
    ],
  },
  {
    id: 'wedding', label: 'Wedding Dress', emoji: '🥻',
    subtitle: 'Groom Collection',
    description: 'Look your absolute best on your most important day. Royal sherwanis, designer kurta sets and complete groom packages — exclusively for men.',
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1400&q=85',
    accent: '#c9a020',
    items: [
      { name: 'Wedding Sherwani',    price: 'From ₹12,999', tag: 'Most Popular', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=600&q=80', desc: 'Regal silk & brocade sherwanis with intricate embroidery' },
      { name: 'Groom Kurta Set',     price: 'From ₹5,999',  tag: 'Trending',     image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80', desc: 'Designer kurta sets for Nikah, engagement & wedding ceremonies' },
      { name: 'Indo-Western Groom',  price: 'From ₹9,999',  tag: 'New',          image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=600&q=80', desc: 'Fusion groom wear — ideal for receptions & sangeet' },
      { name: 'Engagement Sherwani', price: 'From ₹7,999',  tag: null,           image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80', desc: 'Elegant light sherwanis for engagement & pre-wedding events' },
      { name: 'Reception Suit',      price: 'From ₹10,999', tag: null,           image: 'https://images.unsplash.com/photo-1480429370139-e0132c086e2a?auto=format&fit=crop&w=600&q=80', desc: 'Sharp reception-day outfits — bold & unforgettable' },
      { name: 'Groom Accessories',   price: 'From ₹499',    tag: 'Add-On',       image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80', desc: 'Dupattas, safa turbans, mojris & brooches for the groom look' },
    ],
  },
  {
    id: 'coats', label: 'Wedding Coats', emoji: '🧥',
    subtitle: 'Buy & Rental Available',
    description: 'Premium wedding coats and blazers — available to purchase or rent. Ideal for grooms, groomsmen and guests.',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1400&q=85',
    accent: '#7a6e5e',
    items: [
      { name: 'Sherwani Coat',    price: 'From ₹8,999',  rentalPrice: '₹1,299/day', tag: 'Bestseller', image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80', desc: 'Long sherwani-style wedding coat with embroidery' },
      { name: 'Bandhgala Coat',   price: 'From ₹6,999',  rentalPrice: '₹999/day',   tag: 'Popular',    image: 'https://images.unsplash.com/photo-1480429370139-e0132c086e2a?auto=format&fit=crop&w=600&q=80', desc: 'Classic Nehru-collar bandhgala — sharp and timeless' },
      { name: 'Blazer',          price: 'From ₹4,999',  rentalPrice: '₹799/day',   tag: null,         image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80', desc: 'Smart western blazers for receptions & formal events' },
      { name: 'Indo-Western Coat',price: 'From ₹7,499',  rentalPrice: '₹1,099/day', tag: 'New',        image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=600&q=80', desc: 'Fusion-style coat blending Indian and western aesthetics' },
    ],
  },
  {
    id: 'innerwears', label: 'Innerwears', emoji: '🩲',
    subtitle: 'Daily Comfort Essentials',
    description: 'Premium quality innerwear for men and boys — breathable, skin-friendly fabrics designed for all-day comfort.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1400&q=85',
    accent: '#6e9a8a',
    items: [
      { name: 'Vests',              price: 'From ₹149', tag: 'Essentials', image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=600&q=80', desc: 'Breathable 100% cotton vests — round-neck & sleeveless styles' },
      { name: 'Briefs',             price: 'From ₹149', tag: null,         image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=600&q=80', desc: 'Comfortable elastic-waist briefs — durable daily essentials' },
      { name: 'Boxers',             price: 'From ₹249', tag: 'Popular',    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=600&q=80', desc: 'Relaxed woven & knitted boxers in prints and solid colours' },
      { name: "Boys' Innerwear",    price: 'From ₹99',  tag: 'Junior',     image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=600&q=80', desc: 'Soft cotton innerwear specially designed for boys' },
    ],
  },
  {
    id: 'shorts', label: 'Shorts', emoji: '🩳',
    subtitle: 'Casual & Sports',
    description: 'From casual beach shorts to sporty gym shorts — stay cool and comfortable with our range of men\'s and boys\' shorts.',
    image: 'https://images.unsplash.com/photo-1562886877-1358e84ce0e1?auto=format&fit=crop&w=1400&q=85',
    accent: '#6e8a9a',
    items: [
      { name: 'Casual Shorts',  price: 'From ₹499', tag: 'Bestseller', image: 'https://images.unsplash.com/photo-1562886877-1358e84ce0e1?auto=format&fit=crop&w=600&q=80', desc: 'Relaxed cotton shorts — great for home, market & outings' },
      { name: 'Sports Shorts',  price: 'From ₹399', tag: 'Active',     image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=600&q=80', desc: 'Lightweight dry-fit for gym, football & outdoor sports' },
      { name: 'Beach Shorts',   price: 'From ₹599', tag: null,         image: 'https://images.unsplash.com/photo-1520975867e7bd2f5a5e5d2a29b72dc?auto=format&fit=crop&w=600&q=80', desc: 'Quick-dry vibrant prints — great for beaches & holidays' },
      { name: "Boys' Shorts",   price: 'From ₹299', tag: 'Junior',     image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=600&q=80', desc: 'Durable comfortable shorts for active boys — school & play' },
    ],
  },
  {
    id: 'dhothi', label: 'Dhothi', emoji: '🧣',
    subtitle: 'Traditional Kerala Wear',
    description: 'Authentic Kerala dhothi in fine cotton and silk — the timeless traditional garment for festivals, ceremonies and everyday dignity.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1400&q=85',
    accent: '#c9c09a',
    items: [
      { name: 'Kerala Mundu (Cotton)', price: 'From ₹499',   tag: 'Classic', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80', desc: 'Traditional white cotton mundu for Onam, Vishu & daily wear' },
      { name: 'Set Mundu',             price: 'From ₹899',   tag: 'Festive', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=600&q=80', desc: 'Full set mundu with kasavu border for Kerala ceremonies' },
      { name: 'Silk Dhothi',           price: 'From ₹1,499', tag: 'Premium', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80', desc: 'Premium silk with golden kasavu — ideal for weddings' },
      { name: "Boys' Mundu",           price: 'From ₹349',   tag: 'Junior',  image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=600&q=80', desc: 'Traditional mundu for boys aged 2–15 for Kerala celebrations' },
    ],
  },
  {
    id: 'tracks', label: 'Tracks', emoji: '🏃',
    subtitle: 'Active & Lounge Wear',
    description: 'Comfortable track pants and joggers for gym workouts, morning runs, or just relaxing at home.',
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=1400&q=85',
    accent: '#6e9a70',
    items: [
      { name: 'Sports Track Pants', price: 'From ₹599',   tag: 'Bestseller', image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=600&q=80', desc: 'Lightweight dry-fit for gym, jogging & sports activities' },
      { name: 'Cotton Joggers',     price: 'From ₹799',   tag: 'Comfort',    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=600&q=80', desc: 'Soft cotton joggers with elastic cuffs — lounge & travel' },
      { name: 'Full Track Suit',    price: 'From ₹1,299', tag: 'Combo',      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=600&q=80', desc: 'Matching jacket + track pants — for team sports & gym' },
      { name: "Boys' Tracks",       price: 'From ₹399',   tag: 'Junior',     image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=600&q=80', desc: 'Comfortable elastic-waist tracks for active boys' },
    ],
  },
  {
    id: 'caps', label: "Cap's", emoji: '🧢',
    subtitle: 'Headwear Collection',
    description: 'Top off your look with our collection of caps — from casual snapbacks to traditional prayer caps and sun hats.',
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=1400&q=85',
    accent: '#7a6e9a',
    items: [
      { name: 'Snapback Caps',    price: 'From ₹299', tag: 'Popular',     image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=600&q=80', desc: 'Adjustable caps in various colours for casual everyday wear' },
      { name: 'Prayer Caps (Kufi)',price: 'From ₹199', tag: 'Traditional', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80', desc: 'Traditional embroidered prayer caps in white & cream designs' },
      { name: 'Sun Hats',         price: 'From ₹349', tag: null,          image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80', desc: 'Wide-brim hats for outdoor protection — beach & farm use' },
      { name: "Boys' Caps",       price: 'From ₹199', tag: 'Junior',      image: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=600&q=80', desc: 'Fun colourful caps for boys — adjustable strap fit' },
    ],
  },
]

type Category = typeof categories[0]
type Item     = Category['items'][0] & { rentalPrice?: string }

/* ─────────────────────────────────────────────
   ITEM CARD
───────────────────────────────────────────── */
function ItemCard({ item, index }: { item: Item; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.055, ease: [0.22, 1, 0.36, 1] }}
      className="group relative border border-white/6 hover:border-gold/35 overflow-hidden bg-[#111] transition-all duration-400"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <Image src={item.image} alt={item.name} fill
          className="object-cover object-top transition-transform duration-600 group-hover:scale-105"
          sizes="(max-width:640px) 100vw,(max-width:1024px) 50vw,33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/10 to-transparent" />
        {item.tag && (
          <span className="absolute top-3 left-3 px-2 py-0.5 bg-obsidian-900/85 backdrop-blur-sm border border-gold/40 text-gold text-[9px] tracking-[0.2em] uppercase">
            {item.tag}
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-4">
        <h4
          className="font-display font-light text-[17px] text-white group-hover:text-gold transition-colors duration-300 leading-tight mb-1"
          style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
        >
          {item.name}
        </h4>
        <p className="text-white/35 text-[11px] leading-relaxed mb-3 line-clamp-2">{item.desc}</p>
        <div className="divider-gold opacity-15 group-hover:opacity-40 transition-opacity duration-300 mb-3" />
        <div className="flex items-center justify-between">
          <div>
            <span className="text-gold text-sm font-medium">{item.price}</span>
            {'rentalPrice' in item && item.rentalPrice && (
              <span className="block text-white/30 text-[10px] mt-0.5">Rent: {item.rentalPrice}</span>
            )}
          </div>
          <Link href="/contact"
            className="flex items-center gap-1 text-[9px] tracking-[0.18em] uppercase text-white/30 hover:text-gold border border-white/10 hover:border-gold/40 px-2.5 py-1.5 transition-all duration-200"
          >
            Enquire <ArrowRight size={9} />
          </Link>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
    </motion.div>
  )
}

/* ─────────────────────────────────────────────
   RIGHT PANEL — two sections
   Section 1: Category hero banner
   Section 2: Items grid
───────────────────────────────────────────── */
function CategoryPanel({ cat }: { cat: Category }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={cat.id}
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col gap-0"
      >
        {/* ── SECTION 1: Category Hero Banner ── */}
        <div className="relative h-56 md:h-72 overflow-hidden">
          <Image src={cat.image} alt={cat.label} fill
            className="object-cover object-center"
            sizes="100vw" priority
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian-900/95 via-obsidian-900/55 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian-900/80 to-transparent" />

          {/* Text */}
          <div className="absolute inset-0 flex flex-col justify-end p-7 md:p-10">
            <motion.div
              key={`hero-${cat.id}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="h-px w-8 bg-gold" />
                <span className="text-[9px] tracking-[0.3em] uppercase text-gold">{cat.subtitle}</span>
              </div>
              <h2
                className="font-display font-light leading-none text-white mb-3"
                style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
              >
                <span className="block text-4xl md:text-5xl">{cat.emoji} {cat.label}</span>
              </h2>
              <p className="text-white/50 text-xs md:text-sm leading-relaxed max-w-md">{cat.description}</p>
            </motion.div>
          </div>

          {/* Item count badge */}
          <div className="absolute top-5 right-5">
            <div className="flex items-center gap-2 border border-gold/30 bg-obsidian-900/70 backdrop-blur-sm px-3 py-1.5">
              <ShoppingBag size={11} className="text-gold" />
              <span className="text-gold text-[10px] tracking-[0.2em]">{cat.items.length} styles</span>
            </div>
          </div>
        </div>

        {/* Divider with label */}
        <div className="flex items-center gap-4 px-6 md:px-8 py-5 bg-[#0d0d0d] border-b border-white/5">
          <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
          <span className="text-[9px] tracking-[0.3em] uppercase text-gold/60">All Styles</span>
          <div className="h-px flex-1 bg-gradient-to-l from-gold/30 to-transparent" />
        </div>

        {/* ── SECTION 2: Items Grid ── */}
        <div className="p-6 md:p-8 bg-obsidian-900">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {(cat.items as Item[]).map((item, i) => (
              <ItemCard key={item.name} item={item} index={i} />
            ))}
          </div>

          {/* Enquire CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8 flex flex-col sm:flex-row items-center gap-3 border border-white/6 bg-[#0d0d0d] p-5"
          >
            <MessageCircle size={16} className="text-gold shrink-0" />
            <p className="text-white/40 text-xs text-center sm:text-left flex-1">
              Looking for a specific style, size or custom requirement?
            </p>
            <Link href="/contact" className="btn-gold-filled text-[10px] shrink-0">
              WhatsApp Us <ArrowRight size={12} />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

/* ─────────────────────────────────────────────
   LEFT SIDEBAR — Category List
───────────────────────────────────────────── */
function CategorySidebar({
  active, setActive,
}: { active: string; setActive: (id: string) => void }) {
  return (
    <nav className="flex flex-col gap-0.5">
      <p className="text-[8px] tracking-[0.35em] uppercase text-white/25 mb-3 pl-1">All Categories</p>
      {categories.map((cat, i) => {
        const isActive = cat.id === active
        return (
          <motion.button
            key={cat.id}
            onClick={() => setActive(cat.id)}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.04, duration: 0.35 }}
            className={`group relative w-full flex items-center gap-3 px-4 py-3 text-left transition-all duration-250 overflow-hidden ${
              isActive
                ? 'bg-gold text-obsidian-900'
                : 'border border-white/5 hover:border-gold/25 text-white/60 hover:text-white bg-[#0d0d0d] hover:bg-[#141414]'
            }`}
          >
            {/* Active left accent */}
            {isActive && (
              <motion.div
                layoutId="activePill"
                className="absolute left-0 top-0 bottom-0 w-0.5 bg-obsidian-900/40"
              />
            )}

            <span className="text-xl shrink-0">{cat.emoji}</span>

            <div className="flex-1 min-w-0">
              <span className={`block text-xs font-medium tracking-[0.08em] truncate ${isActive ? 'text-obsidian-900' : ''}`}>
                {cat.label}
              </span>
              <span className={`block text-[9px] tracking-wide truncate mt-0.5 ${isActive ? 'text-obsidian-900/60' : 'text-white/30'}`}>
                {cat.subtitle}
              </span>
            </div>

            {/* Item count badge */}
            <span className={`text-[9px] font-medium px-1.5 py-0.5 rounded-sm shrink-0 ${
              isActive ? 'bg-obsidian-900/20 text-obsidian-900' : 'bg-white/5 text-white/30'
            }`}>
              {cat.items.length}
            </span>

            <ChevronRight size={12} className={`shrink-0 transition-transform duration-200 ${isActive ? 'text-obsidian-900/60 translate-x-0.5' : 'text-white/20 group-hover:translate-x-0.5'}`} />
          </motion.button>
        )
      })}

      {/* Custom Order button */}
      <div className="mt-4 pt-4 border-t border-white/5">
        <Link
          href="/contact"
          className="flex items-center gap-2 px-4 py-3 border border-gold/30 bg-gold/5 hover:bg-gold hover:text-obsidian-900 text-gold transition-all duration-250 group"
        >
          <span className="text-lg">✂️</span>
          <div className="flex-1">
            <span className="block text-xs font-medium tracking-[0.08em]">Custom Stitching</span>
            <span className="block text-[9px] text-gold/60 group-hover:text-obsidian-900/60 mt-0.5">Made to Measure</span>
          </div>
          <ArrowRight size={12} />
        </Link>
      </div>
    </nav>
  )
}

/* ─────────────────────────────────────────────
   MOBILE CATEGORY TABS
───────────────────────────────────────────── */
function MobileTabs({ active, setActive }: { active: string; setActive: (id: string) => void }) {
  return (
    <div className="flex gap-1.5 overflow-x-auto pb-1 hide-scrollbar">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => setActive(cat.id)}
          className={`shrink-0 flex items-center gap-1.5 px-3 py-2 text-[9px] tracking-[0.12em] uppercase transition-all duration-200 whitespace-nowrap ${
            cat.id === active
              ? 'bg-gold text-obsidian-900 font-semibold'
              : 'border border-white/10 text-white/50 hover:border-gold/30 hover:text-gold'
          }`}
        >
          <span className="text-base">{cat.emoji}</span>
          {cat.label}
        </button>
      ))}
      <Link
        href="/contact"
        className="shrink-0 flex items-center gap-1.5 px-3 py-2 border border-gold/30 bg-gold/8 text-gold text-[9px] tracking-[0.12em] uppercase hover:bg-gold hover:text-obsidian-900 transition-all duration-200 whitespace-nowrap"
      >
        ✂️ Custom
      </Link>
    </div>
  )
}

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
export default function CollectionsPage() {
  const [activeId, setActiveId] = useState('shirts')
  const activeCat = categories.find((c) => c.id === activeId)!

  return (
    <div className="min-h-screen bg-obsidian-900">
      {/* ── Page Hero ── */}
      <section className="relative pt-32 pb-12 px-6 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at 50% 0%, #1c1208 0%, #0a0a0a 65%)' }}
        />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg,#d4a020 0px,#d4a020 1px,transparent 1px,transparent 55px)' }}
        />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-3 mb-4"
              >
                <div className="h-px w-10 bg-gold/60" />
                <span className="section-label text-[9px]">Men's & Boys — All India Delivery</span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-display font-light leading-[1.0]"
                style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
              >
                <span className="block text-4xl md:text-5xl text-white">All</span>
                <span className="block text-5xl md:text-7xl text-gold-gradient italic">Collections</span>
              </motion.h1>
            </div>
            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex gap-6"
            >
              {[
                { n: '10', label: 'Categories' },
                { n: '50+', label: 'Styles' },
                { n: '4', label: 'Stores' },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div
                    className="text-2xl font-display font-light text-gold"
                    style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
                  >{s.n}</div>
                  <div className="text-[9px] tracking-[0.2em] uppercase text-white/30">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Mobile Tabs (sticky) ── */}
      <div className="lg:hidden sticky top-20 z-30 bg-obsidian-900/95 backdrop-blur-md border-b border-white/5 px-4 py-3">
        <MobileTabs active={activeId} setActive={setActiveId} />
      </div>

      {/* ── Main Two-Column Layout ── */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-0">

        {/* ─ LEFT: Category Sidebar (sticky) ─ */}
        <aside className="hidden lg:block w-64 xl:w-72 shrink-0">
          <div className="sticky top-24 p-6 xl:p-8">
            <CategorySidebar active={activeId} setActive={setActiveId} />
          </div>
        </aside>

        {/* ─ Vertical divider ─ */}
        <div className="hidden lg:block w-px bg-white/5 shrink-0" />

        {/* ─ RIGHT: Two-Section Content Area ─ */}
        <div className="flex-1 min-w-0">
          <CategoryPanel cat={activeCat} />
        </div>
      </div>

      {/* Bottom padding */}
      <div className="h-20" />
    </div>
  )
}
