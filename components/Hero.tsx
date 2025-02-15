import React from "react";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { TextAnimate } from "@/components/magicui/text-animate";
import { PhotoGallery } from "@/components/ui/photo-gallery"; // Ensure this import is correct

export const Hero = () => {
  const items = [
    {
      src: "https://www.shutterstock.com/image-photo/festive-nail-design-white-manicure-600nw-1972810304.jpg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      src: "https://st2.depositphotos.com/4368651/6753/i/450/depositphotos_67531037-stock-photo-floral-design-on-nails.jpg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      src: "https://t3.ftcdn.net/jpg/02/95/66/76/360_F_295667624_xEWO0cGDvGO2ydqOpQaW7KG0Nlh9JXb7.jpg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      src: "https://www.shutterstock.com/image-photo/festive-nail-design-white-manicure-600nw-1972810304.jpg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      src: "https://as2.ftcdn.net/v2/jpg/01/39/95/57/1000_F_139955768_V7oBHOkePCaZa7aFsyQShtytAgJoaNcv.jpg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      src: "https://static.vecteezy.com/system/resources/thumbnails/039/898/953/small/ai-generated-woman-hand-nail-stock-close-up-free-photo.jpg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9so2MmqP3yQb6Ltf7EzyddU6xdiy98b38Lw&s?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      src: "https://nailboo.com/cdn/shop/articles/AdobeStock_299270355_1.jpg?v=1631837474?v=1631837474?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
  ];

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 w-full h-full blur-[160px] z-0"
        style={{
          background: `linear-gradient(
            180deg,
            rgba(255, 240, 255, 1) 0%,
            rgba(253, 242, 255, 0.95) 25%,
            rgba(255, 245, 255, 0.9) 50%,
            rgba(255, 248, 255, 0.85) 75%,
            rgba(255, 255, 255, 1) 100%
          )`,
        }}
      ></div>

      {/* Main Content (moved down using extra top padding) */}
      <div className="relative z-10 container mx-auto px-6 pt-24 pb-12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Text Section */}
          <div className="flex-1 text-left">
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-yellow-400 hover:duration-300">
              <h1 className="font-display text-2xl md:text-3xl font-semibold mb-2 bg-gradient-to-r from-amber-50 via-amber-100 to-amber-50 bg-clip-text text-transparent animate-pulse drop-shadow-[0_0_8px_rgba(255,215,0,0.8)]">
                Luxury Nail Care
              </h1>
            </AnimatedShinyText>

            <h1 className="animate-fade-up [--animation-delay:400ms] opacity-100 font-display text-5xl md:text-7xl font-semibold mb-6">
              <TextAnimate animation="blurInUp" by="character" once>
                Elevate Your Natural Beauty
              </TextAnimate>
            </h1>

            <p className="animate-fade-up [--animation-delay:600ms] opacity-100 text-text-light max-w-lg mb-8 text-lg">
              Experience the perfect blend of artistry and care in our luxury nail salon,
              where every visit is a journey to elegance.
            </p>
          </div>

          {/* Photo Gallery Section */}
          <div className="flex-1 mt-8 md:mt-0 md:ml-12">
            <PhotoGallery items={items} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;