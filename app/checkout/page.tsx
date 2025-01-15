'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
//import { useRouter } from 'next/navigation'
import { RadioGroup } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
//import Image from 'next/image'

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export default function Checkout() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  //const router = useRouter()

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cart') || '[]') as CartItem[]
    setCartItems(items)
  }, [])

  const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
  const shipping = 5.99
  const tax = cartTotal * 0.08
  const finalTotal = cartTotal + shipping + tax

  return (
    <div className="py-8 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Checkout Forms */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-3 py-2 border rounded-md"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-3 py-2 border rounded-md"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-3 py-2 border rounded-md md:col-span-2"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Shipping Address</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Address"
                  className="w-full px-3 py-2 border rounded-md"
                />
                <input
                  type="text"
                  placeholder="Apartment, suite, etc. (optional)"
                  className="w-full px-3 py-2 border rounded-md"
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <input
                    type="text"
                    placeholder="City"
                    className="w-full px-3 py-2 border rounded-md"
                  />
                  <input
                    type="text"
                    placeholder="State"
                    className="w-full px-3 py-2 border rounded-md"
                  />
                  <input
                    type="text"
                    placeholder="ZIP Code"
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Payment Method</CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup defaultValue="credit-card" className="space-y-4">
                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <input type="radio" id="credit-card" name="payment" value="credit-card" 
                      className="h-4 w-4 border-gray-300" defaultChecked />
                    <Label htmlFor="credit-card">Credit Card</Label>
                    <div className="flex gap-2 ml-auto">
                      
                    </div>
                  </div>
                  <div className="space-y-4 pl-6">
                    <input
                      type="text"
                      placeholder="Card Number"
                      className="w-full px-3 py-2 border rounded-md"
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="w-full px-3 py-2 border rounded-md"
                      />
                      <input
                        type="text"
                        placeholder="CVC"
                        className="w-full px-3 py-2 border rounded-md"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center space-x-2">
                    <input type="radio" id="paypal" name="payment" value="paypal" 
                      className="h-4 w-4 border-gray-300" />
                    <Label htmlFor="paypal">PayPal</Label>
                 
                  </div>
                  <p className="text-sm text-gray-500 mt-2 pl-6">
                    You&apos;ll be redirected to PayPal to complete your purchase securely.
                  </p>
                </div>

                <div>
                  <div className="flex items-center space-x-2">
                    <input type="radio" id="apple-pay" name="payment" value="apple-pay" 
                      className="h-4 w-4 border-gray-300" />
                    <Label htmlFor="apple-pay">Apple Pay</Label>
                  </div>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Order Summary */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between">
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                    </div>
                    <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between">
                    <p>Subtotal</p>
                    <p>${cartTotal.toFixed(2)}</p>
                  </div>
                  <div className="flex justify-between">
                    <p>Shipping</p>
                    <p>${shipping.toFixed(2)}</p>
                  </div>
                  <div className="flex justify-between">
                    <p>Tax</p>
                    <p>${tax.toFixed(2)}</p>
                  </div>
                  <div className="flex justify-between font-bold border-t pt-2">
                    <p>Total</p>
                    <p>${finalTotal.toFixed(2)}</p>
                  </div>
                </div>
                <Button 
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-black"
                  onClick={() => {
                    // Handle payment processing here
                    alert('Payment processing would happen here')
                  }}
                >
                  Place Order
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}