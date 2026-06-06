'use client';

import { motion } from 'framer-motion';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  dark?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  dark = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
      className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}
    >
      {eyebrow && (
        <p className={`label-luxury mb-4 ${dark ? 'text-gold/70' : 'text-gold-dark'}`}>
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-tight ${
          dark ? 'text-white' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-base md:text-lg max-w-2xl leading-relaxed ${
            align === 'center' ? 'mx-auto' : ''
          } ${dark ? 'text-white/60' : 'text-ink-muted'}`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
