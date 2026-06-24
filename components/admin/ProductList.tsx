// projects/printing-agency/web/components/admin/ProductList.tsx
import React, { useEffect, useState } from 'react';
import { productService } from '../../services/productService';
import { Trash2, Edit3, Eye } from 'lucide-react';

export const ProductList = ({ refreshTrigger }: { refreshTrigger?: any }) => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  // جلب المنتجات من قاعدة البيانات
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const data = await productService.getProducts();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [refreshTrigger]); // تحديث الجدول فوراً عند إضافة منتج جديد

  const handleDelete = async (id: any) => {
    if (window.confirm('هل أنت متأكد من حذف هذا المنتج من القائد؟')) {
      try {
        await productService.deleteProduct(id);
        await fetchProducts(); // تحديث القائمة بعد الحذف
      } catch (error) {
        alert('حدث خطأ أثناء الحذف');
      }
    }
  };

  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(p => p.category === filter);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md mt-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">إدارة منتجات القائد 📦</h2>
        
        <select 
          className="p-2 border rounded-md bg-gray-50"
          value={filter} onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">جميع الأقسام</option>
          <option value="paper">المطبوعات الورقية</option>
          <option value="laser">حفر الليزر</option>
          <option value="thermal">الطباعة الحرارية</option>
          <option value="outdoor">اليافطات والدعاية</option>
          <option value="trophies">الجوائز والدروع</option>
          <option value="digital">حلول القائد الرقمية</option>
          <option value="events">تنظيم المناسبات</option>
        </select>
      </div>

      {loading ? (
        <div className="text-center py-10 text-gray-500">جاري تحميل المنتجات...</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-right border-collapse">
            <thead>
              <tr className="bg-gray-100 text-gray-700 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-right">المنتج</th>
                <th className="py-3 px-6 text-right">القسم</th>
                <th className="py-3 px-6 text-right">السعر</th>
                <th className="py-3 px-6 text-center">الرئيسية</th>
                <th className="py-3 px-6 text-center">الإجراءات</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {filteredProducts.map((product) => (
                <tr key={product.id} className="border-b border-gray-200 hover:bg-gray-50 transition">
                  <td className="py-3 px-6 flex items-center space-x-3 rtl:space-x-reverse">
                    <img 
                      src={product.images[0] || '/placeholder-product.jpg'} 
                      alt={product.name} 
                      className="w-10 h-10 rounded-full object-cover border"
                    />
                    <span className="font-medium">{product.name}</span>
                  </td>
                  <td className="py-3 px-6">
                    <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">
                      {product.category}
                    </span>
                  </td>
                  <td className="py-3 px-6 font-bold">{product.price} ج.م</td>
                  <td className="py-3 px-6 text-center">
                    {product.isFeatured ? '✅' : '❌'}
                  </td>
                  <td className="py-3 px-6 text-center">
                    <div className="flex justify-center space-x-2 rtl:space-x-reverse">
                      <button onClick={() => alert('تعديل المنتج قيد التنفيذ')} className="p-2 text-blue-600 hover:bg-blue-50 rounded">
                        <Edit3 size={18} />
                      </button>
                      <button onClick={() => handleDelete(product.id)} className="p-2 text-red-600 hover:bg-red-50 rounded">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filteredProducts.length === 0 && (
                <tr>
                  <td colSpan={5} className="py-10 text-center text-gray-400">لا توجد منتجات في هذا القسم حالياً.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
