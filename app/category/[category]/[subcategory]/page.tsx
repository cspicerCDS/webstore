import { getProductsByCategory } from '@/lib/products'
import ProductCard from '@/app/components/product-card'
import categories from '@/lib/categories'
import type { Metadata } from 'next'

type PageProps = {
  params: Promise<{ category: string; subcategory: string }>
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const resolvedParams = await params
  const categoryData = categories.find(c => c.slug === resolvedParams.category)
  const subcategoryData = categoryData?.subcategories?.find(s => s.slug === resolvedParams.subcategory)
  
  return {
    title: `${categoryData?.name || resolvedParams.category} - ${subcategoryData?.name || resolvedParams.subcategory}`,
  }
}

export async function generateStaticParams() {
  const paths = categories.flatMap((category) =>
    (category.subcategories || []).map((subcategory) => ({
      category: category.slug,
      subcategory: subcategory.slug,
    }))
  )
  return paths
}

export default async function Page({
  params,
}: PageProps) {
  const { category, subcategory } = await params
  const products = getProductsByCategory(category, subcategory)
  const categoryData = categories.find(c => c.slug === category)
  const subcategoryData = categoryData?.subcategories?.find(s => s.slug === subcategory)

  return (
    <div className="py-8">
      <h1 className="text-2xl font-bold mb-6">
        {categoryData?.name} - {subcategoryData?.name}
      </h1>
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
} 