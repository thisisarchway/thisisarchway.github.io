import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import TheArchwayWaySections from '../components/TheArchwayWaySections';
import Services from '../components/Services';
import AnimatedButton from '../components/AnimatedButton';
import Layout from '../components/Layout';
import { AnimatedSection } from '../components/AnimatedSection';

const Home = () => {
  return (
    <Layout>
      <div>
        <Helmet>
          <title>Archway Productions - Original Storytelling for the Future</title>
          <meta name="description" content="At Archway Productions, the future is not franchised. We're retiring the reboots and making room for quality, original projects." />
          <link rel="canonical" href="https://thisisarchway.com/" />
          <meta property="og:title" content="Archway Productions - Original Storytelling for the Future" />
          <meta property="og:description" content="At Archway Productions, the future is not franchised. We're retiring the reboots and making room for quality, original projects." />
          <meta property="og:image" content="https://thisisarchway.com/logo.jpg" />
          <meta property="og:url" content="https://thisisarchway.com/" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Archway Productions - Original Storytelling for the Future" />
          <meta name="twitter:description" content="At Archway Productions, the future is not franchised. We're retiring the reboots and making room for quality, original projects." />
          <meta name="twitter:image" content="https://thisisarchway.com/logo.jpg" />
        </Helmet>
        <Hero />
        <TheArchwayWaySections />
        <Services />
        <section className="py-24 md:py-32 px-4 md:px-8 bg-black">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl md:text-7xl lg:text-8xl text-white mb-16 leading-tight tracking-tight">
              Ready to Get Involved?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
              {/* Investment Box */}
              <AnimatedSection animation="slide-right" delay={100}>
                <div className="border-t border-white/10 pt-12 group relative overflow-hidden transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_40px_80px_-20px_rgba(255,255,255,0.15)] hover:scale-[1.02]">
                  {/* Large atmospheric radial gradient glow */}
                  <div className="absolute -inset-20 bg-gradient-radial from-white/[0.12] via-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                  {/* Top border glow effect */}
                  <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  {/* Atmospheric fog-like overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                  <div className="relative z-10">
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-8 tracking-tight leading-tight group-hover:brightness-110 transition-all duration-700">
                      Ready to Fund the Future?
                    </h3>
                    <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed group-hover:text-gray-300 transition-colors duration-700">
                      We're seeking strategic partners who share our vision for original, culturally relevant storytelling. Join us in shaping the next generation of entertainment.
                    </p>
                    <div className="group-hover:brightness-110 transition-all duration-700">
                      <AnimatedButton to="/investment">
                        Explore Investment
                      </AnimatedButton>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Creative Cohort Box */}
              <AnimatedSection animation="slide-left" delay={200}>
                <div className="border-t border-white/10 pt-12 group relative overflow-hidden transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_40px_80px_-20px_rgba(255,255,255,0.15)] hover:scale-[1.02]">
                  {/* Large atmospheric radial gradient glow */}
                  <div className="absolute -inset-20 bg-gradient-radial from-white/[0.12] via-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                  {/* Top border glow effect */}
                  <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  {/* Atmospheric fog-like overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                  <div className="relative z-10">
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-8 tracking-tight leading-tight group-hover:brightness-110 transition-all duration-700">
                      Ready to Share Your Story?
                    </h3>
                    <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed group-hover:text-gray-300 transition-colors duration-700">
                      Join our collective of visionary filmmakers, writers, and creators. We're building a community that champions the new wave of bold, authentic storytelling.
                    </p>
                    <div className="group-hover:brightness-110 transition-all duration-700">
                      <AnimatedButton to="/collaborators">
                        Join the Collective
                      </AnimatedButton>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;