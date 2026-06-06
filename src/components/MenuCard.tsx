'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface MenuCardProps {
  title: string;
  description?: string;
  price: number;
  imageUrl?: string;
  index?: number;
}

export default function MenuCard({ title, description, price, imageUrl, index = 0 }: MenuCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.4, 0, 0.2, 1] }}
      className="group flex gap-6 py-8 transition-colors duration-[400ms] hover:bg-surface-container-low rounded-none px-4 -mx-4"
    >
      {/* Image */}
      {imageUrl && (
        <div className="relative w-24 h-24 md:w-28 md:h-28 shrink-0 overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-[600ms] group-hover:scale-105"
            sizes="112px"
          />
        </div>
      )}

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-serif text-lg md:text-xl font-medium text-ink group-hover:text-gold-dark transition-colors duration-300">
            {title}
          </h3>
          <span className="shrink-0 font-sans text-sm font-semibold text-gold-dark tracking-wide">
            ${price}
          </span>
        </div>
        {description && (
          <p className="mt-2 text-sm text-ink-muted leading-relaxed line-clamp-2">
            {description}
          </p>
        )}
      </div>
    </motion.div>
  );
}
