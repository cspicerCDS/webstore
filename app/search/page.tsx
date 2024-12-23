import { mockProducts } from '@/lib/products'
import ProductCard from '@/app/components/product-card'

export default function SearchPage({
  searchParams
}: {
  searchParams: { q: string }
}) {
  const query = searchParams.q?.toLowerCase() || ''
  
  const searchResults = mockProducts.filter(product => {
    const searchFields = [
      product.name.toLowerCase(),
      product.description.toLowerCase(),
      ...product.tags.map(tag => tag.toLowerCase()),
      product.category.toLowerCase(),
      ...product.subCategory.map(sub => sub.toLowerCase())
    ]
    
    return searchFields.some(field => field.includes(query))
  })

  return (
    <div className="py-8">
      <h1 className="text-2xl font-bold mb-6">
        Search Results for &quot;{query}&quot;
      </h1>
      {searchResults.length === 0 ? (
        <p className="text-center text-gray-500">No products found</p>
      ) : (
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {searchResults.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
} 