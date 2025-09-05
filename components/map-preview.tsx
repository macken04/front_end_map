"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  ArrowLeft,
  Edit3,
  Download,
  Share2,
  MapPin,
  Calendar,
  Clock,
  Mountain,
  Ruler,
  Palette,
  Type,
  Layout,
  ShoppingCart,
  Heart,
  Star,
  Eye,
  Truck,
  Shield,
  Award,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import NavBar from "@/components/nav-bar"
import { cn } from "@/lib/utils"

export default function MapPreview() {
  const [selectedView, setSelectedView] = useState<"poster" | "framed" | "wall">("poster")
  const [isLiked, setIsLiked] = useState(false)

  // Mock configuration data from design process
  const mapConfig = {
    route: {
      name: "Morning Mountain Climb",
      location: "Boulder, Colorado",
      distance: "53.3km",
      elevation: "743m",
      time: "2h 15m",
      date: "January 15, 2024",
      avgSpeed: "23.7 km/h",
      maxElevation: "2,134m",
    },
    design: {
      title: "EPIC RIDE",
      subtitle: "Summer 2023",
      colorScheme: "Synthwave",
      colorName: "Pink to Cyan Gradient",
      lineThickness: 4,
      style: "Retro Grid",
      textStyle: "Bold Uppercase",
    },
    layout: {
      orientation: "Portrait",
      size: "A2",
      dimensions: "59.4 x 42.0 cm",
      dpi: "300 DPI",
      paperType: "Premium Matte",
      price: "£65.00",
      originalPrice: "£75.00",
    },
  }

  const viewOptions = [
    { id: "poster", label: "Poster Only", icon: Eye },
    { id: "framed", label: "Framed", icon: Layout },
    { id: "wall", label: "On Wall", icon: Award },
  ]

  return (
    <div className="min-h-screen bg-slate-900">
      <NavBar />

      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyMzksIDY4LCAyMDAsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>

        <div className="relative container mx-auto px-4 py-12">
          {/* Header */}
          <div className="max-w-7xl mx-auto mb-8">
            <div className="flex items-center justify-between mb-6">
              <Link href="/design" className="flex items-center text-slate-300 hover:text-cyan-400 transition-colors">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Design
              </Link>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-slate-700/50 border-slate-600/50 text-slate-300 hover:bg-slate-600"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download Preview
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-slate-700/50 border-slate-600/50 text-slate-300 hover:bg-slate-600"
                >
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400">
                  YOUR MAP PREVIEW
                </span>
              </h1>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                Here's exactly how your custom poster will look. Review every detail and make any final adjustments
                before ordering.
              </p>
            </div>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Map Preview - Takes up 2 columns */}
              <div className="lg:col-span-2">
                <div className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-xl border border-pink-500/20">
                  {/* View Options */}
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400">
                      PREVIEW OPTIONS
                    </h2>
                    <div className="flex bg-slate-700/50 rounded-lg p-1">
                      {viewOptions.map((option) => {
                        const Icon = option.icon
                        return (
                          <button
                            key={option.id}
                            onClick={() => setSelectedView(option.id as any)}
                            className={cn(
                              "flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all",
                              selectedView === option.id
                                ? "bg-gradient-to-r from-pink-500 to-cyan-500 text-white"
                                : "text-slate-300 hover:text-white hover:bg-slate-600/50",
                            )}
                          >
                            <Icon className="h-4 w-4 mr-2" />
                            {option.label}
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  {/* Map Preview Container */}
                  <div className="flex justify-center mb-6">
                    {selectedView === "poster" && (
                      <div className="bg-white p-6 shadow-2xl rounded-lg max-w-md transform hover:scale-105 transition-transform duration-300">
                        <div className="relative">
                          <Image
                            src="/placeholder.svg?height=800&width=600"
                            width={600}
                            height={800}
                            alt="Map preview"
                            className="w-full h-[700px] object-cover opacity-90"
                          />

                          {/* Grid overlay */}
                          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyMzksIDY4LCAyMDAsIDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-60"></div>

                          {/* Route line */}
                          <svg
                            className="absolute inset-0 w-full h-full"
                            viewBox="0 0 600 800"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <defs>
                              <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#ec4899" />
                                <stop offset="100%" stopColor="#22d3ee" />
                              </linearGradient>
                            </defs>
                            <path
                              d="M100,700 Q150,650 200,680 T300,600 T400,500 T500,300 T550,200"
                              fill="none"
                              stroke="url(#routeGradient)"
                              strokeWidth={mapConfig.design.lineThickness}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            {/* Glow effect */}
                            <path
                              d="M100,700 Q150,650 200,680 T300,600 T400,500 T500,300 T550,200"
                              fill="none"
                              stroke="#ec4899"
                              strokeWidth={mapConfig.design.lineThickness * 2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              opacity="0.3"
                              filter="blur(8px)"
                            />
                          </svg>

                          {/* Title */}
                          <div className="absolute top-6 left-0 right-0 text-center">
                            <h2 className="text-3xl font-black tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500">
                              {mapConfig.design.title}
                            </h2>
                            {mapConfig.design.subtitle && (
                              <p className="text-sm font-bold tracking-wide uppercase text-white mt-2">
                                {mapConfig.design.subtitle}
                              </p>
                            )}
                          </div>

                          {/* Stats at bottom */}
                          <div className="absolute bottom-6 w-full text-center">
                            <div className="inline-block bg-black/40 px-6 py-2 text-sm font-mono font-medium backdrop-blur-sm text-white border border-pink-500/30 rounded">
                              {mapConfig.route.distance} — {mapConfig.route.elevation}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {selectedView === "framed" && (
                      <div className="relative">
                        {/* Frame */}
                        <div className="bg-gradient-to-br from-slate-700 to-slate-800 p-8 shadow-2xl rounded-lg">
                          <div className="bg-white p-6 shadow-inner">
                            <div className="relative">
                              <Image
                                src="/placeholder.svg?height=600&width=450"
                                width={450}
                                height={600}
                                alt="Framed map preview"
                                className="w-full h-[500px] object-cover opacity-90"
                              />
                              {/* Simplified route overlay for framed view */}
                              <svg
                                className="absolute inset-0 w-full h-full"
                                viewBox="0 0 450 600"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M75,525 Q112,487 150,510 T225,450 T300,375 T375,225 T412,150"
                                  fill="none"
                                  stroke="url(#routeGradient)"
                                  strokeWidth="3"
                                  strokeLinecap="round"
                                />
                              </svg>
                              <div className="absolute top-4 left-0 right-0 text-center">
                                <h3 className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500">
                                  {mapConfig.design.title}
                                </h3>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute -bottom-2 -right-2 bg-slate-600 text-white text-xs px-2 py-1 rounded">
                          Frame not included
                        </div>
                      </div>
                    )}

                    {selectedView === "wall" && (
                      <div className="relative">
                        {/* Wall mockup */}
                        <div className="bg-gradient-to-br from-slate-100 to-slate-200 p-12 rounded-lg shadow-2xl">
                          <div className="bg-white p-4 shadow-lg transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                            <div className="relative">
                              <Image
                                src="/placeholder.svg?height=400&width=300"
                                width={300}
                                height={400}
                                alt="Wall mounted map preview"
                                className="w-full h-[350px] object-cover opacity-90"
                              />
                              <svg
                                className="absolute inset-0 w-full h-full"
                                viewBox="0 0 300 400"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M50,350 Q75,325 100,340 T150,300 T200,250 T250,150 T275,100"
                                  fill="none"
                                  stroke="url(#routeGradient)"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="absolute -bottom-2 -right-2 bg-slate-600 text-white text-xs px-2 py-1 rounded">
                          Mockup only
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      variant="outline"
                      className="bg-slate-700/50 border-slate-600/50 text-slate-300 hover:bg-slate-600 hover:text-white px-8 py-4 text-lg"
                    >
                      <Edit3 className="mr-2 h-5 w-5" />
                      EDIT MAP
                    </Button>
                    <Button
                      onClick={() => setIsLiked(!isLiked)}
                      variant="outline"
                      className={cn(
                        "px-8 py-4 text-lg transition-all",
                        isLiked
                          ? "bg-pink-500/20 border-pink-500/50 text-pink-400 hover:bg-pink-500/30"
                          : "bg-slate-700/50 border-slate-600/50 text-slate-300 hover:bg-slate-600 hover:text-white",
                      )}
                    >
                      <Heart className={cn("mr-2 h-5 w-5", isLiked && "fill-current")} />
                      {isLiked ? "SAVED" : "SAVE"}
                    </Button>
                    <Link href="/confirm-poster">
                      <Button className="bg-gradient-to-r from-pink-500 to-cyan-500 hover:from-pink-600 hover:to-cyan-600 text-white font-bold px-8 py-4 text-lg shadow-lg hover:shadow-pink-500/25 transition-all duration-200">
                        <ShoppingCart className="mr-2 h-5 w-5" />
                        ADD TO CART
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Configuration Details Sidebar */}
              <div className="space-y-6">
                {/* Pricing */}
                <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-pink-500/20">
                  <div className="text-center mb-4">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400">
                        {mapConfig.layout.price}
                      </span>
                      {mapConfig.layout.originalPrice && (
                        <span className="text-lg text-slate-400 line-through">{mapConfig.layout.originalPrice}</span>
                      )}
                    </div>
                    <div className="text-sm text-slate-400">{mapConfig.layout.dimensions}</div>
                    <div className="inline-flex items-center bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-medium mt-2">
                      <Truck className="h-3 w-3 mr-1" />
                      FREE Worldwide Shipping
                    </div>
                  </div>
                </div>

                {/* Route Information */}
                <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-cyan-500/20">
                  <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400 mb-4 uppercase tracking-wider">
                    Route Details
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 text-pink-400 mr-3" />
                      <div>
                        <div className="text-white font-medium">{mapConfig.route.name}</div>
                        <div className="text-slate-400 text-sm">{mapConfig.route.location}</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex items-center">
                        <Ruler className="h-4 w-4 text-purple-400 mr-2" />
                        <div>
                          <div className="text-white text-sm font-medium">{mapConfig.route.distance}</div>
                          <div className="text-slate-400 text-xs">Distance</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Mountain className="h-4 w-4 text-green-400 mr-2" />
                        <div>
                          <div className="text-white text-sm font-medium">{mapConfig.route.elevation}</div>
                          <div className="text-slate-400 text-xs">Elevation</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-yellow-400 mr-2" />
                        <div>
                          <div className="text-white text-sm font-medium">{mapConfig.route.time}</div>
                          <div className="text-slate-400 text-xs">Duration</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 text-cyan-400 mr-2" />
                        <div>
                          <div className="text-white text-sm font-medium">{mapConfig.route.avgSpeed}</div>
                          <div className="text-slate-400 text-xs">Avg Speed</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Design Configuration */}
                <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20">
                  <h3 className="text-lg font-bold text-white mb-4">Design Settings</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Type className="h-4 w-4 text-pink-400 mr-2" />
                        <span className="text-slate-400 text-sm">Title</span>
                      </div>
                      <span className="text-white text-sm">"{mapConfig.design.title}"</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Palette className="h-4 w-4 text-cyan-400 mr-2" />
                        <span className="text-slate-400 text-sm">Color Scheme</span>
                      </div>
                      <span className="text-white text-sm">{mapConfig.design.colorScheme}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 text-sm">Line Style</span>
                      <span className="text-white text-sm">Thickness {mapConfig.design.lineThickness}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 text-sm">Grid Style</span>
                      <span className="text-white text-sm">{mapConfig.design.style}</span>
                    </div>
                  </div>
                </div>

                {/* Print Specifications */}
                <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-green-500/20">
                  <h3 className="text-lg font-bold text-white mb-4">Print Quality</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 text-sm">Size</span>
                      <span className="text-white text-sm">
                        {mapConfig.layout.size} ({mapConfig.layout.dimensions})
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 text-sm">Resolution</span>
                      <span className="text-white text-sm">{mapConfig.layout.dpi}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 text-sm">Paper</span>
                      <span className="text-white text-sm">{mapConfig.layout.paperType}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 text-sm">Orientation</span>
                      <span className="text-white text-sm">{mapConfig.layout.orientation}</span>
                    </div>
                  </div>
                </div>

                {/* Quality Guarantee */}
                <div className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-xl border border-yellow-500/20">
                  <div className="flex items-center mb-3">
                    <Shield className="h-5 w-5 text-yellow-400 mr-2" />
                    <h3 className="text-lg font-bold text-white">Quality Promise</h3>
                  </div>
                  <div className="space-y-2 text-sm text-slate-300">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 mr-2" />
                      <span>Premium 200gsm matte paper</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 mr-2" />
                      <span>Fade-resistant archival inks</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 mr-2" />
                      <span>30-day money-back guarantee</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
