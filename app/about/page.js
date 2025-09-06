// app/about/page.js
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Camera, Palette, Award, MapPin, Mail, Phone } from 'lucide-react';
import Navigation from '../components/Navigation';

export default function AboutPage() {
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

  const skills = [
    { name: 'Photography', level: 95 },
    { name: 'Digital Design', level: 90 },
    { name: 'Art Direction', level: 88 },
    { name: 'Brand Identity', level: 85 },
    { name: 'UI/UX Design', level: 82 },
    { name: 'Digital Art', level: 87 }
  ];

  const timeline = [
    {
      year: '2024',
      title: 'Senior Creative Director',
      company: 'Studio Collective',
      description: 'Leading creative vision for major brand campaigns and art installations.'
    },
    {
      year: '2022',
      title: 'Freelance Visual Artist',
      company: 'Independent',
      description: 'Established independent practice focusing on commercial photography and brand design.'
    },
    {
      year: '2020',
      title: 'Art Director',
      company: 'Creative Agency SF',
      description: 'Managed creative teams and developed visual strategies for tech startups.'
    },
    {
      year: '2018',
      title: 'Visual Designer',
      company: 'Design Studio',
      description: 'Specialized in brand identity and digital experiences for emerging brands.'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black text-slate-900 dark:text-white transition-colors duration-300">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-8 bg-gradient-to-br from-pink-50 to-violet-50 dark:from-black dark:to-gray-900 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <div className={`grid lg:grid-cols-2 gap-16 items-center transform transition-all duration-1000 ${isVisible.hero ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} id="hero">
            <div>
              <h1 className="text-6xl md:text-7xl font-light mb-6 tracking-tight text-slate-900 dark:text-white transition-colors duration-300">
                About Me
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 dark:text-gray-400 font-light leading-relaxed mb-8 transition-colors duration-300">
                I&apos;m Luna Pierce, a creative visionary passionate about telling stories through visual art, 
                photography, and design. Based in San Francisco, I bring ideas to life with authenticity and innovation.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 text-slate-600 dark:text-gray-400">
                  <MapPin className="w-5 h-5 text-pink-500" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-600 dark:text-gray-400">
                  <Camera className="w-5 h-5 text-pink-500" />
                  <span>8+ Years Experience</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-600 dark:text-gray-400">
                  <Award className="w-5 h-5 text-pink-500" />
                  <span>25+ Awards</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-gradient-to-br from-pink-100 to-violet-100 dark:from-pink-900/30 dark:to-violet-900/30">
                <Image 
                  src="https://images.unsplash.com/photo-1624873613044-be3c1de7f09a?w=600&h=800&fit=crop" 
                  alt="Luna Pierce"
                  width={600}
                  height={800}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-pink-500 to-violet-500 rounded-full blur-3xl opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transform transition-all duration-1000 ${isVisible.philosophy ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} id="philosophy">
            <h2 className="text-4xl md:text-5xl font-light mb-8 text-slate-900 dark:text-white transition-colors duration-300">
              My Philosophy
            </h2>
            <p className="text-xl text-slate-600 dark:text-gray-400 font-light leading-relaxed transition-colors duration-300">
              &ldquo;Every image tells a story, every design solves a problem, and every project is an opportunity 
              to create something meaningful. I believe in the power of visual communication to inspire, 
              connect, and transform perspectives. My work is driven by curiosity, empathy, and a 
              relentless pursuit of aesthetic excellence.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 lg:px-8 bg-slate-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible.skills ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} id="skills">
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-slate-900 dark:text-white transition-colors duration-300">
              Skills & Expertise
            </h2>
            <p className="text-xl text-slate-600 dark:text-gray-400 font-light max-w-2xl mx-auto transition-colors duration-300">
              A blend of technical proficiency and creative vision across multiple disciplines
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div 
                key={skill.name}
                className={`transform transition-all duration-1000 ${isVisible.skills ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="text-lg font-medium text-slate-900 dark:text-white transition-colors duration-300">
                    {skill.name}
                  </span>
                  <span className="text-sm text-slate-500 dark:text-gray-400 transition-colors duration-300">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-gray-700 rounded-full h-2 transition-colors duration-300">
                  <div 
                    className="bg-gradient-to-r from-pink-500 to-violet-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: isVisible.skills ? `${skill.level}%` : '0%' }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible.timeline ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} id="timeline">
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-slate-900 dark:text-white transition-colors duration-300">
              My Journey
            </h2>
            <p className="text-xl text-slate-600 dark:text-gray-400 font-light transition-colors duration-300">
              A timeline of growth, learning, and creative evolution
            </p>
          </div>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div 
                key={item.year}
                className={`relative flex items-start space-x-8 transform transition-all duration-1000 ${isVisible.timeline ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex-shrink-0 w-20 text-right">
                  <span className="text-2xl font-light text-pink-500">{item.year}</span>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full mt-2"></div>
                <div className="flex-1 pb-8">
                  <h3 className="text-xl font-medium mb-1 text-slate-900 dark:text-white transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-pink-500 mb-3 font-medium">{item.company}</p>
                  <p className="text-slate-600 dark:text-gray-400 font-light leading-relaxed transition-colors duration-300">
                    {item.description}
                  </p>
                </div>
                {index < timeline.length - 1 && (
                  <div className="absolute left-[7.5rem] top-8 w-px h-16 bg-gradient-to-b from-pink-500 to-violet-500"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 px-6 lg:px-8 bg-slate-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible.awards ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} id="awards">
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-slate-900 dark:text-white transition-colors duration-300">
              Recognition
            </h2>
            <p className="text-xl text-slate-600 dark:text-gray-400 font-light transition-colors duration-300">
              Honored to be recognized by industry peers and publications
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Photography Excellence Award',
                organization: 'International Photography Society',
                year: '2024'
              },
              {
                title: 'Best Brand Identity Design',
                organization: 'Design Awards Annual',
                year: '2023'
              },
              {
                title: 'Creative Director of the Year',
                organization: 'Creative Industry Awards',
                year: '2023'
              },
              {
                title: 'Digital Art Innovation',
                organization: 'Digital Arts Foundation',
                year: '2022'
              },
              {
                title: 'Young Creative Talent',
                organization: 'Creative Future Awards',
                year: '2021'
              },
              {
                title: 'Portfolio of the Year',
                organization: 'Visual Arts Society',
                year: '2020'
              }
            ].map((award, index) => (
              <div 
                key={index}
                className={`text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${isVisible.awards ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Award className="w-12 h-12 text-pink-500 mx-auto mb-4" />
                <h3 className="text-lg font-medium mb-2 text-slate-900 dark:text-white transition-colors duration-300">
                  {award.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-gray-400 mb-1 transition-colors duration-300">
                  {award.organization}
                </p>
                <p className="text-sm text-pink-500 font-medium">{award.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-pink-50 to-violet-50 dark:from-gray-900 dark:to-black transition-colors duration-300">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transform transition-all duration-1000 ${isVisible.cta ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} id="cta">
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-slate-900 dark:text-white transition-colors duration-300">
              Let&apos;s Work Together
            </h2>
            <p className="text-xl text-slate-600 dark:text-gray-400 font-light mb-8 transition-colors duration-300">
              Ready to bring your vision to life? I&apos;d love to hear about your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 text-white px-12 py-4 rounded-full transition-all duration-300 font-medium tracking-wide text-lg inline-flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Mail className="mr-3 w-5 h-5" />
                GET IN TOUCH
              </a>
              <a 
                href="tel:+1234567890"
                className="border-2 border-slate-300 dark:border-gray-600 text-slate-700 dark:text-gray-300 hover:border-pink-500 hover:text-pink-500 px-12 py-4 rounded-full transition-all duration-300 font-medium tracking-wide text-lg inline-flex items-center justify-center"
              >
                <Phone className="mr-3 w-5 h-5" />
                CALL ME
              </a>
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