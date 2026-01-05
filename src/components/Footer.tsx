import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Instagram } from 'lucide-react';
import NewsletterForm from './NewsletterForm';

const Footer = () => {
  return (
    <footer className="py-8 md:py-12 px-4 md:px-8 bg-black border-t border-gray-700">
      <div className="max-w-6xl mx-auto">
        <NewsletterForm />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 mt-8">
          <div className="text-center md:text-left">
            <h3 className="text-white font-medium mb-4 tracking-wide">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-white font-medium mb-4 tracking-wide">Get Involved</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/collaborators" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Collaborate
                </Link>
              </li>
              <li>
                <Link to="/investment" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Invest
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Shop
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-white font-medium mb-4 tracking-wide">Connect</h3>
            <div className="flex justify-center md:justify-start gap-4 mb-4">
              <a
                href="mailto:contact@thisisarchway.com"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email us"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/thisisarchway"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-400 text-sm">New York City, NY</p>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4 text-xs md:text-sm text-gray-400">
            <span>© {new Date().getFullYear()} Archway Productions. All rights reserved.</span>
            <span className="hidden md:inline">•</span>
            <span className="font-light tracking-wide">The Future Is Not Franchised</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;