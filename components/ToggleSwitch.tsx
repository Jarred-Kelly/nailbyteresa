"use client";
import { motion } from "framer-motion";
import { BorderMovement } from "@/components/ui/moving-border";

const categories = [
  'All',
  'Full Set',
  'Overlay',
  'Fills',
  'Back Fill/Rebalance',
  'Gel Polish',
  'Gel Toes',
  'Nail Polish',
  'Manicure',
  'Mini Pedicure',
  'Additional Services',
  'Waxing',
  'Tinting',
];

interface ToggleSwitchProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="flex mb-8">
        <div className="flex">
          {categories.map((category) => (
                <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`z-10 px-3 py-2 transition-colors whitespace-nowrap ${
                    selectedCategory === category ? 'text-black font-medium' : 'text-gray-600'
                }`}
                style={{ flex: '1 0 auto' }}
                >
                
                {category}
                {selectedCategory === category && (
                    <motion.div
                    layoutId="highlight"
                    className="absolute inset-0 border-2 border-black rounded-full"
                    transition={{ type: 'spring', stiffness: 300, damping: 40 }}
                    />
                )}
                </button>
          ))}
        </div>
      
    </div>
  );
};

export default ToggleSwitch;