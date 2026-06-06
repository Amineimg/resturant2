"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import MenuCard from "@/components/MenuCard";
import Link from "next/link";

interface MenuItem {
  _id: string;
  title: string;
  description?: string;
  price: number;
  category: string;
  image?: string;
}

interface MenuPageClientProps {
  categories: string[];
  menuItems: MenuItem[];
}

export default function MenuPageClient({ categories, menuItems }: MenuPageClientProps) {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const filtered = menuItems.filter((item) => item.category === activeCategory);

  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="max-w-[900px] mx-auto px-6 md:px-12">
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative px-6 py-3 text-[0.8125rem] font-semibold tracking-[0.06em] uppercase transition-all duration-300 ${
                activeCategory === cat
                  ? "text-gold-dark"
                  : "text-ink-muted hover:text-ink"
              }`}
            >
              {cat}
              {activeCategory === cat && (
                <motion.span
                  layoutId="menu-tab"
                  className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gold"
                  transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        >
          {filtered.map((item, i) => (
            <MenuCard
              key={item._id}
              title={item.title}
              description={item.description}
              price={item.price}
              imageUrl={item.image}
              index={i}
            />
          ))}
        </motion.div>

        {/* Note */}
        <p className="text-center text-sm text-ink-muted mt-16">
          Limited evening seatings available for this weekend
        </p>
      </div>

      {/* Floating Book Table bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-primary py-4 px-6 flex items-center justify-between">
        <p className="text-white/70 text-sm hidden sm:block">
          Experience our curated tasting menu
        </p>
        <Link href="/booking" className="btn-gold py-2.5 px-6 text-xs mx-auto sm:mx-0">
          Book Table
        </Link>
      </div>
    </section>
  );
}
