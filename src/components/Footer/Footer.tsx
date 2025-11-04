import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-text-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/images/square_logo.JPG"
                alt="James & Co Detailing Logo"
                className="w-12 h-12 rounded-lg object-cover"
              />
              <div className="text-2xl font-heading font-bold text-text-main">
                James & Co <span className="text-accent">Detailing</span>
              </div>
            </div>
            <p className="text-text-secondary text-sm font-body">
              Premium car detailing services. Precision. Shine. Perfection.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-text-main font-heading font-bold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-text-secondary hover:text-accent transition-colors duration-200 text-sm font-body"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-text-secondary hover:text-accent transition-colors duration-200 text-sm font-body"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-text-secondary hover:text-accent transition-colors duration-200 text-sm font-body"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-text-secondary hover:text-accent transition-colors duration-200 text-sm font-body"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-text-secondary hover:text-accent transition-colors duration-200 text-sm font-body"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div className="space-y-4">
            <h3 className="text-text-main font-heading font-bold text-lg">Connect With Me</h3>
            <div className="space-y-2">
              <p className="text-text-secondary text-sm font-body">
                Phone: <a href="tel:07759245099" className="hover:text-accent transition-colors">07759 245099</a>
              </p>
              <p className="text-text-secondary text-sm font-body">
                Email: <a href="mailto:Mikejamezz1234@gmail.com" className="hover:text-accent transition-colors">Mikejamezz1234@gmail.com</a>
              </p>
            </div>
            <div className="flex space-x-4 mt-4">
              <motion.a
                href="https://www.instagram.com/james_and_co.detailing9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </motion.a>
              <motion.a
                href="https://www.tiktok.com/@mikejamess99"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="TikTok"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </motion.a>
            </div>
          </div>
        </div>

        <div className="border-t border-text-secondary/20 mt-8 pt-8 text-center">
          <p className="text-text-secondary text-sm font-body">
            &copy; {new Date().getFullYear()} James & Co <span className="text-accent">Detailing</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
