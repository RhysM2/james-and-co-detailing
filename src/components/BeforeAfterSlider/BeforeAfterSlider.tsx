import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';
import { motion } from 'framer-motion';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  altText?: string;
}

const BeforeAfterSlider = ({
  beforeImage,
  afterImage,
  altText = 'Before and after comparison',
}: BeforeAfterSliderProps) => {
  const firstImage = {
    imageUrl: beforeImage,
    alt: `${altText} - Before`,
  };

  const secondImage = {
    imageUrl: afterImage,
    alt: `${altText} - After`,
  };

  return (
    <motion.div
      className="w-full max-w-4xl mx-auto rounded-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ReactBeforeSliderComponent
        firstImage={firstImage}
        secondImage={secondImage}
        delimiterColor="#E50914"
        className="before-after-slider"
      />
    </motion.div>
  );
};

export default BeforeAfterSlider;
