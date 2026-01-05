import React from 'react';
import { ChevronDown } from 'lucide-react';
import AnimatedButton from './AnimatedButton';

const Hero = () => {
  const [videoError, setVideoError] = React.useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        setVideoError(true);
      });
    }
  }, []);

  const scrollToNext = () => {
    const introSection = document.getElementById('intro');
    if (introSection) {
      introSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden bg-black flex items-end justify-center">
        <div className="absolute inset-0">
          {!videoError ? (
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              onError={() => setVideoError(true)}
            >
              <source src="https://www.dropbox.com/scl/fi/pg1d5ej4j700vlihwjudx/Hero-Vid.mp4?rlkey=b1php0tpzxasi2laro832o5jf&st=oeqzan4e&raw=1" type="video/mp4" />
            </video>
          ) : (
            <img
              src="/hero_still.jpg"
              alt="Archway Productions"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/40" />
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
            <AnimatedButton to="/about">
              About Archway
            </AnimatedButton>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;