'use client'
import { Button } from "@/components/ui/button"
import { Product } from "@/lib/products"
import { useToast } from "@/components/ui/use-toast"

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export default function AddToCartButton({ product }: { product: Product }) {
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
    window.dispatchEvent(new Event('cartUpdated'))

    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
      duration: 2000,
      className: "bg-yellow-400 text-black"
    })
  }

  return (
    <Button onClick={addToCart} className="w-full bg-yellow-400 hover:bg-yellow-500">
      Add to Cart
    </Button>
  )
} 