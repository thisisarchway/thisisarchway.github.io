import React, { useState } from 'react';
import { Film, Handshake, Smartphone, Clapperboard, Trophy, Ticket } from 'lucide-react';

const Services = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

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
    <section id="services" className="py-24 md:py-32 px-4 md:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-20 md:mb-32 text-center tracking-tight">
          What We Do
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group hover:bg-white/5 p-8 md:p-12 transition-all duration-700 bg-black relative overflow-hidden min-h-[320px] flex items-center justify-center cursor-pointer hover:scale-[1.02] hover:shadow-[0_20px_60px_-15px_rgba(255,255,255,0.1)] ${
                activeIndex === index ? 'bg-white/5 scale-[1.02] shadow-[0_20px_60px_-15px_rgba(255,255,255,0.1)]' : ''
              }`}
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActiveIndex(activeIndex === index ? null : index);
                }
              }}
              role="button"
              tabIndex={0}
              aria-expanded={activeIndex === index}
            >
              {/* Atmospheric radial gradient glow - appears on hover */}
              <div className={`absolute inset-0 bg-gradient-radial from-white/[0.08] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none ${
                activeIndex === index ? 'opacity-100' : ''
              }`} />

              {/* Subtle backdrop blur overlay */}
              <div className={`absolute inset-0 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none ${
                activeIndex === index ? 'opacity-100' : ''
              }`} />

              {/* Large title - visible by default, hidden on hover/active */}
              <h3 className={`text-2xl md:text-3xl font-light text-white text-center group-hover:opacity-0 transition-opacity duration-700 absolute inset-0 flex items-center justify-center tracking-tight px-6 leading-tight ${
                activeIndex === index ? 'opacity-0' : ''
              }`}>
                {service.title}
              </h3>

              {/* Content - hidden by default, visible on hover/active */}
              <div className={`opacity-0 group-hover:opacity-100 transition-opacity duration-700 w-full text-center relative z-10 ${
                activeIndex === index ? 'opacity-100' : ''
              }`}>
                <div className="flex justify-center mb-6 text-white/80 group-hover:text-white transition-colors duration-700">
                  {service.icon}
                </div>
                <h4 className="text-xl md:text-2xl font-light text-white mb-5 tracking-tight group-hover:brightness-110 transition-all duration-700">
                  {service.title}
                </h4>
                <p className="text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-700">
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