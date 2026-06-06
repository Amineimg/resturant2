import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import ContactForm from "@/components/ContactForm";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Whether you seek to host an intimate gathering or have specific questions about our vintage selection, our concierge is prepared to assist.",
};

export default function ContactPage() {
  return (
    <>
      <HeroSection
        title="An Intentional Dialogue"
        subtitle="Our concierge is prepared to assist with your journey"
        backgroundImage="/images/hero.png"
        compact
      />

      <section className="bg-surface py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left: Contact Form */}
            <div>
              <SectionHeading
                eyebrow="Get in Touch"
                title="Send an Inquiry"
                description="Whether you seek to host an intimate gathering or have specific questions, we are here to assist."
                align="left"
              />
              <ContactForm />
            </div>

            {/* Right: Contact Info */}
            <div className="lg:pt-8">
              {/* Address */}
              <div className="bg-surface-container-low p-8 md:p-10 mb-6">
                <p className="label-luxury text-gold-dark mb-4">The Estate</p>
                <p className="text-ink text-lg font-medium">1224 Vineyard Rows Lane</p>
                <p className="text-ink-muted">St. Helena, Napa Valley</p>
                <p className="text-ink-muted">California, 94574</p>
              </div>

              {/* Contact */}
              <div className="bg-surface-container-low p-8 md:p-10 mb-6">
                <p className="label-luxury text-gold-dark mb-4">Direct Contact</p>
                <div className="space-y-3">
                  <a
                    href="tel:+17075550198"
                    className="flex items-center gap-3 text-ink hover:text-gold-dark transition-colors duration-300"
                  >
                    <span className="text-gold-dark text-lg">✆</span>
                    <span>707.555.0198</span>
                  </a>
                  <a
                    href="mailto:concierge@modernsommelier.com"
                    className="flex items-center gap-3 text-ink hover:text-gold-dark transition-colors duration-300"
                  >
                    <span className="text-gold-dark text-lg">✉</span>
                    <span>concierge@modernsommelier.com</span>
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-surface-container-low p-8 md:p-10">
                <p className="label-luxury text-gold-dark mb-4">Inquiry Hours</p>
                <div className="space-y-2 text-ink-muted">
                  <p>Mon — Sat: 11:00 AM – 10:00 PM</p>
                  <p>Sunday: 12:00 PM – 9:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Embed */}
      <section className="bg-surface-container-high">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-6">
          <SectionHeading
            eyebrow="Location"
            title="Arriving at the Sommelier"
            description="Valet service is available at our main entrance. We recommend arriving fifteen minutes prior to your reservation."
          />
        </div>
        <div className="w-full h-[400px] md:h-[500px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3118.2!2d-122.47!3d38.51!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDMwJzM2LjAiTiAxMjLCsDI4JzEyLjAiVw!5e0!3m2!1sen!2sus!4v1"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "grayscale(0.3) contrast(1.05)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="The Modern Sommelier Location"
          />
        </div>
      </section>
    </>
  );
}
