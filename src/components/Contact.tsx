import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Send, Zap, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null
  });

  const [fieldErrors, setFieldErrors] = useState({});

  const validateField = (name, value) => {
    const errors = {};
    
    switch (name) {
      case 'name':
        if (!value.trim()) errors.name = 'Name is required';
        else if (value.trim().length < 2) errors.name = 'Name must be at least 2 characters';
        break;
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.trim()) errors.email = 'Email is required';
        else if (!emailRegex.test(value)) errors.email = 'Please enter a valid email';
        break;
      case 'subject':
        if (!value.trim()) errors.subject = 'Subject is required';
        break;
      case 'message':
        if (!value.trim()) errors.message = 'Message is required';
        else if (value.trim().length < 10) errors.message = 'Message must be at least 10 characters';
        break;
      default:
        break;
    }
    
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear field error when user starts typing
    if (fieldErrors[name]) {
      setFieldErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const errors = validateField(name, value);
    setFieldErrors(prev => ({
      ...prev,
      ...errors
    }));
  };

  const validateForm = () => {
    const errors = {};
    Object.keys(formData).forEach(key => {
      if (key !== 'phone') { // Phone is optional
        const fieldErrors = validateField(key, formData[key]);
        Object.assign(errors, fieldErrors);
      }
    });
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setFormStatus({ isSubmitting: true, isSubmitted: false, error: null });

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Success
      setFormStatus({ isSubmitting: false, isSubmitted: true, error: null });
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setFieldErrors({});
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus({ isSubmitting: false, isSubmitted: false, error: null });
      }, 5000);
      
    } catch (error) {
      setFormStatus({ 
        isSubmitting: false, 
        isSubmitted: false, 
        error: 'Failed to send message. Please try again.' 
      });
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hello@devteampro.com',
      link: 'mailto:hello@devteampro.com',
      color: 'blue'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
      color: 'green'
    },
    {
      icon: MapPin,
      title: 'Address',
      value: '123 Tech Street, Digital City, DC 12345',
      link: 'https://maps.google.com',
      color: 'blue'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: '+1 (555) 123-4567',
      link: 'https://wa.me/15551234567',
      color: 'green'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-green-500/5 rounded-full blur-3xl animate-float-slow-delayed"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-400/3 rounded-full blur-3xl animate-pulse-slow"></div>
        
        {/* Floating Particles */}
        <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-1/4 right-20 w-1 h-1 bg-green-400 rounded-full animate-float-slow"></div>
        <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-blue-500 rounded-full animate-bounce-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <div className="flex items-center justify-center mb-4 animate-bounce-subtle">
            <Zap className="h-8 w-8 text-green-400 mr-2 animate-pulse" />
            <span className="text-green-400 font-semibold tracking-wide">LET'S CONNECT</span>
          </div>
          <h2 className="text-5xl font-bold mb-4 neon-text-green animate-glow">Get In Touch</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Ready to start your next project? Let's discuss how we can help bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-on-scroll">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-gray-700/50 neon-card hover:border-blue-500/30 transition-all duration-500 transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-8 neon-text-blue animate-glow">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : '_self'}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="flex items-start space-x-4 p-4 rounded-lg bg-black/30 hover:bg-black/50 transition-all duration-300 animate-fade-in-up border border-gray-700/30 hover:border-blue-500/30 transform hover:scale-105 group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`${info.color === 'blue' ? 'bg-blue-500/20 border border-blue-400/50 group-hover:bg-blue-500/30' : 'bg-green-500/20 border border-green-400/50 group-hover:bg-green-500/30'} p-3 rounded-full animate-pulse-glow transition-all duration-300`}>
                      <info.icon className={`h-6 w-6 ${info.color === 'blue' ? 'text-blue-400' : 'text-green-400'} group-hover:scale-110 transition-transform duration-300`} />
                    </div>
                    <div>
                      <h4 className={`font-semibold ${info.color === 'blue' ? 'text-blue-300' : 'text-green-300'} mb-1 group-hover:text-white transition-colors duration-300`}>
                        {info.title}
                      </h4>
                      <p className="text-gray-300 hover:text-white transition-colors duration-300">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Quick Contact Button */}
              <div className="mt-8 pt-8 border-t border-gray-700/50">
                <a
                  href="https://wa.me/15551234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white px-6 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center neon-button-green animate-pulse-glow transform hover:scale-105"
                >
                  <MessageCircle className="mr-2 h-5 w-5 animate-bounce-subtle" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-on-scroll" style={{ animationDelay: '0.2s' }}>
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-gray-700/50 neon-card hover:border-green-500/30 transition-all duration-500 transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-8 neon-text-green animate-glow">Send us a Message</h3>
              
              {/* Success Message */}
              {formStatus.isSubmitted && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-400/50 rounded-lg flex items-center animate-fade-in">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                  <span className="text-green-300">Thank you! Your message has been sent successfully.</span>
                </div>
              )}

              {/* Error Message */}
              {formStatus.error && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-400/50 rounded-lg flex items-center animate-fade-in">
                  <AlertCircle className="h-5 w-5 text-red-400 mr-2" />
                  <span className="text-red-300">{formStatus.error}</span>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                    <label htmlFor="name" className="block text-sm font-medium text-blue-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      className={`w-full px-4 py-3 bg-black/50 border rounded-lg focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 transition-all duration-300 text-white placeholder-gray-400 ${
                        fieldErrors.name ? 'border-red-400/50' : 'border-gray-600/50'
                      }`}
                      placeholder="Your Name"
                    />
                    {fieldErrors.name && (
                      <p className="mt-1 text-sm text-red-400 animate-fade-in">{fieldErrors.name}</p>
                    )}
                  </div>
                  <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <label htmlFor="email" className="block text-sm font-medium text-green-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      className={`w-full px-4 py-3 bg-black/50 border rounded-lg focus:ring-2 focus:ring-green-400/50 focus:border-green-400/50 transition-all duration-300 text-white placeholder-gray-400 ${
                        fieldErrors.email ? 'border-red-400/50' : 'border-gray-600/50'
                      }`}
                      placeholder="your@email.com"
                    />
                    {fieldErrors.email && (
                      <p className="mt-1 text-sm text-red-400 animate-fade-in">{fieldErrors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                    <label htmlFor="phone" className="block text-sm font-medium text-blue-300 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black/50 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 transition-all duration-300 text-white placeholder-gray-400"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                    <label htmlFor="subject" className="block text-sm font-medium text-green-300 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      className={`w-full px-4 py-3 bg-black/50 border rounded-lg focus:ring-2 focus:ring-green-400/50 focus:border-green-400/50 transition-all duration-300 text-white placeholder-gray-400 ${
                        fieldErrors.subject ? 'border-red-400/50' : 'border-gray-600/50'
                      }`}
                      placeholder="Project Subject"
                    />
                    {fieldErrors.subject && (
                      <p className="mt-1 text-sm text-red-400 animate-fade-in">{fieldErrors.subject}</p>
                    )}
                  </div>
                </div>

                <div className="animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                  <label htmlFor="message" className="block text-sm font-medium text-blue-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    rows={6}
                    className={`w-full px-4 py-3 bg-black/50 border rounded-lg focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 transition-all duration-300 text-white placeholder-gray-400 resize-none ${
                      fieldErrors.message ? 'border-red-400/50' : 'border-gray-600/50'
                    }`}
                    placeholder="Tell us about your project..."
                  />
                  {fieldErrors.message && (
                    <p className="mt-1 text-sm text-red-400 animate-fade-in">{fieldErrors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={formStatus.isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-500 hover:to-green-500 disabled:from-gray-600 disabled:to-gray-500 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:scale-100 neon-button-gradient animate-pulse-glow flex items-center justify-center disabled:cursor-not-allowed"
                >
                  {formStatus.isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5 animate-bounce-subtle" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center animate-on-scroll">
          <div className="bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-sm rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto border border-blue-500/30 neon-card hover:border-blue-500/50 transition-all duration-500 transform hover:scale-105">
            <div className="flex items-center justify-center mb-6 animate-bounce-subtle">
              <Zap className="h-12 w-12 text-blue-400 animate-pulse" />
            </div>
            <h3 className="text-3xl font-bold mb-4 neon-text-blue animate-glow">Let's Build Something Amazing Together</h3>
            <p className="text-lg text-gray-300 mb-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              Ready to transform your digital presence? We're here to help you succeed.
            </p>
            <div className="flex justify-center space-x-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
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

export default Contact;