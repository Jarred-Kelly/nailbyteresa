"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/10 backdrop-blur-lg shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-display font-semibold transition-all duration-200 transform hover:text-black-900 hover:-translate-y-1">
            Nails By Teresa
          </Link>
          <div className="flex space-x-6">
            <Link href="/pricing" className="text-lg text-black-700 transition-all duration-200 transform hover:text-black-900 hover:-translate-y-1">
              Pricing
            </Link>
            <Link href="/gallery" className="text-lg text-black-700 transition-all duration-200 transform hover:text-black-900 hover:-translate-y-1">
              My Work
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
