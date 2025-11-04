import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' },
    { path: '/about', label: 'About' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-accent/20' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/images/square_logo.JPG"
              alt="James & Co Detailing Logo"
              className="w-12 h-12 rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="text-2xl font-heading font-bold text-text-main">
              James & Co <span className="text-accent glow-red">Detailing</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-text-main hover:text-accent transition-all duration-300 font-body font-medium relative group ${
                  location.pathname === link.path ? 'text-accent' : ''
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full ${
                  location.pathname === link.path ? 'w-full glow-red-subtle' : ''
                }`} />
              </Link>
            ))}
            <Link to="/contact">
              <button className="bg-accent hover:bg-accent/90 text-white font-heading font-bold py-2 px-6 rounded-lg transition-all duration-300 glow-red-strong">
                Book Now
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span
              className={`bg-text-main block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
              }`}
            />
            <span
              className={`bg-text-main block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`bg-text-main block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-primary border-t border-text-secondary/20"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block text-text-main hover:text-accent transition-colors duration-200 font-body font-medium text-lg ${
                    location.pathname === link.path ? 'text-accent' : ''
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default NavBar;
