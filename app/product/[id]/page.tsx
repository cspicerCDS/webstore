import { mockProducts } from '@/lib/products'
import Image from 'next/image'
import AddToCartButton from '@/app/components/add-to-cart-button'

type ProductPageProps = {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return mockProducts.map((product) => ({
    id: product.id.toString(),
  }))
}

export default async function ProductPage({
  params
}: ProductPageProps) {
  const { id } = await params
  const product = mockProducts.find(p => p.id === parseInt(id))

  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Section */}
        <div className="aspect-square relative overflow-hidden rounded-lg bg-gray-200">
          <Image
            src={product.images[0]}
            alt={product.name}
            className="h-full w-full object-cover object-center"
            width={600}
            height={600}
          />
        </div>

        {/* Product Details Section */}
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="text-lg text-gray-500">{product.description}</p>
          
          <div className="flex items-center justify-between">
            <p className="text-2xl font-bold">
              ${product.price}
            </p>
            <p className="text-sm text-gray-500">
              Stock: {product.stock}
            </p>
          </div>

          {/* Add to Cart Button */}
          <AddToCartButton product={product} />

          {/* Product Attributes */}
          <div className="mt-6 border-t pt-6">
            <h2 className="text-lg font-semibold mb-4">Product Details</h2>
            <dl className="grid grid-cols-1 gap-4">
              {Object.entries(product.attributes).map(([key, value]) => (
                value && (
                  <div key={key} className="flex justify-between">
                    <dt className="text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</dt>
                    <dd className="font-medium">{value.toString()}</dd>
                  </div>
                )
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
} 