import React from 'react';
import NewsletterForm from './NewsletterForm';

const Footer = () => {
  return (
    <footer className="py-6 md:py-8 px-4 md:px-8 bg-black border-t border-gray-700">
      <div className="max-w-4xl mx-auto text-center">
        <NewsletterForm />
        <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4 text-xs md:text-sm text-gray-400">
          <span>© Archway Productions. All rights reserved.</span>
          <span className="hidden md:inline">•</span>
          <span>The Future Is Not Franchised</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;