import React, { useState } from 'react';
import { Feather, DollarSign, Globe, Lightbulb } from 'lucide-react';

const TheArchwayWaySections = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const principles = [
    {
      title: "Original Voices, Original Visions",
      description:
        "Archway champions the voices shaping culture in real time. We work with emerging creators from Gen Z and underrepresented communities to develop projects that capture the chaos, urgency, and possibility of our era. Our mission is to protect originality, nurture new talent, and create work that meets the moment head-on.",
      icon: <Feather className="w-10 h-10 text-white" />,
      backgroundImage: "https://i.imgur.com/qIn73c9.jpeg",
    },
    {
      title: "Funding the Zeitgeist",
      description:
        "Archway uses a venture arts investment model that fuels not just individual films, but a long-term cultural engine. In return, investors gain access to stories and creators that influence trends, conversations, and social behavior as it unfolds.",
      icon: <DollarSign className="w-10 h-10 text-white" />,
      backgroundImage: "https://i.imgur.com/ITXcIT1.jpeg",
    },
    {
      title: "Built by the Internet Generation",
      description:
        "Online spaces dominate Gen Z media consumption. At Archway, social media isn't the competition — it's the launchpad. We bring internet-native voices back into traditional media worth showing up for.",
      icon: <Globe className="w-10 h-10 text-white" />,
      backgroundImage: "https://i.imgur.com/5ac0Okz.jpeg",
    },
    {
      title: "Not Another Sequel",
      description:
        "Audiences are tired of recycled IP and are searching for new narratives. Betting on originality isn't risky — it's necessary. We believe not taking a chance on new voices is the biggest risk of all.",
      icon: <Lightbulb className="w-10 h-10 text-white" />,
      backgroundImage: "https://i.imgur.com/g1L0EpU.jpeg",
    },
  ];

  return (
    <section className="py-24 md:py-32 px-4 md:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-7xl lg:text-8xl text-white mb-16 md:mb-20 leading-tight tracking-tight">
          The Archway Way
        </h2>

        <div className="flex flex-col md:flex-row w-full md:h-[400px] gap-4 md:gap-0 rounded-lg">
          {principles.map((principle, index) => (
            <div
              key={index}
              className={`relative cursor-pointer transition-all duration-500 ease-in-out min-h-[220px] md:flex-1
                ${hoveredIndex === index ? 'md:flex-[5]' : ''}
                ${hoveredIndex !== null && hoveredIndex !== index ? 'opacity-50' : ''}
              `}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() =>
                setHoveredIndex(hoveredIndex === index ? null : index)
              }
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
                }}
              />

              {/* Dark overlay */}
              <div
                className={`absolute inset-0 rounded-lg transition-colors duration-500
                  ${hoveredIndex === index ? 'bg-black/85' : 'bg-black/50'}
                `}
              />

              {/* Default title */}
              <div
                className={`absolute inset-0 flex items-center justify-center text-center px-4 z-10
                  transition-all duration-300 ease-in-out
                  ${hoveredIndex === index
                    ? 'opacity-0 scale-95 translate-y-2'
                    : 'opacity-100 scale-100'}
                `}
              >
                <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-white">
                  {principle.title}
                </h3>
              </div>

              {/* Expanded content */}
              <div
                className={`absolute inset-0 flex items-center justify-center text-center px-6 z-10
                  transition-all duration-300 ease-in-out
                  ${hoveredIndex === index
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-0 translate-y-8 scale-95'}
                `}
              >
                <div className="max-w-2xl">
                  <h4 className="text-xl md:text-2xl lg:text-3xl font-medium text-white mb-4">
                    {principle.title}
                  </h4>
                  <p className="text-base text-gray-300 leading-relaxed">
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
