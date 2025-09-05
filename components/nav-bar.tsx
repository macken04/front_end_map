"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search, User, ShoppingCart } from "lucide-react"

export default function NavBar() {
  return (
    <header className="bg-gradient-to-r from-slate-900 to-purple-900 text-slate-100 border-b border-pink-500/30">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <Link href="/" className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-pink-500 to-cyan-500 flex items-center justify-center">
              <span className="font-bold text-white">SR</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-1">
            <Link href="/" className="px-3 py-2 text-sm hover:text-cyan-400 transition-colors">
              Home
            </Link>
            <Link
              href="/design"
              className="px-3 py-2 text-sm bg-gradient-to-r from-pink-500 to-cyan-500 text-white font-medium rounded"
            >
              Design Your Map
            </Link>
            <Link href="/activities" className="px-3 py-2 text-sm hover:text-cyan-400 transition-colors">
              My Activities
            </Link>
            <Link href="/map-preview" className="px-3 py-2 text-sm hover:text-cyan-400 transition-colors">
              Map Preview
            </Link>
            <Link href="/famous-routes" className="px-3 py-2 text-sm hover:text-cyan-400 transition-colors">
              Famous Routes
            </Link>
            <Link href="/landscapes" className="px-3 py-2 text-sm hover:text-cyan-400 transition-colors">
              Landscapes
            </Link>
            <Link href="/races" className="px-3 py-2 text-sm hover:text-cyan-400 transition-colors">
              Races & Events
            </Link>
            <Link href="/collections" className="px-3 py-2 text-sm hover:text-cyan-400 transition-colors">
              Collections
            </Link>
            <Link href="/reviews" className="px-3 py-2 text-sm hover:text-cyan-400 transition-colors">
              Reviews
            </Link>
          </nav>
        </div>

        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="text-slate-100 hover:text-cyan-400">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-slate-100 hover:text-cyan-400">
            <User className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-slate-100 hover:text-cyan-400 relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-gradient-to-r from-pink-500 to-cyan-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center font-bold">
              2
            </span>
          </Button>
        </div>
      </div>
    </header>
  )
}
