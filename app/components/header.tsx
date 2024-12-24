"use client"

import Link from "next/link"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent } from "@/components/ui/dropdown-menu"
import Nav from "./nav"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useNav } from "./nav-context"
import { getBasePath } from "@/lib/utils"
import { useState, useEffect } from 'react'
import CartSheet from './cart-sheet'
import { useRouter } from 'next/navigation'

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

function CloseIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}

function ShoppingCartIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  )
}

function UserIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <circle cx="12" cy="8" r="5" />
      <path d="M20 21a8 8 0 1 0-16 0" />
    </svg>
  )
}
/* 
function VinylIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
      <line x1="12" y1="12" x2="12" y2="6" />
    </svg>
  )
}
 */
export default function Component() {
  const { isOpen, setIsOpen } = useNav()
  const [cartCount, setCartCount] = useState(0)
  const router = useRouter()

  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]') as CartItem[]
      const count = cart.reduce((total: number, item: CartItem) => total + item.quantity, 0)
      setCartCount(count)
    }

    // Initial count
    updateCartCount()

    // Listen for cart updates
    window.addEventListener('cartUpdated', updateCartCount)
    return () => window.removeEventListener('cartUpdated', updateCartCount)
  }, [])

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const searchQuery = formData.get('q')
    if (searchQuery) {
      router.push(`${getBasePath()}/search?q=${encodeURIComponent(searchQuery.toString())}`)
    }
  }

  return (
    <header className="sticky top-0 z-[100] w-full border-b bg-slate-900 dark:border-slate-800 dark:bg-slate-950">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-2 md:px-6">
        <div className="flex items-center ">
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full md:hidden relative z-[101]" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <CloseIcon className="h-5 w-5 text-slate-300 dark:text-slate-400" />
            ) : (
              <MenuIcon className="h-5 w-5 text-slate-300 dark:text-slate-400" />
            )}
            <span className="sr-only">
              {isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            </span>
          </Button>
          <Link href={`${getBasePath()}/`} className="flex items-center gap-2" prefetch={false}>
           
            <svg xmlns="http://www.w3.org/2000/svg" width="211" height="45" fill="none"><path stroke="#FACC15" strokeWidth="3" d="M22.5 43C33.822 43 43 33.822 43 22.5S33.822 2 22.5 2 2 11.178 2 22.5 11.178 43 22.5 43Z"/><path stroke="#FACC15" strokeWidth="3" d="M22.5 34.8c6.793 0 12.3-5.507 12.3-12.3 0-6.793-5.507-12.3-12.3-12.3-6.793 0-12.3 5.507-12.3 12.3 0 6.793 5.507 12.3 12.3 12.3Z"/><path stroke="#FACC15" strokeWidth="3" d="M22.5 26.6a4.1 4.1 0 1 0 0-8.2 4.1 4.1 0 0 0 0 8.2Z"/><path stroke="#FACC15" strokeLinecap="round" strokeWidth="3" d="M31.247 13.753 40.54 4.46"/><path stroke="#FACC15" strokeLinecap="square" strokeWidth="7" d="m30.7 14.3 1.093-1.093"/><path fill="#FACC15" d="M49.355 37.26V7.193h6.902c1.196 0 2.186.183 2.972.547a4.28 4.28 0 0 1 1.88 1.623c.455.717.78 1.606.973 2.665.194 1.048.29 2.26.29 3.639v.632c0 1.936-.17 3.587-.512 4.954-.33 1.355-.928 2.386-1.794 3.092-.865.706-2.084 1.06-3.656 1.06h-2.477V37.26h-4.578Zm4.578-15.631h1.572c.672 0 1.173-.171 1.503-.513.33-.341.547-.905.65-1.691.113-.797.17-1.856.17-3.178v-.58c-.011-1.629-.153-2.859-.427-3.69-.273-.843-.894-1.264-1.862-1.264h-1.606v10.916ZM64.082 37.26V7.193h4.579v26.172h5.79v3.895H64.083Z"/><path fill="#FACC15" d="M73.753 37.26 78.04 7.193h6.047L88.65 37.26h-4.27l-.718-5.364H78.81l-.649 5.364h-4.407Zm5.5-9.037h3.93L81.167 13.12h-.068l-1.845 15.102ZM90.7 37.26V11.157h-3.518V7.193h11.462v3.964h-3.382V37.26h-4.561Z"/><path fill="#FACC15" d="M101.396 37.26V11.157h-3.519V7.193h11.463v3.964h-3.382V37.26h-4.562ZM110.52 37.26V7.193h10.079v3.947h-5.501v8.746h5.228v3.861h-5.228v9.567h5.706v3.946H110.52ZM122.787 37.26V7.193h7.568c1.572 0 2.745.308 3.519.923.775.615 1.282 1.515 1.521 2.699.25 1.184.376 2.63.376 4.34 0 1.764-.183 3.154-.547 4.168-.353 1.002-1.082 1.674-2.187 2.015.524.091.963.308 1.316.65.353.33.638.82.854 1.469.216.637.37 1.463.461 2.477.103 1.002.154 2.232.154 3.69v2.819l.034 2.118c.011.706.029 1.31.051 1.81.023.502.052.798.086.889h-4.579c-.034-.057-.062-.347-.085-.871a280.72 280.72 0 0 0-.051-2.033c-.012-.82-.023-1.703-.034-2.648V26.48c0-.9-.069-1.577-.205-2.032-.126-.467-.365-.792-.718-.974-.342-.182-.837-.29-1.486-.325l-1.469-.085V37.26h-4.579Zm4.596-17.75h1.828c.558 0 .979-.125 1.264-.375.296-.25.495-.712.598-1.384.114-.672.171-1.64.171-2.904v-.188c0-1.06-.052-1.874-.154-2.443-.103-.57-.319-.962-.649-1.179-.319-.216-.82-.325-1.504-.325h-1.554v8.798ZM143.222 37.26V7.193h6.901c1.196 0 2.187.183 2.973.547a4.279 4.279 0 0 1 1.879 1.623c.456.717.78 1.606.974 2.665.193 1.048.29 2.26.29 3.639v.632c0 1.936-.171 3.587-.512 4.954-.331 1.355-.928 2.386-1.794 3.092s-2.084 1.06-3.656 1.06H147.8V37.26h-4.578Zm4.578-15.631h1.572c.672 0 1.173-.171 1.503-.513.33-.341.547-.905.649-1.691.114-.797.171-1.856.171-3.178v-.58c-.011-1.629-.154-2.859-.427-3.69-.273-.843-.894-1.264-1.862-1.264H147.8v10.916ZM155.66 37.26l4.288-30.067h6.047l4.561 30.067h-4.27l-.718-5.364h-4.852l-.649 5.364h-4.407Zm5.501-9.037h3.929l-2.016-15.102h-.068l-1.845 15.102ZM171.89 37.26V7.193h7.568c1.572 0 2.745.308 3.519.923.775.615 1.282 1.515 1.521 2.699.25 1.184.376 2.63.376 4.34 0 1.764-.183 3.154-.547 4.168-.353 1.002-1.082 1.674-2.187 2.015.524.091.963.308 1.316.65.353.33.638.82.854 1.469.216.637.37 1.463.461 2.477.103 1.002.154 2.232.154 3.69v2.819l.034 2.118c.011.706.029 1.31.051 1.81.023.502.052.798.086.889h-4.579c-.034-.057-.062-.347-.085-.871a280.72 280.72 0 0 0-.051-2.033c-.012-.82-.023-1.703-.034-2.648V26.48c0-.9-.069-1.577-.205-2.032-.126-.467-.365-.792-.718-.974-.342-.182-.837-.29-1.486-.325l-1.469-.085V37.26h-4.579Zm4.596-17.75h1.828c.558 0 .979-.125 1.264-.375.296-.25.495-.712.598-1.384.114-.672.171-1.64.171-2.904v-.188c0-1.06-.052-1.874-.154-2.443-.103-.57-.319-.962-.649-1.179-.319-.216-.82-.325-1.504-.325h-1.554v8.798ZM189.009 37.26V11.157h-3.519V7.193h11.463v3.964h-3.383V37.26h-4.561Z"/><path fill="#FACC15" d="M201.208 37.26V25.25l-5.04-18.057h4.374l2.972 11.241h.069l2.648-11.24h4.356l-4.801 18.056v12.01h-4.578Z"/></svg>
              <span className="sr-only">PlatterParty Music</span>
            </Link>
        </div>

        <div className="flex items-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <SearchIcon className="h-5 w-5 text-slate-300 dark:text-slate-400" />
                <span className="sr-only">Search</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[300px] p-4 bg-white text-slate-500 z-[100]" >
              <form onSubmit={handleSearch} className="relative">
                <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-300 " />
                <Input 
                  type="search" 
                  name="q" 
                  placeholder="Search..." 
                  className="pl-8 w-full text-base" 
                />
              </form>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="ghost" size="icon" className="rounded-full">
            <UserIcon className="h-5 w-5 text-slate-300 " />
            <span className="sr-only">My Account</span>
          </Button>
          <CartSheet>
            <Button variant="ghost" size="icon" className="rounded-full relative">
              <ShoppingCartIcon className="h-5 w-5 text-slate-300" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-yellow-400 text-slate-900 rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartCount}
                </span>
              )}
              <span className="sr-only">Shopping Cart</span>
            </Button>
          </CartSheet>
        </div>
      </div>
      <Nav />
    </header>
  )
}

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}

/* 
function MoonIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  )
}


function PhoneIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}
 */

function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}