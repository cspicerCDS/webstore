'use client'
import Image from 'next/image'
import Link from 'next/link'
import { getBasePath } from '@/lib/utils'
import type { Product } from '@/lib/products'
import { useToast } from "@/components/ui/use-toast"

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export default function ProductCard({ product }: { product: Product }) {
  const { toast } = useToast()

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]') as CartItem[]
    const existingItem = cart.find((item: CartItem) => item.id === product.id)
    
    if (existingItem) {
      existingItem.quantity += 1
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1
      })
    }
    
    localStorage.setItem('cart', JSON.stringify(cart))
    // Dispatch custom event to notify header
    window.dispatchEvent(new Event('cartUpdated'))

    // Show toast notification
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
      duration: 2000
    })
  }

  return (
    <div className="group relative flex flex-col">
      <Link href={`${getBasePath()}/product/${product.id}`} className="flex-1">
        <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-200">
          <Image
            src={product.images[0]}
            alt={product.name}
            className="h-full w-full object-cover object-center"
            width={400}
            height={400}
            unoptimized
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700 dark:text-gray-200">
              {product.name}
            </h3>
            <p className="mt-1 text-sm text-gray-500">{product.description}</p>
          </div>
          <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
            ${product.price}
          </p>
        </div>
      </Link>
      <button 
        onClick={addToCart}
        className="mt-4 w-full bg-yellow-400 hover:bg-yellow-500 text-black py-2 px-4 rounded-lg transition-colors"
      >
        Add to Cart
      </button>
    </div>
  )
}
