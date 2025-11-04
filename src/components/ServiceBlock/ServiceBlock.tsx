import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ServiceBlockProps {
  title: string;
  description: string;
  carPrice: number;
  truckPrice: number;
  icon?: React.ReactNode;
  features?: string[];
}

const ServiceBlock = ({
  title,
  description,
  carPrice,
  truckPrice,
  icon,
  features,
}: ServiceBlockProps) => {
  return (
    <motion.div
      className="bg-black/40 backdrop-blur-sm border border-text-secondary/20 rounded-lg p-6 hover:border-accent/50 transition-all duration-300 flex flex-col h-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      {/* Icon */}
      {icon && (
        <div className="mb-4 text-accent">
          {icon}
        </div>
      )}

      {/* Title */}
      <h3 className="text-2xl font-heading font-bold text-text-main mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-text-secondary font-body mb-6">
        {description}
      </p>

      {/* Pricing */}
      <div className="mb-6 space-y-3">
        <div className="flex justify-between items-center border-b border-text-secondary/20 pb-2">
          <span className="text-text-secondary font-body">Car</span>
          <span className="text-2xl font-heading font-bold text-accent">
            £{carPrice}
          </span>
        </div>
        <div className="flex justify-between items-center border-b border-text-secondary/20 pb-2">
          <span className="text-text-secondary font-body">Truck</span>
          <span className="text-2xl font-heading font-bold text-accent">
            £{truckPrice}
          </span>
        </div>
      </div>

      {/* Features */}
      {features && features.length > 0 && (
        <ul className="space-y-2 mb-6 flex-grow">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start text-text-secondary text-sm font-body">
              <svg
                className="w-5 h-5 text-accent mr-2 flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      )}

      {/* CTA Button */}
      <Link to="/contact" className="mt-auto">
        <motion.button
          className="w-full bg-accent/10 hover:bg-accent text-text-main border border-accent font-body font-medium py-3 px-6 rounded transition-all duration-300"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Contact to Book
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default ServiceBlock;
