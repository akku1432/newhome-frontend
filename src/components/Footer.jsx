// Footer Component
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaFacebook />, url: 'https://facebook.com', label: 'Facebook' },
    { icon: <FaInstagram />, url: 'https://instagram.com', label: 'Instagram' },
    { icon: <FaTwitter />, url: 'https://twitter.com', label: 'Twitter' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <FaYoutube />, url: 'https://youtube.com', label: 'YouTube' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/logo-icon.png" 
                alt="NUHome Interiors" 
                className="h-12 w-12 object-contain"
              />
              <span className="text-white font-bold text-xl">
                NUHome <span className="text-orange">Interiors</span>
              </span>
            </div>
            <p className="text-gray-300 mb-4">
              Transforming spaces into dream homes with innovative design solutions
              and exceptional craftsmanship.
            </p>
            <div className="flex items-center text-gray-300 text-sm">
              <FaMapMarkerAlt className="text-orange mr-2 flex-shrink-0" />
              <span>Hyderabad | Vizag | Bangalore</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-orange transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-gray-300">
                <FaPhoneAlt className="text-orange mr-3 flex-shrink-0" />
                <a href="tel:+916300724553" className="hover:text-orange transition-colors">+91 6300724553</a>
              </div>
              <div className="flex items-center text-gray-300">
                <FaEnvelope className="text-orange mr-3 flex-shrink-0" />
                <a href="mailto:nuhomeinteriors9@gmail.com" className="hover:text-orange transition-colors">nuhomeinteriors9@gmail.com</a>
              </div>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-gray-300 hover:text-orange transition-colors duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-300">
            &copy; {currentYear} NUHome Interiors. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Designed with ❤️ for transforming spaces
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

