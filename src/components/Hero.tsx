import React from 'react';
import { ChevronDown } from 'lucide-react';
import AnimatedButton from './AnimatedButton';
import { useParallax } from '../hooks/useParallax';
import { StaggeredText } from './StaggeredText';

const Hero = () => {
  const [videoLoaded, setVideoLoaded] = React.useState(false);
  const { ref: videoRef, offset: videoOffset } = useParallax({ speed: 0.3 });
  const { ref: textRef, offset: textOffset } = useParallax({ speed: 0.15 });

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
        <div ref={videoRef} className="absolute inset-0" style={{ isolation: 'isolate', transform: `translateY(${videoOffset}px)` }}>
          {/* Fallback image shows while video loads or if it fails */}
          <img
            src="/hero-fallback.jpg"
            alt="Archway Productions"
            className="w-full h-full object-cover"
            width="1920"
            height="1080"
            style={{ 
              opacity: videoLoaded ? 0 : 1, 
              transition: 'opacity 0.5s ease-in-out',
              position: 'absolute',
              top: 0,
              left: 0
            }}
          />
          
          {/* Video plays on both desktop AND mobile */}
          <video
            src="/hero-video.mp4"
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            crossOrigin="anonymous"
            onCanPlay={() => setVideoLoaded(true)}
            onError={() => {
              console.error('Video failed to load, using fallback image');
              setVideoLoaded(false);
            }}
            style={{
              opacity: videoLoaded ? 1 : 0,
              transition: 'opacity 0.5s ease-in-out',
              position: 'absolute',
              top: 0,
              left: 0,
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
          className="relative z-10 mb-6 group"
          aria-label="Scroll to next section"
          style={{ willChange: 'transform' }}
        >
          <ChevronDown className="w-8 h-8 text-white/80 group-hover:text-white transition-colors duration-300 drop-shadow-lg" />
        </button>
      </section>

      {/* Intro Section */}
      <section id="intro" className="py-16 md:py-24 px-4 md:px-8 bg-black">
        <div ref={textRef} className="max-w-7xl mx-auto" style={{ transform: `translateY(${textOffset}px)` }}>
         <h2 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-white mb-6 md:mb-8 leading-[0.95] tracking-tight" style={{ fontFamily: 'source-serif-4-variable, serif', fontWeight: 200, fontVariationSettings: "'wght' 200" }}>
  <StaggeredText staggerDelay={30}>
    At Archway Productions,
  </StaggeredText>
</h2>
<p className="font-bold italic text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] text-white mb-10 md:mb-12 leading-[0.9] tracking-tight" style={{ fontFamily: 'Zuume, sans-serif' }}>
  <StaggeredText staggerDelay={50}>
    The Future Is Not Franchised.
  </StaggeredText>
</p>
          <div className="h-px w-24 bg-white/20 mb-10 md:mb-12"></div>
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-400 leading-relaxed font-light max-w-4xl">
            Retiring the reboots. Making room for originality.
          </p>

          <div className="mt-12 md:mt-16 flex justify-center">
            <div className="relative group">
              <AnimatedButton to="/about">
                Discover Archway
              </AnimatedButton>
              <div className="absolute inset-0 bg-white/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 animate-pulse" />
              <div className="absolute inset-0 bg-white/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;