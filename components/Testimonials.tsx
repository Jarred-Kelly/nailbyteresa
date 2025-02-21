"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { cn } from "@/lib/utils";
import Image from 'next/image';


const testimonials = [
  {
    name: "Wilma Liebenberg",
    quote: "Baie dankie vir die pragtige naels en lekker chat.",
    image: "nails_1.jpg", 
  },
  {
    name: "Louanne Pretorius",
    quote: "Baie dankie vir my pragtige naels",
    image: "nails_2.jpg",
  },
  {
    name: "Trish Rchardson",
    quote: "Thank you very much for the spoil. Best pedicure I have ever had, such attention to detail",
    image: "nails_7.jpg", 
  },
  {
    name: "Jade Elizabeth De Bruyn",
    quote: "I have never been disappointed since day 1 ! I've been with Teresa for more than a year now and change my design every 3 weeks! Could not ask for a better tech!!",
    image: "nails_8.jpg", 
  },
  {
    name: "Wilma Liebenberg",
    quote: "Just in love with the new nails",
    image: "nails_4.jpg",
  },
  {
    name: "Louanne Pretorius",
    quote: "Baie dankie weereens vir die pragtige naels. Jy het regtig waar n wonderlike talent",
    image: "nails_5.jpg",
  },
  {
    name: "Candice van der Walt",
    quote: "Thank you for my beautifull new nail, I just love them. Perfect monthly spiol",
    image: "nails_6.jpg",
  },
];

const firstRow = testimonials.slice(0, testimonials.length / 2);

const TestimonialCard = ({
  img,
  name,
  quote,
}: {
  img: string;
  name: string;
  quote: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4 transform transition-transform duration-300 hover:scale-105",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-col items-center">
        <figcaption className="text-sm font-medium dark:text-white">
          {name}
        </figcaption>
        <blockquote className="mt-2 text-sm text-center">{quote}</blockquote>
        <Image
          alt={name}
          src={`/images/${img}`}
          width={150}
          height={150}
          className="mt-4 rounded-lg"
        />
      </div>
    </figure>
  );
};


export const Testimonials = () => {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden pb-4">
      <InfiniteMovingCards pauseOnHover className="[--duration:20s]">
        {firstRow.map((testimonial) => (
          <TestimonialCard
            key={testimonial.name}
            img={testimonial.image}
            name={testimonial.name}
            quote={testimonial.quote}
          />
        ))}
      </InfiniteMovingCards>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
};

export default Testimonials;
