import { motion } from 'framer-motion';

const About = () => {
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
              About Me
            </h1>
            <p className="text-text-secondary font-body text-lg max-w-3xl mx-auto">
              Discover my story, my passion for perfection, and why I'm the trusted choice
              for premium car detailing services in Llanelli and surrounding areas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-heading font-bold text-text-main mb-6">
                My Story
              </h2>
              <div className="space-y-4 text-text-secondary font-body">
                <p>
                  Founded with a passion for automotive excellence, I've been providing premium car
                  detailing services with dedication and precision. What started as a personal passion
                  has grown into a trusted name in professional vehicle care.
                </p>
                <p>
                  I believe that every vehicle deserves to look its absolute best. That's why I
                  combine traditional hand-detailing techniques with modern eco-friendly products
                  to deliver results that exceed expectations every single time.
                </p>
                <p>
                  Based in Llanelli, I travel to provide my services across the area. I take pride
                  in my craft, treating each vehicle as if it were my own. From everyday cars to
                  luxury vehicles and trucks, I bring the same level of dedication and attention
                  to detail to every job.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative h-96 rounded-lg overflow-hidden bg-black/80 flex items-center justify-center"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-black/60" />
              <img
                src="/images/square_logo.JPG"
                alt="James & Co Detailing Logo"
                className="w-64 h-64 object-cover rounded-lg relative z-10 glow-red-strong"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-black to-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl font-heading font-bold text-text-main mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            My Values
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Quality First',
                description: 'I never compromise on the quality of my work or the products I use.',
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: 'Customer Satisfaction',
                description: 'Your happiness with my service is my top priority and measure of success.',
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                ),
              },
              {
                title: 'Environmental Care',
                description: 'I use eco-friendly products that are safe for your vehicle and the planet.',
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                className="bg-black/40 backdrop-blur-sm border border-text-secondary/20 rounded-lg p-6 text-center hover:border-accent/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-accent mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-heading font-bold text-text-main mb-2">
                  {value.title}
                </h3>
                <p className="text-text-secondary font-body text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl font-heading font-bold text-text-main mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Find Us
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map */}
            <motion.div
              className="rounded-lg overflow-hidden h-96 bg-black/40 border border-text-secondary/20"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39706.19873096849!2d-4.187654284717473!3d51.68490937930451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486ef45d3ff59c5b%3A0x4b1c3ef3b9e8f14d!2sLlanelli!5e0!3m2!1sen!2suk!4v1699564800000!5m2!1sen!2suk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="James & Co Detailing - Based in Llanelli"
              />
            </motion.div>

            {/* Address & Hours */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-black/40 backdrop-blur-sm border border-text-secondary/20 rounded-lg p-6">
                <h3 className="text-2xl font-heading font-bold text-text-main mb-4">
                  Location
                </h3>
                <div className="space-y-2 text-text-secondary font-body">
                  <p className="font-medium text-text-main">Based in Llanelli</p>
                  <p>I travel to provide services across the local area</p>
                  <p className="text-accent text-sm mt-3">Mobile detailing service available</p>
                </div>
              </div>

              <div className="bg-black/40 backdrop-blur-sm border border-text-secondary/20 rounded-lg p-6">
                <h3 className="text-2xl font-heading font-bold text-text-main mb-4">
                  Opening Hours
                </h3>
                <div className="space-y-3 text-text-secondary font-body">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
