"use client";
import React, { useEffect, useState } from 'react';
import { productService } from '../../services/productService';
import { ProductCard } from './ProductCard';
import { ArrowRight, Filter } from 'lucide-react';

export const CategoryPage = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const allProducts = await productService.getProducts();
        const filtered = allProducts.filter((p: any) => p.category === category);
        setProducts(filtered);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [category]);

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Header */}
        <div className="text-right mb-12 space-y-4">
          <h1 className="text-4xl font-black text-gray-900 flex items-center justify-end gap-3">
            {category === 'laser' ? 'عالم حفر الليزر' : 
             category === 'paper' ? 'المطبوعات الورقية' : 
             category === 'thermal' ? 'الطباعة الحرارية' : 
             category === 'outdoor' ? 'اليافطات والدعاية' : 
             category === 'trophies' ? 'الجوائز والدروع' : 
             'خدمات القائد'}
            <ArrowRight size={32} className="text-blue-600" />
          </h1>
          <p className="text-gray-500 max-w-xl mr-0 ml-auto leading-relaxed">
            نقدم أجود الخامات وأدق التفاصيل لضمان خروج عملك بأفضل صورة ممكنة. تصفح منتجاتنا واختر ما يناسب تطلعاتك.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          <div className="relative w-full md:w-96">
            <input 
              type="text" 
              placeholder="ابحث عن منتج محدد..." 
              className="w-full p-3 pr-10 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Filter className="absolute left-3 top-3 text-gray-400" size={20} />
          </div>
        </div>

        {/* Product Grid */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="h-80 bg-gray-100 animate-pulse rounded-2xl" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onOrder={(p) => alert(`بدء عملية طلب: ${p.name}`)} 
              />
            ))}
            {filteredProducts.length === 0 && (
              <div className="col-span-full text-center py-20 text-gray-400">
                لا توجد منتجات متوفرة في هذا القسم حالياً.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
