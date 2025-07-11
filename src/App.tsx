import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Technologies from './components/Technologies';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/animations.css';

function App() {
  useEffect(() => {
    // Smooth scrolling for navigation links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });

    // Continuous floating animations
    const floatingElements = document.querySelectorAll('.continuous-float');
    floatingElements.forEach((el, index) => {
      el.style.animationDelay = `${index * 0.5}s`;
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated background particles */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-1/4 right-20 w-1 h-1 bg-green-400 rounded-full animate-float-slow"></div>
        <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-blue-500 rounded-full animate-bounce-slow"></div>
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-green-500 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-1 h-1 bg-blue-300 rounded-full animate-float-slow"></div>
      </div>
      
      <div className="relative z-10">
        <Header />
        <Hero />
        <About />
        <Services />
        <Technologies />
        <Portfolio />
        <Process />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;