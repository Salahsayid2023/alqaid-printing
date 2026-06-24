import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/home/Hero';
import { CategoryStrip } from '@/components/home/CategoryStrip';
import { DigitalSolutions } from '@/components/home/DigitalSolutions';

const categories = [
  {
    id: 'laser',
    title: 'حفر الليزر والتقطيع',
    description: 'أدق تفاصيل الحفر على الخشب، الأكريليك، والمعادن بدقة متناهية.',
    image: 'https://images.unsplash.com/photo-1530027859092-73315938687d?auto=format&fit=crop&q=80&w=800',
    colorTheme: 'blue',
    link: '/catalog/laser'
  },
  {
    id: 'paper',
    title: 'المطبوعات الورقية',
    description: 'كروت شخصية، بروشورات، ومجلات بأجود أنواع الورق وأحدث أنظمة الطباعة.',
    image: 'https://images.unsplash.com/photo-1586075010637-5100727450e1?auto=format&fit=crop&q=80&w=800',
    colorTheme: 'gold',
    link: '/catalog/paper'
  },
  {
    id: 'thermal',
    title: 'الطباعة الحرارية',
    description: 'طباعة على التيشرتات، المجات، والدروع الحرارية بجودة ألوان ثابتة.',
    image: 'https://images.unsplash.com/photo-1562601226-77f7737ec350?auto=format&fit=crop&q=80&w=800',
    colorTheme: 'purple',
    link: '/catalog/thermal'
  },
  {
    id: 'outdoor',
    title: 'اليافطات والدعاية الخارجية',
    description: 'بنرات، فينيل، وكلوك صب بمقاسات عملاقة تتحمل أصعب الظروف الجوية.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e82bbcaf3?auto=format&fit=crop&q=80&w=800',
    colorTheme: 'green',
    link: '/catalog/outdoor'
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <Header />
      <main>
        <Hero />
        
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-right mb-12 space-y-4">
            <h2 className="text-4xl font-black text-gray-900">خدماتنا المتميزة</h2>
            <p className="text-gray-500 text-lg max-w-2xl">نقدم مجموعة متكاملة من الحلول الطباعية التي تلبي كافة احتياجات عملك</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {categories.map((cat) => (
              <CategoryStrip key={cat.id} {...cat} />
            ))}
          </div>
        </section>

        <DigitalSolutions />
      </main>
      <Footer />
    </div>
  );
}
