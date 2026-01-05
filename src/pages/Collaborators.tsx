import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Film, TrendingUp, Users, Globe, Lightbulb, Target, Award, DollarSign } from 'lucide-react';
import AnimatedButton from '../components/AnimatedButton';
import Layout from '../components/Layout';

const Collaborators = () => {
  const services = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Development",
      description: "We help refine your concept, develop compelling narratives, and create pitch materials that resonate with audiences and investors.",
      benefits: ["Script development", "Story consultation", "Pitch deck creation", "Market research"]
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Funding",
      description: "Access our network of investors and funding opportunities, from seed funding to full production budgets.",
      benefits: ["Investor introductions", "Grant applications", "Crowdfunding strategy", "Budget planning"]
    },
    {
      icon: <Film className="w-8 h-8" />,
      title: "Production",
      description: "Full production support with our experienced team, equipment access, and industry connections.",
      benefits: ["Crew connections", "Equipment access", "Location scouting", "Post-production facilities"]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Marketing",
      description: "Leverage our digital-first marketing approach and social media expertise to build audience engagement.",
      benefits: ["Social media strategy", "Influencer partnerships", "Press coverage", "Festival submissions"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Distribution",
      description: "Navigate the complex distribution landscape with our multi-platform approach and industry relationships.",
      benefits: ["Streaming platform connections", "Theatrical distribution", "International sales", "Digital release strategy"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community",
      description: "Join a network of like-minded creators and gain access to collaborative opportunities and mentorship.",
      benefits: ["Creator network", "Mentorship programs", "Collaboration opportunities", "Industry events"]
    }
  ];

  const collaboratorTypes = [
    {
      title: "Emerging Filmmakers",
      description: "First-time and early-career directors with bold visions and unique perspectives.",
      ideal: "Perfect for directors with 1-3 short films or debut features seeking development and funding support."
    },
    {
      title: "Independent Producers",
      description: "Resilient producers looking for creative partnerships and additional resources. Experienced line producers who want to support our slate.",
      ideal: "Ideal for leaders with great ideas seeking co-production opportunities. We love people who love logistics."
    },
    {
      title: "Content Creators & Influencers",
      description: "Digital-native creators ready to transition into traditional filmmaking.",
      ideal: "Great for YouTubers, TikTokers, Instagram and social media creators with engaged audiences."
    },
    {
      title: "Writers & Screenwriters",
      description: "Talented writers with compelling scripts seeking production partners.",
      ideal: "Perfect for writers with completed screenplays or strong story concepts."
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-black">
      <Helmet>
        <title>Join Our Creative Collective - Archway Productions</title>
        <meta name="description" content="Collaborate with Archway Productions. We support emerging filmmakers, producers, content creators, and writers with funding, development, and distribution." />
        <link rel="canonical" href="https://thisisarchway.com/collaborators" />
        <meta property="og:title" content="Join Our Creative Collective - Archway Productions" />
        <meta property="og:description" content="Collaborate with Archway Productions. We support emerging filmmakers, producers, content creators, and writers with funding, development, and distribution." />
      </Helmet>
      <div className="pt-20 pb-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-light text-white mb-8 text-center tracking-wide">
            Join Our Creative Collective
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto text-center mb-16 leading-relaxed">
            If you create work that surprises, resonates, or challenges, we want to collaborate.
          </p>

          {/* What We Offer */}
          <div className="mb-24">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-light text-white mb-8 text-center tracking-wide">
              How We Support
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="bg-gray-900/50 border border-gray-700 rounded-lg p-6 hover:bg-gray-800/50 hover:border-white transition-all duration-300 group cursor-pointer relative overflow-hidden min-h-[200px] flex items-center justify-center"
                  style={{
                    backgroundImage: `url('${
                      service.title === "Development" ? "https://i.imgur.com/vSDINga.jpeg" :
                      service.title === "Funding" ? "https://i.imgur.com/2mHLOEQ.jpeg" :
                      service.title === "Production" ? "https://i.imgur.com/bTtBsio.jpeg" :
                      service.title === "Marketing" ? "https://i.imgur.com/XndFfKs.jpeg" :
                      service.title === "Distribution" ? "https://i.imgur.com/0TJ0QZC.jpeg" :
                      service.title === "Community" ? "https://i.imgur.com/EXxYffh.jpeg" :
                      ""
                    }')`,
                    backgroundSize: 'cover',
                    backgroundPosition: service.title === "Distribution" ? 'center top' : 'center'
                  }}
                >
                  {/* Dark overlay for readability */}
                  <div className="absolute inset-0 bg-black/70 group-hover:bg-black/85 transition-colors duration-300" />
                  
                  {/* Large title - visible by default, hidden on hover */}
                  <h3 className="text-2xl md:text-3xl font-light text-white text-center group-hover:scale-95 group-hover:translate-y-2 group-hover:opacity-0 transition-all duration-300 absolute inset-0 flex items-center justify-center tracking-wide px-4 leading-tight z-10">
                    {service.title}
                  </h3>
                  
                  {/* Content - hidden by default, visible on hover */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-full relative z-10">
                    <div className="flex justify-center mb-4">
                      <div className="text-white">
                        {service.icon}
                      </div>
                    </div>
                    <p className="text-white mb-4 leading-relaxed text-center">
                      {service.description}
                    </p>
                    <ul className="space-y-1 text-center">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="text-sm text-gray-500 italic flex items-center justify-center">
                          <span className="w-1.5 h-1.5 bg-gray-500 rounded-full mr-2"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Who We're Looking For */}
          <div className="mb-24">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-light text-white mb-8 text-center tracking-wide">
              Who We're Looking For
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {collaboratorTypes.map((type, index) => (
                <div key={index} className="bg-gray-900/50 border border-gray-700 rounded-lg p-6 text-center">
                  <h3 className="text-xl font-medium text-white mb-3 text-center">
                    {type.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed text-center">
                    {type.description}
                  </p>
                  <p className="text-sm text-gray-400 italic text-center">
                    {type.ideal}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Our Process */}
          <div className="mb-24">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-light text-white mb-8 text-center tracking-wide">
              Our Process
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              <div className="text-center group relative overflow-hidden rounded-lg p-6 transition-all duration-300 hover:bg-gray-800/50 bg-gray-900/50 border border-gray-700">
                {/* Background image for step 1 */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
                  style={{
                    backgroundImage: `url('https://i.imgur.com/anivm9t.jpeg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                    1
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2">Submit</h3>
                  <p className="text-gray-300 text-sm">Send us your project pitch, script, or creative portfolio</p>
                </div>
              </div>
              
              <div className="text-center group relative overflow-hidden rounded-lg p-6 transition-all duration-300 hover:bg-gray-800/50 bg-gray-900/50 border border-gray-700">
                {/* Background image for step 2 */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
                  style={{
                    backgroundImage: `url('https://i.imgur.com/QXsmnbY.jpeg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                    2
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2">Review</h3>
                  <p className="text-gray-300 text-sm">Our team evaluates your project for creative and commercial potential</p>
                </div>
              </div>
              
              <div className="text-center group relative overflow-hidden rounded-lg p-6 transition-all duration-300 hover:bg-gray-800/50 bg-gray-900/50 border border-gray-700">
                {/* Background image for step 3 */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
                  style={{
                    backgroundImage: `url('https://i.imgur.com/Zeq2ZyT.jpeg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                    3
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2">Selection</h3>
                  <p className="text-gray-300 text-sm">We will notify you if you are selected to move forward with us</p>
                </div>
              </div>
              
              <div className="text-center group relative overflow-hidden rounded-lg p-6 transition-all duration-300 hover:bg-gray-800/50 bg-gray-900/50 border border-gray-700">
                {/* Background image for step 4 */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
                  style={{
                    backgroundImage: `url('https://i.imgur.com/q89glQ1.jpeg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                    4
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2">Develop</h3>
                  <p className="text-gray-300 text-sm">Work together to refine your concept and create a production plan</p>
                </div>
              </div>
              
              <div className="text-center group relative overflow-hidden rounded-lg p-6 transition-all duration-300 hover:bg-gray-800/50 bg-gray-900/50 border border-gray-700">
                {/* Background image for step 5 */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
                  style={{
                    backgroundImage: `url('https://i.imgur.com/g1L0EpU.jpeg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                    5
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2">Produce</h3>
                  <p className="text-gray-300 text-sm">Bring your vision to life with full production and distribution support</p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gray-900/50 border border-gray-700 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-medium text-white mb-4">
              The Story Starts Here
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed">
              We're here for stories that defy expectations and leave a mark. If that's yours, submit your project for consideration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <AnimatedButton href="mailto:contact@thisisarchway.com">
                Submit Your Project
              </AnimatedButton>
            </div>
          </div>
        </div>
      </div>
      </div>
    </Layout>
  );
};

export default Collaborators;