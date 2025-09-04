import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Instagram } from 'lucide-react';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Shop = () => {
  return (
    <div className="min-h-screen bg-black relative">
      <Helmet>
        <title>Shop - Archway Productions</title>
        <meta name="description" content="Archway Productions shop coming soon. Exclusive merchandise and limited-edition items celebrating independent filmmaking and original storytelling." />
        <meta property="og:title" content="Shop - Archway Productions" />
        <meta property="og:description" content="Archway Productions shop coming soon. Exclusive merchandise and limited-edition items celebrating independent filmmaking and original storytelling." />
      </Helmet>
      {/* Full page MP4 video background */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline
        className="fixed inset-0 w-full h-full object-cover opacity-20"
        style={{ zIndex: 0 }}
      >
        <source src="https://i.imgur.com/6NgFNM9.mp4" type="video/mp4" />
      </video>
      
      <div className="pt-20 pb-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto relative z-10">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-light text-white mb-12 text-center tracking-wide">
            Archway Shop
          </h1>
          
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-12 md:p-16 mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-white mb-8 tracking-wide">
                Something Special Is Coming
              </h2>
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                We're curating a collection of exclusive Archway merchandise and limited-edition items 
                that celebrate independent filmmaking and original storytelling.
              </p>
              <p className="text-base md:text-lg text-gray-400 mb-8 leading-relaxed">
                From premium apparel to behind-the-scenes content, our shop will offer unique ways 
                to support the future of authentic cinema.
              </p>
            </div>

            <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-8 md:p-12">
              <div className="flex justify-center mb-6">
                <Instagram className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-medium text-white mb-4 tracking-wide">
                Be the First to Know
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Follow us on Instagram to get exclusive early access to our shop launch, 
                behind-the-scenes content, and limited-edition releases.
              </p>
              <a 
                href="https://instagram.com/thisisarchway" 
                className="inline-block bg-white text-black px-8 py-3 font-medium hover:bg-gray-200 transition-all duration-300 rounded-lg relative overflow-hidden group"
                style={{
                  backgroundImage: 'none'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundImage = "url('https://i.imgur.com/bLzVZKt.gif')";
                  e.currentTarget.style.backgroundSize = 'cover';
                  e.currentTarget.style.backgroundPosition = 'center';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundImage = 'none';
                }}
              >
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                Follow @thisisarchway
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default Shop;