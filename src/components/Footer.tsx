import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Instagram, Newspaper } from 'lucide-react';
import NewsletterForm from './NewsletterForm';

const Footer = () => {
  return (
    <footer className="py-16 md:py-24 px-4 md:px-8 bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <NewsletterForm />

        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16 mt-16">
          <div className="flex-1">
            <Link to="/" className="inline-block mb-8">
              <img
                src="/logo.jpg"
                alt="Archway Productions"
                className="w-24 h-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
                width="96"
                height="96"
                loading="lazy"
              />
            </Link>
            <p className="text-gray-600 text-xs tracking-widest uppercase">
              The Future Is Not Franchised
            </p>
          </div>

          <nav className="flex gap-16">
            <div>
              <ul className="space-y-3">
                <li>
                  <Link to="/about" className="text-gray-500 hover:text-white transition-colors text-sm tracking-wide">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/projects" className="text-gray-500 hover:text-white transition-colors text-sm tracking-wide">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link to="/collaborators" className="text-gray-500 hover:text-white transition-colors text-sm tracking-wide">
                    Collaborate
                  </Link>
                </li>
                <li>
                  <Link to="/partnership" className="text-gray-500 hover:text-white transition-colors text-sm tracking-wide">
                    Partner
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <ul className="space-y-3">
                <li>
                  <Link to="/shop" className="text-gray-500 hover:text-white transition-colors text-sm tracking-wide">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-500 hover:text-white transition-colors text-sm tracking-wide">
                    Contact
                  </Link>
                </li>
                <li>
                  <a
                    href="mailto:contact@thisisarchway.com"
                    className="text-gray-500 hover:text-white transition-colors text-sm tracking-wide"
                  >
                    Email
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/thisisarchway"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-white transition-colors text-sm tracking-wide"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="pt-8 border-t border-gray-900">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
            <span>© {new Date().getFullYear()} Archway Productions</span>
            <span>New York City, NY</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;