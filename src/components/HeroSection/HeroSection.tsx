import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  showCTA?: boolean;
}

const HeroSection = ({ title, subtitle, showCTA = true }: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen flex items-center bg-black overflow-hidden pt-20">
      {/* Background gradient glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-accent/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 w-full py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column - Text Content (Smaller) */}
          <motion.div
            className="lg:col-span-4 space-y-6 px-4 sm:px-6 lg:pl-8 2xl:pl-16"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Eyebrow text */}
            <motion.div
              className="inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-accent font-heading font-bold text-xs sm:text-sm uppercase tracking-wider glow-red">
                Premium Car Detailing
              </span>
            </motion.div>

            {/* Main Title */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-black text-text-main leading-tight">
              {title.split('.').map((part, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                >
                  {part === 'Shine' ? (
                    <span className="text-accent glow-red">{part}.</span>
                  ) : part ? (
                    <span>{part}.</span>
                  ) : null}
                </motion.div>
              ))}
            </h1>

            {/* Subtitle */}
            <motion.p
              className="text-lg sm:text-xl text-text-secondary font-body leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {subtitle}
            </motion.p>

            {/* CTA Buttons */}
            {showCTA && (
              <motion.div
                className="flex flex-col gap-3 pt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <Link to="/contact">
                  <motion.button
                    className="w-full bg-accent hover:bg-accent/90 text-white font-heading font-bold py-4 px-8 text-base transition-all duration-300 glow-red-strong"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Book Now
                  </motion.button>
                </Link>
                <Link to="/services">
                  <motion.button
                    className="w-full bg-transparent border-2 border-accent hover:bg-accent/10 text-text-main font-heading font-bold py-4 px-8 text-base transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Services
                  </motion.button>
                </Link>
              </motion.div>
            )}
          </motion.div>

          {/* Right Column - Video (Larger) */}
          <motion.div
            className="lg:col-span-8 relative px-4 sm:px-6 lg:px-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative aspect-[9/16] sm:aspect-video lg:aspect-[16/10] overflow-hidden bg-black border-2 border-accent/50 lg:border-r-0 glow-red-strong">
              {/* Autoplay Video */}
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/images/landing_page_video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />
            </div>

            {/* Decorative glow elements */}
            <div className="absolute -top-6 -right-6 w-96 h-96 bg-accent/20 rounded-full blur-[120px] -z-10" />
            <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-accent/15 rounded-full blur-[100px] -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
