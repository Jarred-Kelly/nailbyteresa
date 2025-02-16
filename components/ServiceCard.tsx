import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  price,
}) => {
  return (
    <motion.div
      className="bg-white rounded-lg border border-gray-300 shadow-md p-6 w-[300px]"
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 15px 5px rgba(128,0,128,0.7)",
      }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    >
      <h4 className="text-xl font-semibold text-center mb-2">{title}</h4>
      <p className="text-gray-700 mb-4">{description}</p>
      <hr className="border-black mb-4" />
      <p className="text-black text-lg font-bold">{price}</p>
    </motion.div>
  );
};

export default ServiceCard;
