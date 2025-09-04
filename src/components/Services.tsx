import React from 'react';
import { Film, Handshake, Smartphone, Clapperboard, Trophy, Ticket } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Film className="w-8 h-8" />,
      title: "Film & Television Development",
      description: "From innovative indie features to scripted series for streaming, we develop our fresh slate of stories crafted for impact, relevance, and long-term resonance.",
      highlight: "Development & Production"
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Funding & Collaborations",
      description: "Through strategic brand partnerships, commercial opportunities, and investment, we grow our slate while maintaining unwavering creative integrity.",
      highlight: "Strategic Partnerships"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Digital & Creator Strategy",
      description: "We use digital platforms to elevate projects and creators, connecting them with audiences most eager to engage and share their work.",
      highlight: "Platform Strategy"
    },
    {
      icon: <Clapperboard className="w-8 h-8" />,
      title: "Pre, Post, & Key Art",
      description: "With excellence in all areas of production, editing, and sound, we provide pre to post services from some of the industry's top talent.",
      highlight: "Full Post Pipeline"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Festival Strategy & Distribution",
      description: "We move with careful intention as we guide projects through festivals, screenings, and digital release strategies to maximize impact.",
      highlight: "Strategic Distribution"
    },
    {
      icon: <Ticket className="w-8 h-8" />,
      title: "Experiential & Event Strategy",
      description: "We design events, activations, and experiences that bring projects to life, spark conversations, and make audiences feel part of the worlds we create.",
      highlight: "Live Experiences"
    }
  ];

  return (
    <section id="services" className="py-12 md:py-20 px-4 md:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-light text-white mb-8 md:mb-16 text-center tracking-wide">
          What We Do
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {services.map((service, index) => (
            <div key={index} className="group hover:bg-gray-800/50 hover:scale-102 hover:shadow-lg p-4 md:p-6 rounded-lg transition-all duration-300 border border-gray-700 bg-gray-900/30 relative overflow-hidden min-h-[200px] flex items-center justify-center cursor-pointer">
              {/* Large title - visible by default, hidden on hover */}
              <h3 className="text-2xl md:text-3xl font-light text-white text-center group-hover:opacity-0 transition-opacity duration-300 absolute inset-0 flex items-center justify-center tracking-wide px-4 leading-tight">
                {service.title}
              </h3>
              
              {/* Content - hidden by default, visible on hover */}
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-full text-center">
                <div className="flex justify-center mb-4 text-white">
                  {service.icon}
                </div>
                <h4 className="text-lg md:text-xl font-medium text-white mb-3 md:mb-4 tracking-wide">
                  {service.title}
                </h4>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;