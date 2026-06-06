'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/booking', label: 'Booking' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-[400ms] ${
          scrolled
            ? 'glass shadow-[0_1px_0_rgba(208,197,175,0.15)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <span className="font-serif text-xl md:text-2xl font-semibold tracking-tight text-ink">
              The Modern
            </span>
            <span className="font-serif text-xl md:text-2xl font-light italic text-gold-dark">
              Sommelier
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-[0.8125rem] font-medium tracking-[0.04em] uppercase transition-colors duration-300 ${
                  pathname === link.href
                    ? 'text-gold-dark'
                    : 'text-ink-light hover:text-gold-dark'
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-[1px] bg-gold"
                    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                  />
                )}
              </Link>
            ))}
            <Link href="/booking" className="btn-gold text-xs py-3 px-6">
              Book Table
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-[5px] p-2"
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="block w-6 h-[1.5px] bg-ink"
              transition={{ duration: 0.3 }}
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-[1.5px] bg-ink"
              transition={{ duration: 0.2 }}
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="block w-6 h-[1.5px] bg-ink"
              transition={{ duration: 0.3 }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 z-40 glass-dark md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    className={`font-serif text-3xl ${
                      pathname === link.href ? 'text-gold' : 'text-white/80 hover:text-gold'
                    } transition-colors duration-300`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
              >
                <Link href="/booking" className="btn-gold mt-4">
                  Book Table
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
