// projects/printing-agency/web/components/home/CategoryStrip.tsx
import React from 'react';
import { ArrowLeft, LayoutGrid } from 'lucide-react';

interface CategoryStripProps {
  id: string;
  title: string;
  description: string;
  image: string;
  colorTheme: string; // e.g., 'blue', 'gold', 'purple', 'green'
  link: string;
}

export const CategoryStrip = ({ id, title, description, image, colorTheme, link }: CategoryStripProps) => {
  const themeStyles = {
    blue: { bg: 'bg-blue-600', text: 'text-white', accent: 'bg-blue-500' },
    gold: { bg: 'bg-amber-500', text: 'text-white', accent: 'bg-amber-400' },
    purple: { bg: 'bg-purple-600', text: 'text-white', accent: 'bg-purple-500' },
    green: { bg: 'bg-emerald-600', text: 'text-white', accent: 'bg-emerald-500' },
    dark: { bg: 'bg-slate-800', text: 'text-white', accent: 'bg-slate-700' },
  };

  const currentTheme = themeStyles[colorTheme as keyof typeof themeStyles] || themeStyles.blue;

  return (
    <div className="group relative overflow-hidden rounded-3xl mb-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
      <div className={`flex flex-col md:flex-row items-center ${currentTheme.bg} min-h-[200px]`}>
        {/* Text Content */}
        <div className="flex-1 p-8 md:p-12 text-right space-y-4 z-10">
          <h2 className={`text-3xl md:text-4xl font-black ${currentTheme.text} mb-2`}>
            {title}
          </h2>
          <p className={`text-sm md:text-base ${currentTheme.text} opacity-90 max-w-md leading-relaxed`}>
            {description}
          </p>
          <a 
            href={link} 
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full ${currentTheme.accent} text-white font-bold hover:scale-105 transition-transform`}
          >
            استكشف المنتجات
            <ArrowLeft size={18} />
          </a>
        </div>

        {/* Image Area */}
        <div className="relative w-full md:w-1/3 h-64 md:h-full overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
        </div>
      </div>
    </div>
  );
};
