// app/components/Navigation.js
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Instagram, Dribbble, ExternalLink } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'WORK', path: '/work' },
    { name: 'ABOUT', path: '/about' },
    { name: 'CONTACT', path: '/contact' }
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-black/80 backdrop-blur-md z-50 border-b border-slate-200/50 dark:border-gray-800/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <Link href="/" className="text-2xl font-light tracking-wider">
            <span className="text-slate-900 dark:text-white transition-colors duration-300">Luna</span>
            <span className="text-pink-500 ml-2">Pierce</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-12 text-sm font-light tracking-wide">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`transition-colors duration-300 ${
                  pathname === item.path
                    ? 'text-pink-500'
                    : 'text-slate-600 dark:text-gray-300 hover:text-pink-500'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-slate-400 dark:text-gray-400 hover:text-pink-500 transition-colors duration-300">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-slate-400 dark:text-gray-400 hover:text-pink-500 transition-colors duration-300">
              <Dribbble className="w-5 h-5" />
            </a>
            <a href="#" className="text-slate-400 dark:text-gray-400 hover:text-pink-500 transition-colors duration-300">
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              className="text-slate-900 dark:text-white transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-slate-200 dark:border-gray-800 transition-colors duration-300">
            <div className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-light tracking-wide transition-colors duration-300 ${
                    pathname === item.path
                      ? 'text-pink-500'
                      : 'text-slate-600 dark:text-gray-300 hover:text-pink-500'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex space-x-6 pt-4">
                <a href="#" className="text-slate-400 dark:text-gray-400 hover:text-pink-500 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-slate-400 dark:text-gray-400 hover:text-pink-500 transition-colors">
                  <Dribbble className="w-5 h-5" />
                </a>
                <a href="#" className="text-slate-400 dark:text-gray-400 hover:text-pink-500 transition-colors">
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}