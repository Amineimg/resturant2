'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface GalleryItem {
  _id: string;
  title?: string;
  imageUrl: string;
  category?: string;
}

interface GalleryGridProps {
  images: GalleryItem[];
}

export default function GalleryGrid({ images }: GalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const openLightbox = (image: GalleryItem, index: number) => {
    setSelectedImage(image);
    setSelectedIndex(index);
  };

  const closeLightbox = () => setSelectedImage(null);

  const navigate = (direction: 1 | -1) => {
    const newIndex = (selectedIndex + direction + images.length) % images.length;
    setSelectedIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  return (
    <>
      {/* Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {images.map((img, i) => (
          <motion.div
            key={img._id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: (i % 6) * 0.08 }}
            className="relative overflow-hidden cursor-pointer group break-inside-avoid"
            onClick={() => openLightbox(img, i)}
          >
            <div className="relative aspect-auto">
              <Image
                src={img.imageUrl}
                alt={img.title || 'Gallery image'}
                width={600}
                height={i % 3 === 0 ? 800 : i % 3 === 1 ? 600 : 700}
                className="w-full h-auto object-cover transition-transform duration-[600ms] group-hover:scale-[1.03]"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-[400ms] flex items-end p-6">
                <motion.p
                  className="font-serif text-lg text-white opacity-0 group-hover:opacity-100 transition-opacity duration-[400ms] translate-y-2 group-hover:translate-y-0"
                >
                  {img.title}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors z-50 text-2xl"
              aria-label="Close lightbox"
            >
              ✕
            </button>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); navigate(-1); }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/40 hover:text-white text-4xl transition-colors z-50"
              aria-label="Previous image"
            >
              ‹
            </button>

            {/* Image */}
            <motion.div
              key={selectedImage._id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl max-h-[85vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.imageUrl}
                alt={selectedImage.title || 'Gallery image'}
                width={1200}
                height={800}
                className="w-full h-auto max-h-[85vh] object-contain"
              />
              {selectedImage.title && (
                <p className="text-center mt-4 font-serif text-lg text-white/70">
                  {selectedImage.title}
                </p>
              )}
            </motion.div>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); navigate(1); }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/40 hover:text-white text-4xl transition-colors z-50"
              aria-label="Next image"
            >
              ›
            </button>

            {/* Counter */}
            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40 text-sm">
              {selectedIndex + 1} / {images.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
