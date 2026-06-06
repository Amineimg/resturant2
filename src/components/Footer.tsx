import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary text-white/80">
      {/* Gold accent line at top */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
          {/* Column 1: Brand */}
          <div>
            <h3 className="font-serif text-2xl text-white mb-4">
              The Modern <em className="text-gold font-light">Sommelier</em>
            </h3>
            <p className="text-sm leading-relaxed text-white/50 max-w-xs">
              A sanctuary for the senses. Crafting moments through the art of
              fine curation since 2018.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <p className="label-luxury text-gold/80 mb-6">Navigate</p>
            <div className="flex flex-col gap-3">
              {[
                { href: '/', label: 'Home' },
                { href: '/menu', label: 'Menu' },
                { href: '/booking', label: 'Reservations' },
                { href: '/gallery', label: 'Gallery' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/60 hover:text-gold transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Details */}
          <div>
            <p className="label-luxury text-gold/80 mb-6">Visit Us</p>
            <div className="space-y-4 text-sm text-white/60">
              <div>
                <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Hours</p>
                <p>Tuesday — Saturday</p>
                <p>18:00 — 23:00</p>
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Location</p>
                <p>42 Sommelier Avenue</p>
                <p>London, EC1A 4JQ</p>
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Contact</p>
                <a href="tel:+17075550198" className="hover:text-gold transition-colors duration-300 block">
                  707.555.0198
                </a>
                <a href="mailto:concierge@modernsommelier.com" className="hover:text-gold transition-colors duration-300 block">
                  concierge@modernsommelier.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} The Modern Sommelier. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/" className="text-xs text-white/30 hover:text-white/60 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/" className="text-xs text-white/30 hover:text-white/60 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
