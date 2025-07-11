import React from 'react';
import { Search, Palette, Code, Rocket, Zap, CheckCircle, ArrowRight } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: Search,
      title: 'Discovery & Planning',
      description: 'We start by understanding your business, goals, and target audience to create a comprehensive project plan.',
      details: ['Requirements Analysis', 'Market Research', 'Project Roadmap', 'Timeline Planning'],
      color: 'blue',
      number: '01'
    },
    {
      icon: Palette,
      title: 'Design & Prototyping',
      description: 'Our designers create wireframes, mockups, and interactive prototypes with stunning visual aesthetics.',
      details: ['Wireframing', 'UI/UX Design', 'Interactive Prototypes', 'Design Reviews'],
      color: 'green',
      number: '02'
    },
    {
      icon: Code,
      title: 'Development & Testing',
      description: 'We build your project using cutting-edge technologies and conduct thorough testing to ensure quality.',
      details: ['Agile Development', 'Code Reviews', 'Quality Assurance', 'Performance Testing'],
      color: 'blue',
      number: '03'
    },
    {
      icon: Rocket,
      title: 'Launch & Support',
      description: 'We deploy your project and provide ongoing support and maintenance to ensure continued success.',
      details: ['Deployment', 'Performance Monitoring', 'Bug Fixes', 'Feature Updates'],
      color: 'green',
      number: '04'
    }
  ];

  return (
    <section id="process" className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-green-500/5 rounded-full blur-3xl animate-float-slow-delayed"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-400/3 rounded-full blur-3xl animate-pulse-slow"></div>
        
        {/* Floating Connection Lines */}
        <div className="absolute top-1/2 left-1/4 w-px h-32 bg-gradient-to-b from-blue-400/20 to-transparent animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-px h-24 bg-gradient-to-b from-green-400/20 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20 animate-on-scroll">
          <div className="flex items-center justify-center mb-6 animate-bounce-subtle">
            <div className="relative">
              <Zap className="h-10 w-10 text-green-400 animate-pulse" />
              <div className="absolute inset-0 bg-green-400/20 rounded-full blur-lg animate-pulse"></div>
            </div>
            <span className="text-green-400 font-semibold tracking-wider ml-3 text-lg">OUR WORKFLOW</span>
          </div>
          <h2 className="text-6xl font-bold mb-6 neon-text-green animate-glow">Our Process</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-green-400 mx-auto mb-6 rounded-full animate-pulse"></div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            We follow a proven, systematic approach to ensure your project is delivered on time, 
            within budget, and exceeds your expectations at every stage.
          </p>
        </div>

        {/* Enhanced Process Steps */}
        <div className="relative">
          {/* Animated Progress Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 transform -translate-y-1/2">
            <div className="relative w-full h-full bg-gray-700/30 rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-green-400 to-blue-400 rounded-full animate-pulse opacity-60"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-float-slow"></div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative group animate-on-scroll"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Step Number Badge */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 lg:relative lg:top-0 lg:left-0 lg:transform-none lg:mx-auto lg:mb-8 z-20">
                  <div className="relative">
                    {/* Outer Ring */}
                    <div className={`w-24 h-24 ${step.color === 'blue' ? 'bg-blue-500/10 border-2 border-blue-400/30' : 'bg-green-500/10 border-2 border-green-400/30'} rounded-full flex items-center justify-center shadow-2xl animate-pulse-glow group-hover:scale-110 transition-all duration-500`}>
                      {/* Inner Icon Container */}
                      <div className={`w-16 h-16 ${step.color === 'blue' ? 'bg-blue-500/20' : 'bg-green-500/20'} rounded-full flex items-center justify-center animate-bounce-subtle`}>
                        <step.icon className={`h-8 w-8 ${step.color === 'blue' ? 'text-blue-400' : 'text-green-400'} group-hover:scale-110 transition-transform duration-300`} />
                      </div>
                    </div>
                    
                    {/* Step Number */}
                    <div className={`absolute -top-2 -right-2 w-10 h-10 ${step.color === 'blue' ? 'bg-blue-400' : 'bg-green-400'} rounded-full flex items-center justify-center text-black font-bold text-sm shadow-lg animate-pulse border-2 border-black`}>
                      {step.number}
                    </div>
                    
                    {/* Connecting Arrow - Desktop Only */}
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 left-full transform -translate-y-1/2 ml-4">
                        <ArrowRight className={`h-6 w-6 ${step.color === 'blue' ? 'text-blue-400/50' : 'text-green-400/50'} animate-bounce-x`} />
                      </div>
                    )}
                  </div>
                </div>

                {/* Enhanced Step Content Card */}
                <div className="bg-gray-900/60 backdrop-blur-sm rounded-2xl p-8 mt-12 lg:mt-0 border border-gray-700/50 hover:border-blue-500/30 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 neon-card group-hover:shadow-2xl">
                  {/* Card Header */}
                  <div className="text-center mb-6">
                    <h3 className={`text-2xl font-bold mb-3 ${step.color === 'blue' ? 'text-blue-300 group-hover:text-blue-400' : 'text-green-300 group-hover:text-green-400'} transition-colors duration-300`}>
                      {step.title}
                    </h3>
                    <div className={`w-16 h-0.5 ${step.color === 'blue' ? 'bg-blue-400' : 'bg-green-400'} mx-auto rounded-full animate-pulse`}></div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-300 mb-6 text-center group-hover:text-white transition-colors duration-300 leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Details List */}
                  <div className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <div 
                        key={detailIndex} 
                        className="flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 animate-fade-in-up"
                        style={{ animationDelay: `${index * 0.2 + detailIndex * 0.1}s` }}
                      >
                        <CheckCircle className={`w-4 h-4 ${step.color === 'blue' ? 'text-blue-400' : 'text-green-400'} mr-3 animate-pulse flex-shrink-0`} />
                        <span className="group-hover:translate-x-1 transition-transform duration-300">{detail}</span>
                      </div>
                    ))}
                  </div>

                  {/* Hover Effect Indicator */}
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    <div className={`w-full h-1 ${step.color === 'blue' ? 'bg-gradient-to-r from-blue-400 to-blue-600' : 'bg-gradient-to-r from-green-400 to-green-600'} rounded-full animate-pulse`}></div>
                  </div>
                </div>

                {/* Mobile Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-6">
                    <div className={`w-0.5 h-12 ${step.color === 'blue' ? 'bg-gradient-to-b from-blue-400/50 to-green-400/50' : 'bg-gradient-to-b from-green-400/50 to-blue-400/50'} rounded-full animate-pulse`}></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="mt-20 text-center animate-on-scroll">
          <div className="relative bg-gradient-to-r from-gray-900/90 to-black/90 backdrop-blur-sm rounded-3xl p-12 lg:p-16 max-w-5xl mx-auto border border-blue-500/20 neon-card overflow-hidden">
            {/* Background Animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-green-500/5 animate-float-slow"></div>
            
            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-8 animate-bounce-subtle">
                <div className="relative">
                  <Rocket className="h-16 w-16 text-blue-400 animate-pulse" />
                  <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-xl animate-pulse"></div>
                </div>
              </div>
              
              <h3 className="text-4xl font-bold mb-6 neon-text-blue animate-glow">Ready to Start Your Journey?</h3>
              <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                Let's schedule a consultation to discuss your project and discover how our proven process 
                can transform your vision into reality.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-500 hover:to-green-500 text-white px-10 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 neon-button-gradient animate-pulse-glow shadow-2xl">
                  Schedule a Consultation
                </button>
                <button className="border-2 border-green-400/50 text-green-400 hover:bg-green-400/10 px-10 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                  View Our Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;