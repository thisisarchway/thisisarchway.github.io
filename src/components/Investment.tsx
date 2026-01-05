import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Users, Globe, Award } from 'lucide-react';

const Investment = () => {
  const opportunities = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Market Opportunity",
      description: "The global film industry is valued at $136 billion, with streaming content demand at an all-time high."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Target Audience",
      description: "Gen Z represents $143 billion in spending power and craves authentic, original content."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Distribution Strategy",
      description: "Multi-platform approach leveraging streaming, theatrical, and digital-first distribution."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Proven Track Record",
      description: "Our team has produced award-winning content with proven ROI and critical acclaim."
    }
  ];

  return (
    <section id="investment" className="py-12 md:py-20 px-4 md:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-light text-white mb-6 md:mb-8 tracking-wide">
            Investment Opportunity
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Join us in funding the next generation of storytelling. Archway Productions offers investors access to high-potential content with strong market appeal and cultural impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-16">
          {opportunities.map((opportunity, index) => (
            <div key={index} className="flex items-start space-x-3 md:space-x-4 p-4 md:p-6 bg-gray-900/50 rounded-lg hover:bg-gray-800/50 hover:scale-102 hover:shadow-lg transition-all duration-300 border border-gray-700">
              <div className="flex-shrink-0 text-white">
                {opportunity.icon}
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 tracking-wide">
                  {opportunity.title}
                </h3>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                  {opportunity.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-6 md:p-8 text-center border border-gray-700 rounded-lg">
        <div className="bg-gray-900 p-6 md:p-8 text-center border border-gray-700 rounded-lg">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-4 tracking-wide">
            Ready to Fund the Future?
          </h3>
          <p className="text-sm md:text-base text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed">
            We're seeking strategic partners who share our vision for original, culturally relevant storytelling. Let's discuss how you can be part of the Archway story.
          </p>
          <Link 
            to="/investment" 
            className="inline-block bg-white text-black px-6 md:px-8 py-3 font-medium hover:bg-gray-200 transition-all duration-300 rounded-lg tracking-wide text-sm md:text-base"
          >
            Get Investment Details
          </Link>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Investment;