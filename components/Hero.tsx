"use client";

import { useEffect, useRef } from 'react';

export const Hero = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.scrollY;
        parallaxRef.current.style.setProperty('--scroll-offset', `${scrolled * 0.3}px`);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden
                      bg-gradient-to-b from-primary/20 to-white">
      <div ref={parallaxRef} className="parallax container mx-auto px-6 pt-32 pb-16 text-center">
        <span className="inline-block animate-fade-up [--animation-delay:200ms] opacity-0
                       text-accent uppercase tracking-wider text-sm font-medium mb-4">
          Luxury Nail Care
        </span>
        <h1 className="animate-fade-up [--animation-delay:400ms] opacity-0
                     font-display text-5xl md:text-7xl font-semibold mb-6">
          Elevate Your <br />Natural Beauty
        </h1>
        <p className="animate-fade-up [--animation-delay:600ms] opacity-0
                    text-text-light max-w-lg mx-auto mb-8 text-lg">
          Experience the perfect blend of artistry and care in our luxury nail salon,
          where every visit is a journey to elegance.
        </p>
        <a href="#book"
           className="animate-fade-up [--animation-delay:800ms] opacity-0
                    inline-block bg-accent hover:bg-accent-lighter text-white
                    px-8 py-3 rounded-full transition-colors duration-200">
          Contact Us
        </a>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32
                    bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

export default Hero;
