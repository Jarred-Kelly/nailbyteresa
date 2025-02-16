import React from "react";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { TextAnimate } from "@/components/magicui/text-animate";
import { PhotoGallery } from "@/components/ui/photo-gallery";
import Image1 from "../images/fg-1.jpg";
import Image2 from "../images/fg-2.jpg";
import Image3 from "../images/fg-3.jpg";
import Image4 from "../images/fg-4.jpg";
import Image5 from "../images/fg-9.jpg";
import Image6 from "../images/fg-8.jpg";
import Image7 from "../images/fg-7.jpg";
import Image8 from "../images/fg-10.jpg";

export const Hero = () => {
  const items = [
    { src: Image1 },
    { src: Image2 },
    { src: Image3 },
    { src: Image4 },
    { src: Image5 },
    { src: Image6 },
    { src: Image7 },
    { src: Image8 },
  ];

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
            rgba(250, 250, 250, 1) 100%
          )`,
        }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-16">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left - Text Section */}
          <div className="flex-1 text-left">
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-yellow-400 hover:duration-300">
              <h1 className="font-display text-3xl md:text-4xl font-semibold mb-2 bg-gradient-to-r from-amber-200 via-amber-300 to-amber-200 bg-clip-text text-transparent animate-pulse drop-shadow-[0_0_20px_rgba(255,215,0,1.2)]">
                ✨ Luxury Nail Care ✨
              </h1>
            </AnimatedShinyText>

            <h1 className="animate-fade-up [--animation-delay:400ms] opacity-100 font-display text-5xl md:text-7xl font-semibold mb-6 break-keep">
  <TextAnimate animation="blurInUp" by="character" once>
    Elevate Your Natural Beauty
  </TextAnimate>
</h1>

<p className="animate-fade-up [--animation-delay:600ms] opacity-100 text-text-light max-w-lg mb-8 text-lg break-keep">
  Experience the perfect blend of artistry and care in our luxury nail salon,
  where every visit is a journey to elegance.
</p>
          </div>

          {/* Right - Photo Gallery */}
          <div className="w-full lg:w-auto mt-8 lg:mt-0 lg:ml-12">
            <PhotoGallery items={items} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
