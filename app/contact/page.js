// app/contact/page.js
'use client';

import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Dribbble, ExternalLink, Clock, CheckCircle } from 'lucide-react';
import Navigation from '../components/Navigation';

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    budget: '',
    timeline: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        budget: '',
        timeline: ''
      });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      detail: 'hello@lunapierce.com',
      action: 'mailto:hello@lunapierce.com'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      detail: '+1 (555) 123-4567',
      action: 'tel:+15551234567'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      detail: 'San Francisco, CA',
      action: null
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Response Time',
      detail: 'Within 24 hours',
      action: null
    }
  ];

  const socialLinks = [
    {
      icon: <Instagram className="w-6 h-6" />,
      name: 'Instagram',
      handle: '@lunapierce',
      url: '#'
    },
    {
      icon: <Dribbble className="w-6 h-6" />,
      name: 'Dribbble',
      handle: 'lunapierce',
      url: '#'
    },
    {
      icon: <ExternalLink className="w-6 h-6" />,
      name: 'Portfolio',
      handle: 'lunapierce.com',
      url: '#'
    }
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white dark:bg-black text-slate-900 dark:text-white transition-colors duration-300 flex items-center justify-center">
        <Navigation />
        <div className="text-center max-w-2xl mx-auto px-6">
          <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-8" />
          <h1 className="text-4xl md:text-5xl font-light mb-6 text-slate-900 dark:text-white">
            Thank You!
          </h1>
          <p className="text-xl text-slate-600 dark:text-gray-400 font-light mb-8">
            Your message has been sent successfully. I&apos;ll get back to you within 24 hours.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 text-white px-8 py-3 rounded-full transition-all duration-300 font-medium"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black text-slate-900 dark:text-white transition-colors duration-300">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-8 bg-gradient-to-br from-pink-50 to-violet-50 dark:from-black dark:to-gray-900 transition-colors duration-300">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transform transition-all duration-1000 ${isVisible.hero ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} id="hero">
            <h1 className="text-6xl md:text-7xl font-light mb-6 tracking-tight text-slate-900 dark:text-white transition-colors duration-300">
              Let&apos;s Connect
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-gray-400 font-light leading-relaxed transition-colors duration-300">
              Ready to bring your vision to life? I&apos;d love to hear about your project 
              and explore how we can create something amazing together.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div className={`transform transition-all duration-1000 ${isVisible.form ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`} id="form">
              <h2 className="text-3xl font-light mb-8 text-slate-900 dark:text-white transition-colors duration-300">
                Tell Me About Your Project
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-slate-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-slate-900 dark:text-white transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-slate-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-slate-900 dark:text-white transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                    Project Type *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-slate-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-slate-900 dark:text-white transition-all duration-300"
                  >
                    <option value="">Select a project type</option>
                    <option value="photography">Photography Session</option>
                    <option value="branding">Brand Identity Design</option>
                    <option value="website">Website Design</option>
                    <option value="art-direction">Art Direction</option>
                    <option value="digital-art">Digital Art Commission</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-slate-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-slate-900 dark:text-white transition-all duration-300"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-5k">Under $5,000</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k-plus">$50,000+</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                      Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-slate-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-slate-900 dark:text-white transition-all duration-300"
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="1-month">Within 1 month</option>
                      <option value="2-3-months">2-3 months</option>
                      <option value="3-6-months">3-6 months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-slate-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-slate-900 dark:text-white transition-all duration-300 resize-none"
                    placeholder="Tell me about your project, goals, and any specific requirements you have in mind..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 disabled:from-gray-400 disabled:to-gray-500 text-white px-8 py-4 rounded-lg transition-all duration-300 font-medium text-lg inline-flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105 disabled:transform-none disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-3 w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className={`transform transition-all duration-1000 ${isVisible.info ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`} id="info">
              <h2 className="text-3xl font-light mb-8 text-slate-900 dark:text-white transition-colors duration-300">
                Get In Touch
              </h2>
              
              <div className="space-y-6 mb-12">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-pink-500 to-violet-500 rounded-lg flex items-center justify-center text-white">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-1 transition-colors duration-300">
                        {item.title}
                      </h3>
                      {item.action ? (
                        <a 
                          href={item.action}
                          className="text-slate-600 dark:text-gray-400 hover:text-pink-500 transition-colors duration-300"
                        >
                          {item.detail}
                        </a>
                      ) : (
                        <p className="text-slate-600 dark:text-gray-400 transition-colors duration-300">
                          {item.detail}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-medium mb-6 text-slate-900 dark:text-white transition-colors duration-300">
                  Follow My Work
                </h3>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="flex items-center space-x-4 p-4 bg-slate-50 dark:bg-gray-800 rounded-lg hover:bg-slate-100 dark:hover:bg-gray-700 transition-all duration-300 group"
                    >
                      <div className="text-slate-600 dark:text-gray-400 group-hover:text-pink-500 transition-colors duration-300">
                        {social.icon}
                      </div>
                      <div>
                        <div className="text-slate-900 dark:text-white font-medium transition-colors duration-300">
                          {social.name}
                        </div>
                        <div className="text-sm text-slate-500 dark:text-gray-400 transition-colors duration-300">
                          {social.handle}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="mt-12 p-6 bg-gradient-to-r from-pink-50 to-violet-50 dark:from-pink-900/20 dark:to-violet-900/20 rounded-lg border border-pink-200 dark:border-pink-800 transition-colors duration-300">
                <h3 className="text-lg font-medium mb-3 text-slate-900 dark:text-white transition-colors duration-300">
                  Current Availability
                </h3>
                <p className="text-slate-600 dark:text-gray-400 mb-3 transition-colors duration-300">
                  I&apos;m currently accepting new projects for Q2 2024. Book early to secure your preferred timeline.
                </p>
                <div className="flex items-center text-green-600 dark:text-green-400">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-sm font-medium">Available for new projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 lg:px-8 bg-slate-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible.faq ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} id="faq">
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-slate-900 dark:text-white transition-colors duration-300">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-600 dark:text-gray-400 font-light transition-colors duration-300">
              Everything you need to know about working with me
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                question: "What's your typical project timeline?",
                answer: "Project timelines vary depending on scope and complexity. Photography sessions typically deliver within 2-3 weeks, while brand identity projects usually take 4-8 weeks. I'll provide a detailed timeline during our initial consultation."
              },
              {
                question: "Do you work with clients remotely?",
                answer: "Absolutely! While I'm based in San Francisco, I work with clients worldwide. For photography sessions, I can travel or work with local professionals in your area. Design and art direction projects are conducted entirely remotely."
              },
              {
                question: "What's included in your photography packages?",
                answer: "All photography packages include pre-session consultation, the full shoot, professional editing, and high-resolution digital delivery. Print rights and additional services like rush delivery or extra editing can be added as needed."
              },
              {
                question: "How do you handle revisions?",
                answer: "I include up to 3 rounds of revisions in all design projects to ensure you're completely satisfied with the final result. Additional revisions can be accommodated for an additional fee if needed."
              },
              {
                question: "What payment methods do you accept?",
                answer: "I accept bank transfers, credit cards, and PayPal. For larger projects, I typically work with a 50% deposit upfront and the remaining 50% upon completion and delivery."
              }
            ].map((faq, index) => (
              <div 
                key={index}
                className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-all duration-500 transform ${isVisible.faq ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <h3 className="text-lg font-medium mb-3 text-slate-900 dark:text-white transition-colors duration-300">
                  {faq.question}
                </h3>
                <p className="text-slate-600 dark:text-gray-400 font-light leading-relaxed transition-colors duration-300">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-gray-800 py-12 px-6 lg:px-8 transition-colors duration-300">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-slate-500 dark:text-gray-400 font-light transition-colors duration-300">
            © 2024 Luna Pierce. All rights reserved.
          </div>
          <div className="text-sm text-slate-500 dark:text-gray-400 font-light mt-4 md:mt-0 transition-colors duration-300">
            Crafted with passion in San Francisco
          </div>
        </div>
      </footer>
    </div>
  );
}