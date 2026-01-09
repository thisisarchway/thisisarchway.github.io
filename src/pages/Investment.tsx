import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronDown } from 'lucide-react';
import AnimatedButton from '../components/AnimatedButton';
import HoverRevealCard from '../components/HoverRevealCard';
import Layout from '../components/Layout';
import { AnimatedSection } from '../components/AnimatedSection';

const Investment = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const opportunities = [
    {
      title: "The Market",
      description: "The entertainment landscape has fractured, creating a fissure between viral, digital energy and scalable, cinematic spectacle. Legacy studios and digital creators each hold a piece of the puzzle, yet Archway's proprietary model is built to bridge this gap.",
      backgroundImage: "https://i.imgur.com/MvxanGw.jpeg"
    },
    {
      title: "The Audience",
      description: "Gen Z isn't a niche audience, but rather, the primary economic engine of the next decade. This generation commands $2.7 trillion in global spending power today, is projected to reach $12.6 trillion by 2030, and is on track to become the wealthiest and longest-living generation in history.",
      citation: "Sources: Bank of America, NielsenIQ",
      backgroundImage: "https://i.imgur.com/QXsmnbY.jpeg"
    },
    {
      title: "The Access",
      description: "Our advantage is fundamental and built into our development process. While others study and try to decode Gen Z, our leadership is Gen Z. We combine native cultural intuition with smart storytelling to give investors a direct pipeline to the pulse of a generation.",
      backgroundImage: "https://i.imgur.com/Zeq2ZyT.jpeg"
    },
    {
      title: "The Edge",
      description: "An investment in Archway is a strategic stake in culture today and years into the future. This is the chance to align with a generation obsessed with authenticity and build the trusted credibility that money cannot buy later.",
      backgroundImage: "https://i.imgur.com/q89glQ1.jpeg"
    }
  ];

  const qaItems = [
    {
      question: "How do you de-risk development?",
      answer: "Our model identifies what stories are begging to be told by leveraging real-time cultural data instead of relying on best guesses or familiar IP."
    },
    {
      question: "How do you guarantee an audience?",
      answer: "We invert the old marketing playbook. Our projects are developed in tandem with the creator and online ecosystems that build demand from the ground up."
    },
    {
      question: "Are you just creating new IP to eventually recycle?",
      answer: "No. Archway is in the business of originals. We focus on cultivating new stories from the untouched soil where they're already growing."
    }
  ];


  return (
    <Layout>
      <div className="min-h-screen bg-black">
      <Helmet>
        <title>Investment Opportunities - Archway Productions</title>
        <meta name="description" content="Partner with Archway Productions to fund the future of storytelling. Strategic investment opportunities in original content for Gen Z audiences." />
        <link rel="canonical" href="https://thisisarchway.com/investment" />
        <meta property="og:title" content="Investment Opportunities - Archway Productions" />
        <meta property="og:description" content="Partner with Archway Productions to fund the future of storytelling. Strategic investment opportunities in original content for Gen Z audiences." />
        <meta property="og:image" content="https://thisisarchway.com/logo.jpg" />
        <meta property="og:url" content="https://thisisarchway.com/investment" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Investment Opportunities - Archway Productions" />
        <meta name="twitter:description" content="Partner with Archway Productions to fund the future of storytelling. Strategic investment opportunities in original content for Gen Z audiences." />
        <meta name="twitter:image" content="https://thisisarchway.com/logo.jpg" />
      </Helmet>
      <div className="pt-20 pb-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection animation="fade-in">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-light text-white mb-8 text-center tracking-wide">
              Investment Opportunity
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={100}>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto text-center mb-16 leading-relaxed">
              Archway Productions is where creativity meets strategy. We partner with investors to fund a curated slate of original projects designed for cultural impact, strong market appeal, and long-term growth.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {opportunities.map((opportunity, index) => (
              <HoverRevealCard
                key={index}
                title={opportunity.title}
                backgroundImage={opportunity.backgroundImage}
                titleSize="small"
                minHeight="280px"
              >
                <p className="text-base md:text-lg text-gray-300 leading-relaxed text-center px-2">
                  {opportunity.description}
                </p>
                {opportunity.citation && (
                  <p className="text-xs text-gray-400 italic text-center px-2 mt-2">
                    {opportunity.citation}
                  </p>
                )}
              </HoverRevealCard>
            ))}
          </div>

          {/* Bold Statement */}
          <AnimatedSection animation="scale" delay={200}>
            <div className="text-center mb-16">
              <p className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-wide">
                Not taking risks is a risk.
              </p>
              <p className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-wide mt-2">
                Archway is the path forward.
              </p>
            </div>
          </AnimatedSection>

          {/* Why Invest With Archway */}
          <AnimatedSection animation="fade-up" delay={300}>
            <div className="mb-16">
            <div className="space-y-4">
              {qaItems.map((item, index) => (
                <div key={index} className="bg-gray-900/50 border border-gray-700 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-800/50 transition-colors duration-300"
                  >
                    <h3 className="text-lg md:text-xl font-medium text-white">
                      {item.question}
                    </h3>
                    <ChevronDown 
                      className={`w-5 h-5 text-white transition-transform duration-300 ${
                        activeIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {activeIndex === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-300 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="scale" delay={400}>
            <div className="bg-gray-900/50 p-8 text-center border border-gray-700 rounded-lg">
              <h3 className="text-2xl font-medium text-white mb-4">
                Let's Build the Future of Storytelling Together.
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed">
                We're in active development on our first slate and are now aligning with capital partners who see the generational shift in entertainment as their greatest opportunity.
              </p>
              <AnimatedButton href="mailto:contact@thisisarchway.com">
                Send an Introduction
              </AnimatedButton>
            </div>
          </AnimatedSection>
        </div>
      </div>
      </div>
    </Layout>
  );
};

export default Investment;