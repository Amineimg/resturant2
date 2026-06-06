import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import MenuCard from "@/components/MenuCard";
import BookingForm from "@/components/BookingForm";
import Image from "next/image";
import Link from "next/link";

/* ── Static fallback data (used when Sanity is not configured) ── */
const specialties = [
  {
    title: "Wild Sea Bass Crudo",
    description: "With emulsion of Yuzu and hand-pressed olive oil.",
    image: "/images/dish-specialty.png",
  },
  {
    title: "A5 Wagyu Reserve",
    description: "Smoked with aged cherrywood.",
    image: "/images/dish-wagyu.png",
  },
  {
    title: "Black Truffle Tagliolini",
    description: "Hand-cut pasta, périgord truffle, mascarpone foam.",
    image: "/images/gallery-dessert.png",
  },
  {
    title: "Grand Cru Soufflé",
    description: "Valrhona dark chocolate, sea salt caramel.",
    image: "/images/gallery-dessert.png",
  },
];

const menuPreview = [
  {
    title: "Heirloom Tomato & Burrata",
    description: "Aged balsamic spheres, basil crystals, pine nut soil",
    price: 28,
  },
  {
    title: "Pan-Seared Scallops",
    description: "Cauliflower silk, pancetta dust, lemon thyme oil",
    price: 42,
  },
  {
    title: "Glazed Duck Breast",
    description: "Honey-lavender glaze, roasted fig, parsnip puree",
    price: 48,
  },
  {
    title: "Poached Pear in Saffron",
    description: "Mascarpone mousse, pistachio brittle, gold leaf",
    price: 22,
  },
];

const galleryPreview = [
  { src: "/images/gallery-interior.png", title: "The Architecture" },
  { src: "/images/dish-specialty.png", title: "Culinary Craft" },
  { src: "/images/gallery-wine.png", title: "Sommelier's Selection" },
];

export default function HomePage() {
  return (
    <>
      {/* ━━━━━━ HERO SECTION ━━━━━━ */}
      <HeroSection
        title="The Modern Sommelier"
        subtitle="Crafting moments through the art of fine curation"
        backgroundImage="/images/hero.png"
        showButtons
      />

      {/* ━━━━━━ OUR STORY ━━━━━━ */}
      <section className="bg-surface py-28 md:py-36">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Image (60%) */}
            <div className="lg:col-span-7 relative">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/gallery-interior.png"
                  alt="The Modern Sommelier interior"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>
              {/* Overlapping accent */}
              <div className="hidden lg:block absolute -bottom-8 -right-8 w-48 h-48 bg-surface-container-high" />
            </div>

            {/* Text (40%) */}
            <div className="lg:col-span-5">
              <p className="label-luxury text-gold-dark mb-4">Our Heritage</p>
              <h2 className="font-serif text-3xl md:text-4xl font-medium leading-tight mb-6">
                Crafting moments through the art of fine curation.
              </h2>
              <p className="text-ink-muted leading-relaxed mb-6">
                Founded on the principle of architectural culinary precision,
                The Modern Sommelier isn&apos;t just a restaurant; it&apos;s a sanctuary
                for the senses. We believe that every ingredient has a story,
                and every vintage holds a memory.
              </p>
              <p className="text-ink-muted leading-relaxed mb-8">
                Our team meticulously sources from artisan growers to ensure
                each plate is a masterclass in balance and tonal depth. The
                space is designed to breathe, utilizing expansive light and
                shadow to create an intimate atmosphere where time slows down.
              </p>

              {/* Quote block */}
              <blockquote className="border-l-2 border-gold/40 pl-6 py-2">
                <p className="font-serif text-lg italic text-ink/80">
                  &ldquo;A hushed dialogue between nature and the plate.&rdquo;
                </p>
                <cite className="block mt-2 text-sm text-ink-muted not-italic">
                  — Executive Chef
                </cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━ OUR SPECIALTIES ━━━━━━ */}
      <section className="bg-surface-container-low py-28 md:py-36 relative texture-grain">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
          <SectionHeading
            eyebrow="Signature Dishes"
            title="Our Specialties"
            description="A carefully composed vignette of seasonal ingredients sourced from our private estates."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialties.map((item, i) => (
              <div
                key={item.title}
                className="group relative overflow-hidden bg-surface-lowest animate-fade-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-[600ms] group-hover:scale-[1.04]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-serif text-xl text-white font-medium">
                    {item.title}
                  </h3>
                  <p className="text-white/60 text-sm mt-1">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━ DÉGUSTATION MENU PREVIEW ━━━━━━ */}
      <section className="bg-surface py-28 md:py-36">
        <div className="max-w-[900px] mx-auto px-6 md:px-12">
          <SectionHeading
            eyebrow="The Tasting"
            title="Dégustation Menu"
          />

          <div className="divide-y-0">
            {menuPreview.map((item, i) => (
              <MenuCard
                key={item.title}
                title={item.title}
                description={item.description}
                price={item.price}
                index={i}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/menu" className="btn-ghost">
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* ━━━━━━ GALLERY PREVIEW ━━━━━━ */}
      <section className="bg-surface-container-high py-28 md:py-36">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <SectionHeading
            eyebrow="Visual Journey"
            title="The Gallery"
            description="A curation of moments, flavors, and architectural details."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {galleryPreview.map((img, i) => (
              <Link
                key={img.title}
                href="/gallery"
                className="group relative overflow-hidden animate-fade-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className={`relative overflow-hidden ${i === 0 ? 'aspect-[3/4]' : 'aspect-square'}`}>
                  <Image
                    src={img.src}
                    alt={img.title}
                    fill
                    className="object-cover transition-transform duration-[600ms] group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-[400ms]" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="label-luxury text-white/80">{img.title}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/gallery" className="btn-ghost">
              Explore Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* ━━━━━━ BOOKING SECTION ━━━━━━ */}
      <section className="bg-surface py-28 md:py-36">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left: Form */}
            <div>
              <SectionHeading
                eyebrow="Reservations"
                title="Reserve Your Table"
                description="We welcome you to join us for an evening of culinary storytelling."
                align="left"
              />
              <BookingForm />
            </div>

            {/* Right: Image */}
            <div className="relative hidden lg:block">
              <div className="relative aspect-[3/4] overflow-hidden sticky top-32">
                <Image
                  src="/images/gallery-wine.png"
                  alt="Wine service"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━ FLOATING RESERVATION BAR ━━━━━━ */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-primary py-4 px-6 md:hidden">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-white/50 text-xs uppercase tracking-wider">Dinner Service</p>
            <p className="text-white text-sm font-medium">Tue — Sat, 18:00 — 23:00</p>
          </div>
          <Link href="/booking" className="btn-gold py-2.5 px-5 text-xs">
            Book Table
          </Link>
        </div>
      </div>
    </>
  );
}
