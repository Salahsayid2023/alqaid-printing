// projects/printing-agency/web/components/catalog/ProductCard.tsx
import React from 'react';
import { ShoppingCart, Eye } from 'lucide-react';

interface ProductCardProps {
  product: any;
  onOrder: (product: any) => void;
}

export const ProductCard = ({ product, onOrder }: ProductCardProps) => {
  return (
    <div className="group relative bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Image Section */}
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img 
          src={product.images[0] || '/placeholder-product.jpg'} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <button className="p-3 bg-white text-gray-900 rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition-colors">
            <Eye size={20} />
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 space-y-2 text-right">
        <div className="flex justify-between items-start">
          <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">
            {product.category}
          </span>
          <span className="text-lg font-black text-gray-900">{product.price} ج.م</span>
        </div>
        <h3 className="font-bold text-gray-800 text-lg truncate">{product.name}</h3>
        <p className="text-gray-500 text-xs line-clamp-2 leading-relaxed">
          {product.description}
        </p>
        
        <button 
          onClick={() => onOrder(product)}
          className="w-full mt-4 py-3 bg-gray-900 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-600 transition-all shadow-sm"
        >
          <ShoppingCart size={18} />
          طلب الآن
        </button>
      </div>
    </div>
  );
};
