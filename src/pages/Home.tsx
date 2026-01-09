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
        <section className="py-12 md:py-20 px-4 md:px-8 bg-black">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Investment Box */}
              <AnimatedSection animation="slide-right" delay={100}>
                <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-8 text-center group relative overflow-hidden transition-all duration-300 hover:bg-gray-800/50">
                  <h3 className="text-2xl font-medium text-white mb-4">
                    Ready to Fund the Future?
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    We're seeking strategic partners who share our vision for original, culturally relevant storytelling.
                    Let's discuss how you can be part of the Archway story.
                  </p>
                  <AnimatedButton to="/investment">
                    Get Investment Details
                  </AnimatedButton>
                </div>
              </AnimatedSection>

              {/* Creative Cohort Box */}
              <AnimatedSection animation="slide-left" delay={200}>
                <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-8 text-center group relative overflow-hidden transition-all duration-300 hover:bg-gray-800/50">
                  <h3 className="text-2xl font-medium text-white mb-4">
                    Ready to Share Your Story?
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Join our collective of visionary filmmakers, writers, and creators.
                    We're building a community that authentically champions the new wave of bold storytelling.
                  </p>
                  <AnimatedButton to="/collaborators">
                    Creative Cohort Information
                  </AnimatedButton>
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