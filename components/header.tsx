"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { usePathname } from "next/navigation"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: "Beranda", href: "/" },
    { name: "Tentang Kami", href: "/about" },
    { name: "Layanan", href: "/services" },
    { name: "Testimoni", href: "/testimonials" },
    { name: "Kontak", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
         <div className="flex h-14 w-14 items-center justify-center ">
  <img
    src="/images/logo.jpeg"
    alt="Logo Dua Bintang"
    className="h-14 w-14 object-contain"
  />
</div>
<span className="text-xl font-bold text-gray-900">CV. DUA BINTANG</span>

        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                pathname === item.href ? "text-blue-500" : "text-gray-700 hover:text-blue-500"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Phone className="h-4 w-4" />
            <span>+62 812-3480-5476</span>
          </div>
          <Button className="bg-blue-500 hover:bg-blue-600">Hubungi Sekarang</Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col space-y-4 mt-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-lg font-medium transition-colors ${
                    pathname === item.href ? "text-blue-500" : "text-gray-700 hover:text-blue-500"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t">
                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
                  <Phone className="h-4 w-4" />
                  <span>+62 812-3480-5476</span>
                </div>
                <Button className="w-full bg-blue-500 hover:bg-blue-600">Hubungi Sekarang</Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}