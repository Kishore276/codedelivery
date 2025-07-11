import React from 'react';
import { Users, Award, Clock, Heart, Zap, Github, Linkedin, Twitter } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: 'Alex Johnson',
      role: 'Lead Developer',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      skills: ['React', 'Node.js', 'TypeScript', 'AWS'],
      specialty: 'Full-Stack Architecture',
      bio: 'Passionate about creating scalable web applications with modern technologies.',
      social: {
        github: '#',
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'Sarah Chen',
      role: 'UI/UX Designer',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research'],
      specialty: 'Digital Experience Design',
      bio: 'Creating intuitive and beautiful user experiences that drive engagement.',
      social: {
        github: '#',
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'Mike Rodriguez',
      role: 'Mobile Developer',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      skills: ['React Native', 'Flutter', 'iOS', 'Android'],
      specialty: 'Cross-Platform Solutions',
      bio: 'Building high-performance mobile apps that work seamlessly across platforms.',
      social: {
        github: '#',
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'Emily Davis',
      role: 'Project Manager',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      skills: ['Agile', 'Scrum', 'Team Leadership', 'Client Relations'],
      specialty: 'Digital Strategy',
      bio: 'Ensuring projects are delivered on time with exceptional quality and client satisfaction.',
      social: {
        github: '#',
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'David Kim',
      role: 'Backend Engineer',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      skills: ['Python', 'Django', 'PostgreSQL', 'Docker'],
      specialty: 'API Development',
      bio: 'Architecting robust backend systems that power modern applications.',
      social: {
        github: '#',
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'Lisa Thompson',
      role: 'DevOps Engineer',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
      skills: ['AWS', 'Kubernetes', 'CI/CD', 'Monitoring'],
      specialty: 'Cloud Infrastructure',
      bio: 'Optimizing deployment pipelines and ensuring scalable, reliable infrastructure.',
      social: {
        github: '#',
        linkedin: '#',
        twitter: '#'
      }
    }
  ];

  const stats = [
    { icon: Users, value: '50+', label: 'Happy Clients', color: 'blue' },
    { icon: Award, value: '100+', label: 'Projects Completed', color: 'green' },
    { icon: Clock, value: '5+', label: 'Years Experience', color: 'blue' },
    { icon: Heart, value: '98%', label: 'Client Satisfaction', color: 'green' }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-green-500/5 rounded-full blur-3xl animate-float-slow-delayed"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-400/3 rounded-full blur-3xl animate-pulse-slow"></div>
        
        {/* Floating Particles */}
        <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-1/4 right-20 w-1 h-1 bg-green-400 rounded-full animate-float-slow"></div>
        <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-blue-500 rounded-full animate-bounce-slow"></div>
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-green-500 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-1 h-1 bg-blue-300 rounded-full animate-float-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <div className="flex items-center justify-center mb-4 animate-bounce-subtle">
            <Zap className="h-8 w-8 text-blue-400 mr-2 animate-pulse" />
            <span className="text-blue-400 font-semibold tracking-wide">MEET THE TEAM</span>
          </div>
          <h2 className="text-5xl font-bold mb-4 neon-text-blue animate-glow">About Our Team</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            We're a passionate team of developers, designers, and strategists 
            dedicated to creating exceptional digital experiences.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 animate-on-scroll neon-card hover-neon"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 animate-pulse-glow ${
                stat.color === 'blue' ? 'bg-blue-500/20 border border-blue-400/50' : 'bg-green-500/20 border border-green-400/50'
              }`}>
                <stat.icon className={`h-8 w-8 ${stat.color === 'blue' ? 'text-blue-400' : 'text-green-400'} animate-bounce-subtle`} />
              </div>
              <div className={`text-3xl font-bold mb-2 ${stat.color === 'blue' ? 'neon-text-blue' : 'neon-text-green'} animate-glow`}>
                {stat.value}
              </div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Team Members */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden hover:border-blue-500/50 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 animate-on-scroll neon-card hover-neon"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Member Photo - Reduced Size */}
              <div className="flex justify-center pt-6 mb-4">
                <div className="relative group/photo">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-blue-400/30 group-hover:border-blue-400/70 transition-all duration-300 animate-pulse-glow">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover/photo:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center animate-pulse">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Member Info */}
              <div className="px-6 pb-6 text-center">
                <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors duration-300 animate-fade-in">
                  {member.name}
                </h3>
                <p className="text-green-400 font-medium mb-2 animate-glow">{member.role}</p>
                <p className="text-blue-400 text-sm mb-4 animate-fade-in">{member.specialty}</p>
                
                {/* Bio - Shows on Hover */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 mb-4">
                  <p className="text-gray-300 text-sm animate-fade-in-up">{member.bio}</p>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  {member.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs border border-blue-400/30 animate-pulse-glow hover:bg-blue-500/30 transition-all duration-300"
                      style={{ animationDelay: `${skillIndex * 0.1}s` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Social Links - Shows on Hover */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex justify-center space-x-3">
                  <a 
                    href={member.social.github} 
                    className="p-2 bg-gray-800/50 rounded-full hover:bg-blue-500/20 transition-all duration-300 transform hover:scale-110 animate-bounce-subtle"
                  >
                    <Github className="h-4 w-4 text-blue-400" />
                  </a>
                  <a 
                    href={member.social.linkedin} 
                    className="p-2 bg-gray-800/50 rounded-full hover:bg-blue-500/20 transition-all duration-300 transform hover:scale-110 animate-bounce-subtle"
                    style={{ animationDelay: '0.1s' }}
                  >
                    <Linkedin className="h-4 w-4 text-blue-400" />
                  </a>
                  <a 
                    href={member.social.twitter} 
                    className="p-2 bg-gray-800/50 rounded-full hover:bg-green-500/20 transition-all duration-300 transform hover:scale-110 animate-bounce-subtle"
                    style={{ animationDelay: '0.2s' }}
                  >
                    <Twitter className="h-4 w-4 text-green-400" />
                  </a>
                </div>
              </div>

              {/* Animated Border Effect */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-xl border border-blue-400/20 animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="text-center animate-on-scroll">
          <div className="bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-sm rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto border border-blue-500/30 neon-card hover:border-blue-500/50 transition-all duration-500 transform hover:scale-105">
            <div className="flex items-center justify-center mb-6 animate-bounce-subtle">
              <Zap className="h-12 w-12 text-green-400 animate-pulse" />
            </div>
            <h3 className="text-3xl font-bold mb-6 neon-text-green animate-glow">Our Mission</h3>
            <p className="text-lg text-gray-300 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              We believe in the power of technology to transform businesses and improve lives. 
              Our mission is to deliver innovative, scalable, and user-centric solutions that 
              help our clients achieve their goals and exceed their expectations in the digital realm.
            </p>
            <div className="mt-8 flex justify-center space-x-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
              <div className="w-2 h-2 bg-blue-300 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;