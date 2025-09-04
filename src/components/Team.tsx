import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Founder & Creative Director",
      bio: "Former Netflix development executive with a passion for emerging voices and genre-defying storytelling.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Maya Rodriguez",
      role: "Head of Production",
      bio: "Award-winning producer with 15+ years experience bringing independent films from script to screen.",
      image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Jordan Kim",
      role: "Director of Development",
      bio: "Former A24 development coordinator specializing in discovering and nurturing new talent.",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Sam Taylor",
      role: "Head of Digital Strategy",
      bio: "Digital marketing expert who's launched viral campaigns for major studios and independent creators.",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <section id="team" className="py-12 md:py-20 px-4 md:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-white mb-8 md:mb-16 text-center tracking-wide">
          Our Team
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center group hover:scale-102 hover:shadow-lg transition-all duration-300">
              <div className="mb-6 relative">
                <img 
                  src={member.image} 
                  alt={`${member.name} - ${member.role}`}
                  className="w-24 md:w-32 h-24 md:h-32 rounded-full mx-auto object-cover border-4 border-gray-600 group-hover:border-white group-hover:scale-110 transition-all duration-300"
                 loading="lazy"
                />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-gray-300 transition-colors tracking-wide">
                {member.name}
              </h3>
              <p className="text-gray-400 mb-4 font-medium text-sm uppercase tracking-wider">
                {member.role}
              </p>
              <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;