import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CategoryPage } from '@/components/catalog/CategoryPage';

export default function CatalogPage({ params }: { params: { id: string } }) {
  return (
    <div dir="rtl">
      <Header />
      <CategoryPage category={params.id} />
      <Footer />
    </div>
  );
}
