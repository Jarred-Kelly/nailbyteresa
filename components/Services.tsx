"use client";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState, useEffect } from "react";
import { MenuIcon, XIcon } from "lucide-react";

const serviceCategories = [
  "Full Set",
  "Overlay",
  "Fills",
  "Back Fill/Rebalance",
  "Gel Polish",
  "Gel Toes",
  "Nail Polish",
  "Manicure",
  "Mini Pedicure",
  "Additional Services",
  "Waxing",
  "Tinting",
];

export const Services = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 950);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <span className="text-accent uppercase tracking-wider text-sm font-medium">
            Our Services
          </span>
          <h2 className="font-display text-4xl font-semibold mt-2">
            Explore Our Service Categories
          </h2>
        </div>        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((category, index) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`service-card transform transition-all duration-300 hover:scale-105 hover:shadow-lg p-4 rounded-lg border ${
                selectedCategory === category ? "bg-purple-200 shadow-lg" : ""
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <Card>
                <h3 className="text-2xl font-display font-semibold mb-4 text-center">
                  {category}
                </h3>
                <p className="text-center text-lg">
                  Discover our {category} services and find the perfect fit for you.
                </p>
              </Card>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;