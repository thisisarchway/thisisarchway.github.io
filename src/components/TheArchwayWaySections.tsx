import React, { useState } from 'react';
import { Feather, DollarSign, Globe, Lightbulb } from 'lucide-react';

const TheArchwayWaySections = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const principles = [
    {
      title: "Original Voices, Original Visions",
      description: "Archway champions the voices shaping culture in real time. We work with emerging creators from Gen Z and underrepresented communities to develop projects that capture the chaos, urgency, and possibility of our era. Our mission is to protect originality, nurture new talent, and create work that meets the moment head-on.",
      icon: <Feather className="w-10 h-10 text-white" />,
      backgroundImage: "https://i.imgur.com/qIn73c9.jpeg"
    },
    {
      title: "Funding the Zeitgeist",
      description: "Archway uses a venture arts investment model that fuels not just individual films, but a long-term cultural engine. In return, investors gain access to stories and creators that influence trends, conversations, and social behavior as it unfolds. We protect creative integrity while offering collaborators a rare window into the pulse of Gen Z, the very audience driving the next wave of global media.",
      icon: <DollarSign className="w-10 h-10 text-white" />,
      backgroundImage: "https://i.imgur.com/ITXcIT1.jpeg"
    },
    {
      title: "Built By the Internet Generation",
      description: "It's no secret that online spaces dominate Gen Z media consumption. Yet at Archway, social media isn't the competition; it's a launchpad for bringing our generation back to traditional media worth showing up for. The internet didn't just shape us, it raised us, and we know how to use it to deliver digital, theatrical, and streaming projects that fill the gaps we have been craving. Who better than digital natives to build bridges between new media and the traditional.",
      icon: <Globe className="w-10 h-10 text-white" />,
      backgroundImage: "https://i.imgur.com/5ac0Okz.jpeg"
    },
    {
      title: "Not Another Sequel",
      description: "Audiences are audibly tired of the same stories being repackaged and are begging for new, original narratives. Although betting on already beloved IP can seem less risky, clearly, viewers are searching for something more. This stagnation in modern storytelling is taking up space where young creatives are ready to deliver fresh ideas. We believe originality isn't just essential, it's the smartest bet in the business. Not taking a risk on younger talent is taking a risk on the future of entertainment.",
      icon: <Lightbulb className="w-10 h-10 text-white" />,
      backgroundImage: "https://i.imgur.com/g1L0EpU.jpeg"
    }
  ];

  return (
    <section className="py-24 md:py-32 px-4 md:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-7xl lg:text-8xl text-white mb-16 md:mb-20 leading-tight tracking-tight">
          The Archway Way
        </h2>
        
        <div className="flex flex-col md:flex-row w-full h-[800px] md:h-[400px] overflow-hidden rounded-lg">
          {principles.map((principle, index) => (
            <div
              key={index}
              className={`relative overflow-y-auto md:overflow-hidden cursor-pointer transition-all duration-500 ease-in-out
                ${hoveredIndex === index ? 'flex-[3] md:flex-[5]' : 'flex-1'}
                ${hoveredIndex !== null && hoveredIndex !== index ? 'opacity-50' : ''}
              `}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setHoveredIndex(hoveredIndex === index ? null : index)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setHoveredIndex(hoveredIndex === index ? null : index);
                }
              }}
              role="button"
              tabIndex={0}
              aria-expanded={hoveredIndex === index}
            >
              {/* Background image */}
              <div
                className={`absolute inset-0 rounded-lg bg-cover bg-center transition-opacity duration-500
                  ${hoveredIndex === index ? 'opacity-20' : 'opacity-100'}
                `}
                style={{
                  backgroundImage: `url('${principle.backgroundImage}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />

              {/* Dark overlay */}
              <div className={`absolute inset-0 rounded-lg transition-colors duration-500
                ${hoveredIndex === index ? 'bg-black/85' : 'bg-black/50'}
              `} />

              {/* Atmospheric radial gradient glow */}
              <div className={`absolute inset-0 bg-gradient-radial from-white/[0.08] via-transparent to-transparent opacity-0 transition-opacity duration-500 pointer-events-none ${
                hoveredIndex === index ? 'opacity-100' : ''
              }`} />

              {/* Subtle backdrop blur overlay */}
              <div className={`absolute inset-0 backdrop-blur-[2px] opacity-0 transition-opacity duration-500 pointer-events-none ${
                hoveredIndex === index ? 'opacity-100' : ''
              }`} />
              
              {/* Large title - visible by default, fades out on hover with delay */}
              <div className={`absolute inset-0 flex items-center justify-center text-center tracking-wide px-4 leading-tight z-10
                transition-all duration-300 ease-in-out
                ${hoveredIndex === index ? 'scale-95 translate-y-2 opacity-0 delay-0' : 'opacity-100 scale-100 delay-300'}
              `}>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-white">
                  {principle.title}
                </h3>
              </div>
              
              {/* Revealed content - hidden by default, fades in on hover with delay */}
              <div className={`absolute inset-0 flex items-center justify-center z-10 px-6 md:px-4 py-8 md:py-0 text-center
                transition-all duration-300 ease-in-out
                ${hoveredIndex === index ? 'opacity-100 translate-y-0 scale-100 delay-300' : 'opacity-0 translate-y-8 scale-95 delay-0'}
              `}>
                <div className="w-full max-w-2xl">
                  <h4 className="text-xl md:text-2xl lg:text-3xl font-medium text-white mb-4 md:mb-4 tracking-wide">
                    {principle.title}
                  </h4>
                  <p className="text-base md:text-base text-gray-300 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TheArchwayWaySections;