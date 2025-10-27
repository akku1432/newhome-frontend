// Testimonials Section Component
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import { testimonialAPI } from '../config/api';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch testimonials from API
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        console.log('🔍 Fetching testimonials from API...');
        const response = await testimonialAPI.getAll();
        console.log('✅ API Response:', response.data);
        
        if (response.data.success) {
          setTestimonials(response.data.data);
          console.log('✅ Loaded testimonials:', response.data.data.length);
        } else {
          console.warn('⚠️ API returned success=false');
        }
      } catch (error) {
        console.error('❌ Error fetching testimonials:', error);
        console.error('❌ Error details:', error.response?.data || error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  // Render star rating
  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <FaStar
        key={index}
        className={index < rating ? 'text-orange' : 'text-gray-300'}
      />
    ));
  };

  if (loading) {
    return (
      <section id="testimonials" className="section-padding bg-white">
        <div className="container text-center">
          <div className="text-xl text-gray-600">Loading testimonials...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="testimonials" className="section-padding bg-white">
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
            Client <span className="text-accent">Testimonials</span>
          </h2>
          <div className="w-24 h-1 bg-orange mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See what our satisfied clients have to say about their experience with
            NUHome Interiors.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-orange opacity-20">
                <FaQuoteLeft className="text-5xl" />
              </div>

              {/* Rating */}
              <div className="flex space-x-1 mb-6 pr-20">
                {renderStars(testimonial.rating)}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 mb-6 leading-relaxed italic mt-2 pr-20 text-justify">
                "{testimonial.review}"
              </p>

              {/* Client Info */}
              <div>
                <h4 className="font-bold text-navy text-lg">
                  {testimonial.name}
                </h4>
                {testimonial.location && (
                  <p className="text-gray-600 text-sm">{testimonial.location}</p>
                )}
                {testimonial.projectType && (
                  <p className="text-orange text-sm font-semibold">
                    {testimonial.projectType}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

