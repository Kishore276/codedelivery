import React from 'react';
import { Monitor, Smartphone, Palette, TrendingUp, Zap, Cpu } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: 'Web Development',
      description: 'Custom websites, e-commerce platforms, and web applications built with cutting-edge technologies.',
      features: ['Responsive Design', 'SEO Optimized', 'Lightning Fast', 'Secure & Scalable'],
      color: 'blue',
      gradient: 'from-blue-600 to-blue-400'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native iOS and Android apps, plus cross-platform solutions using React Native and Flutter.',
      features: ['Cross-platform', 'Native Performance', 'App Store Ready', 'Push Notifications'],
      color: 'green',
      gradient: 'from-green-600 to-green-400'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'User-centered design that creates intuitive and engaging digital experiences with neon aesthetics.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
      color: 'blue',
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      icon: TrendingUp,
      title: 'Video Editing',
      description: 'Professional video editing services for marketing, social media, and corporate content.',
      features: ['Motion Graphics', 'Color Grading', 'Audio Sync', 'Social Media Formats'],
      color: 'green',
      gradient: 'from-green-500 to-teal-500'
    },
    {
      icon: Cpu,
      title: 'Photo Editing',
      description: 'High-quality photo editing and retouching for products, portraits, and marketing materials.',
      features: ['Photo Retouching', 'Background Removal', 'Color Correction', 'Product Photography'],
      color: 'blue',
      gradient: 'from-blue-600 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Digital Marketing',
      description: 'Complete digital marketing solutions including SEO, social media, and content creation.',
      features: ['SEO Optimization', 'Social Media Marketing', 'Content Creation', 'Analytics & Reporting'],
      color: 'green',
      gradient: 'from-green-600 to-lime-500'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
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
            <Zap className="h-8 w-8 text-green-400 mr-2 animate-pulse" />
            <span className="text-green-400 font-semibold tracking-wide">WHAT WE OFFER</span>
          </div>
          <h2 className="text-5xl font-bold mb-4 neon-text-green animate-glow">Our Services</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            We offer comprehensive digital solutions to help your business thrive in the digital age.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 transform hover:-translate-y-2 animate-on-scroll neon-card hover-neon"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
                {/* Icon with Animated Background */}
                <div className="relative inline-flex items-center justify-center w-20 h-20 mb-6">
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-full opacity-20 animate-pulse-glow`}></div>
                  <div className={`relative w-16 h-16 ${service.color === 'blue' ? 'bg-blue-500/20 border border-blue-400/50' : 'bg-green-500/20 border border-green-400/50'} rounded-full flex items-center justify-center animate-bounce-subtle`}>
                    <service.icon className={`h-8 w-8 ${service.color === 'blue' ? 'text-blue-400' : 'text-green-400'} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                </div>

                <h3 className={`text-xl font-semibold mb-4 group-hover:${service.color === 'blue' ? 'text-blue-400' : 'text-green-400'} transition-colors duration-300 ${service.color === 'blue' ? 'text-blue-300' : 'text-green-300'}`}>
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 group-hover:text-white transition-colors duration-300">
                  {service.description}
                </p>
                
                {/* Features */}
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center justify-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 animate-fade-in-up"
                      style={{ animationDelay: `${index * 0.1 + featureIndex * 0.05}s` }}
                    >
                      <div className={`w-2 h-2 ${service.color === 'blue' ? 'bg-blue-400' : 'bg-green-400'} rounded-full mr-3 animate-pulse`}></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Hover Effect Button */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className={`px-6 py-2 bg-gradient-to-r ${service.gradient} text-white rounded-lg font-medium transform scale-95 group-hover:scale-100 transition-transform duration-300 neon-button-${service.color}`}>
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center animate-on-scroll">
          <div className="bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-sm rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto border border-green-500/30 neon-card">
            <div className="flex items-center justify-center mb-6 animate-bounce-subtle">
              <Zap className="h-12 w-12 text-blue-400 animate-pulse" />
            </div>
            <h3 className="text-3xl font-bold mb-4 neon-text-blue animate-glow">Ready to Get Started?</h3>
            <p className="text-lg text-gray-300 mb-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              Let's discuss your project and turn your ideas into reality with cutting-edge technology.
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

export default Services;