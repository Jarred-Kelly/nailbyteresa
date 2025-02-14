"use client";
import { useState, useEffect, useRef } from 'react';
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    name: "Louanne Pretorius",
    quote: "Baie dankie Teresa vir my pragtie naels!",
    image: "placeholder.svg"
  },
  {
    name: "Wilma Liebenberg",
    quote: "Baie dankie vir die pragtige naels en lekker chat.",
    image: "placeholder.svg"
  },
  {
    name: "Jessica R.",
    quote: "Found my go-to nail salon. The ambiance and service are exceptional.",
    image: "placeholder.svg"
  },
  {
    name: "Ashley T.",
    quote: "Love how they always stay up-to-date with the latest trends.",
    image: "placeholder.svg"
  },
  {
    name: "Maria C.",
    quote: "Best nail art in the city! They're true artists.",
    image: "placeholder.svg"
  },
  {
    name: "Linda K.",
    quote: "Consistently excellent service and stunning results.",
    image: "placeholder.svg"
  },
  {
    name: "Patricia B.",
    quote: "Their attention to hygiene and safety is impressive.",
    image: "placeholder.svg"
  },
  {
    name: "Rachel D.",
    quote: "The gel manicures last longer than any other salon I've tried.",
    image: "placeholder.svg"
  },
  {
    name: "Sophie M.",
    quote: "Love the relaxing atmosphere and professional service.",
    image: "placeholder.svg"
  },
  {
    name: "Hannah W.",
    quote: "Amazing nail art designs that always get compliments!",
    image: "placeholder.svg"
  }
];

export const Testimonials = () => {
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isPaused && scrollRef.current) {
      const scrollElement = scrollRef.current;
      let scrollAmount = 0;
      const distance = 1; // Pixels to scroll per frame
      
      const scroll = () => {
        if (!isPaused && scrollElement) {
          scrollAmount += distance;
          scrollElement.scrollLeft = scrollAmount;

          // Reset scroll position when reaching the end
          if (scrollAmount >= (scrollElement.scrollWidth - scrollElement.clientWidth)) {
            scrollAmount = 0;
          }
        }
      };

      const intervalId = setInterval(scroll, 30); // Adjust speed by changing interval

      return () => clearInterval(intervalId);
    }
  }, [isPaused]);

  return (
    <section id="testimonials" className="py-24 bg-primary/10 overflow-hidden">
      <div className="mb-16 text-center">
        <span className="text-accent uppercase tracking-wider text-sm font-medium">
          Reviews
        </span>
        <h2 className="font-display text-4xl font-semibold mt-2">
          Client Stories
        </h2>
      </div>
      
      <div 
        ref={scrollRef}
        className="flex overflow-x-hidden gap-8 px-8"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Double the testimonials to create seamless loop */}
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[300px] transition-all duration-300 hover:scale-105 hover:-translate-y-2"
          >
            <Card className="bg-white p-6 shadow-sm h-full">
              <div className="flex flex-col items-center text-center h-full">
                <img
                  src={testimonial.image}
                  alt="Nail Design"
                  className="w-full h-[200px] object-cover rounded-lg mb-4"
                />
                <p className="font-medium text-lg mb-2">{testimonial.name}</p>
                <p className="text-text-light italic text-sm">
                  "{testimonial.quote}"
                </p>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
