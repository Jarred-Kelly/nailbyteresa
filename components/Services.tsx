"use client";

import Link from "next/link";
import { useState } from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { PulsatingButton } from "@/components/magicui/pulsating-button";

const serviceCategories = [
  {
    title: "Full Set",
    description: "Complete nail extension services for a flawless look.",
    link: "/pricing?category=full-set",
  },
  {
    title: "Overlay",
    description: "Enhance your natural nails with a durable overlay.",
    link: "/pricing?category=overlay",
  },
  {
    title: "Fills",
    description: "Maintain your nails with regular fill-ins.",
    link: "/pricing?category=fills",
  },
  {
    title: "Back Fill/Rebalance",
    description: "Keep your nails looking fresh with back fills.",
    link: "/pricing?category=back-fill-rebalance",
  },
  {
    title: "Gel Polish",
    description: "Long-lasting gel polish for vibrant nails.",
    link: "/pricing?category=gel-polish",
  },
  {
    title: "Gel Toes",
    description: "Treat your toes to a gel polish for durability.",
    link: "/pricing?category=gel-toes",
  },
  {
    title: "Nail Polish",
    description: "Classic nail polish application in various colors.",
    link: "/pricing?category=nail-polish",
  },
  {
    title: "Manicure",
    description: "Pamper your hands with a relaxing manicure.",
    link: "/pricing?category=manicure",
  },
  {
    title: "Mini Pedicure",
    description: "Quick and refreshing pedicure for busy schedules.",
    link: "/pricing?category=mini-pedicure",
  },
  {
    title: "Additional Services",
    description: "Explore other nail care services we offer.",
    link: "/pricing?category=additional",
  },
  {
    title: "Waxing",
    description: "Professional waxing services for smooth skin.",
    link: "/pricing?category=waxing",
  },
  {
    title: "Tinting",
    description: "Enhance your brows and lashes with tinting.",
    link: "/pricing?category=tinting",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-semibold mt-2">
            Explore Our Service Categories
          </h2>
        </div>
        <div className="max-w-8xl mx-auto px-8">
          <HoverEffect items={serviceCategories} />
        </div>
        <div className="text-center mt-8">
          <Link href="/pricing">
            <PulsatingButton className="inline-block bg-purple-600 text-white text-lg font-semibold py-2 px-6 rounded-lg">
              Learn More
            </PulsatingButton >
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
