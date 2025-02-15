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
          ? 'bg-white/10 backdrop-blur-lg shadow-md' // Glass effect with backdrop blur and slight shadow
          : 'bg-transparent' // Transparent background when not scrolled
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-display font-semibold">
            Nails By Teresa
          </Link>
          <div className="flex space-x-6">
            <Link href="/pricing" className="text-lg text-gray-800 hover:text-gray-500 transition-all duration-200">
              Pricing
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
