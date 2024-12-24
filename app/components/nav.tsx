"use client"

import Link from "next/link"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetClose } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import categories from "@/lib/categories"
import { useNav } from "./nav-context"
//import { getBasePath } from "@/lib/utils"

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

export default function Nav() {
  const { isOpen, setIsOpen } = useNav()

  return (
    <>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent side="left" className="w-[300px] sm:w-[400px] md:hidden flex flex-col p-0 bg-white text-slate-600">
          <SheetHeader className="flex flex-row items-center justify-between border-b p-6">
            <SheetTitle className="text-lg font-bold h-5">Categories</SheetTitle>
            <SheetClose asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <CloseIcon className="h-5 w-5" />
                <span className="sr-only">Close menu</span>
              </Button>
            </SheetClose>
          </SheetHeader>
          <nav className="flex-1 overflow-y-auto px-6">
            <div className="space-y-4 ">
              {categories.map((category) => (
                <div key={category.id}>
                  {category.subcategories ? (
                    <Accordion type="single" collapsible>
                      <AccordionItem value={category.slug}>
                        <AccordionTrigger className="text-sm hover:no-underline">
                          {category.name}
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="flex flex-col space-y-2 pl-2">
                            {category.subcategories.map((subcategory) => (
                              <Link
                                key={subcategory.id}
                                href={`/category/${category.slug}/${subcategory.slug}`}
                                className="text-sm text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-50 py-2"
                                onClick={() => setIsOpen(false)}
                              >
                                {subcategory.name}
                              </Link>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  ) : (
                    <Link
                      href={`/category/${category.slug}`}
                      className="text-sm block py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {category.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </nav>
        </SheetContent>
      </Sheet>

      {/* Desktop Navigation */}
      <nav className="hidden border-t md:block">
        <div className="container mx-auto max-w-6xl px-4 md:px-6">
          <div>
            <ul className="flex items-center gap-6 text-sm flex-wrap py-4">
              {categories.map((category) => (
                <li 
                  key={category.id} 
                  className="relative group"
                >
                  <div className="flex items-center gap-1">
                    <Link
                      href={`/category/${category.slug}`}
                      className="inline-flex items-center text-slate-300 hover:text-slate-200 dark:text-slate-300 dark:hover:text-slate-50"
                    >
                      {category.name}
                    </Link>
                    {category.subcategories && (
                      <button
                        aria-label="Open subcategories"
                        className="inline-flex items-center text-slate-300 hover:text-slate-200 dark:text-slate-300 dark:hover:text-slate-50"
                      >
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                    )}
                  </div>
                  {category.subcategories && (
                    <div className="absolute left-0 top-[calc(100%+1px)] group-hover:visible invisible opacity-0 group-hover:opacity-100 transition-all duration-200 w-64 bg-white dark:bg-slate-950 border rounded-md shadow-lg p-2 z-50">
                      {category.subcategories.map((subcategory) => (
                        <Link
                          key={subcategory.id}
                          href={`/category/${category.slug}/${subcategory.slug}`}
                          className="block px-4 py-2 text-sm text-slate-500 hover:text-slate-900 hover:bg-slate-50 dark:text-slate-400 dark:hover:text-slate-50 dark:hover:bg-slate-800 rounded-sm"
                        >
                          {subcategory.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}