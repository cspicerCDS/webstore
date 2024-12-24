'use client'
import { Sheet, SheetContent, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from 'react'

interface CartSheetProps {
  children: React.ReactNode;
}

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

function TrashIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  )
}

export default function CartSheet({ children }: CartSheetProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  useEffect(() => {
    const updateCart = () => {
      const items = JSON.parse(localStorage.getItem('cart') || '[]') as CartItem[]
      setCartItems(items)
    }

    updateCart()
    window.addEventListener('cartUpdated', updateCart)
    return () => window.removeEventListener('cartUpdated', updateCart)
  }, [])

  const removeItem = (id: number) => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]') as CartItem[]
    const item = cart.find(item => item.id === id)
    
    if (item) {
      if (item.quantity > 1) {
        item.quantity -= 1
      } else {
        const index = cart.findIndex(item => item.id === id)
        cart.splice(index, 1)
      }
      
      localStorage.setItem('cart', JSON.stringify(cart))
      window.dispatchEvent(new Event('cartUpdated'))
    }
  }

  const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)

  return (
    <Sheet>
      <SheetTrigger asChild>
        {children}
      </SheetTrigger>
      <SheetContent className="bg-white text-slate-600">
        <div className="flex items-center justify-between">
          <SheetTitle>Shopping Cart</SheetTitle>
          <SheetClose asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <X className="h-5 w-5" />
              <span className="sr-only">Close cart</span>
            </Button>
          </SheetClose>
        </div>
        <div className="mt-8">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500">Your cart is empty</p>
          ) : (
            <>
              <ul className="space-y-4">
                {cartItems.map((item) => (
                  <li key={item.id} className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                      <button onClick={() => removeItem(item.id)}>
                        <TrashIcon className="h-5 w-5" />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <p className="text-lg font-semibold">Total</p>
                  <p className="text-lg font-semibold">${cartTotal.toFixed(2)}</p>
                </div>
              </div>
            </>
          )}
          <SheetClose asChild>
           
              <button className="text-sm w-full text-center underline mt-4">Close cart</button>
            
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  )
} 