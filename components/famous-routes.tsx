"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, MapPin, Users, Trophy, Star, Heart, ShoppingCart } from "lucide-react"
import Link from "next/link"
import NavBar from "@/components/nav-bar"

// Mock data for famous sportive events and routes
const famousRoutes = [
  {
    id: 1,
    name: "Mallorca 312",
    location: "Mallorca, Spain",
    distance: "312 km",
    elevation: "5,000 m",
    difficulty: "Epic",
    participants: "8,500+",
    category: "Gran Fondo",
    price: "£75.00",
    originalPrice: "£85.00",
    rating: 4.9,
    reviews: 234,
    description: "The ultimate cycling challenge around the beautiful island of Mallorca",
    features: ["Coastal Views", "Mountain Climbs", "Historic Towns"],
    isPopular: true,
    isSale: true,
  },
  {
    id: 2,
    name: "L'Étape du Tour",
    location: "French Alps",
    distance: "165 km",
    elevation: "4,500 m",
    difficulty: "Extreme",
    participants: "15,000+",
    category: "Tour de France",
    price: "£80.00",
    rating: 4.8,
    reviews: 189,
    description: "Ride a stage of the Tour de France with legendary mountain passes",
    features: ["Alpine Climbs", "Tour History", "Pro Route"],
    isPopular: true,
  },
  {
    id: 3,
    name: "RideLondon-Surrey 100",
    location: "London, UK",
    distance: "100 miles",
    elevation: "1,200 m",
    difficulty: "Challenging",
    participants: "25,000+",
    category: "Sportive",
    price: "£65.00",
    rating: 4.7,
    reviews: 456,
    description: "London's premier cycling event through the capital and Surrey Hills",
    features: ["City Views", "Surrey Hills", "Olympic Route"],
  },
  {
    id: 4,
    name: "Maratona dles Dolomites",
    location: "Dolomites, Italy",
    distance: "138 km",
    elevation: "4,230 m",
    difficulty: "Extreme",
    participants: "9,000+",
    category: "Gran Fondo",
    price: "£85.00",
    rating: 4.9,
    reviews: 167,
    description: "Spectacular ride through the UNESCO World Heritage Dolomites",
    features: ["Mountain Passes", "Alpine Scenery", "Italian Culture"],
    isPopular: true,
  },
  {
    id: 5,
    name: "Cape Town Cycle Tour",
    location: "Cape Town, South Africa",
    distance: "109 km",
    elevation: "1,500 m",
    difficulty: "Moderate",
    participants: "35,000+",
    category: "Tour",
    price: "£70.00",
    rating: 4.6,
    reviews: 298,
    description: "The world's largest individually timed cycling event around Cape Peninsula",
    features: ["Ocean Views", "Table Mountain", "African Wildlife"],
  },
  {
    id: 6,
    name: "Stelvio Pass Challenge",
    location: "Italian Alps",
    distance: "75 km",
    elevation: "3,200 m",
    difficulty: "Extreme",
    participants: "2,500+",
    category: "Mountain",
    price: "£90.00",
    rating: 4.8,
    reviews: 89,
    description: "Conquer one of cycling's most legendary climbs in the Italian Alps",
    features: ["Iconic Climb", "48 Hairpins", "Alpine Views"],
  },
  {
    id: 7,
    name: "Flanders Sportive",
    location: "Belgium",
    distance: "175 km",
    elevation: "2,800 m",
    difficulty: "Hard",
    participants: "12,000+",
    category: "Classic",
    price: "£72.00",
    rating: 4.7,
    reviews: 203,
    description: "Experience the cobbles and climbs of the Tour of Flanders",
    features: ["Cobbled Climbs", "Belgian Culture", "Beer Stops"],
  },
  {
    id: 8,
    name: "Gran Fondo New York",
    location: "New York, USA",
    distance: "100 miles",
    elevation: "2,500 m",
    difficulty: "Challenging",
    participants: "5,000+",
    category: "Gran Fondo",
    price: "£78.00",
    rating: 4.5,
    reviews: 145,
    description: "Ride through the five boroughs and beyond in America's cycling capital",
    features: ["City Skyline", "Bridge Crossings", "Urban Adventure"],
  },
]

const categories = ["All", "Gran Fondo", "Tour de France", "Sportive", "Mountain", "Classic", "Tour"]
const difficulties = ["All", "Moderate", "Challenging", "Hard", "Extreme", "Epic"]

