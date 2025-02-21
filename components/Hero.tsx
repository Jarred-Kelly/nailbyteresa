import React from "react";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { TextAnimate } from "@/components/magicui/text-animate";
import { PhotoGallery } from "@/components/ui/photo-gallery";
import Image from "next/image";
import Link from 'next/link';

import image1 from '/public/images/fg-1.jpg';
import image2 from '/public/images/fg-2.jpg';
import image3 from '/public/images/fg-3.jpg';
import image4 from '/public/images/fg-4.jpg';
import image5 from '/public/images/fg-9.jpg';
import image6 from '/public/images/fg-8.jpg';
import image7 from '/public/images/fg-7.jpg';
import image8 from '/public/images/fg-10.jpg';

export const Hero = () => {
  const items = [
    { src: image1 },
    { src: image2 },
    { src: image3 },
    { src: image4 },
    { src: image5 },
    { src: image6 },
    { src: image7 },
    { src: image8 },
  ];

  // Select the first three images for smaller screens
  const smallScreenItems = items.slice(0, 3);

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center text-left overflow-hidden">
      {/* Gradient Background */}
      <div
        className="absolute inset-0 w-full h-full z-0"
        style={{
          background: `linear-gradient(
            to bottom,
            rgba(122, 11, 192, 0.7) 0%,
            rgba(141, 35, 207, 0.6) 25%,
            rgba(174, 85, 231, 0.5) 50%,
            rgba(196, 126, 240, 0.4) 75%,
            rgba(250, 250, 250, 0.2) 100%
          )`,
        }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 pt-30 lg:-mb-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left - Text Section */}
          <div className="flex-1 text-left min-w-0 lg:pt-0 pt-20">
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-yellow-400 hover:duration-300">
              <h1 className="font-display text-3xl md:text-4xl font-semibold mb-2 bg-gradient-to-r from-amber-200 via-amber-300 to-amber-200 bg-clip-text text-transparent animate-pulse drop-shadow-[0_0_20px_rgba(255,215,0,1.2)] whitespace-nowrap">
              Luxury Nail Care
              </h1>
            </AnimatedShinyText>

            <h1 className="animate-fade-up [--animation-delay:400ms] opacity-100 font-display text-5xl md:text-7xl font-semibold mb-6 break-words hyphens-auto">
              <span className="block whitespace-nowrap">
                <TextAnimate animation="blurInUp" by="character" once>
                  Elevate Your 
                </TextAnimate>
              </span>
              <span className="block whitespace-nowrap">
                <TextAnimate animation="blurInUp" by="character" once>
                  Natural Beauty
                </TextAnimate>
              </span>
            </h1>

            <p className="animate-fade-up [--animation-delay:600ms] opacity-100 text-text-light max-w-lg mb-8 text-lg break-words">
              Experience the perfect blend of artistry and care in our luxury nail salon,
              where every visit is a journey to elegance.
            </p>
          </div>

          {/* Right - Photo Gallery */}
          <div className="w-full lg:w-auto lg:flex-1 mt-8 lg:mt-0 lg:ml-12">
            {/* Full Photo Gallery for large screens */}
            <div className="hidden lg:block">
              <PhotoGallery items={items} />
            </div>
            {/* Three responsive images for medium and smaller screens */}
            <div className="block lg:hidden grid grid-cols-1 sm:grid-cols-3 gap-4">
              {smallScreenItems.map((image, index) => (
                <div key={index} className="relative w-full h-48">
                  <Image
                    src={image.src}
                    alt={`image-${index}`}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>        
        <div className="flex justify-center align-center pt-10">
          <Link href="/gallery" className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg sm:pt-20">
            <ShimmerButton>
              My Work
            </ShimmerButton >
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
