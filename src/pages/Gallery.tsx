import { motion } from 'framer-motion';
import BeforeAfterSlider from '../components/BeforeAfterSlider/BeforeAfterSlider';
import GalleryGrid from '../components/GalleryGrid/GalleryGrid';

const Gallery = () => {
  const beforeAfterPairs = [
    {
      before: '/images/footwell_before.JPG',
      after: '/images/footwell_after.JPG',
      alt: 'Footwell deep clean transformation',
    },
    {
      before: '/images/boot_before.JPG',
      after: '/images/boot_after.JPG',
      alt: 'Boot interior detailing results',
    },
    {
      before: '/images/Wheel_before.JPG',
      after: '/images/Wheel_after.JPG',
      alt: 'Wheel and tire professional cleaning',
    },
  ];

  const galleryImages = [
    { src: '/images/extra2.JPG', alt: 'Professional vehicle care', category: 'Detailing' },
    { src: '/images/extra3.JPG', alt: 'Expert detailing results', category: 'Detailing' },
    { src: '/images/extra4.JPG', alt: 'Quality detailing work', category: 'Detailing' },
    { src: '/images/extra5.JPG', alt: 'Precision detailing service', category: 'Detailing' },
    { src: '/images/extra6.JPG', alt: 'Professional finish', category: 'Detailing' },
    { src: '/images/extra7.JPG', alt: 'Detailing excellence', category: 'Detailing' },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-b from-primary to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl sm:text-6xl font-heading font-bold text-text-main mb-6">
              My Work
            </h1>
            <p className="text-text-secondary font-body text-lg max-w-3xl mx-auto">
              See the transformation for yourself. Browse my gallery of before and after results
              showcasing my premium detailing services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Before/After Sliders Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-heading font-bold text-text-main mb-4">
              Before & After
            </h2>
            <p className="text-text-secondary font-body">
              Drag the slider to see the dramatic difference
            </p>
          </motion.div>

          <div className="space-y-12">
            {beforeAfterPairs.map((pair, index) => (
              <div key={index} className="max-w-4xl mx-auto">
                <BeforeAfterSlider
                  beforeImage={pair.before}
                  afterImage={pair.after}
                  altText={pair.alt}
                />
                <p className="text-center text-text-secondary font-body mt-4 italic">
                  {pair.alt}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid Section */}
      <section className="py-20 bg-gradient-to-b from-black to-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-heading font-bold text-text-main mb-4">
              More From My Portfolio
            </h2>
            <p className="text-text-secondary font-body">
              A showcase of my attention to detail and commitment to excellence
            </p>
          </motion.div>

          <GalleryGrid images={galleryImages} />
        </div>
      </section>

      {/* TikTok CTA Section */}
      <section className="py-16 bg-accent/10 border-y border-accent/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-heading font-bold text-text-main mb-4">
              Follow Me on TikTok
            </h2>
            <p className="text-text-secondary font-body mb-6">
              Watch my latest detailing transformations and behind-the-scenes content
            </p>
            <a
              href="https://www.tiktok.com/@mikejamess99"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white font-body font-medium py-3 px-6 rounded transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
              Visit My TikTok - @mikejamess99
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
