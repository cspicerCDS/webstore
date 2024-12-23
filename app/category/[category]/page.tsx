import { getProductsByCategory } from '@/lib/products'
import ProductCard from '@/app/components/product-card'
import categories from '@/lib/categories'

export default function CategoryPage({
  params: { category }
}: {
  params: { category: string }
}) {
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