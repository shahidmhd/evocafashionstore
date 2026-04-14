'use client'

import ScrollReveal from './ScrollReveal'
import CollectionCard from './CollectionCard'

const collections = [
  {
    title: 'Shirts',
    subtitle: 'Formal & Casual',
    description: 'Crisp formal shirts, casual checks & designer prints — every style for every man.',
    badge: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80',
    href: '/collections#shirts',
    tall: true,
  },
  {
    title: 'Wedding Dress',
    subtitle: 'Groom Collection',
    description: 'Royal wedding sherwanis, kurta sets & full groom packages for your special day.',
    badge: 'Featured',
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80',
    href: '/collections#wedding',
  },
  {
    title: 'Pants & Tracks',
    subtitle: 'Bottoms Collection',
    description: 'Formal trousers, casual pants, shorts, tracks & dhothi for every occasion.',
    badge: 'New',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800&q=80',
    href: '/collections#pants',
  },
  {
    title: 'T-Shirts & Casuals',
    subtitle: 'Everyday Comfort',
    description: 'Premium cotton T-shirts, polos & casual tops for effortless everyday style.',
    badge: 'Trending',
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=80',
    href: '/collections#tshirts',
  },
  {
    title: 'Wedding Coats',
    subtitle: 'Premium Rentals',
    description: 'Designer wedding coats & blazers — available to buy or rent for any occasion.',
    badge: 'Popular',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
    href: '/collections#coats',
  },
]

export default function Collections() {
  return (
    <section className="py-28 px-6 bg-obsidian-900" id="collections">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <span className="section-label">Our Collections</span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2
              className="text-5xl md:text-7xl font-display font-light text-white mt-4 mb-6"
              style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
            >
              Everything a Man{' '}
              <span className="text-gold-gradient italic">Needs</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-white/40 text-sm max-w-lg mx-auto leading-relaxed">
              Shirts · Pants · T-Shirts · Wedding Dress · Wedding Coats · Innerwears · Shorts · Dhothi · Tracks · Caps
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div className="divider-gold max-w-xs mx-auto mt-8" />
          </ScrollReveal>
        </div>

        {/* Grid: large left + 2×2 right */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-1 lg:row-span-2">
            <CollectionCard {...collections[0]} index={0} tall />
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {collections.slice(1).map((col, i) => (
              <CollectionCard key={col.title} {...col} index={i + 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
