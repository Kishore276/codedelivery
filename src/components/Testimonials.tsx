import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, Zap } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Jennifer Walsh',
      company: 'TechStart Inc.',
      role: 'CEO',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      rating: 5,
      content: 'Working with DevTeam Pro was an absolute game-changer for our business. They delivered a stunning neon-themed website that perfectly captures our brand identity and has significantly increased our online presence.',
      color: 'blue'
    },
    {
      name: 'Michael Thompson',
      company: 'GreenLeaf Solutions',
      role: 'Founder',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      rating: 5,
      content: 'The team exceeded our expectations in every way. Their attention to detail, cutting-edge animations, and technical expertise made the entire process smooth and enjoyable. Highly recommended!',
      color: 'green'
    },
    {
      name: 'Sarah Martinez',
      company: 'Urban Fitness',
      role: 'Marketing Director',
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      rating: 5,
      content: 'Our mobile app has received incredible feedback from users. The futuristic design and intuitive user experience are flawless. DevTeam Pro truly understands what makes great software.',
      color: 'blue'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-green-500/5 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-float-slow-delayed"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-green-400/3 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <div className="flex items-center justify-center mb-4 animate-bounce-subtle">
            <Zap className="h-8 w-8 text-blue-400 mr-2 animate-pulse" />
            <span className="text-blue-400 font-semibold tracking-wide">CLIENT FEEDBACK</span>
          </div>
          <h2 className="text-5xl font-bold mb-4 neon-text-blue animate-glow">What Our Clients Say</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto animate-on-scroll">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 lg:p-12 relative overflow-hidden border border-gray-700/50 neon-card">
            {/* Animated Quote Icon */}
            <Quote className={`absolute top-6 left-6 h-16 w-16 ${currentTestimonial.color === 'blue' ? 'text-blue-400/20' : 'text-green-400/20'} animate-pulse`} />
            
            {/* Floating Particles */}
            <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="absolute bottom-4 left-4 w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 right-8 w-1 h-1 bg-blue-300 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
            
            {/* Testimonial Content */}
            <div className="relative z-10 text-center">
              {/* Stars */}
              <div className="flex justify-center mb-6 animate-fade-in">
                {[...Array(currentTestimonial.rating)].map((_, index) => (
                  <Star
                    key={index}
                    className={`h-6 w-6 ${currentTestimonial.color === 'blue' ? 'text-blue-400' : 'text-green-400'} fill-current animate-pulse`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-lg lg:text-xl text-gray-300 mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                "{currentTestimonial.content}"
              </p>

              {/* Client Info */}
              <div className="flex items-center justify-center space-x-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <div className="relative">
                  <img
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    className="w-16 h-16 rounded-full object-cover shadow-2xl border-2 border-gray-600/50"
                  />
                  <div className={`absolute -bottom-1 -right-1 w-6 h-6 ${currentTestimonial.color === 'blue' ? 'bg-blue-400' : 'bg-green-400'} rounded-full flex items-center justify-center animate-pulse`}>
                    <Zap className="h-3 w-3 text-black" />
                  </div>
                </div>
                <div className="text-left">
                  <h4 className={`text-lg font-semibold ${currentTestimonial.color === 'blue' ? 'text-blue-300' : 'text-green-300'}`}>
                    {currentTestimonial.name}
                  </h4>
                  <p className={`${currentTestimonial.color === 'blue' ? 'text-blue-400' : 'text-green-400'} font-medium animate-glow`}>
                    {currentTestimonial.role}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {currentTestimonial.company}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-900/80 backdrop-blur-sm rounded-full p-3 border border-blue-400/50 hover:border-blue-400 transition-all duration-300 hover:bg-blue-500/10 animate-bounce-subtle"
          >
            <ChevronLeft className="h-6 w-6 text-blue-400" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-900/80 backdrop-blur-sm rounded-full p-3 border border-green-400/50 hover:border-green-400 transition-all duration-300 hover:bg-green-500/10 animate-bounce-subtle"
            style={{ animationDelay: '0.5s' }}
          >
            <ChevronRight className="h-6 w-6 text-green-400" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? `${testimonials[index].color === 'blue' ? 'bg-blue-400' : 'bg-green-400'} animate-pulse` 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center animate-on-scroll">
          <div className="bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-sm rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto border border-green-500/30 neon-card">
            <h3 className="text-3xl font-bold mb-4 neon-text-green animate-glow">Ready to Join Our Success Stories?</h3>
            <p className="text-lg text-gray-300 mb-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              Let's create an amazing digital experience that your customers will love.
            </p>
            <button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-500 hover:to-blue-500 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 neon-button-gradient animate-pulse-glow">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;