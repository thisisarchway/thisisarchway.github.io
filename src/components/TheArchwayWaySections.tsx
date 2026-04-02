import React, { useState } from 'react';
import { Feather, DollarSign, Globe, Lightbulb } from 'lucide-react';

const TheArchwayWaySections = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const principles = [
    {
      title: "Timely Stories with Timeless Resonance",
      description:
        "We develop projects that engage directly with the complexities of contemporary life, capturing the tension, humor, uncertainty, and possibility of today. The most compelling work does more than reflect the present; it interrogates it. Stories unafraid to explore dynamics shaping modern life, from shifting social norms to evolving expressions of power, identity, and inequality, often reveal emotional truths that remain relevant long after the moment that inspired them has passed. Narratives that feel unmistakably timely, yet remain wholly timeless, are the core of Archway.",
      icon: <Feather className="w-10 h-10 text-white" />,
      backgroundImage: "https://i.imgur.com/qIn73c9.jpeg",
    },
    {
      title: "An Understanding from the Inside",
      description:
        "Many assumptions about younger audiences are shaped from the outside looking in. Despite sky-high theatrical attendance and clear demand for meaningful long-form storytelling, decision makers removed from these communities often misinterpret online media consumption as diminished interest in film and television. As a Gen Z owned and operated studio, Archway understands that social media is not the competition— it's the launchpad. We consider audience pathways early, helping projects build anticipation, invite participation, and sustain engagement across platforms and communities.",
      icon: <DollarSign className="w-10 h-10 text-white" />,
      backgroundImage: "https://i.imgur.com/ITXcIT1.jpeg",
    },
    {
      title: "The Right Partners for the Right Now",
      description:
        "By identifying aligned partners whose involvement can meaningfully expand what is possible for a project financially, creatively, and practically, we help filmmakers produce the stories modern audiences are actively seeking, but that traditional systems often overlook. A partner only makes sense if they genuinely fit a project's creative DNA. Without that alignment, we do not move forward. For brands, investors, and organizations with that natural fit, credibility with younger markets is earned through participation, signaling that our stories and perspectives are worth investing in.",
      icon: <Globe className="w-10 h-10 text-white" />,
      backgroundImage: "https://i.imgur.com/5ac0Okz.jpeg",
    },
    {
      title: "Rebuild, Reinvest, Repeat",
      description:
        "In a market fatigued by familiar franchises, long-term sustainability depends on more than recycling existing IP. A healthy creative ecosystem requires consistent support for original ideas that reflect evolving audience realities. Rather than waiting for the industry to shift, Archway's model demonstrates why supporting new voices is both a creative and strategic advantage. Revenue generated through successful partnerships and projects is reinvested into more resonant work, with each project contributing to growing proof that originality is viable, valuable, and vital.",
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