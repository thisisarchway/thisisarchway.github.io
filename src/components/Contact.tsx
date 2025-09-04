import React from 'react';
import { Mail, Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-12 md:py-20 px-4 md:px-8 bg-black text-center">
      <div className="max-w-4xl mx-auto">
        <p className="text-lg md:text-xl text-gray-300 mb-8 md:mb-12 tracking-wide">
          For Originals Only
        </p>
        
        <div className="flex justify-center space-x-6 md:space-x-8">
          <a 
            href="mailto:contact@thisisarchway.com" 
            className="text-white hover:text-gray-300 hover:scale-110 transition-all duration-300 rounded-full hover:bg-gray-800 w-12 h-12 flex items-center justify-center"
            title="Email us"
          >
           <Mail className="w-6 h-6" />
          </a>
          <a 
            href="https://instagram.com/thisisarchway" 
            className="text-white hover:text-gray-300 hover:scale-110 transition-all duration-300 rounded-full hover:bg-gray-800 w-12 h-12 flex items-center justify-center"
            title="Follow us on Instagram"
          >
           <Instagram className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;