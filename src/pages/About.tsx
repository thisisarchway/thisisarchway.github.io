import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import TheArchwayWaySections from '../components/TheArchwayWaySections';
import HoverRevealCard from '../components/HoverRevealCard';
import Layout from '../components/Layout';
import { AnimatedSection } from '../components/AnimatedSection';
import { StructuredDataAbout } from '../components/StructuredDataAbout';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="min-h-screen bg-black">
      <Helmet>
        <title>About Archway Productions - Gen Z Media Company</title>
        <meta name="description" content="Founded in 2024 by young entertainment industry professionals, Archway Productions is redefining how stories get made, from concept to screen." />
        <link rel="canonical" href="https://thisisarchway.com/about" />
        <meta property="og:title" content="About Archway Productions - Gen Z Media Company" />
        <meta property="og:description" content="Founded in 2024 by young entertainment industry professionals, Archway Productions is redefining how stories get made, from concept to screen." />
        <meta property="og:image" content="https://thisisarchway.com/logo.jpg" />
        <meta property="og:url" content="https://thisisarchway.com/about" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Archway Productions - Gen Z Media Company" />
        <meta name="twitter:description" content="Founded in 2024 by young entertainment industry professionals, Archway Productions is redefining how stories get made, from concept to screen." />
        <meta name="twitter:image" content="https://thisisarchway.com/logo.jpg" />
      </Helmet>
      <StructuredDataAbout />
      <div className="pt-20 pb-12 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="fade-in">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-light text-white mb-8 text-center tracking-wide">
              About Archway
            </h1>
          </AnimatedSection>

          <div className="space-y-8 text-gray-300">
            <AnimatedSection animation="fade-up" delay={100}>
              <p className="text-lg md:text-xl leading-relaxed">
                Founded in 2024 by young entertainment industry professionals who grew up with VHS but came of age online, Archway Productions is a project incubator and production company
                redefining how stories get made, from concept to screen.
              </p>
            </AnimatedSection>

            <div className="space-y-12 mt-12">
              <AnimatedSection animation="fade-up" delay={200}>
                <HoverRevealCard
                  title="The Problem"
                  backgroundImage="https://i.imgur.com/anivm9t.jpeg"
                >
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
              </HoverRevealCard>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={300}>
                <HoverRevealCard
                  title="The Landscape"
                  backgroundImage="https://i.imgur.com/zsLoXjc.jpeg"
                >
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
              </HoverRevealCard>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={400}>
                <HoverRevealCard
                  title="The Solution"
                  backgroundImage="https://i.imgur.com/xiAkqKh.jpeg"
                >
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
              </HoverRevealCard>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>
        <TheArchwayWaySections />
      </div>
    </Layout>
  );
};

export default About;