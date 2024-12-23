'use client'
import { Product } from "@/lib/products"

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export default function AddToCartButton({ product }: { product: Product }) {
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
    window.dispatchEvent(new Event('cartUpdated'))
  }

  return (
    <button 
      onClick={addToCart}
      className="mt-6 w-full bg-yellow-400 hover:bg-yellow-500 text-black py-3 px-4 rounded-lg transition-colors text-lg font-semibold"
    >
      Add to Cart
    </button>
  )
} 