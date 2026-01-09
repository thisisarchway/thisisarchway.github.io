import React from 'react';
import { ChevronDown } from 'lucide-react';
import AnimatedButton from './AnimatedButton';

const Hero = () => {
  const [videoLoaded, setVideoLoaded] = React.useState(false);

  const scrollToNext = () => {
    const introSection = document.getElementById('intro');
    if (introSection) {
      introSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden bg-black flex items-end justify-center" style={{ willChange: 'auto' }}>
        <div className="absolute inset-0" style={{ isolation: 'isolate' }}>
          {!videoLoaded && (
            <img
              src="/hero-fallback.jpg"
              alt="Archway Productions"
              className="w-full h-full object-cover"
              width="1920"
              height="1080"
            />
          )}
          <video
            src="https://www.dropbox.com/scl/fi/f48v1r3w0p0w80p4l8jut/Hero-Vid.mp4?rlkey=w0ezy7rcmqu2ezphisvqzscbc&st=ctvjanqb&dl=1"
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            onLoadedData={() => setVideoLoaded(true)}
            style={{
              opacity: videoLoaded ? 1 : 0,
              transition: 'opacity 0.3s ease-in-out',
              WebkitTransform: 'translateZ(0)',
              transform: 'translateZ(0)',
              backfaceVisibility: 'hidden'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/40" />
        </div>

        {/* Scroll Arrow */}
        <button
          onClick={scrollToNext}
          className="relative z-10 mb-12 group"
          aria-label="Scroll to next section"
          style={{ willChange: 'transform' }}
        >
          <ChevronDown className="w-8 h-8 text-white/80 group-hover:text-white transition-colors duration-300 drop-shadow-lg" />
        </button>
      </section>

      {/* Intro Section */}
      <section id="intro" className="py-16 md:py-24 px-4 md:px-8 bg-black text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-white mb-6 md:mb-8 leading-tight tracking-wide">
            At <span className="font-medium">Archway Productions</span>,
          </h2>
          <p className="text-3xl md:text-5xl lg:text-6xl font-light text-white mb-8 md:mb-10 leading-tight tracking-wide">
            The Future Is Not Franchised.
          </p>
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed px-4 font-light">
            Retiring the reboots. Making room for originality.
          </p>

          <div className="mt-10 md:mt-14">
            <AnimatedButton to="/about">
              Discover Archway
            </AnimatedButton>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;