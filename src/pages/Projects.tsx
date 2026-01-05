import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '../components/Layout';

const Projects = () => {
  const projects = [
    {
      title: "Vital",
      category: "Pilot",
      status: "In Development",
      description: "A disgruntled young professional seeks escapism from her mundane life through the influencers on her phone screen. When she befriends one of them, she must decide to continue as she is, or join the lifestyle of online stardom at a dubious cost.",
      image: "/vital-project.jpeg",
      credit: "Story By: Alyssa Archard"
    },
    {
      title: "Leaping",
      category: "Feature",
      status: "In Development",
      description: "On the night of their shared leap year birthday, two lifelong friends are given the chance to become 17 again. But starting over in today's world forces them to choose between the lives they've built and the second chance they've always dreamed of.",
      image: "https://i.imgur.com/dQArlrm.jpeg",
      credit: "Story By: Alyssa Archard"
    },
    {
      title: "The Untitled Aubrey Plaza Devil Project",
      category: "Feature",
      status: "In Development",
      description: "Down on her luck, Amalea Jane moved to Los Angeles to make it big in show-business. To her dismay, this sh*t is way harder than it looks, folks. At the edge of her sanity -and frankly on accident- she prays to the Devil who reveals itself in the form of her celebrity idol and crush: Aubrey Plaza. What follows is a ridiculous romp of friendship, fame and the glory of getting cancelled.",
      image: "https://i.imgur.com/7KE1aQF.jpeg",
      credit: "Story By: Ray Deutsch"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-black">
      <Helmet>
        <title>Projects - Archway Productions</title>
        <meta name="description" content="Explore Archway Productions' current projects including Vital and Leaping - original stories for the digital generation." />
        <link rel="canonical" href="https://thisisarchway.com/projects" />
        <meta property="og:title" content="Projects - Archway Productions" />
        <meta property="og:description" content="Explore Archway Productions' current projects including Vital and Leaping - original stories for the digital generation." />
      </Helmet>
      <div className="pt-20 pb-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-light text-white mb-12 text-center tracking-wide">
            Projects
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <div key={index} className={`group bg-gray-900/50 border border-gray-700 rounded-lg overflow-hidden hover:bg-gray-800/50 hover:scale-102 hover:shadow-lg transition-all duration-300 ${
                index === 2 ? 'md:col-span-2 md:w-1/2 md:mx-auto' : ''
              }`}>
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} - ${project.description}`}
                    className="w-full h-80 object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-white/90 text-black px-3 py-1 text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                    <span className="bg-gray-800/90 text-white px-3 py-1 text-xs font-medium rounded-full">
                      {project.status}
                    </span>
                  </div>
                </div>
                <div className="p-8 text-center">
                  <h2 className="text-3xl font-medium text-white mb-4 group-hover:text-gray-300 transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                  <p className="text-sm text-gray-400 mt-3 italic">
                    {project.credit}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </Layout>
  );
};

export default Projects;