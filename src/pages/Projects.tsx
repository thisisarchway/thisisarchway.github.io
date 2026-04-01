import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '../components/Layout';
import { AnimatedSection } from '../components/AnimatedSection';
import { StructuredDataProjects } from '../components/StructuredDataProjects';
import { StaggeredText } from '../components/StaggeredText';
import { useParallax } from '../hooks/useParallax';

const Projects = () => {
  const projects = [
   {
  title: "SOMEDAY",
  category: "Feature",
  status: "Filming Summer 2026",
  description: "SOMEDAY follows James, Sara, and Eric on the last day of summer, as they each embark on separate misadventures in their small town. They intersect and collide with enemies, lovers, and each other, experiencing all the highs and lows of being a teenager in a 24 hour period.",
  image: "/someday..png",
  credit: "Story By: Dan Chen"
},
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
      <div className="pt-32 pb-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection animation="fade-in">
            <h1 className="text-7xl md:text-9xl lg:text-[8rem] xl:text-[10rem] text-white mb-24 leading-[0.9] tracking-tight">
              <StaggeredText staggerDelay={60}>
                Projects
              </StaggeredText>
            </h1>
          </AnimatedSection>

          <div className="space-y-32">
            {projects.map((project, index) => {
              const ProjectImage = () => {
                const { ref, offset } = useParallax({ speed: 0.2 });

                return (
                  <div ref={ref} className="relative overflow-hidden bg-black rounded-lg">
                    <div
                      className="transition-transform duration-700 ease-out"
                      style={{ transform: `scale(1.1) translateY(${offset}px)` }}
                    >
                      <img
                        src={project.image}
                        alt={`${project.title} - ${project.description}`}
                        className="w-full h-[500px] md:h-[600px] object-cover object-center transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-90"
                        width="1200"
                        height="600"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
                    <div className="absolute top-6 left-6 flex gap-3 z-10">
                      <span className="bg-white text-black px-4 py-1.5 text-xs font-semibold tracking-widest uppercase transition-transform duration-300 group-hover:scale-105">
                        {project.category}
                      </span>
                      <span className="bg-black/60 backdrop-blur-sm border border-white/20 text-white px-4 py-1.5 text-xs font-medium tracking-widest uppercase transition-all duration-300 group-hover:border-white/40">
                        {project.status}
                      </span>
                    </div>
                  </div>
                );
              };

              return (
                <AnimatedSection key={index} animation="zoom" delay={index * 100}>
                  <div className="group max-w-5xl mx-auto">
                    <ProjectImage />
                    <div className="mt-12 px-4 md:px-8">
                      <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8 tracking-tight group-hover:text-gray-300 transition-colors duration-300">
                        {project.title}
                      </h2>
                      <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-6 max-w-3xl transition-all duration-500 group-hover:text-gray-300">
                        {project.description}
                      </p>
                      <p className="text-sm text-gray-600 tracking-wide transition-colors duration-300 group-hover:text-gray-500">
                        {project.credit}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
      </div>
    </Layout>
  );
};

export default Projects;