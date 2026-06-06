'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  showButtons?: boolean;
  compact?: boolean;
}

export default function HeroSection({
  title,
  subtitle,
  backgroundImage,
  showButtons = false,
  compact = false,
}: HeroSectionProps) {
  return (
    <section
      className={`relative w-full overflow-hidden ${
        compact ? 'min-h-[60vh]' : 'min-h-screen'
      } flex items-center justify-center`}
    >
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt=""
        fill
        className="object-cover"
        priority
        quality={90}
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 text-center">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          className="label-luxury text-gold-light mb-6"
        >
          Est. 2018 — Fine Dining
        </motion.p>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className={`font-serif font-medium text-white leading-[1.1] tracking-tight ${
            compact
              ? 'text-4xl md:text-6xl lg:text-7xl'
              : 'text-5xl md:text-7xl lg:text-[5.5rem]'
          }`}
        >
          {title}
        </motion.h1>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="mt-6 text-lg md:text-xl text-white/70 font-light max-w-2xl mx-auto leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}

        {/* CTA Buttons */}
        {showButtons && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.4, 0, 0.2, 1] }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/menu" className="btn-gold">
              View Menu
            </Link>
            <Link
              href="/booking"
              className="btn-ghost border-white/20 text-white hover:border-gold hover:text-gold"
            >
              Book Table
            </Link>
          </motion.div>
        )}
      </div>

      {/* Bottom gradient fade to surface */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface to-transparent" />
    </section>
  );
}
