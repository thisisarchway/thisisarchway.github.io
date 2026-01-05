import React, { useState } from 'react';
import { Menu, X, Mail, Instagram } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/* Menu Toggle Button */}
      <button
        onClick={toggleMenu}
        className="fixed top-6 left-6 z-50 w-10 h-10 flex items-center justify-center bg-black/80 backdrop-blur-sm rounded-full border border-white/20 hover:bg-black transition-all duration-300 opacity-70 hover:opacity-100"
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isMenuOpen}
      >
        {isMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
      </button>

      {/* Sidebar */}
      <div 
        className={`fixed left-0 top-0 h-full w-80 bg-black text-white z-40 transform transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } md:w-80 w-full`}
      >
        <div className="flex flex-col h-full justify-between p-8">
          {/* Logo/Image at top of sidebar */}
          <div className="flex justify-center">
            <Link 
              to="/" 
              onClick={() => setIsMenuOpen(false)}
              className="hover:opacity-80 transition-opacity duration-300"
            >
              <img
                src="/logo.jpg"
                alt="Archway Productions Logo"
                className="w-32 h-auto"
              />
            </Link>
          </div>

          {/* Navigation Section */}
          <div className="flex flex-col items-center">
            {/* Navigation */}
            <nav aria-label="Main navigation">
              <ul className="space-y-4 md:space-y-6 text-center">
                <li>
                  <Link 
                    to="/" 
                    className="text-white hover:text-gray-300 hover:scale-105 transition-all duration-300 text-lg md:text-lg text-xl block py-2"
                    onClick={() => {
                      setIsMenuOpen(false);
                    }}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/about" 
                    className="text-white hover:text-gray-300 hover:scale-105 transition-all duration-300 text-lg md:text-lg text-xl block py-2"
                    onClick={() => {
                      setIsMenuOpen(false);
                    }}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/projects" 
                    className="text-white hover:text-gray-300 hover:scale-105 transition-all duration-300 text-lg md:text-lg text-xl block py-2"
                    onClick={() => {
                      setIsMenuOpen(false);
                    }}
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/collaborators" 
                    className="text-white hover:text-gray-300 hover:scale-105 transition-all duration-300 text-lg md:text-lg text-xl block py-2"
                    onClick={() => {
                      setIsMenuOpen(false);
                    }}
                  >
                    Collaborate
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/investment" 
                    className="text-white hover:text-gray-300 hover:scale-105 transition-all duration-300 text-lg md:text-lg text-xl block py-2"
                    onClick={() => {
                      setIsMenuOpen(false);
                    }}
                  >
                    Invest
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/contact" 
                    className="text-white hover:text-gray-300 hover:scale-105 transition-all duration-300 text-lg md:text-lg text-xl block py-2"
                    onClick={() => {
                      setIsMenuOpen(false);
                    }}
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/shop" 
                    className="text-white hover:text-gray-300 hover:scale-105 transition-all duration-300 text-lg md:text-lg text-xl block py-2"
                    onClick={() => {
                      setIsMenuOpen(false);
                    }}
                  >
                    Shop
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-8">
            <a
              href="mailto:contact@thisisarchway.com"
              className="text-white hover:text-gray-300 hover:scale-110 transition-all duration-300 rounded-full hover:bg-gray-800 w-12 h-12 flex items-center justify-center"
              aria-label="Email us at contact@thisisarchway.com"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="https://instagram.com/thisisarchway"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 hover:scale-110 transition-all duration-300 rounded-full hover:bg-gray-800 w-12 h-12 flex items-center justify-center"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30"
          onClick={() => {
            setIsMenuOpen(false);
          }}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Header;