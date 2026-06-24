// projects/printing-agency/web/services/productService.js
import { db, storage } from "../lib/firebase";
import { collection, addDoc, updateDoc, deleteDoc, doc, getDocs, query, orderBy } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

/**
 * خدمة إدارة المنتجات
 * تضمن رفع الصور أولاً ثم حفظ البيانات في قاعدة البيانات
 */
export const productService = {
  // رفع صورة المنتج إلى Cloud Storage
  async uploadProductImage(file) {
    const storageRef = ref(storage, `products/${Date.now()}_${file.name}`);
    const snapshot = await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(snapshot.ref);
    return downloadURL;
  },

  // إضافة منتج جديد
  async addProduct(productData) {
    try {
      const productCollection = collection(db, "products");
      const docRef = await addDoc(productCollection, {
        ...productData,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      return { id: docRef.id, ...productData };
    } catch (error) {
      console.error("Error adding product: ", error);
      throw error;
    }
  },

  // جلب جميع المنتجات مرتبة حسب تاريخ الإضافة
  async getProducts() {
    const productCollection = collection(db, "products");
    const q = query(productCollection, orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  },

  // تحديث بيانات منتج
  async updateProduct(id, updates) {
    const productRef = doc(db, "products", id);
    await updateDoc(productRef, {
      ...updates,
      updatedAt: new Date(),
    });
  },

  // حذف منتج
  async deleteProduct(id) {
    const productRef = doc(db, "products", id);
    await deleteDoc(productRef);
  }
};
