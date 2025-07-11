import React from 'react';
import { Code, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, Zap } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', color: 'blue' },
    { icon: Twitter, href: '#', color: 'green' },
    { icon: Instagram, href: '#', color: 'blue' },
    { icon: Linkedin, href: '#', color: 'green' }
  ];

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Technologies', href: '#technologies' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' }
  ];

  return (
    <footer className="bg-gradient-to-t from-black to-gray-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl animate-float-slow"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-green-500/5 rounded-full blur-2xl animate-float-slow-delayed"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-12 grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2 animate-on-scroll">
            <div className="flex items-center space-x-2 mb-4 animate-bounce-subtle">
              <Code className="h-8 w-8 text-blue-400 animate-spin-slow" />
              <span className="text-2xl font-bold neon-text-blue animate-glow">CreativeCode Studio</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              We're a creative team of developers, designers, and digital artists 
              dedicated to crafting exceptional digital experiences, stunning visuals, 
              and innovative solutions that drive your success.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  className={`${social.color === 'blue' ? 'bg-blue-500/20 hover:bg-blue-500/30 border border-blue-400/50' : 'bg-green-500/20 hover:bg-green-500/30 border border-green-400/50'} p-3 rounded-full transition-all duration-300 transform hover:scale-110 animate-pulse-glow`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <social.icon className={`h-5 w-5 ${social.color === 'blue' ? 'text-blue-400' : 'text-green-400'}`} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-on-scroll" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-lg font-semibold mb-4 neon-text-green animate-glow">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                  >
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-on-scroll" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-lg font-semibold mb-4 neon-text-blue animate-glow">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 animate-fade-in-up">
                <div className="bg-blue-500/20 p-2 rounded-full border border-blue-400/50 animate-pulse-glow">
                  <Mail className="h-4 w-4 text-blue-400" />
                </div>
                <span className="text-gray-300 hover:text-white transition-colors duration-300">
                  hello@devteampro.com
                </span>
              </div>
              <div className="flex items-center space-x-3 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="bg-green-500/20 p-2 rounded-full border border-green-400/50 animate-pulse-glow">
                  <Phone className="h-4 w-4 text-green-400" />
                </div>
                <span className="text-gray-300 hover:text-white transition-colors duration-300">
                  +1 (555) 123-4567
                </span>
              </div>
            </div>

            {/* Tech Badge */}
            <div className="mt-6 p-3 bg-gray-800/50 rounded-lg border border-gray-700/50 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center space-x-2">
                <Zap className="h-4 w-4 text-green-400 animate-pulse" />
                <span className="text-sm text-gray-300">Powered by Next-Gen Tech</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800/50 py-6 flex flex-col md:flex-row justify-between items-center animate-on-scroll">
          <div className="text-gray-400 text-sm mb-4 md:mb-0 animate-fade-in">
            © {new Date().getFullYear()} CreativeCode Studio. All rights reserved. Built with ⚡ and 💙
          </div>
          <div className="flex space-x-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {legalLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute bottom-4 left-4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-8 right-8 w-1 h-1 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-4 right-1/4 w-1 h-1 bg-blue-300 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
    </footer>
  );
};

export default Footer;