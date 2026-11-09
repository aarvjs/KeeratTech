import { PRODUCTS } from '@/constants/data';
import { notFound } from 'next/navigation';
import { ProductDetailClient } from '@/components/sections/products/ProductDetailClient';

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    id: product.id,
  }));
}

interface ProductDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { id } = await params;
  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  const relatedProducts = PRODUCTS.filter(
    (p) => p.id !== product.id && p.categoryId === product.categoryId
  ).slice(0, 3);

  return <ProductDetailClient product={product} relatedProducts={relatedProducts} />;
}
