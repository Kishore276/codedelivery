import React, { useState } from 'react';
import { ExternalLink, Github, Zap } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      title: 'Neon E-commerce Platform',
      category: 'web',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Futuristic e-commerce platform with advanced AI recommendations',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AI'],
      link: '#',
      color: 'blue'
    },
    {
      title: 'Cyber Food Delivery App',
      category: 'mobile',
      image: 'https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Next-gen food delivery app with real-time tracking',
      technologies: ['React Native', 'Firebase', 'Google Maps', 'WebRTC'],
      link: '#',
      color: 'green'
    },
    {
      title: 'Neon Brand Identity System',
      category: 'design',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Complete cyberpunk brand identity with neon aesthetics',
      technologies: ['Figma', 'Adobe Creative Suite', 'Branding', '3D Design'],
      link: '#',
      color: 'blue'
    },
    {
      title: 'AI-Powered Corporate Website',
      category: 'web',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Professional corporate website with AI chatbot integration',
      technologies: ['Next.js', 'Tailwind CSS', 'Sanity CMS', 'OpenAI'],
      link: '#',
      color: 'green'
    },
    {
      title: 'Quantum Fitness Tracker',
      category: 'mobile',
      image: 'https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'Advanced fitness tracking with biometric analysis',
      technologies: ['Flutter', 'Dart', 'HealthKit', 'ML Analytics'],
      link: '#',
      color: 'blue'
    },
    {
      title: 'Neural SaaS Dashboard',
      category: 'web',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      description: 'AI-driven analytics dashboard with predictive insights',
      technologies: ['Vue.js', 'Chart.js', 'Express.js', 'PostgreSQL', 'TensorFlow'],
      link: '#',
      color: 'green'
    }
  ];

  const filters = [
    { id: 'all', name: 'All Projects', color: 'blue' },
    { id: 'web', name: 'Web Development', color: 'green' },
    { id: 'mobile', name: 'Mobile Apps', color: 'blue' },
    { id: 'design', name: 'UI/UX Design', color: 'green' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-green-500/5 rounded-full blur-3xl animate-float-slow-delayed"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-400/3 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <div className="flex items-center justify-center mb-4 animate-bounce-subtle">
            <Zap className="h-8 w-8 text-blue-400 mr-2 animate-pulse" />
            <span className="text-blue-400 font-semibold tracking-wide">OUR WORK</span>
          </div>
          <h2 className="text-5xl font-bold mb-4 neon-text-blue animate-glow">Our Portfolio</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Explore our recent projects and see how we've helped businesses achieve their digital goals.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-on-scroll">
          {filters.map((filter, index) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 animate-fade-in ${
                activeFilter === filter.id
                  ? `bg-gradient-to-r ${filter.color === 'blue' ? 'from-blue-600 to-blue-400' : 'from-green-600 to-green-400'} text-white neon-button-${filter.color}`
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-600/50 hover:border-blue-500/50'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {filter.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 transform hover:-translate-y-2 animate-on-scroll neon-card hover-neon"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="flex space-x-4">
                    <button className={`p-3 bg-gray-900/80 backdrop-blur-sm rounded-full hover:bg-blue-500/20 transition-all duration-300 border ${project.color === 'blue' ? 'border-blue-400/50' : 'border-green-400/50'} animate-bounce-subtle`}>
                      <ExternalLink className={`h-5 w-5 ${project.color === 'blue' ? 'text-blue-400' : 'text-green-400'}`} />
                    </button>
                    <button className={`p-3 bg-gray-900/80 backdrop-blur-sm rounded-full hover:bg-green-500/20 transition-all duration-300 border ${project.color === 'blue' ? 'border-blue-400/50' : 'border-green-400/50'} animate-bounce-subtle`} style={{ animationDelay: '0.1s' }}>
                      <Github className={`h-5 w-5 ${project.color === 'blue' ? 'text-blue-400' : 'text-green-400'}`} />
                    </button>
                  </div>
                </div>
                
                {/* Floating Tech Indicator */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`w-3 h-3 ${project.color === 'blue' ? 'bg-blue-400' : 'bg-green-400'} rounded-full animate-pulse`}></div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className={`text-xl font-semibold mb-2 group-hover:${project.color === 'blue' ? 'text-blue-400' : 'text-green-400'} transition-colors duration-300 text-white`}>
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 group-hover:text-white transition-colors duration-300">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 ${project.color === 'blue' ? 'bg-blue-500/20 text-blue-300 border border-blue-400/30' : 'bg-green-500/20 text-green-300 border border-green-400/30'} rounded-full text-sm animate-pulse-glow`}
                      style={{ animationDelay: `${techIndex * 0.1}s` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center animate-on-scroll">
          <div className="bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-sm rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto border border-green-500/30 neon-card">
            <h3 className="text-3xl font-bold mb-4 neon-text-green animate-glow">Want to See Your Project Here?</h3>
            <p className="text-lg text-gray-300 mb-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              Let's create something amazing together that will stand out in the digital landscape.
            </p>
            <button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-500 hover:to-blue-500 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 neon-button-gradient animate-pulse-glow">
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;