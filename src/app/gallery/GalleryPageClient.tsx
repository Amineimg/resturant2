"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import GalleryGrid from "@/components/GalleryGrid";

interface GalleryImage {
  _id: string;
  title?: string;
  imageUrl: string;
  category?: string;
}

interface GalleryPageClientProps {
  images: GalleryImage[];
}

const filters = [
  { label: "All", value: "all" },
  { label: "Culinary Craft", value: "culinary" },
  { label: "The Architecture", value: "architecture" },
  { label: "Sommelier's Selection", value: "sommelier" },
];

export default function GalleryPageClient({ images }: GalleryPageClientProps) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? images
      : images.filter((img) => img.category === activeFilter);

  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`relative px-5 py-2.5 text-[0.8125rem] font-semibold tracking-[0.06em] uppercase transition-all duration-300 ${
                activeFilter === f.value
                  ? "text-gold-dark"
                  : "text-ink-muted hover:text-ink"
              }`}
            >
              {f.label}
              {activeFilter === f.value && (
                <motion.span
                  layoutId="gallery-filter"
                  className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gold"
                  transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Gallery */}
        <motion.div
          key={activeFilter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <GalleryGrid images={filtered} />
        </motion.div>

        {/* Descriptions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-24 pt-16">
          <div>
            <h3 className="font-serif text-xl font-medium mb-3">Culinary Craft</h3>
            <p className="text-sm text-ink-muted leading-relaxed">
              Our kitchen operates on the principle of minimal intervention. We source
              ingredients from three local biodynamic farms.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-xl font-medium mb-3">The Architecture</h3>
            <p className="text-sm text-ink-muted leading-relaxed">
              Designed by Studio Marmi, our space balances brutalist charcoal stone
              with the softness of hand-woven linen and warm brass accents.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-xl font-medium mb-3">Sommelier&apos;s Selection</h3>
            <p className="text-sm text-ink-muted leading-relaxed">
              Our cellar houses over 400 labels, focusing on small-batch vignerons
              from the Jura, Etna, and the forgotten slopes of the Mosel valley.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
