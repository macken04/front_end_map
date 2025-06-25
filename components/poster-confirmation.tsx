"use client"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Edit3, ShoppingCart, Download, Share2, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import NavBar from "@/components/nav-bar"

export default function PosterConfirmation() {
  // Mock poster configuration data
  const posterConfig = {
    title: "EPIC RIDE",
    subtitle: "Summer 2023",
    distance: "53.3km",
    elevation: "743m",
    time: "2h 15m",
    location: "Boulder, Colorado",
    date: "January 15, 2024",
    colorScheme: "Synthwave",
    size: "A2 (42.0 x 59.4 cm)",
    layout: "Portrait",
    style: "Retro",
    price: "£60.00",
  }

  const handleEditConfiguration = () => {
    // Navigate back to design tool
    window.location.href = "/design"
  }

  const handleAddToCart = () => {
    // Add to cart logic
    console.log("Adding poster to cart...")
    // Could navigate to cart or show success message
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <NavBar />

      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyMzksIDY4LCAyMDAsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>

        <div className="relative container mx-auto px-4 py-12">
          {/* Header */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="flex items-center mb-6">
              <Link
                href="/design"
                className="flex items-center text-slate-300 hover:text-cyan-400 transition-colors mr-4"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Design
              </Link>
            </div>
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400">
                  POSTER PREVIEW
                </span>
              </h1>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                Review your custom poster design before adding it to your cart. Make sure everything looks perfect!
              </p>
            </div>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Poster Preview - Takes up 2 columns */}
              <div className="lg:col-span-2">
                <div className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-lg border border-pink-500/20">
                  {/* Poster Container */}
                  <div className="flex justify-center">
                    <div className="bg-white p-6 shadow-2xl rounded-lg max-w-md">
                      <div className="relative border-8 border-pink-600">
                        <div className="relative">
                          {/* Background color for retro style */}
                          <div className="absolute inset-0 bg-stone-100 z-0"></div>

                          {/* Map with route */}
                          <div className="relative">
                            <Image
                              src="/placeholder.svg?height=800&width=600"
                              width={600}
                              height={800}
                              alt="Poster preview"
                              className="w-full h-[700px] object-cover opacity-90 grayscale"
                            />

                            {/* Diagonal stripes for retro style */}
                            <div
                              className="absolute inset-0 opacity-10"
                              style={{
                                backgroundImage: `repeating-linear-gradient(45deg, #000, #000 10px, transparent 10px, transparent 20px)`,
                              }}
                            ></div>

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
                                strokeWidth="5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              {/* Glow effect */}
                              <path
                                d="M100,700 Q150,650 200,680 T300,600 T400,500 T500,300 T550,200"
                                fill="none"
                                stroke="#ec4899"
                                strokeWidth="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                opacity="0.3"
                                filter="blur(8px)"
                              />
                            </svg>

                            {/* Title banner for retro style */}
                            <div className="absolute top-0 left-0 right-0 bg-pink-600 py-4 text-center">
                              <h2 className="text-3xl font-black tracking-tighter uppercase text-white">
                                {posterConfig.title}
                              </h2>
                              <p className="text-sm font-bold tracking-wide uppercase text-white mt-1">
                                {posterConfig.subtitle}
                              </p>
                            </div>

                            {/* Stats at bottom */}
                            <div className="absolute bottom-0 left-0 right-0 bg-pink-600 text-white py-4 w-full text-center">
                              <div className="text-sm font-bold">
                                {posterConfig.distance} — {posterConfig.elevation}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <Button
                      onClick={handleEditConfiguration}
                      variant="outline"
                      className="bg-slate-800/50 border-slate-600/50 text-slate-300 hover:bg-slate-700 hover:text-white px-8 py-4 text-lg"
                    >
                      <Edit3 className="mr-2 h-5 w-5" />
                      EDIT CONFIGURATION
                    </Button>
                    <Button
                      onClick={handleAddToCart}
                      className="bg-gradient-to-r from-pink-500 to-cyan-500 hover:from-pink-600 hover:to-cyan-600 text-white font-bold px-8 py-4 text-lg"
                    >
                      <ShoppingCart className="mr-2 h-5 w-5" />
                      ADD TO CART
                    </Button>
                  </div>
                </div>
              </div>

              {/* Configuration Summary - Takes up 1 column */}
              <div className="space-y-6">
                {/* Order Summary */}
                <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-pink-500/20">
                  <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400 mb-4 uppercase tracking-wider">
                    Order Summary
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">Custom Poster</span>
                      <span className="text-white font-bold">{posterConfig.price}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-400">Size: {posterConfig.size}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-400">Worldwide Shipping</span>
                      <span className="text-green-400 font-medium">FREE</span>
                    </div>
                    <div className="border-t border-slate-700 pt-3 mt-3">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-white">Total</span>
                        <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400">
                          {posterConfig.price}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Configuration Details */}
                <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-cyan-500/20">
                  <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400 mb-4 uppercase tracking-wider">
                    Configuration
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">Activity</span>
                      <span className="text-white text-sm">{posterConfig.location}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">Date</span>
                      <span className="text-white text-sm">{posterConfig.date}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">Style</span>
                      <span className="text-white text-sm">{posterConfig.style}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">Color Scheme</span>
                      <span className="text-white text-sm">{posterConfig.colorScheme}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">Layout</span>
                      <span className="text-white text-sm">{posterConfig.layout}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">Distance</span>
                      <span className="text-white text-sm">{posterConfig.distance}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">Elevation</span>
                      <span className="text-white text-sm">{posterConfig.elevation}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">Time</span>
                      <span className="text-white text-sm">{posterConfig.time}</span>
                    </div>
                  </div>
                </div>

                {/* Additional Options */}
                <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20">
                  <h3 className="text-lg font-bold text-white mb-4">Additional Options</h3>
                  <div className="space-y-3">
                    <Button
                      variant="outline"
                      className="w-full bg-transparent border-slate-600/50 text-slate-300 hover:bg-slate-700 hover:text-white justify-start"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download High-Res Preview
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full bg-transparent border-slate-600/50 text-slate-300 hover:bg-slate-700 hover:text-white justify-start"
                    >
                      <Share2 className="mr-2 h-4 w-4" />
                      Share Preview
                    </Button>
                  </div>
                </div>

                {/* Quality Guarantee */}
                <div className="bg-slate-800/30 backdrop-blur-sm p-4 rounded-lg border border-green-500/20">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-white mb-1">Quality Guarantee</h4>
                      <p className="text-xs text-slate-400">
                        Premium paper, vibrant colors, and worldwide shipping. 30-day money-back guarantee.
                      </p>
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
