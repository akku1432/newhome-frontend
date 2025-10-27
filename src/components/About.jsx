// About Us Section Component
import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaUsers, FaLightbulb } from 'react-icons/fa';

const About = () => {
  const features = [
    {
      icon: <FaAward className="text-4xl text-orange" />,
      title: 'Quality Excellence',
      description: 'Premium materials and craftsmanship in every project',
    },
    {
      icon: <FaUsers className="text-4xl text-orange" />,
      title: 'Expert Team',
      description: 'Experienced designers and skilled craftsmen',
    },
    {
      icon: <FaLightbulb className="text-4xl text-orange" />,
      title: 'Innovative Designs',
      description: 'Modern solutions tailored to your lifestyle',
    },
  ];

  return (
    <section id="about" className="section-padding bg-gray-50">
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
            About <span className="text-accent">NUHome Interiors</span>
          </h2>
          <div className="w-24 h-1 bg-orange mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            NUHome Interiors is a leading interior design company in India,
            dedicated to creating beautiful, functional spaces that reflect your
            personality and lifestyle.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h3 className="text-3xl font-bold text-navy mb-6">
              Our Mission & Vision
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              At NUHome Interiors, our mission is to transform ordinary spaces into
              extraordinary homes. We believe that great design should be accessible
              to everyone, and we're committed to delivering exceptional quality at
              competitive prices.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              With years of experience in the interior design industry, our team of
              expert designers and craftsmen work closely with you to understand your
              vision and bring it to life. From contemporary modular kitchens to
              elegant living spaces, we handle every aspect of your interior project
              with precision and care.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our comprehensive services include modular kitchens, bedroom interiors,
              living room designs, false ceilings, wall designs, lighting solutions,
              and custom furniture. We use only premium materials and the latest design
              trends to ensure your home stands out.
            </p>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative h-96 bg-gray-300 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800"
                alt="Interior Design"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent opacity-50"></div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h4 className="text-xl font-bold text-navy mb-3">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

