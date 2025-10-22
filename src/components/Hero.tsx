import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const scrollToNext = () => {
    const introSection = document.getElementById('intro');
    if (introSection) {
      introSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Hero Video Section */}
      <section className="relative w-full h-screen overflow-hidden bg-black flex items-end justify-center">
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
            style={{
              WebkitPlaysinline: 'true'
            } as React.CSSProperties}
          >
            <source src="https://www.dropbox.com/scl/fi/7e4bw8r8orizbm3nijfgi/A-1.mp4?rlkey=oq49e5dkp9ioanhi2ps5lfry3&st=vygf0txs&raw=1" type="video/mp4" />
          </video>
        </div>

        {/* Scroll Arrow */}
        <button
          onClick={scrollToNext}
          className="relative z-10 mb-12 group animate-bounce"
          aria-label="Scroll to next section"
        >
          <ChevronDown className="w-8 h-8 text-white/80 group-hover:text-white transition-all duration-300 drop-shadow-lg" />
        </button>
      </section>

      {/* Intro Section */}
      <section id="intro" className="py-12 md:py-20 px-4 md:px-8 bg-black text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-light text-white mb-4 md:mb-6 leading-tight tracking-wide">
            At <span className="font-normal">Archway Productions</span>,
          </h2>
          <p className="text-2xl md:text-4xl lg:text-5xl font-light text-white mb-6 md:mb-8 leading-tight tracking-wide">
            The Future Is Not Franchised.
          </p>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed px-4">
            We're retiring the reboots and making room for quality, original projects.
          </p>
          
          <div className="mt-8 md:mt-12">
            <Link
              to="/about"
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
              About Archway
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;