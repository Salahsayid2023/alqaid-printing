"use client";
import React, { useState } from 'react';
import { Menu, X, ShoppingCart, User } from 'lucide-react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'الرئيسية', href: '/' },
    { name: 'خدماتنا', href: '/services' },
    { name: 'أعمالنا', href: '/portfolio' },
    { name: 'متابعة الطلب', href: '/track' },
    { name: 'تواصل معنا', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Area */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <span className="text-2xl font-black tracking-tighter text-gray-900">
              القائد <span className="text-blue-600">.</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 rtl:space-x-reverse">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse">
            <button className="p-2 text-gray-600 hover:text-blue-600 transition">
              <User size={20} />
            </button>
            <button className="p-2 text-gray-600 hover:text-blue-600 transition relative">
              <ShoppingCart size={20} />
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-blue-600 border-2 border-white"></span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 transition-all duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
