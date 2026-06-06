import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import MenuPageClient from "./MenuPageClient";
import { getMenuItems, getCategories } from "@/lib/sanity";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Explore our seasonal gastronomy — a dialogue between heritage and innovation. Each dish is a carefully composed vignette of seasonal ingredients.",
};

export default async function MenuPage() {
  const [sanityItems, sanityCategories] = await Promise.all([
    getMenuItems(),
    getCategories(),
  ]);

  const menuItems = sanityItems.map((item: any) => ({
    _id: item._id,
    title: item.title,
    description: item.description,
    price: item.price,
    category: item.category?.name,
    image: item.imageUrl,
  }));

  const categories = sanityCategories.map((cat: any) => cat.name);

  return (
    <>
      <HeroSection
        title="Seasonal Gastronomy"
        subtitle="A dialogue between heritage and innovation"
        backgroundImage="/images/dish-wagyu.png"
        compact
      />
      <MenuPageClient categories={categories} menuItems={menuItems} />
    </>
  );
}