// Portfolio Section Component
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import { portfolioAPI } from '../config/api';

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch portfolio items from API
  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const response = await portfolioAPI.getAll();
        if (response.data.success) {
          setProjects(response.data.data);
        }
      } catch (error) {
        console.error('Error fetching portfolio:', error);
        // Fallback to static data if API fails
        setProjects([
          {
            _id: 1,
            title: 'Modern Kitchen Design',
            category: 'Kitchen',
            image: 'https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=600',
          },
          {
            _id: 2,
            title: 'Luxury Living Room',
            category: 'Living Room',
            image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600',
          },
          {
            _id: 3,
            title: 'Contemporary Bedroom',
            category: 'Bedroom',
            image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600',
          },
          {
            _id: 4,
            title: 'Elegant Dining Space',
            category: 'Dining',
            image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600',
          },
          {
            _id: 5,
            title: 'Minimalist Kitchen',
            category: 'Kitchen',
            image: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=600',
          },
          {
            _id: 6,
            title: 'Cozy Bedroom Interior',
            category: 'Bedroom',
            image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600',
          },
          {
            _id: 7,
            title: 'Modern Living Space',
            category: 'Living Room',
            image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600',
          },
          {
            _id: 8,
            title: 'Designer Kitchen',
            category: 'Kitchen',
            image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=600',
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolio();
  }, []);

  if (loading) {
    return (
      <section id="portfolio" className="section-padding bg-gray-50">
        <div className="container text-center">
          <div className="text-xl text-gray-600">Loading portfolio...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="portfolio" className="section-padding bg-gray-50">
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
            Our <span className="text-accent">Portfolio</span>
          </h2>
          <div className="w-24 h-1 bg-orange mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our stunning interior design projects and see how we've
            transformed spaces into beautiful homes.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project._id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg"
              onClick={() => setSelectedImage(project)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-orange text-sm font-semibold mb-2">
                  {project.category}
                </span>
                <h3 className="text-white text-xl font-bold">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="relative max-w-4xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-10 right-0 text-white text-3xl hover:text-orange transition-colors"
                >
                  <FaTimes />
                </button>
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-auto rounded-lg"
                />
                <div className="mt-4 text-center">
                  <span className="text-orange text-sm font-semibold">
                    {selectedImage.category}
                  </span>
                  <h3 className="text-white text-2xl font-bold mt-2">
                    {selectedImage.title}
                  </h3>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;

