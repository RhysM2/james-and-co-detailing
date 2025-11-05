import { motion } from 'framer-motion';

const ContactForm = () => {
  return (
    <motion.div
      className="max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        className="space-y-6"
      >
        {/* Required: Access Key */}
        <input type="hidden" name="access_key" value="8d36f865-bd7f-442d-abad-8f82f05c283c" />

        {/* Email Configuration */}
        <input type="hidden" name="subject" value="New Contact Form Submission - James & Co Detailing" />
        <input type="hidden" name="from_name" value="James & Co Detailing Website" />

        {/* Success Redirect - Stay on same page or use your own */}
        <input type="hidden" name="redirect" value="https://www.jamescodetailing.com/contact?success=true" />

        {/* Spam Protection: Honeypot */}
        <input type="checkbox" name="botcheck" className="hidden" style={{display: 'none'}} />

        {/* hCaptcha Integration (Free) */}
        <div className="h-captcha" data-captcha="true"></div>

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

        {/* Submit Button */}
        <motion.button
          type="submit"
          className="w-full bg-accent hover:bg-accent/90 text-white font-heading font-bold py-4 px-8 rounded-lg transition-all duration-300"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Send Message
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
