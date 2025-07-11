import React from 'react';
import { Code, Database, Smartphone, Globe, Server, Cpu, Zap } from 'lucide-react';

const Technologies = () => {
  const technologies = [
    {
      category: 'Frontend',
      icon: Globe,
      color: 'blue',
      techs: [
        { name: 'React', icon: '⚛️' },
        { name: 'Vue.js', icon: '🟢' },
        { name: 'Angular', icon: '🔺' },
        { name: 'TypeScript', icon: '📘' },
        { name: 'Next.js', icon: '▲' },
        { name: 'Tailwind CSS', icon: '🎨' }
      ]
    },
    {
      category: 'Backend',
      icon: Server,
      color: 'green',
      techs: [
        { name: 'Node.js', icon: '🟢' },
        { name: 'Python', icon: '🐍' },
        { name: 'Django', icon: '🎯' },
        { name: 'Express.js', icon: '🚀' },
        { name: 'FastAPI', icon: '⚡' },
        { name: 'GraphQL', icon: '📊' }
      ]
    },
    {
      category: 'Mobile',
      icon: Smartphone,
      color: 'blue',
      techs: [
        { name: 'React Native', icon: '📱' },
        { name: 'Flutter', icon: '🦋' },
        { name: 'iOS Swift', icon: '🍎' },
        { name: 'Android Kotlin', icon: '🤖' },
        { name: 'Expo', icon: '🎪' },
        { name: 'Ionic', icon: '⚡' }
      ]
    },
    {
      category: 'Database',
      icon: Database,
      color: 'green',
      techs: [
        { name: 'PostgreSQL', icon: '🐘' },
        { name: 'MongoDB', icon: '🍃' },
        { name: 'Redis', icon: '🔴' },
        { name: 'MySQL', icon: '🐬' },
        { name: 'Firebase', icon: '🔥' },
        { name: 'Supabase', icon: '⚡' }
      ]
    },
    {
      category: 'DevOps',
      icon: Cpu,
      color: 'blue',
      techs: [
        { name: 'Docker', icon: '🐳' },
        { name: 'AWS', icon: '☁️' },
        { name: 'Kubernetes', icon: '⚙️' },
        { name: 'GitHub Actions', icon: '🔄' },
        { name: 'Vercel', icon: '▲' },
        { name: 'Netlify', icon: '🌐' }
      ]
    },
    {
      category: 'Tools',
      icon: Code,
      color: 'green',
      techs: [
        { name: 'Git', icon: '📝' },
        { name: 'VS Code', icon: '💻' },
        { name: 'Figma', icon: '🎨' },
        { name: 'Postman', icon: '📮' },
        { name: 'Jest', icon: '🧪' },
        { name: 'Webpack', icon: '📦' }
      ]
    }
  ];

  return (
    <section id="technologies" className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Animated Background Elements */}
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
            <span className="text-blue-400 font-semibold tracking-wide">TECH STACK</span>
          </div>
          <h2 className="text-5xl font-bold mb-4 neon-text-blue animate-glow">Technologies We Master</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Cutting-edge technologies and frameworks that power our innovative solutions
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-500 transform hover:-translate-y-2 animate-on-scroll neon-card"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-full ${category.color === 'blue' ? 'bg-blue-500/10 border border-blue-400/30' : 'bg-green-500/10 border border-green-400/30'} animate-pulse-glow`}>
                  <category.icon className={`h-8 w-8 ${category.color === 'blue' ? 'text-blue-400' : 'text-green-400'}`} />
                </div>
                <h3 className={`text-2xl font-bold ml-4 ${category.color === 'blue' ? 'neon-text-blue' : 'neon-text-green'} animate-glow`}>
                  {category.category}
                </h3>
              </div>

              {/* Technologies Grid */}
              <div className="grid grid-cols-3 gap-4">
                {category.techs.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="group/tech flex flex-col items-center p-4 rounded-lg bg-black/30 hover:bg-black/50 transition-all duration-300 border border-gray-700/30 hover:border-blue-500/20 animate-fade-in-up"
                    style={{ animationDelay: `${categoryIndex * 0.2 + techIndex * 0.1}s` }}
                  >
                    <div className="text-3xl mb-2 group-hover/tech:scale-110 transition-transform duration-300 animate-bounce-subtle">
                      {tech.icon}
                    </div>
                    <span className="text-gray-300 group-hover/tech:text-white transition-colors duration-300 font-medium text-sm text-center">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center animate-on-scroll">
          <div className="bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-sm rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto border border-blue-500/30 neon-card">
            <div className="flex items-center justify-center mb-6 animate-bounce-subtle">
              <Zap className="h-12 w-12 text-blue-400 animate-pulse" />
            </div>
            <h3 className="text-3xl font-bold mb-4 neon-text-blue animate-glow">Ready to Build Something Amazing?</h3>
            <p className="text-lg text-gray-300 mb-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              Let's leverage these cutting-edge technologies to bring your vision to life.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-500 hover:to-green-500 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 neon-button-gradient animate-pulse-glow">
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;