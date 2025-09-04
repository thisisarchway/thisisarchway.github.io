import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { TrendingUp, Users, Globe, Award, DollarSign, Target, ChevronDown } from 'lucide-react';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Investment = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const opportunities = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "The Market",
      description: "The entertainment landscape has fractured, creating a fissure between viral, digital energy and scalable, cinematic spectacle. Legacy studios and digital creators each hold a piece of the puzzle, yet Archway's proprietary model is built to bridge this gap.",
      backgroundImage: "https://i.imgur.com/MvxanGw.jpeg"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "The Audience",
      description: "Gen Z isn't a niche audience, but rather, the primary economic engine of the next decade. This generation commands $2.7 trillion in global spending power today, is projected to reach $12.6 trillion by 2030, and is on track to become the wealthiest and longest-living generation in history.",
      citation: "Sources: Bank of America, NielsenIQ",
      backgroundImage: "https://i.imgur.com/QXsmnbY.jpeg"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "The Access",
      description: "Our advantage is fundamental and built into our development process. While others study and try to decode Gen Z, our leadership is Gen Z. We combine native cultural intuition with smart storytelling to give investors a direct pipeline to the pulse of a generation.",
      backgroundImage: "https://i.imgur.com/Zeq2ZyT.jpeg"
    },
    {
      icon: <Award className="w-6 h-6" />,
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

  const investmentTiers = [
    {
      title: "Creative Partner",
      amount: "$25K - $100K",
      benefits: ["Executive Producer Credit", "Set Visits", "Premiere Access", "Quarterly Updates"]
    },
    {
      title: "Strategic Investor",
      amount: "$100K - $500K",
      benefits: ["Co-Producer Credit", "Creative Input", "Revenue Sharing", "Portfolio Access", "Industry Events"]
    },
    {
      title: "Founding Partner",
      amount: "$500K+",
      benefits: ["Producer Credit", "Board Seat", "Project Selection Input", "Maximum Revenue Share", "Full Access"]
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Investment Opportunities - Archway Productions</title>
        <meta name="description" content="Partner with Archway Productions to fund the future of storytelling. Strategic investment opportunities in original content for Gen Z audiences." />
        <meta property="og:title" content="Investment Opportunities - Archway Productions" />
        <meta property="og:description" content="Partner with Archway Productions to fund the future of storytelling. Strategic investment opportunities in original content for Gen Z audiences." />
      </Helmet>
      <div className="pt-20 pb-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-light text-white mb-8 text-center tracking-wide">
            Investment Opportunity
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto text-center mb-16 leading-relaxed">
            Archway Productions is where creativity meets strategy. We partner with investors to fund a curated slate of original projects designed for cultural impact, strong market appeal, and long-term growth.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {opportunities.map((opportunity, index) => (
              <div 
                key={index} 
                className="group bg-gray-900/50 p-8 rounded-lg border border-gray-700 hover:bg-gray-800/50 hover:border-white transition-all duration-300 cursor-pointer relative overflow-hidden min-h-[280px] flex items-center justify-center"
                style={{
                  backgroundImage: `url('${opportunity.backgroundImage}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                {/* Dark overlay for readability */}
                <div className="absolute inset-0 bg-black/70 group-hover:bg-black/85 transition-colors duration-300" />
                
                {/* Large title - visible by default, hidden on hover */}
                <h3 className="text-3xl md:text-4xl font-light text-white text-center group-hover:scale-95 group-hover:translate-y-2 group-hover:opacity-0 transition-all duration-300 absolute inset-0 flex items-center justify-center tracking-wide px-4 leading-tight z-10">
                  {opportunity.title}
                </h3>
                
                {/* Content - hidden by default, visible on hover */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-full relative z-10">
                  <p className="text-base md:text-lg text-gray-300 leading-relaxed text-center px-2">
                    {opportunity.description}
                  </p>
                  {opportunity.citation && (
                    <p className="text-xs text-gray-400 italic text-center px-2 mt-2">
                      {opportunity.citation}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Bold Statement */}
          <div className="text-center mb-16">
            <p className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-wide">
              Not taking risks is a risk.
            </p>
            <p className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-wide mt-2">
              Archway is the path forward.
            </p>
          </div>

          {/* Why Invest With Archway */}
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

          <div className="bg-gray-900/50 p-8 text-center border border-gray-700 rounded-lg">
            <h3 className="text-2xl font-medium text-white mb-4">
              Let's Build the Future of Storytelling Together.
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed">
              We're in active development on our first slate and are now aligning with capital partners who see the generational shift in entertainment as their greatest opportunity.
            </p>
            <a 
              href="mailto:contact@thisisarchway.com" 
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
              Send an Introduction
              </span>
            </a>
          </div>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default Investment;