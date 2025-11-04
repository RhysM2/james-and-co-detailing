import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm/ContactForm';

const Contact = () => {
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
              Get In Touch
            </h1>
            <p className="text-text-secondary font-body text-lg max-w-3xl mx-auto">
              Ready to give your vehicle the premium treatment it deserves?
              Contact me today to schedule your appointment. Based in Llanelli, I travel across the local area to provide mobile detailing services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Phone */}
            <motion.div
              className="bg-black/40 backdrop-blur-sm border border-text-secondary/20 rounded-lg p-6 text-center hover:border-accent/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="text-accent mb-4 flex justify-center">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-text-main mb-2">
                Call Me
              </h3>
              <p className="text-text-secondary font-body mb-4">
                Speak to me directly
              </p>
              <a
                href="tel:07759245099"
                className="text-accent hover:text-accent/80 font-body font-medium transition-colors"
              >
                07759 245099
              </a>
            </motion.div>

            {/* Email */}
            <motion.div
              className="bg-black/40 backdrop-blur-sm border border-text-secondary/20 rounded-lg p-6 text-center hover:border-accent/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-accent mb-4 flex justify-center">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-text-main mb-2">
                Email Me
              </h3>
              <p className="text-text-secondary font-body mb-4">
                Send me a message
              </p>
              <a
                href="mailto:Mikejamezz1234@gmail.com"
                className="text-accent hover:text-accent/80 font-body font-medium transition-colors"
              >
                Mikejamezz1234@gmail.com
              </a>
            </motion.div>

            {/* Social */}
            <motion.div
              className="bg-black/40 backdrop-blur-sm border border-text-secondary/20 rounded-lg p-6 text-center hover:border-accent/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="text-accent mb-4 flex justify-center space-x-4">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold text-text-main mb-2">
                Follow Me
              </h3>
              <p className="text-text-secondary font-body mb-4">
                See my latest work
              </p>
              <div className="space-y-2">
                <a
                  href="https://www.instagram.com/james_and_co.detailing9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent/80 font-body font-medium transition-colors block"
                >
                  Instagram: @james_and_co.detailing9
                </a>
                <a
                  href="https://www.tiktok.com/@mikejamess99"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent/80 font-body font-medium transition-colors block"
                >
                  TikTok: @mikejamess99
                </a>
              </div>
            </motion.div>
          </div>

          {/* Info Banner */}
          <motion.div
            className="bg-accent/10 border border-accent rounded-lg px-6 py-4 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <p className="text-text-main font-body text-center">
              <span className="text-accent font-bold">Note:</span> Bookings are handled via phone or email.
              Please contact me to schedule your appointment.
            </p>
          </motion.div>

          {/* Contact Form */}
          <div className="mb-12">
            <motion.h2
              className="text-3xl font-heading font-bold text-text-main mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Send Me a Message
            </motion.h2>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Business Hours Section */}
      <section className="py-16 bg-gradient-to-b from-black to-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-black/40 backdrop-blur-sm border border-text-secondary/20 rounded-lg p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <h2 className="text-3xl font-heading font-bold text-text-main mb-6 text-center">
              Business Hours
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center border-b border-text-secondary/20 pb-3">
                <span className="text-text-main font-body font-medium">Monday - Friday</span>
                <span className="text-text-secondary font-body">8:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between items-center border-b border-text-secondary/20 pb-3">
                <span className="text-text-main font-body font-medium">Saturday</span>
                <span className="text-text-secondary font-body">9:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between items-center border-b border-text-secondary/20 pb-3">
                <span className="text-text-main font-body font-medium">Sunday</span>
                <span className="text-text-secondary font-body">Closed</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
