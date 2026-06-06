import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import GalleryPageClient from "./GalleryPageClient";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A curation of moments, flavors, and architectural details. Each image is a chapter in our pursuit of the sublime.",
};

/* ── Static fallback gallery data ── */
const galleryImages = [
  { _id: "g1", title: "Artisan Plating", imageUrl: "/images/dish-specialty.png", category: "culinary" },
  { _id: "g2", title: "The Dining Room", imageUrl: "/images/gallery-interior.png", category: "architecture" },
  { _id: "g3", title: "Vintage Selection", imageUrl: "/images/gallery-wine.png", category: "sommelier" },
  { _id: "g4", title: "A5 Wagyu Preparation", imageUrl: "/images/dish-wagyu.png", category: "culinary" },
  { _id: "g5", title: "Grand Cru Soufflé", imageUrl: "/images/gallery-dessert.png", category: "culinary" },
  { _id: "g6", title: "Brass & Stone Details", imageUrl: "/images/gallery-interior.png", category: "architecture" },
  { _id: "g7", title: "Decanting Ritual", imageUrl: "/images/gallery-wine.png", category: "sommelier" },
  { _id: "g8", title: "Herb Garden Harvest", imageUrl: "/images/dish-specialty.png", category: "culinary" },
  { _id: "g9", title: "The Cellar Vault", imageUrl: "/images/gallery-wine.png", category: "sommelier" },
];

export default function GalleryPage() {
  return (
    <>
      <HeroSection
        title="The Gallery"
        subtitle="A curation of moments, flavors, and architectural details"
        backgroundImage="/images/gallery-interior.png"
        compact
      />

      <GalleryPageClient images={galleryImages} />
    </>
  );
}
