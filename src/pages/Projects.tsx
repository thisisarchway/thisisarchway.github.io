import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '../components/Layout';
import { AnimatedSection } from '../components/AnimatedSection';
import { StructuredDataProjects } from '../components/StructuredDataProjects';

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
      description: "Down on her luck, Amalea Jane moved to Los Angeles to make it big in show business. To her dismay, breaking in is way harder than it looks. At the edge of her sanity—and frankly on accident—she prays to the Devil, who reveals itself in the form of her celebrity idol and crush: Aubrey Plaza. What follows is a ridiculous romp of friendship, fame, and the glory of getting cancelled.",
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
        <meta property="og:image" content="https://thisisarchway.com/vital-project.jpeg" />
        <meta property="og:url" content="https://thisisarchway.com/projects" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Projects - Archway Productions" />
        <meta name="twitter:description" content="Explore Archway Productions' current projects including Vital and Leaping - original stories for the digital generation." />
        <meta name="twitter:image" content="https://thisisarchway.com/vital-project.jpeg" />
      </Helmet>
      <StructuredDataProjects />
      <div className="pt-20 pb-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection animation="fade-in">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-light text-white mb-12 text-center tracking-wide">
              Projects
            </h1>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 150}>
                <div className={`group bg-gray-900/50 border border-gray-700 rounded-lg overflow-hidden hover:bg-gray-800/70 hover:border-gray-500 hover:shadow-2xl transition-all duration-500 ${
                  index === 2 ? 'md:col-span-2 md:w-1/2 md:mx-auto' : ''
                }`}>
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} - ${project.description}`}
                    className="w-full h-80 object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                    width="800"
                    height="600"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-500" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-white/90 text-black px-3 py-1 text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                    <span className="bg-gray-800/90 text-white px-3 py-1 text-xs font-medium rounded-full">
                      {project.status}
                    </span>
                  </div>
                </div>
                <div className="p-10 text-center">
                  <h2 className="text-3xl font-medium text-white mb-5 group-hover:text-gray-200 transition-colors duration-300">
                    {project.title}
                  </h2>
                  <p className="text-base text-gray-300 leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <p className="text-sm text-gray-500 italic">
                    {project.credit}
                  </p>
                </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
      </div>
    </Layout>
  );
};

export default Projects;