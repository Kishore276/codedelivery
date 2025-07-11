import React from 'react';
import { ArrowRight, PlayCircle, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      
      {/* Floating Neon Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-float-neon"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-float-neon-delayed"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-400/3 rounded-full blur-2xl animate-pulse-slow"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-on-scroll">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <Zap className="h-8 w-8 text-blue-400 mr-2" />
              <span className="text-blue-400 font-semibold tracking-wide">NEXT-GEN DEVELOPMENT</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">Professional</span>
              <br />
              <span className="neon-text-blue">& Creative Solutions</span>
              <br />
              <span className="neon-text-green">Beyond Tomorrow</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl" style={{ animationDelay: '0.5s' }}>
              "Innovation is our language, Excellence is our standard, 
              Your success is our mission."
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" style={{ animationDelay: '0.7s' }}>
              <button className="group bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                View Our Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group border-2 border-green-500 text-green-400 hover:bg-green-500/10 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                <PlayCircle className="mr-2 h-5 w-5" />
                Get In Touch
              </button>
            </div>
          </div>

          {/* Right Content - Animated Tech Elements */}
          <div className="relative animate-on-scroll" style={{ animationDelay: '0.3s' }}>
            <div className="relative w-full h-96 lg:h-[500px]">
              {/* Main Code Terminal */}
              <div className="absolute inset-0 bg-gray-900 rounded-2xl transform rotate-3 animate-float-terminal border border-blue-500/20">
                <div className="p-4">
                  <div className="flex space-x-2 mb-4">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-blue-400 rounded w-1/2"></div>
                    <div className="h-2 bg-green-400 rounded w-3/4"></div>
                    <div className="h-2 bg-blue-300 rounded w-1/3"></div>
                    <div className="h-2 bg-green-300 rounded w-2/3"></div>
                    <div className="h-2 bg-blue-500 rounded w-1/2"></div>
                  </div>
                </div>
              </div>
              
              {/* Floating Mobile Device */}
              <div className="absolute top-20 right-10 w-32 h-56 bg-gray-800 rounded-2xl transform -rotate-12 animate-float-device border border-green-500/20">
                <div className="p-2">
                  <div className="w-full h-full bg-gradient-to-b from-blue-900/50 to-green-900/50 rounded-xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                    <div className="absolute top-2 left-2 w-2 h-2 bg-blue-400 rounded-full"></div>
                    <div className="absolute top-2 right-2 w-2 h-2 bg-green-400 rounded-full"></div>
                    <div className="absolute bottom-2 left-2 w-2 h-2 bg-blue-300 rounded-full"></div>
                    <div className="absolute bottom-2 right-2 w-2 h-2 bg-green-300 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Floating Tech Icons */}
              <div className="absolute top-10 left-10 w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center animate-float-icon border border-blue-400/30">
                <span className="text-blue-400 font-bold text-xs">JS</span>
              </div>
              <div className="absolute bottom-10 left-20 w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center animate-float-icon-delayed border border-green-400/30">
                <span className="text-green-400 font-bold text-xs">PY</span>
              </div>
              <div className="absolute top-32 right-32 w-8 h-8 bg-blue-400/10 rounded-full flex items-center justify-center animate-float-icon-slow border border-blue-300/30">
                <span className="text-blue-300 font-bold text-xs">⚛</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;