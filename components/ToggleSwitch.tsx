"use client";
import { Menu } from "@headlessui/react";
import { motion } from "framer-motion";
import { Menu as MenuIcon } from "lucide-react";

const categories = [
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

interface ToggleSwitchProps {
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <>
      {/* Hamburger Menu for screens below 600px */}
      <div className="category-hamburger flex items-center justify-between px-4 py-2">
        <Menu as="div" className="relative">
          <Menu.Button className="inline-flex justify-center rounded-md border border-gray-300 shadow-sm p-2 bg-white text-gray-700 hover:bg-gray-50 focus:outline-none">
            <MenuIcon className="h-6 w-6" />
          </Menu.Button>
          <Menu.Items className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-56 origin-top bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
            <div className="py-1">
              {categories.map((category) => (
                <Menu.Item key={category}>
                  {({ active }) => (
                    <button
                      onClick={() => setSelectedCategory(category)}
                      className={`${
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                      } block w-full text-left px-4 py-2 text-sm`}
                    >
                      {category}
                    </button>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Menu>
      </div>

      {/* Full Category List for screens 600px and above */}
      <div className="category-full relative">
        {["All", ...categories].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className="relative px-3 py-2 transition-colors whitespace-nowrap focus:outline-none"
          >
            <span className="relative z-10">{category}</span>
            {selectedCategory === category && (
              <motion.div
                layoutId="highlight"
                className="absolute inset-0 rounded-full"
                style={{ boxShadow: "0 0 8px 2px rgba(128,0,128,0.7)" }}
                transition={{ type: "spring", stiffness: 300, damping: 40 }}
              />
            )}
          </button>
        ))}
      </div>
    </>
  );
};

export default ToggleSwitch;
