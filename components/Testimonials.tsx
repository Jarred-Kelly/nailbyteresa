"use client";
 
import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { cn } from "@/lib/utils";

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
    name: "Demo Pretorius",
    quote: "Baie dankie Teresa vir my pragtie naels!",
    image: "placeholder.svg"
  },
  {
    name: "Tester Liebenberg",
    quote: "Baie dankie vir die pragtige naels en lekker chat.",
    image: "placeholder.svg"
  },
  {
    name: "New R.",
    quote: "Found my go-to nail salon. The ambiance and service are exceptional.",
    image: "placeholder.svg"
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
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{quote}</blockquote>
    </figure>
  );
};

export const Testimonials = () => {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <InfiniteMovingCards pauseOnHover className="[--duration:20s]">
        {firstRow.map((testimonial) => (
          <TestimonialCard key={testimonial.name} img={testimonial.image} name={testimonial.name} quote={testimonial.quote} />
        ))}
      </InfiniteMovingCards>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
};

export default Testimonials;
