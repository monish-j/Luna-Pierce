// app/work/page.js
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Eye, Heart, ExternalLink, X, Filter } from 'lucide-react';
import Navigation from '../components/Navigation';

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
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

  const portfolioItems = [
    {
      id: 1,
      category: 'photography',
      title: 'Urban Landscapes',
      description: 'A comprehensive series exploring the beauty and complexity of urban environments, capturing the interplay between architecture and human life.',
      image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&h=800&fit=crop',
      likes: 142,
      views: 2341,
      year: '2024',
      client: 'Personal Project'
    },
    {
      id: 2,
      category: 'design',
      title: 'Bloom - Sustainable Fashion',
      description: 'Complete brand identity design for a sustainable fashion startup, including logo design, color palette, and marketing materials.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=800&fit=crop',
      likes: 89,
      views: 1205,
      year: '2024',
      client: 'Bloom Fashion'
    },
    {
      id: 3,
      category: 'photography',
      title: 'Fashion Photography',
      description: 'High-end fashion photography showcasing style, elegance, and contemporary trends with creative lighting and composition.',
      image: 'https://images.unsplash.com/photo-1601762603339-fd61e28b698a?w=600&h=800&fit=crop',
      likes: 267,
      views: 3892,
      year: '2023',
      client: 'Various'
    },
    {
      id: 4,
      category: 'art',
      title: 'Digital Dreams',
      description: 'Abstract digital art series exploring consciousness, dreams, and the intersection of technology with human experience.',
      image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=800&fit=crop',
      likes: 156,
      views: 2104,
      year: '2023',
      client: 'Gallery Exhibition'
    },
    {
      id: 5,
      category: 'design',
      title: 'Mindful - Meditation App',
      description: 'Complete UI/UX design for a meditation app focused on mindfulness and mental wellness, featuring calming color palettes and intuitive navigation.',
      image: 'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=600&h=800&fit=crop',
      likes: 198,
      views: 2876,
      year: '2024',
      client: 'Mindful Technologies'
    },
    {
      id: 6,
      category: 'photography',
      title: 'Nature\'s Geometry',
      description: 'Finding and capturing geometric patterns in natural landscapes, showcasing the mathematical beauty of the natural world.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=800&fit=crop',
      likes: 134,
      views: 1987,
      year: '2023',
      client: 'National Geographic'
    },
    {
      id: 7,
      category: 'art',
      title: 'Color Theory Study',
      description: 'Experimental digital compositions exploring color relationships, emotional impact, and visual harmony through abstract forms.',
      image: 'https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=600&h=800&fit=crop',
      likes: 91,
      views: 1432,
      year: '2023',
      client: 'Personal Project'
    },
    {
      id: 8,
      category: 'design',
      title: 'FLUX Magazine',
      description: 'Complete editorial design for contemporary art magazine including layout, typography, and visual identity system.',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=800&fit=crop',
      likes: 223,
      views: 3156,
      year: '2024',
      client: 'FLUX Publications'
    },
    {
      id: 9,
      category: 'photography',
      title: 'Street Stories',
      description: 'Documentary photography series capturing candid moments and stories from urban street life across different cities.',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=800&fit=crop',
      likes: 189,
      views: 2547,
      year: '2023',
      client: 'Documentary Project'
    },
    {
      id: 10,
      category: 'design',
      title: 'EcoTech Branding',
      description: 'Brand identity and website design for a renewable energy startup, emphasizing sustainability and innovation.',
      image: 'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=600&h=800&fit=crop',
      likes: 145,
      views: 1876,
      year: '2024',
      client: 'EcoTech Solutions'
    },
    {
      id: 11,
      category: 'art',
      title: 'Metamorphosis',
      description: 'Mixed media digital art series exploring themes of transformation, growth, and personal evolution.',
      image: 'https://images.unsplash.com/photo-1549490349-8643362247b5?w=600&h=800&fit=crop',
      likes: 178,
      views: 2234,
      year: '2023',
      client: 'Art Exhibition'
    },
    {
      id: 12,
      category: 'photography',
      title: 'Architectural Details',
      description: 'Fine art photography focusing on architectural details, textures, and the interplay of light and shadow in built environments.',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&h=800&fit=crop',
      likes: 112,
      views: 1654,
      year: '2024',
      client: 'Architecture Firm'
    }
  ];

  const categories = ['all', 'photography', 'design', 'art'];

  const filteredItems = activeCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-slate-900 dark:text-white transition-colors duration-300">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-8 bg-gradient-to-br from-pink-50 to-violet-50 dark:from-black dark:to-gray-900 transition-colors duration-300">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transform transition-all duration-1000 ${isVisible.hero ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} id="hero">
            <h1 className="text-6xl md:text-7xl font-light mb-6 tracking-tight text-slate-900 dark:text-white transition-colors duration-300">
              My Work
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-gray-400 font-light leading-relaxed transition-colors duration-300">
              A collection of projects that showcase my passion for visual storytelling, 
              creative problem-solving, and artistic expression.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Filter Section */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-16">
            <div className={`transform transition-all duration-1000 ${isVisible.filters ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`} id="filters">
              <h2 className="text-2xl font-medium text-slate-900 dark:text-white mb-6 sm:mb-0 transition-colors duration-300">
                Filter by Category
              </h2>
            </div>
            <div className="flex items-center space-x-4 bg-slate-100 dark:bg-gray-800 rounded-2xl p-2 transition-colors duration-300">
              <Filter className="w-5 h-5 text-slate-500 dark:text-gray-400 ml-2" />
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-xl font-medium tracking-wide text-sm transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-gradient-to-r from-pink-500 to-violet-500 text-white shadow-lg'
                      : 'text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {category.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Portfolio Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredItems.map((item, index) => (
              <div 
                key={item.id}
                className={`group relative overflow-hidden rounded-2xl bg-slate-50 dark:bg-gray-900 shadow-lg hover:shadow-2xl transform transition-all duration-700 hover:scale-105 cursor-pointer ${isVisible.grid ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => setSelectedImage(item)}
                id="grid"
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
                
                {/* Overlay Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium tracking-wider text-pink-400 uppercase bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                    <div className="flex space-x-3">
                      <div className="flex items-center space-x-1 text-gray-300 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full">
                        <Heart className="w-4 h-4" />
                        <span className="text-sm">{item.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-gray-300 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full">
                        <Eye className="w-4 h-4" />
                        <span className="text-sm">{item.views}</span>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-lg font-medium mb-2 text-white">{item.title}</h3>
                  <p className="text-sm text-gray-300 font-light leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium tracking-wider text-pink-500 uppercase">
                      {item.category}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-gray-400 transition-colors duration-300">
                      {item.year}
                    </span>
                  </div>
                  <h3 className="text-lg font-medium mb-2 text-slate-900 dark:text-white transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-gray-400 font-light leading-relaxed mb-3 transition-colors duration-300">
                    {item.client}
                  </p>
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-gray-500 transition-colors duration-300">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <Heart className="w-3 h-3" />
                        <span>{item.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-3 h-3" />
                        <span>{item.views}</span>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-16">
            <button className="bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 text-white px-12 py-4 rounded-full transition-all duration-300 font-medium tracking-wide text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
              LOAD MORE PROJECTS
            </button>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <div className="relative max-w-6xl w-full">
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute -top-16 right-0 text-white hover:text-pink-500 transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <Image 
                  src={selectedImage.image} 
                  alt={selectedImage.title}
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
              <div className="order-1 lg:order-2 space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium tracking-wider text-pink-400 uppercase bg-pink-500/10 px-4 py-2 rounded-full">
                    {selectedImage.category}
                  </span>
                  <div className="flex space-x-4">
                    <div className="flex items-center space-x-2 text-gray-300">
                      <Heart className="w-5 h-5" />
                      <span>{selectedImage.likes}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-300">
                      <Eye className="w-5 h-5" />
                      <span>{selectedImage.views}</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-4xl font-light text-white">{selectedImage.title}</h3>
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <span>{selectedImage.client}</span>
                  <span>•</span>
                  <span>{selectedImage.year}</span>
                </div>
                <p className="text-lg text-gray-300 font-light leading-relaxed">
                  {selectedImage.description}
                </p>
                <div className="flex space-x-4">
                  <button className="bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 text-white px-8 py-3 rounded-full transition-all duration-300 font-medium">
                    VIEW PROJECT
                  </button>
                  <button className="border border-gray-600 hover:border-pink-500 text-white hover:text-pink-500 px-8 py-3 rounded-full transition-all duration-300 font-medium">
                    SHARE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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