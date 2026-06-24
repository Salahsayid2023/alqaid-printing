// projects/printing-agency/web/components/admin/ProductForm.tsx
import React, { useState } from 'react';
import { productService } from '../../services/productService';
import { Category } from '../../types';

export const ProductForm = ({ onProductAdded }: { onProductAdded?: any }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: 'paper',
    price: '',
    isFeatured: false,
    image: null as any,
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      // 1. رفع الصورة أولاً
      let imageUrl = '';
      if (formData.image) {
        imageUrl = await productService.uploadProductImage(formData.image);
      }

      // 2. إضافة بيانات المنتج
      await productService.addProduct({
        ...formData,
        price: parseFloat(formData.price),
        images: imageUrl ? [imageUrl] : [],
      });

      alert('تم إضافة المنتج بنجاح إلى القائد!');
      setFormData({ name: '', description: '', category: 'paper', price: '', isFeatured: false, image: null });
      if (onProductAdded) onProductAdded();
    } catch (error: any) {
      alert('حدث خطأ أثناء الإضافة: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white rounded-lg shadow-md space-y-4">
      <h2 className="text-2xl font-bold mb-4">إضافة منتج جديد 🚀</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input 
          type="text" placeholder="اسم المنتج (مثلاً: محفظة خشب ليزر)" 
          className="p-2 border rounded" required
          value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
        />
        
        <select 
          className="p-2 border rounded"
          value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})}
        >
          <option value="paper">المطبوعات الورقية</option>
          <option value="laser">حفر الليزر</option>
          <option value="thermal">الطباعة الحرارية</option>
          <option value="outdoor">اليافطات والدعاية</option>
          <option value="trophies">الجوائز والدروع</option>
          <option value="digital">حلول القائد الرقمية</option>
          <option value="events">تنظيم المناسبات</option>
        </select>

        <input 
          type="number" placeholder="السعر" 
          className="p-2 border rounded" required
          value={formData.price} onChange={(e) => setFormData({...formData, price: e.target.value})}
        />

        <input 
          type="file" accept="image/*" 
          className="p-2 border rounded" required
          onChange={(e: any) => setFormData({...formData, image: e.target.files?.[0]})}
        />
      </div>

      <textarea 
        placeholder="وصف المنتج بالتفصيل..." 
        className="w-full p-2 border rounded h-32"
        value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})}
      />

      <label className="flex items-center space-x-2 cursor-pointer">
        <input 
          type="checkbox" 
          className="w-4 h-4"
          checked={formData.isFeatured} onChange={(e) => setFormData({...formData, isFeatured: e.target.checked})}
        />
        <span className="mr-2">يظهر في أشرطة العرض الرئيسية (Featured)</span>
      </label>

      <button 
        type="submit" 
        disabled={loading}
        className="w-full py-3 bg-black text-white rounded-lg font-bold hover:bg-gray-800 transition"
      >
        {loading ? 'جاري الرفع...' : 'حفظ المنتج في القائد ✅'}
      </button>
    </form>
  );
};
