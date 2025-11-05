import { motion } from 'framer-motion';
import ServiceBlock from '../components/ServiceBlock/ServiceBlock';

const Services = () => {
  const services = [
    {
      title: 'Exterior Clean',
      description: 'Thorough exterior wash and hand-dry for a spotless finish.',
      carPrice: 45,
      truckPrice: 65,
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      features: [
        'pH-neutral hand wash',
        'Hand-washed rims',
        'Exterior window clean',
        'Tire shine',
        'Spray wax',
      ],
    },
    {
      title: 'Interior Clean',
      description: 'Deep interior clean, including vacuum and wipe-down.',
      carPrice: 40,
      truckPrice: 55,
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      features: [
        'Full vacuum service',
        'All-surface wipe-down',
        'Interior window clean',
      ],
    },
    {
      title: 'Full Valet',
      description: 'Complete interior + exterior valet, best value. Everything your vehicle needs in one comprehensive package.',
      carPrice: 80,
      truckPrice: 105,
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      features: [
        'All exterior services included',
        'All interior services included',
        'Engine bay cleaning',
        'Best value package',
      ],
    },
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
              Our Services
            </h1>
            <p className="text-text-secondary font-body text-lg max-w-3xl mx-auto mb-8">
              Professional car detailing services tailored to your vehicle's needs.
              Choose from our range of packages designed to deliver exceptional results.
            </p>
            <div className="inline-block bg-accent/10 border border-accent rounded-lg px-6 py-3">
              <p className="text-text-main font-body">
                <span className="text-accent font-bold">Note:</span> Prices may vary depending on vehicle condition
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceBlock
                key={index}
                title={service.title}
                description={service.description}
                carPrice={service.carPrice}
                truckPrice={service.truckPrice}
                icon={service.icon}
                features={service.features}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-16 bg-gradient-to-b from-black to-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-black/40 backdrop-blur-sm border border-text-secondary/20 rounded-lg p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-heading font-bold text-text-main mb-6 text-center">
              How to Book
            </h2>
            <p className="text-text-secondary font-body text-center mb-6">
              Bookings are handled via phone or email. Please contact me to schedule your appointment and discuss your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:07759245099"
                className="bg-accent hover:bg-accent/90 text-white font-body font-medium py-3 px-6 rounded transition-all duration-300"
              >
                Call: 07759 245099
              </a>
              <a
                href="mailto:Mikejamezz1234@gmail.com"
                className="bg-accent/10 hover:bg-accent text-text-main hover:text-white border border-accent font-body font-medium py-3 px-6 rounded transition-all duration-300"
              >
                Email: Mikejamezz1234@gmail.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
