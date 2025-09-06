// app/page.js
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Play, Sparkles, TrendingUp, Award } from 'lucide-react';
import Navigation from './components/Navigation';

export default function HomePage() {
  const [isVisible, setIsVisible] = useState({});

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

  const featuredWork = [
    {
      id: 1,
      category: 'Photography',
      title: 'Urban Landscapes',
      description: 'A series exploring the beauty in everyday urban environments',
      image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&h=800&fit=crop',
      year: '2024'
    },
    {
      id: 2,
      category: 'Design',
      title: 'Brand Identity - Bloom',
      description: 'Complete brand identity for sustainable fashion startup',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=800&fit=crop',
      year: '2024'
    },
    {
      id: 3,
      category: 'Art',
      title: 'Digital Dreams',
      description: 'Abstract digital art exploring consciousness',
      image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=800&fit=crop',
      year: '2023'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black text-slate-900 dark:text-white transition-colors duration-300">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-violet-50 dark:from-black dark:to-gray-900 transition-colors duration-300"></div>
          <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-pink-200/20 to-violet-200/20 dark:from-pink-500/10 dark:to-violet-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-violet-200/20 to-pink-200/20 dark:from-violet-500/10 dark:to-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
          <div className={`transform transition-all duration-1000 ${isVisible.hero ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} id="hero">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-100 to-violet-100 dark:from-pink-900/30 dark:to-violet-900/30 rounded-full text-pink-700 dark:text-pink-300 font-medium mb-8 border border-pink-200 dark:border-pink-800 transition-colors duration-300">
              <Sparkles className="w-4 h-4 mr-2" />
              Available for new projects
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-light mb-8 leading-tight tracking-tight">
              <span className="block text-slate-900 dark:text-white transition-colors duration-300">Creative</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 animate-gradient">
                Visionary
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-slate-600 dark:text-gray-300 mb-12 font-light leading-relaxed max-w-4xl mx-auto transition-colors duration-300">
              I craft visual stories that connect, inspire, and transform. 
              From photography to digital art, every piece tells a story worth sharing.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link 
                href="/work" 
                className="group bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 text-white px-12 py-5 rounded-full transition-all duration-300 font-medium tracking-wide text-lg inline-flex items-center shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                VIEW MY WORK
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="group border-2 border-slate-300 dark:border-gray-600 text-slate-700 dark:text-gray-300 hover:border-pink-500 hover:text-pink-500 px-12 py-5 rounded-full transition-all duration-300 font-medium tracking-wide text-lg inline-flex items-center">
                <Play className="mr-3 w-6 h-6" />
                WATCH REEL
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-light text-pink-500 mb-2">150+</div>
                <div className="text-sm text-slate-500 dark:text-gray-400 uppercase tracking-wider">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-light text-pink-500 mb-2">50+</div>
                <div className="text-sm text-slate-500 dark:text-gray-400 uppercase tracking-wider">Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-light text-pink-500 mb-2">8+</div>
                <div className="text-sm text-slate-500 dark:text-gray-400 uppercase tracking-wider">Years</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-light text-pink-500 mb-2">25+</div>
                <div className="text-sm text-slate-500 dark:text-gray-400 uppercase tracking-wider">Awards</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-slate-400 dark:border-gray-400 rounded-full flex justify-center transition-colors duration-300">
            <div className="w-1 h-3 bg-slate-400 dark:bg-gray-400 rounded-full mt-2 animate-pulse transition-colors duration-300"></div>
          </div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="py-32 px-6 lg:px-8 bg-slate-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-20 transform transition-all duration-1000 ${isVisible.featured ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} id="featured">
            <h2 className="text-5xl md:text-6xl font-light mb-6 tracking-tight text-slate-900 dark:text-white transition-colors duration-300">Featured Work</h2>
            <p className="text-xl text-slate-600 dark:text-gray-400 font-light max-w-2xl mx-auto transition-colors duration-300">
              A selection of recent projects that showcase my passion for visual storytelling
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredWork.map((item, index) => (
              <div 
                key={item.id}
                className={`group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transform transition-all duration-700 hover:scale-105 ${isVisible.featured ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <Image 
                    src={item.image} 
                    alt={item.title}
                    width={600}
                    height={800}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="absolute inset-0 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium tracking-wider text-pink-400 uppercase bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                    <span className="text-xs text-gray-300 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                      {item.year}
                    </span>
                  </div>
                  <h3 className="text-2xl font-light mb-3 text-white">{item.title}</h3>
                  <p className="text-sm text-gray-300 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium tracking-wider text-pink-500 uppercase">
                      {item.category}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-gray-400 transition-colors duration-300">
                      {item.year}
                    </span>
                  </div>
                  <h3 className="text-xl font-medium mb-2 text-slate-900 dark:text-white transition-colors duration-300">{item.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-gray-400 font-light leading-relaxed transition-colors duration-300">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link 
              href="/work"
              className="group bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 text-white px-12 py-4 rounded-full transition-all duration-300 font-medium tracking-wide text-lg inline-flex items-center shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              VIEW ALL WORK
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services/Skills Section */}
      <section className="py-32 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-20 transform transition-all duration-1000 ${isVisible.services ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} id="services">
            <h2 className="text-5xl md:text-6xl font-light mb-6 tracking-tight text-slate-900 dark:text-white transition-colors duration-300">What I Do</h2>
            <p className="text-xl text-slate-600 dark:text-gray-400 font-light max-w-2xl mx-auto transition-colors duration-300">
              Bringing ideas to life through multiple creative disciplines
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <Award className="w-12 h-12 text-pink-500" />,
                title: "Photography",
                description: "Capturing moments that tell compelling stories through portrait, landscape, and commercial photography."
              },
              {
                icon: <Sparkles className="w-12 h-12 text-violet-500" />,
                title: "Design",
                description: "Creating visual identities, digital experiences, and brand materials that connect with audiences."
              },
              {
                icon: <TrendingUp className="w-12 h-12 text-pink-500" />,
                title: "Art Direction",
                description: "Leading creative vision for campaigns, projects, and brand experiences that make an impact."
              }
            ].map((service, index) => (
              <div 
                key={index}
                className={`text-center p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${isVisible.services ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="mb-6 flex justify-center">{service.icon}</div>
                <h3 className="text-2xl font-medium mb-4 text-slate-900 dark:text-white transition-colors duration-300">{service.title}</h3>
                <p className="text-slate-600 dark:text-gray-400 font-light leading-relaxed transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 lg:px-8 bg-gradient-to-br from-pink-50 to-violet-50 dark:from-gray-900 dark:to-black transition-colors duration-300">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transform transition-all duration-1000 ${isVisible.cta ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} id="cta">
            <h2 className="text-5xl md:text-6xl font-light mb-8 tracking-tight text-slate-900 dark:text-white transition-colors duration-300">
              Let&apos;s Create Something Beautiful Together
            </h2>
            <p className="text-xl text-slate-600 dark:text-gray-400 font-light mb-12 max-w-2xl mx-auto transition-colors duration-300">
              I&apos;m always excited to work on new projects and collaborate with amazing people. 
              Let&apos;s bring your vision to life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link 
                href="/contact"
                className="group bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 text-white px-12 py-5 rounded-full transition-all duration-300 font-medium tracking-wide text-lg inline-flex items-center shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                START A PROJECT
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/about"
                className="border-2 border-slate-300 dark:border-gray-600 text-slate-700 dark:text-gray-300 hover:border-pink-500 hover:text-pink-500 px-12 py-5 rounded-full transition-all duration-300 font-medium tracking-wide text-lg"
              >
                LEARN MORE
              </Link>
            </div>
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