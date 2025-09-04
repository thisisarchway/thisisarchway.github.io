import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      title: "Neon Dreams",
      category: "Short Film",
      description: "A cyberpunk-inspired narrative exploring identity in the digital age.",
      image: "https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Midnight Sessions",
      category: "Music Video Series",
      description: "Intimate performance videos capturing emerging artists in their element.",
      image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Urban Legends",
      category: "Web Series",
      description: "Modern folklore told through the lens of social media and digital culture.",
      image: "https://images.pexels.com/photos/1666779/pexels-photo-1666779.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      title: "Generation Now",
      category: "Documentary",
      description: "An exploration of Gen Z's impact on culture, politics, and the future.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  return (
    <section id="portfolio" className="py-12 md:py-20 px-4 md:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-white mb-8 md:mb-16 text-center tracking-wide">
          Featured Work
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-gray-900 border border-gray-700 rounded-lg overflow-hidden hover:shadow-2xl hover:shadow-white/10 hover:scale-102 transition-all duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={`${project.title} - ${project.description}`}
                  className="w-full h-48 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                 loading="lazy"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300" />
                <div className="absolute top-3 md:top-4 left-3 md:left-4">
                  <span className="bg-white/90 text-black px-2 md:px-3 py-1 text-xs font-medium rounded-full tracking-wider">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-4 md:p-6 text-center">
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 group-hover:text-gray-300 transition-colors tracking-wide">
                  {project.title}
                </h3>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;