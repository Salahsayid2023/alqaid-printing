// projects/printing-agency/web/types/index.ts

/** 
 * تعريف الأقسام الرئيسية للمطبعة
 * لضمان عدم كتابة اسم قسم بشكل خاطئ في أي مكان في الكود
 */
export type Category = 
  | 'paper'        // المطبوعات الورقية
  | 'laser'        // حفر الليزر
  | 'thermal'       // الطباعة الحرارية
  | 'outdoor'      // اليافطات والدعاية الخارجية
  | 'trophies'     // الجوائز والتكريمية
  | 'digital'       // حلول القائد الرقمية
  | 'events';       // تنظيم المناسبات والحفلات

/**
 * هيكل بيانات المنتج (Product)
 * يضمن أن كل منتج يحتوي على كافة التفاصيل اللازمة للعرض
 */
export interface Product {
  id: string;
  name: string;
  description: string;
  category: Category;
  price: number;
  images: string[]; // روابط الصور في Cloud Storage
  isFeatured: boolean; // هل يظهر في أشرطة العرض الرئيسية؟
  createdAt: Date;
  updatedAt: Date;
}

/**
 * حالات الطلب (Order Status)
 * لضمان دقة المتابعة في صفحة "متابعة الطلب"
 */
export type OrderStatus = 
  | 'pending'    // قيد الانتظار / استلام
  | 'designing'  // جاري التصميم
  | 'printing'   // جاري الطباعة/التنفيذ
  | 'packaging' // جاري التغليف
  | 'ready'      // جاهز للتسليم
  | 'delivered';  // تم التسليم

/**
 * هيكل بيانات الطلب (Order)
 * يضمن استقبال كافة البيانات من "النماذج الذكية" بدون نقص
 */
export interface Order {
  id: string;
  customerId: string;
  productIds: string[]; // المنتجات المطلوبة
  totalAmount: number;
  status: OrderStatus;
  customerDetails: {
    name: string;
    phone: string;
    address?: string;
  };
  orderDetails: {
    quantity: number;
    specifications: string; // تفاصيل إضافية (مقاس، نوع ورق، إلخ)
    files: string[]; // روابط ملفات التصميم المرفوعة
  };
  createdAt: Date;
  updatedAt: Date;
}

/**
 * هيكل بيانات العميل (Customer)
 */
export interface Customer {
  id: string;
  name: string;
  phone: string;
  email?: string;
  totalOrders: number;
  lastOrderDate: Date;
}
