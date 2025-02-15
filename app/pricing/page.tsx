"use client";

import { Card } from "@/components/ui/card";
import { motion } from 'framer-motion';
import { useState } from 'react';
import styled from '@emotion/styled';
import ToggleSwitch from '@/components/ToggleSwitch';
import ServiceCard from '@/components//ServiceCard';

const services = [
  {
    category: "Full Set",
    items: [
      {
        title: "Tips/Sculpture (Gel/Acrylic)",
        price: "R420",
        description: "Complete nail set with artistic designs included. Get a flawless, long-lasting set of nails using either Gel or Acrylic materials.",
      },
    ],
  },
  {
    category: "Overlay",
    items: [
      {
        title: "Overlay on Natural Nails",
        price: "R330",
        description: "Enhance your natural nails with a protective overlay that adds strength and beauty, without the use of extensions.",
      },
    ],
  },
  {
    category: "Fills",
    items: [
      {
        title: "2/3/4 Week Fill",
        price: "R230",
        description: "Refresh and maintain your nails with a fill, including color and any necessary touch-ups to ensure your nails stay stunning.",
      },
    ],
  },
  {
    category: "Back Fill/Rebalance",
    items: [
      {
        title: "2/3/4 Week Back Fill",
        price: "R360",
        description: "Full rebalance, including color refresh and intricate nail art to bring back your nails to perfection after growth.",
      },
    ],
  },
  {
    category: "Gel Polish",
    items: [
      {
        title: "Gelit Overlay with Builder Gel",
        price: "R260",
        description: "Strengthen your nails with a builder gel overlay while adding creative, artistic designs to express your personal style.",
      },
      {
        title: "Polygel on Natural Nails",
        price: "R300",
        description: "A lightweight extension system that’s durable and flexible, combined with stunning nail art to complete your look.",
      },
    ],
  },
  {
    category: "Gel Toes",
    items: [
      {
        title: "Color/Glitter/French",
        price: "R200",
        description: "Gel polish applied to your toes for a long-lasting finish, available in various colors or sparkling glitter options.",
      },
      {
        title: "Acrylic Overlay",
        price: "R250",
        description: "Acrylic protection for your toes that ensures strength and durability, perfect for added protection and style.",
      },
    ],
  },
  {
    category: "Nail Polish",
    items: [
      {
        title: "Hand Polish",
        price: "R150",
        description: "Classic lacquer application for a polished, elegant look on your nails.",
      },
      {
        title: "Toe Polish",
        price: "R100",
        description: "Standard pedicure polish with a classic finish for your toes.",
      },
    ],
  },
  {
    category: "Manicure",
    items: [
      {
        title: "Basic Manicure",
        price: "R200",
        description: "A basic manicure with soaking, filing, scrub, and a fresh polish for a simple yet beautiful finish.",
      },
    ],
  },
  {
    category: "Mini Pedicure",
    items: [
      {
        title: "Gel Pedicure",
        price: "R400",
        description: "A luxurious gel pedicure with a paraffin wax treatment and relaxing foot massage.",
      },
      {
        title: "Classic Pedicure",
        price: "R300",
        description: "A rejuvenating classic pedicure with regular polish and soothing foot massage.",
      },
    ],
  },
  {
    category: "Additional Services",
    items: [
      {
        title: "Soak Treatment",
        price: "R50",
        description: "A nourishing soak for your nails and cuticles to restore moisture and hydration.",
      },
      {
        title: "Buff & Finish",
        price: "R150",
        description: "Perfect your nails with a buff and glossy finish to make your nails shine like new.",
      },
      {
        title: "Single Tip/Sculpture",
        price: "R40",
        description: "A quick fix for a single nail, whether you need a tip or a sculpture.",
      },
      {
        title: "Per Nail Overlay",
        price: "R35",
        description: "Apply an overlay to each individual nail for strength and a flawless look.",
      },
    ],
  },
  {
    category: "Waxing",
    items: [
      {
        title: "Lip & Brow",
        price: "R70",
        description: "Professional waxing for a smooth and clean brow and lip area.",
      },
      {
        title: "Underarms",
        price: "R80",
        description: "Effective and gentle underarm waxing for long-lasting results.",
      },
      {
        title: "Knuckles/Toes",
        price: "R50",
        description: "Waxing services for knuckles and toes for a smooth, hair-free look.",
      },
    ],
  },
  {
    category: "Tinting",
    items: [
      {
        title: "Eyebrows",
        price: "R50",
        description: "Tint your eyebrows for a fuller, defined look.",
      },
      {
        title: "Eyelashes",
        price: "R100",
        description: "Get your eyelashes tinted for a darker, more defined look that enhances your eyes.",
      },
    ],
  },
];

const Section = styled.section`
  padding: 40px 0;
  background-color: #f9f9f9;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

interface GridProps {
  isAll?: boolean;
}

const Grid = styled.div<GridProps>`
  display: grid;
  gap: 20px;
  justify-content: center;
  grid-template-columns: ${({ isAll }) =>
    isAll ? "repeat(3, 300px)" : "repeat(auto-fit, 300px)"};
`;

const Pricing = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // For filtering the items by search term
  const filteredServices = services.map((category) => ({
    ...category,
    items: category.items.filter((service) =>
      service.title.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  }));

  return (
    <Section id="pricing">
      <Container>
        <div className="text-center mb-16">
          <span className="text-accent uppercase tracking-wider text-sm font-medium">
            Our Pricing
          </span>
          <h2 className="font-display text-4xl font-semibold mt-2">
            Full Service Pricing
          </h2>
          <input
            type="text"
            placeholder="Search services..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="mt-4 p-2 border border-gray-300 rounded"
          />
        </div>
        <ToggleSwitch
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <div className="space-y-16">
          {selectedCategory === 'All' ? (
            // Flatten all items into one grid with 3 cards per row
            <Grid isAll>
              {filteredServices.flatMap(category => category.items).map((service) => (
                <ServiceCard
                  key={`${service.title}-${service.price}`}
                  title={service.title}
                  description={service.description}
                  price={service.price}
                />
              ))}
            </Grid>
          ) : (
            // Render category sections with auto-fit grid
            filteredServices
              .filter(category => category.category === selectedCategory)
              .map((category) => (
                <div key={category.category}>
                  <h3 className="text-2xl font-display font-semibold mb-8 text-center">
                    {category.category}
                  </h3>
                  <Grid>
                    {category.items.map((service) => (
                      <ServiceCard
                        key={`${service.title}-${service.price}`}
                        title={service.title}
                        description={service.description}
                        price={service.price}
                      />
                    ))}
                  </Grid>
                </div>
              ))
          )}
        </div>
      </Container>
    </Section>
  );
};

export default Pricing;