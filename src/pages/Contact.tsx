import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Instagram, MapPin } from 'lucide-react';
import Layout from '../components/Layout';

const Contact = () => {
  const [shouldLoadVideo, setShouldLoadVideo] = useState(true);

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const hasReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setShouldLoadVideo(!isMobile && !hasReducedMotion);
  }, []);

  return (
    <Layout>
      <div className="min-h-screen bg-black">
      <Helmet>
        <title>Contact Archway Productions</title>
        <meta name="description" content="Get in touch with Archway Productions. Whether you're a creator, investor, or collaborator, we'd love to hear from you." />
        <link rel="canonical" href="https://thisisarchway.com/contact" />
        <meta property="og:title" content="Contact Archway Productions" />
        <meta property="og:description" content="Get in touch with Archway Productions. Whether you're a creator, investor, or collaborator, we'd love to hear from you." />
      </Helmet>
      <div className="pt-20 pb-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-light text-white mb-8 text-center tracking-wide">
            Get In Touch
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto text-center mb-16 leading-relaxed">
            Whether you're a creator, investor, or collaborator, we'd love to hear from you.
          </p>

          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-16 md:p-20 relative overflow-hidden aspect-[4/3] flex items-center justify-center">
              {/* Background Video */}
              {shouldLoadVideo && (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover opacity-20 rounded-lg"
                >
                  <source src="https://i.imgur.com/4iXOjRF.mp4" type="video/mp4" />
                </video>
              )}
              
              {/* Content */}
              <div className="relative z-10 w-full">
              <div className="flex justify-center space-x-16">
                <div className="text-center">
                  <p className="text-white text-xl mb-6 font-light tracking-wide">Email us</p>
                  <a 
                    href="mailto:contact@thisisarchway.com" 
                    className="text-white hover:text-gray-300 hover:scale-110 transition-all duration-300 rounded-full hover:bg-gray-800 w-16 h-16 flex items-center justify-center mx-auto"
                    title="Email us"
                  >
                    <Mail className="w-8 h-8" />
                  </a>
                </div>
                <div className="text-center">
                  <p className="text-white text-xl mb-6 font-light tracking-wide">Follow us</p>
                  <a 
                    href="https://instagram.com/thisisarchway" 
                    className="text-white hover:text-gray-300 hover:scale-110 transition-all duration-300 rounded-full hover:bg-gray-800 w-16 h-16 flex items-center justify-center mx-auto"
                    title="Follow us on Instagram"
                  >
                    <Instagram className="w-8 h-8" />
                  </a>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-700">
                <p className="text-gray-300 text-xl">
                  <MapPin className="w-5 h-5 inline mr-2" />
                  New York City, NY
                </p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </Layout>
  );
};

export default Contact;