import { motion } from 'framer-motion';

interface GalleryImage {
  src: string;
  alt: string;
  category?: string;
}

interface GalleryGridProps {
  images: GalleryImage[];
}

const GalleryGrid = ({ images }: GalleryGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((image, index) => (
        <motion.div
          key={index}
          className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.02 }}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-4">
              {image.category && (
                <span className="inline-block bg-accent text-white px-3 py-1 rounded-full text-sm font-body font-medium mb-2">
                  {image.category}
                </span>
              )}
              <p className="text-text-main font-body text-sm">
                {image.alt}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default GalleryGrid;
