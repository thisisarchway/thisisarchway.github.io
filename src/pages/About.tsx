import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import TheArchwayWaySections from '../components/TheArchwayWaySections';
import HoverRevealCard from '../components/HoverRevealCard';
import Layout from '../components/Layout';
import { AnimatedSection } from '../components/AnimatedSection';
import { StructuredDataAbout } from '../components/StructuredDataAbout';
import { StaggeredText } from '../components/StaggeredText';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="min-h-screen bg-black">
      <Helmet>
        <title>About Archway Productions - Film & Television Studio</title>
        <meta name="description" content="Founded in 2024, Archway Productions is a New York-based film and television studio developing original work grounded in contemporary life." />
        <link rel="canonical" href="https://thisisarchway.com/about" />
        <meta property="og:title" content="About Archway Productions - Film & Television Studio" />
        <meta property="og:description" content="Archway Productions develops original work grounded in the realities, anxieties, humor, and contradictions of contemporary life." />
        <meta property="og:image" content="https://thisisarchway.com/logo.jpg" />
        <meta property="og:url" content="https://thisisarchway.com/about" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Archway Productions - Film & Television Studio" />
        <meta name="twitter:description" content="Archway Productions develops original work grounded in contemporary life." />
        <meta name="twitter:image" content="https://thisisarchway.com/logo.jpg" />
      </Helmet>
      <StructuredDataAbout />
      <div className="pt-32 pb-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection animation="fade-in">
            <h1 className="text-7xl md:text-9xl lg:text-[8rem] xl:text-[10rem] text-white mb-24 leading-[0.9] tracking-tight">
              <StaggeredText staggerDelay={60}>
                About Archway
              </StaggeredText>
            </h1>
          </AnimatedSection>

          <div className="space-y-12 text-gray-300">
            <AnimatedSection animation="fade-up" delay={100}>
              <p className="text-2xl md:text-3xl leading-relaxed font-light text-gray-400">
                Founded in 2024 by entertainment industry professionals who grew up with VHS but came of age online, Archway Productions is a New York-based film and television studio developing original work grounded in the realities, anxieties, humor, and contradictions of contemporary life.
              </p>
            </AnimatedSection>

            <div className="space-y-12 mt-12">
              <AnimatedSection animation="fade-up" delay={200}>
                <HoverRevealCard
                  title="The Problem"
                  backgroundImage="https://i.imgur.com/anivm9t.jpeg"
                >
                <p className="text-white font-zuume font-medium text-2xl md:text-3xl leading-loose tracking-wide mb-6 text-center hyphens-auto break-words text-white/90">
                  Projects are frequently evaluated through outdated assumptions about audience behavior, despite clear evidence that viewers respond to originality, specificity, and strong points of view.
                </p>
                <div className="border-t border-white/20 my-6"></div>
                <ul className="space-y-4 text-gray-300 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-white rounded-full mr-3 mt-2 flex-shrink-0 group-hover:bg-gray-300 transition-colors duration-300"></span>
                    <span>Many of the people deciding what gets made are increasingly far removed from the audiences they aim to reach, resulting in a narrowing definition of what is considered "relatable" or "marketable."</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-white rounded-full mr-3 mt-2 flex-shrink-0 group-hover:bg-gray-300 transition-colors duration-300"></span>
                    <span>Structural barriers still limit who is able to sustain careers in the industry, preventing many distinct perspectives from reaching positions where they can shape what gets produced.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-white rounded-full mr-3 mt-2 flex-shrink-0 group-hover:bg-gray-300 transition-colors duration-300"></span>
                    <span>Films outside of franchise or microbudget extremes, the exact kind of projects that once defined the independent film landscape, are becoming more difficult to finance.</span>
                  </li>
                </ul>
              </HoverRevealCard>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={300}>
                <HoverRevealCard
                  title="The Landscape"
                  backgroundImage="https://i.imgur.com/zsLoXjc.jpeg"
                >
                <p className="text-white font-zuume font-medium text-2xl md:text-3xl leading-loose tracking-wide mb-6 text-center hyphens-auto break-words text-white/90">
                  Projects that understand their audience early are better positioned to create meaningful anticipation and give viewers a reason to show up, share, and return.
                </p>
                <div className="border-t border-white/20 my-6"></div>
                <ul className="space-y-4 text-gray-300 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-white rounded-full mr-3 mt-2 flex-shrink-0 group-hover:bg-gray-300 transition-colors duration-300"></span>
                    <span>A generation raised online engages with film and television as active participants rather than passive viewers. When viewers connect with a project, engagement extends beyond the screen through discussion, fan-created media, fashion, music, and in-person events.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-white rounded-full mr-3 mt-2 flex-shrink-0 group-hover:bg-gray-300 transition-colors duration-300"></span>
                    <span>Audiences are highly attuned to authenticity, and online conversation can rapidly influence perception. This can either strengthen enthusiasm or undermine trust.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-white rounded-full mr-3 mt-2 flex-shrink-0 group-hover:bg-gray-300 transition-colors duration-300"></span>
                    <span>Films and series now have the ability to build cultural presence before and after release, allowing strong work to sustain relevance beyond opening weekend.</span>
                  </li>
                </ul>
              </HoverRevealCard>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={400}>
                <HoverRevealCard
                  title="The Solution"
                  backgroundImage="https://i.imgur.com/xiAkqKh.jpeg"
                >
                <p className="text-white font-zuume font-medium text-2xl md:text-3xl leading-loose tracking-wide mb-6 text-center hyphens-auto break-words text-white/90">
                  By aligning creative ambition with sustainable pathways to production and distribution, we aim to contribute to a healthier long-term ecosystem for filmmakers and audiences alike.
                </p>
                <div className="border-t border-white/20 my-6"></div>
                <ul className="space-y-4 text-gray-300 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-white rounded-full mr-3 mt-2 flex-shrink-0 group-hover:bg-gray-300 transition-colors duration-300"></span>
                    <span>Archway operates as both studio and strategic partner, identifying projects with strong creative foundations and meaningful audience potential. We collaborate with filmmakers to help structure financing and partnerships that expand what is possible for a project without diluting its perspective.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-white rounded-full mr-3 mt-2 flex-shrink-0 group-hover:bg-gray-300 transition-colors duration-300"></span>
                    <span>Thoughtful brand alignment can provide access to resources that allow ambitious work to be executed at a higher level while maintaining creative independence.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-white rounded-full mr-3 mt-2 flex-shrink-0 group-hover:bg-gray-300 transition-colors duration-300"></span>
                    <span>Revenue generated through partnerships and project participation is reinvested into original storytelling, supporting the development of a slate guided by conviction rather than short-term trend cycles.</span>
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