export default function FamousRoutes() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedDifficulty, setSelectedDifficulty] = useState("All")
  const [sortBy, setSortBy] = useState("popular")

  const filteredRoutes = famousRoutes.filter((route) => {
    const matchesSearch =
      route.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      route.location.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || route.category === selectedCategory
    const matchesDifficulty = selectedDifficulty === "All" || route.difficulty === selectedDifficulty

    return matchesSearch && matchesCategory && matchesDifficulty
  })

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Moderate":
        return "text-green-400 border-green-400"
      case "Challenging":
        return "text-yellow-400 border-yellow-400"
      case "Hard":
        return "text-orange-400 border-orange-400"
      case "Extreme":
        return "text-red-400 border-red-400"
      case "Epic":
        return "text-purple-400 border-purple-400"
      default:
        return "text-slate-400 border-slate-400"
    }
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <NavBar />

      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyMzksIDY4LCAyMDAsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>

        <div className="relative container mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400">
                FAMOUS ROUTES
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Celebrate the world's most iconic cycling events and routes. From the cobbles of Flanders to the peaks of
              the Alps, create stunning posters of legendary rides that inspire cyclists worldwide.
            </p>
          </div>

          {/* Search and Filters - Enhanced */}
          <div className="max-w-6xl mx-auto mb-8">
            <div className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 mb-6">
              <div className="flex flex-col lg:flex-row gap-4 mb-4">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <Input
                    placeholder="Search routes, locations, or events..."
                    className="pl-12 h-12 bg-slate-700/50 border-slate-600/50 text-slate-100 placeholder:text-slate-400 focus:border-pink-500/50 focus:ring-2 focus:ring-pink-500/20 rounded-lg"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="flex gap-3">
                  <select
                    className="h-12 bg-slate-700/50 border border-slate-600/50 text-slate-300 rounded-lg px-4 py-2 focus:border-pink-500/50 focus:ring-2 focus:ring-pink-500/20 min-w-[120px]"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                  <select
                    className="h-12 bg-slate-700/50 border border-slate-600/50 text-slate-300 rounded-lg px-4 py-2 focus:border-pink-500/50 focus:ring-2 focus:ring-pink-500/20 min-w-[120px]"
                    value={selectedDifficulty}
                    onChange={(e) => setSelectedDifficulty(e.target.value)}
                  >
                    {difficulties.map((difficulty) => (
                      <option key={difficulty} value={difficulty}>
                        {difficulty}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Enhanced Category Pills */}
              <div className="flex flex-wrap gap-2">
                {categories.slice(1).map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? "bg-gradient-to-r from-pink-500 to-cyan-500 text-white shadow-lg shadow-pink-500/25"
                        : "bg-slate-700/50 text-slate-300 hover:bg-slate-600/50 border border-slate-600/50 hover:border-slate-500/50"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Routes Grid */}
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredRoutes.map((route) => (
                <div
                  key={route.id}
                  className="group bg-slate-800/40 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-pink-500/50 transition-all duration-300 overflow-hidden hover:shadow-2xl hover:shadow-pink-500/10 hover:-translate-y-1"
                >
                  {/* Enhanced Route Preview */}
                  <div className="relative h-48 bg-gradient-to-br from-slate-700 to-slate-800 overflow-hidden">
                    {/* Improved grid overlay */}
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAyMCAwIEwgMCAyMCBNIDEwIDAgTCAwIDEwIE0gMjAgMTAgTCAxMCAyMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDIzOSwgNjgsIDIwMCwgMC4xNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40"></div>

                    {/* Enhanced route visualization */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 200">
                      <defs>
                        <linearGradient id={`routeGradient${route.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop
                            offset="0%"
                            stopColor={route.id % 3 === 0 ? "#ec4899" : route.id % 3 === 1 ? "#22d3ee" : "#a855f7"}
                          />
                          <stop
                            offset="100%"
                            stopColor={route.id % 3 === 0 ? "#8b5cf6" : route.id % 3 === 1 ? "#06b6d4" : "#ec4899"}
                          />
                        </linearGradient>
                      </defs>
                      <path
                        d={`M${20 + route.id * 5},180 Q${60 + route.id * 10},${120 - route.id * 8} ${
                          120 + route.id * 8
                        },${140 - route.id * 6} T${260 - route.id * 3},${60 + route.id * 12}`}
                        fill="none"
                        stroke={`url(#routeGradient${route.id})`}
                        strokeWidth="4"
                        strokeLinecap="round"
                        opacity="0.9"
                        className="drop-shadow-lg"
                      />
                      {/* Enhanced glow effect */}
                      <path
                        d={`M${20 + route.id * 5},180 Q${60 + route.id * 10},${120 - route.id * 8} ${
                          120 + route.id * 8
                        },${140 - route.id * 6} T${260 - route.id * 3},${60 + route.id * 12}`}
                        fill="none"
                        stroke={route.id % 3 === 0 ? "#ec4899" : route.id % 3 === 1 ? "#22d3ee" : "#a855f7"}
                        strokeWidth="8"
                        strokeLinecap="round"
                        opacity="0.4"
                        filter="blur(6px)"
                      />
                    </svg>

                    {/* Enhanced badges with better positioning */}
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      {route.isPopular && (
                        <Badge className="bg-gradient-to-r from-pink-500 to-purple-500 text-white border-0 shadow-lg">
                          <Trophy className="h-3 w-3 mr-1" />
                          Popular
                        </Badge>
                      )}
                      {route.isSale && (
                        <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 shadow-lg animate-pulse">
                          Sale
                        </Badge>
                      )}
                    </div>

                    {/* Enhanced difficulty badge */}
                    <div className="absolute top-4 right-4">
                      <Badge
                        className={`bg-slate-900/90 backdrop-blur-sm border shadow-lg ${getDifficultyColor(
                          route.difficulty,
                        )}`}
                      >
                        {route.difficulty}
                      </Badge>
                    </div>

                    {/* Enhanced heart icon */}
                    <button className="absolute bottom-4 right-4 w-10 h-10 bg-slate-900/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-pink-500/80 transition-all duration-200 hover:scale-110 shadow-lg">
                      <Heart className="h-4 w-4 text-slate-300 hover:text-white transition-colors" />
                    </button>
                  </div>

                  {/* Enhanced Route Details with better spacing */}
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-cyan-400 transition-all line-clamp-1">
                        {route.name}
                      </h3>
                      <div className="flex items-center text-slate-400 text-sm mb-3">
                        <MapPin className="h-4 w-4 mr-2 text-pink-400" />
                        {route.location}
                      </div>
                      <p className="text-slate-300 text-sm line-clamp-2 leading-relaxed">{route.description}</p>
                    </div>

                    {/* Enhanced Stats Grid with better visual hierarchy */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="text-center p-3 bg-slate-700/40 rounded-lg border border-slate-600/30">
                        <div className="text-sm font-bold text-white">{route.distance}</div>
                        <div className="text-xs text-slate-400 mt-1">Distance</div>
                      </div>
                      <div className="text-center p-3 bg-slate-700/40 rounded-lg border border-slate-600/30">
                        <div className="text-sm font-bold text-white">{route.elevation}</div>
                        <div className="text-xs text-slate-400 mt-1">Elevation</div>
                      </div>
                    </div>

                    {/* Enhanced Features with better styling */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {route.features.slice(0, 2).map((feature, index) => (
                        <span
                          key={index}
                          className="text-xs bg-gradient-to-r from-slate-700/60 to-slate-600/60 text-slate-200 px-3 py-1.5 rounded-full border border-slate-600/30"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Enhanced Rating and Participants */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center">
                        <div className="flex items-center bg-slate-700/40 px-2 py-1 rounded-lg">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-white ml-1 font-medium">{route.rating}</span>
                          <span className="text-xs text-slate-400 ml-1">({route.reviews})</span>
                        </div>
                      </div>
                      <div className="flex items-center text-slate-400 text-xs bg-slate-700/40 px-2 py-1 rounded-lg">
                        <Users className="h-3 w-3 mr-1 text-cyan-400" />
                        {route.participants}
                      </div>
                    </div>

                    {/* Enhanced Price and Button */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400">
                          {route.price}
                        </span>
                        {route.originalPrice && (
                          <span className="text-sm text-slate-400 line-through ml-2">{route.originalPrice}</span>
                        )}
                      </div>
                      <Link href="/design">
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-pink-500 to-cyan-500 hover:from-pink-600 hover:to-cyan-600 text-white font-bold shadow-lg hover:shadow-pink-500/25 transition-all duration-200 hover:scale-105"
                        >
                          <ShoppingCart className="h-3 w-3 mr-2" />
                          Buy
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="bg-slate-800/50 border-slate-600/50 text-slate-300 hover:bg-slate-700 hover:text-white px-8 py-3"
            >
              LOAD MORE ROUTES
            </Button>
          </div>
        </div>

        {/* Featured Section */}
        <div className="max-w-6xl mx-auto mt-20">
          <div className="bg-gradient-to-r from-slate-800/50 to-purple-800/30 backdrop-blur-sm p-8 rounded-lg border border-pink-500/20">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400 mb-4">
                CAN'T FIND YOUR EVENT?
              </h2>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                Upload your own GPX file or connect your Strava account to create a poster from any ride, anywhere in
                the world.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/design">
                <Button className="bg-gradient-to-r from-pink-500 to-cyan-500 hover:from-pink-600 hover:to-cyan-600 text-white font-bold px-8 py-4">
                  DESIGN CUSTOM POSTER
                </Button>
              </Link>
              <Link href="/activities">
                <Button
                  variant="outline"
                  className="bg-slate-800/50 border-slate-600/50 text-slate-300 hover:bg-slate-700 hover:text-white px-8 py-4"
                >
                  BROWSE MY ACTIVITIES
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
