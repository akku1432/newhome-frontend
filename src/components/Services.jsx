// Services Section Component
import React from 'react';
import { motion } from 'framer-motion';
import {
  FaKitchenSet,
  FaCouch,
  FaBed,
  FaPaintRoller,
  FaLightbulb,
  FaTableCells,
  FaDoorOpen,
  FaRulerCombined,
} from 'react-icons/fa6';

const Services = () => {
  const services = [
    {
      icon: <FaKitchenSet className="text-5xl" />,
      title: 'Modular Kitchen',
      description:
        'Modern, functional kitchen designs with premium fittings and smart storage solutions.',
    },
    {
      icon: <FaCouch className="text-5xl" />,
      title: 'Living Room Design',
      description:
        'Elegant living spaces that combine comfort with contemporary aesthetics.',
    },
    {
      icon: <FaBed className="text-5xl" />,
      title: 'Bedroom Interiors',
      description:
        'Peaceful and stylish bedroom designs with custom wardrobes and storage.',
    },
    {
      icon: <FaTableCells className="text-5xl" />,
      title: 'False Ceiling',
      description:
        'Creative ceiling designs with modern lighting integration and patterns.',
    },
    {
      icon: <FaPaintRoller className="text-5xl" />,
      title: 'Wall Painting & Design',
      description:
        'Premium wall finishes, textures, and artistic designs for every room.',
    },
    {
      icon: <FaLightbulb className="text-5xl" />,
      title: 'Lighting Solutions',
      description:
        'Comprehensive lighting design including ambient, task, and accent lighting.',
    },
    {
      icon: <FaDoorOpen className="text-5xl" />,
      title: 'Custom Furniture',
      description:
        'Bespoke furniture designed and crafted to match your space perfectly.',
    },
    {
      icon: <FaRulerCombined className="text-5xl" />,
      title: 'Complete Home Interiors',
      description:
        'End-to-end interior solutions for your entire home with seamless execution.',
    },
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-secondary mb-4">
            Our <span className="text-accent">Services</span>
          </h2>
          <div className="w-24 h-1 bg-orange mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive interior design solutions tailored to transform your space
            into a beautiful, functional home.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card group"
            >
              <div className="text-orange group-hover:text-navy transition-colors duration-300 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <a href="#contact" className="btn-primary text-lg">
            Request a Quote
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

