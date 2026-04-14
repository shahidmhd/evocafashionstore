'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

interface CollectionCardProps {
  title: string
  subtitle: string
  description: string
  badge?: string
  href: string
  index: number
  image: string
  tall?: boolean
}

export default function CollectionCard({
  title,
  subtitle,
  description,
  badge,
  href,
  index,
  image,
  tall = false,
}: CollectionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={tall ? 'h-full' : ''}
    >
      <Link href={href} className={`block group relative overflow-hidden ${tall ? 'h-full min-h-[500px]' : 'h-[280px] sm:h-[320px]'}`}>
        {/* Background image */}
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-900 via-obsidian-900/40 to-transparent" />
        <div className="absolute inset-0 bg-obsidian-900/20 group-hover:bg-obsidian-900/10 transition-colors duration-500" />

        {/* Gold side accent line */}
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gold-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-7">
          {/* Badge */}
          {badge && (
            <span className="self-start px-3 py-1 border border-gold/50 text-gold text-[9px] tracking-[0.2em] uppercase mb-4 bg-obsidian-900/60 backdrop-blur-sm">
              {badge}
            </span>
          )}

          <p className="text-gold/70 text-[10px] tracking-[0.25em] uppercase mb-1.5">{subtitle}</p>

          <h3
            className="text-2xl md:text-3xl font-display font-light text-white mb-2 leading-tight group-hover:text-gold transition-colors duration-300"
            style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
          >
            {title}
          </h3>

          {/* Description — reveals on hover */}
          <div className="overflow-hidden">
            <motion.p
              initial={false}
              className="text-white/50 text-xs leading-relaxed mb-4 max-h-0 group-hover:max-h-20 transition-all duration-500 overflow-hidden"
            >
              {description}
            </motion.p>
          </div>

          {/* CTA arrow */}
          <div className="flex items-center gap-2 text-gold text-[10px] tracking-[0.2em] uppercase font-medium">
            <span>Explore</span>
            <ArrowUpRight
              size={13}
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
            />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
