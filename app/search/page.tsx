'use client'

import { useState, useEffect, Suspense } from 'react'
import { mockProducts } from '@/lib/products'
import ProductCard from '@/components/product-card'
import { useSearchParams } from 'next/navigation'

function SearchResults() {
  const searchParams = useSearchParams()
  const [searchResults, setSearchResults] = useState(mockProducts)
  
  useEffect(() => {
    const query = searchParams.get('q')?.toLowerCase() || ''
    
    const filtered = mockProducts.filter(product => {
      const searchFields = [
        product.name.toLowerCase(),
        product.description.toLowerCase(),
        ...product.tags.map(tag => tag.toLowerCase()),
        ...product.category.map(cat => cat.toLowerCase()),
        ...product.subCategory.map(sub => sub.toLowerCase())
      ]
      
      return searchFields.some(field => field.includes(query))
    })
    
    setSearchResults(filtered)
  }, [searchParams])

  return (
    <div className="py-8">
      <h1 className="text-2xl font-bold mb-6">
        Search Results for &quot;{searchParams.get('q') || ''}&quot;
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

export default function SearchPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchResults />
    </Suspense>
  )
} 