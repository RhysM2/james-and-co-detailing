import { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const formData = new FormData(e.currentTarget);
      formData.append("access_key", "8d36f865-bd7f-442d-abad-8f82f05c283c");

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        e.currentTarget.reset();
        // Reset hCaptcha
        if (window.hcaptcha) {
          window.hcaptcha.reset();
        }
      } else {
        setSubmitStatus('error');
        setErrorMessage(data.message || 'Failed to send message. Please try again.');
        console.error('Web3Forms error:', data);
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-text-main font-body font-medium mb-2">
          Name <span className="text-accent">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-3 bg-black/40 border border-text-secondary/20 rounded-lg text-text-main placeholder-text-secondary/50 focus:outline-none focus:border-accent transition-colors duration-200"
          placeholder="Your name"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-text-main font-body font-medium mb-2">
          Email <span className="text-accent">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 bg-black/40 border border-text-secondary/20 rounded-lg text-text-main placeholder-text-secondary/50 focus:outline-none focus:border-accent transition-colors duration-200"
          placeholder="your.email@example.com"
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-text-main font-body font-medium mb-2">
          Phone <span className="text-accent">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          className="w-full px-4 py-3 bg-black/40 border border-text-secondary/20 rounded-lg text-text-main placeholder-text-secondary/50 focus:outline-none focus:border-accent transition-colors duration-200"
          placeholder="+44 123 456 7890"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-text-main font-body font-medium mb-2">
          Message <span className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="w-full px-4 py-3 bg-black/40 border border-text-secondary/20 rounded-lg text-text-main placeholder-text-secondary/50 focus:outline-none focus:border-accent transition-colors duration-200 resize-none"
          placeholder="Tell me about your vehicle and what services you're interested in..."
        />
      </div>

      {/* hCaptcha */}
      <div className="flex justify-center">
        <div
          className="h-captcha"
          data-sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
          data-theme="dark"
        ></div>
      </div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={isSubmitting}
        className={`w-full bg-accent hover:bg-accent/90 text-white font-heading font-bold py-4 px-8 rounded-lg transition-all duration-300 ${
          isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </motion.button>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <motion.div
          role="alert"
          aria-live="polite"
          className="bg-green-500/10 border border-green-500 text-green-500 px-4 py-3 rounded-lg text-center font-body"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Message sent successfully! I'll get back to you soon.
        </motion.div>
      )}

      {submitStatus === 'error' && (
        <motion.div
          role="alert"
          aria-live="assertive"
          className="bg-red-500/10 border border-red-500 text-red-500 px-4 py-3 rounded-lg text-center font-body"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {errorMessage || 'Something went wrong. Please try again or contact me directly.'}
        </motion.div>
      )}
    </motion.form>
  );
};

// Type declaration for hcaptcha
declare global {
  interface Window {
    hcaptcha: {
      reset: () => void;
    };
  }
}

export default ContactForm;
