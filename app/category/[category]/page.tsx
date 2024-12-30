import { getProductsByCategory } from '@/lib/products'
import ProductCard from '@/components/product-card'
import categories from '@/lib/categories'

type CategoryPageProps = {
  params: Promise<{ category: string }>
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category.slug,
  }))
}

export default async function CategoryPage({
  params,
}: CategoryPageProps) {
  const { category } = await params
  const products = getProductsByCategory(category)
  const categoryData = categories.find(c => c.slug === category)

  return (
    <div className="py-8">
      <h1 className="text-2xl font-bold mb-6">{categoryData?.name}</h1>
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
} 