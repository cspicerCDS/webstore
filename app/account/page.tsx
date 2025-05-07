'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function AccountPage() {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className="max-w-md mx-auto py-8">
      <div className="flex justify-center gap-4 mb-8">
        <Button
          variant={isLogin ? "default" : "outline"}
          onClick={() => setIsLogin(true)}
        >
          Login
        </Button>
        <Button
          variant={!isLogin ? "default" : "outline"}
          onClick={() => setIsLogin(false)}
        >
          Create Account
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{isLogin ? "Login" : "Create Account"}</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Email</label>
              <Input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Password</label>
              <Input
                type="password"
                placeholder="Enter your password"
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            
            {!isLogin && (
              <div className="space-y-2">
                <label className="text-sm font-medium">Confirm Password</label>
                <Input
                  type="password"
                  placeholder="Confirm your password"
                />
              </div>
            )}

            {isLogin && (
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm">Remember me</span>
                </label>
                <a href="#" className="text-sm text-blue-600 hover:underline">
                  Forgot password?
                </a>
              </div>
            )}

            <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black">
              {isLogin ? "Sign In" : "Create Account"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}