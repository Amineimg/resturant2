import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import BookingForm from "@/components/BookingForm";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Reservations",
  description:
    "Secure your table at The Modern Sommelier. Experience an evening of architectural gastronomy, limited to twelve tables per evening.",
};

const features = [
  {
    title: "The Wine Archive",
    description:
      "Access to our vintage collection featuring rare vintages from the Old World, hand-selected by our Master Sommelier.",
  },
  {
    title: "Seasonal Pairing",
    description:
      "A constantly evolving 7-course tasting menu designed to harmonize with our monthly featured wine region.",
  },
  {
    title: "The Candlelit Lounge",
    description:
      "After-dinner service featuring rare digestifs and artisanal cheeses in our low-light private lounge.",
  },
];

export default function BookingPage() {
  return (
    <>
      <HeroSection
        title="Secure Your Table"
        subtitle="An evening of architectural gastronomy"
        backgroundImage="/images/gallery-interior.png"
        compact
      />

      <section className="bg-surface py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left: Form */}
            <div>
              <SectionHeading
                eyebrow="Reservations"
                title="The Private Cellar Experience"
                description="Our sommelier-led dining experience is limited to twelve tables per evening to ensure absolute intimacy and precision in service."
                align="left"
              />
              <BookingForm />
            </div>

            {/* Right: Details */}
            <div className="lg:pt-8">
              {/* Info Cards */}
              <div className="bg-surface-container-low p-8 md:p-10 mb-8">
                <div className="space-y-6">
                  <div>
                    <p className="label-luxury text-gold-dark mb-2">Hours</p>
                    <p className="text-ink">Tuesday — Saturday</p>
                    <p className="text-ink">18:00 — 23:00</p>
                  </div>
                  <div>
                    <p className="label-luxury text-gold-dark mb-2">Location</p>
                    <p className="text-ink">42 Sommelier Avenue</p>
                    <p className="text-ink">London, EC1A 4JQ</p>
                  </div>
                </div>
              </div>

              {/* Policy note */}
              <div className="bg-surface-container-high p-6 mb-12">
                <p className="text-sm text-ink-muted leading-relaxed">
                  <span className="font-semibold text-ink">Policy:</span> A
                  minimum 24-hour notice is required for cancellations to avoid
                  a per-guest holding fee. Final confirmation will be sent via
                  email within 2 hours.
                </p>
              </div>

              {/* Curated Details */}
              <div>
                <p className="label-luxury text-gold-dark mb-8">Curated Details</p>
                <div className="space-y-8">
                  {features.map((f) => (
                    <div key={f.title}>
                      <h3 className="font-serif text-xl font-medium mb-2">
                        {f.title}
                      </h3>
                      <p className="text-sm text-ink-muted leading-relaxed">
                        {f.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
