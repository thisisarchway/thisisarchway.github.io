import React from 'react';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import TheArchwayWaySections from '../components/TheArchwayWaySections';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>About Archway Productions - Gen Z Media Company</title>
        <meta name="description" content="Founded in 2024 by young entertainment industry professionals, Archway Productions is redefining how stories get made, from concept to screen." />
        <meta property="og:title" content="About Archway Productions - Gen Z Media Company" />
        <meta property="og:description" content="Founded in 2024 by young entertainment industry professionals, Archway Productions is redefining how stories get made, from concept to screen." />
      </Helmet>
      <div className="pt-20 pb-12 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-light text-white mb-8 text-center tracking-wide">
            About Archway
          </h1>
          
          <div className="space-y-8 text-gray-300">
            <p className="text-lg md:text-xl leading-relaxed">
              Founded in 2024 by young entertainment industry professionals who grew up with VHS but came of age online, Archway Productions is a project incubator and production company 
              redefining how stories get made, from concept to screen.
            </p>
            
            
            <div className="space-y-12 mt-12">
              {/* The Problem */}
              <div 
                className="bg-gray-900/50 p-8 rounded-lg border border-gray-700 hover:bg-gray-800/60 hover:border-white transition-all duration-300 cursor-pointer group relative overflow-hidden min-h-[200px] flex items-center justify-center"
                style={{
                  backgroundImage: `url('https://i.imgur.com/anivm9t.jpeg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/70 group-hover:bg-black/85 transition-colors duration-300" />
                
                {/* Large title - visible by default, hidden on hover */}
                <h3 className="text-4xl md:text-6xl font-light text-white text-center group-hover:scale-95 group-hover:translate-y-2 group-hover:opacity-0 transition-all duration-300 absolute inset-0 flex items-center justify-center tracking-wide z-10">
                  The Problem
                </h3>
                
                {/* Content - hidden by default, visible on hover */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-full relative z-10">
                  <p className="text-lg font-bold text-white mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    Gen Z runs culture, but Hollywood still won't hand over the keys.
                  </p>
                  <ul className="space-y-3 text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-white rounded-full mr-3 mt-2 flex-shrink-0 group-hover:bg-gray-300 transition-colors duration-300"></span>
                      Studios want us back in theaters, but will not let us in the rooms where decisions are made.
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-white rounded-full mr-3 mt-2 flex-shrink-0 group-hover:bg-gray-300 transition-colors duration-300"></span>
                      Young creators are told to "wait their turn", accept unsustainable wages, or rely on connections many will never have.
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-white rounded-full mr-3 mt-2 flex-shrink-0 group-hover:bg-gray-300 transition-colors duration-300"></span>
                      This shuts out important stories from diverse backgrounds before they can even be pitched.
                    </li>
                  </ul>
                </div>
              </div>

              {/* The Landscape */}
              <div 
                className="bg-gray-900/50 p-8 rounded-lg border border-gray-700 hover:bg-gray-800/60 hover:border-white transition-all duration-300 cursor-pointer group relative overflow-hidden min-h-[200px] flex items-center justify-center"
                style={{
                  backgroundImage: `url('https://i.imgur.com/zsLoXjc.jpeg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/70 group-hover:bg-black/85 transition-colors duration-300" />
                
                {/* Large title - visible by default, hidden on hover */}
                <h3 className="text-4xl md:text-6xl font-light text-white text-center group-hover:scale-95 group-hover:translate-y-2 group-hover:opacity-0 transition-all duration-300 absolute inset-0 flex items-center justify-center tracking-wide z-10">
                  The Landscape
                </h3>
                
                {/* Content - hidden by default, visible on hover */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-full relative z-10">
                  <p className="text-lg font-bold text-white mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    Millions of likes, followers, and shares. Zero power.
                  </p>
                  <ul className="space-y-3 text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-white rounded-full mr-3 mt-2 flex-shrink-0 group-hover:bg-gray-300 transition-colors duration-300"></span>
                      When platforms are democratized, we shape culture and language in real time without permission.
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-white rounded-full mr-3 mt-2 flex-shrink-0 group-hover:bg-gray-300 transition-colors duration-300"></span>
                      Imagine what an online creator with millions of followers could do with a budget, access, and full support.
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-white rounded-full mr-3 mt-2 flex-shrink-0 group-hover:bg-gray-300 transition-colors duration-300"></span>
                      No one is telling our stories on screen with the authenticity we crave, yet studios keep pushing bad remakes and wondering why they flop.
                    </li>
                  </ul>
                </div>
              </div>

              {/* The Solution */}
              <div 
                className="bg-gray-900/50 p-8 rounded-lg border border-gray-700 hover:bg-gray-800/60 hover:border-white transition-all duration-300 cursor-pointer group relative overflow-hidden min-h-[200px] flex items-center justify-center"
                style={{
                  backgroundImage: `url('https://i.imgur.com/xiAkqKh.jpeg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/70 group-hover:bg-black/85 transition-colors duration-300" />
                
                {/* Large title - visible by default, hidden on hover */}
                <h3 className="text-4xl md:text-6xl font-light text-white text-center group-hover:scale-95 group-hover:translate-y-2 group-hover:opacity-0 transition-all duration-300 absolute inset-0 flex items-center justify-center tracking-wide z-10">
                  The Solution
                </h3>
                
                {/* Content - hidden by default, visible on hover */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-full relative z-10">
                  <p className="text-lg font-bold text-white mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    Archway is a new kind of media company — by us, for all.
                  </p>
                  <ul className="space-y-3 text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-white rounded-full mr-3 mt-2 flex-shrink-0 group-hover:bg-gray-300 transition-colors duration-300"></span>
                      In a world drowning in artificiality, we actively develop, fund, and produce original stories from the next wave of creators.
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-white rounded-full mr-3 mt-2 flex-shrink-0 group-hover:bg-gray-300 transition-colors duration-300"></span>
                      Our model is good for business in an industry so risk-averse it's falling behind; we are filling a long-overlooked gap and doing it well.
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-white rounded-full mr-3 mt-2 flex-shrink-0 group-hover:bg-gray-300 transition-colors duration-300"></span>
                      We are done waiting for Hollywood to hand over the keys. We have become the key.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TheArchwayWaySections />
    </div>
    <Contact />
    <Footer />
    </>
  );
};

export default About;