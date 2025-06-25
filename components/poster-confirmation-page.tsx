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
  CreditCard,
  Truck,
  Shield,
  Star,
  Heart,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import NavBar from "@/components/nav-bar"

export default function PosterConfirmationPage() {
  const [isProcessing, setIsProcessing] = useState(false)

  // Mock poster configuration data (would come from design flow)
  const posterConfig = {
    route: {
      name: "Morning Mountain Climb",
      location: "Boulder, Colorado",
      distance: "53.3km",
      elevation: "743m",
      time: "2h 15m",
      date: "January 15, 2024",
    },
    design: {
      title: "EPIC RIDE",
      subtitle: "Summer 2023",
      colorScheme: "Synthwave",
      lineThickness: 4,
      style: "Retro",
    },
    layout: {
      orientation: "Portrait",
      size: "A2",
      dimensions: "59.4 x 42.0 cm",
      price: "£65.00",
    },
  }

  const handleConfirmPurchase = async () => {
    setIsProcessing(true)
    // Simulate processing
    await new Promise((resolve) => setTimeout(resolve, 2000))
    // In real app, this would process payment and redirect to success page
    window.location.href = "/order-success"
  }

  const handleEditPoster = () => {
    // Navigate back to design tool with current configuration
    window.location.href = "/design"
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <NavBar />

      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyMzksIDY4LCAyMDAsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>

        <div className="relative container mx-auto px-4 py-12">
          {/* Header */}
          <div className="max-w-6xl mx-auto mb-8">
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
                  CONFIRM YOUR POSTER
                </span>
              </h1>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                Review your custom poster design and confirm your order. Your poster will be printed on premium paper
                and shipped worldwide.
              </p>
            </div>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Poster Preview - Takes up 2 columns */}
              <div className="lg:col-span-2">
                <div className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-xl border border-pink-500/20">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400">
                      YOUR POSTER PREVIEW
                    </h2>
                    <div className="flex gap-2">
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

                  {/* Poster Container */}
                  <div className="flex justify-center mb-6">
                    <div className="bg-white p-6 shadow-2xl rounded-lg max-w-md transform hover:scale-105 transition-transform duration-300">
                      <div className="relative">
                        <div className="relative">
                          {/* Map with route */}
                          <div className="relative">
                            <Image
                              src="/placeholder.svg?height=800&width=600"
                              width={600}
                              height={800}
                              alt="Poster preview"
                              className="w-full h-[700px] object-cover opacity-90"
                            />

                            {/* Grid overlay for synthwave effect */}
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
                                strokeWidth={posterConfig.design.lineThickness}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              {/* Glow effect */}
                              <path
                                d="M100,700 Q150,650 200,680 T300,600 T400,500 T500,300 T550,200"
                                fill="none"
                                stroke="#ec4899"
                                strokeWidth={posterConfig.design.lineThickness * 2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                opacity="0.3"
                                filter="blur(8px)"
                              />
                            </svg>

                            {/* Title */}
                            <div className="absolute top-6 left-0 right-0 text-center">
                              <h2 className="text-3xl font-black tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500">
                                {posterConfig.design.title}
                              </h2>
                              {posterConfig.design.subtitle && (
                                <p className="text-sm font-bold tracking-wide uppercase text-white mt-2">
                                  {posterConfig.design.subtitle}
                                </p>
                              )}
                            </div>

                            {/* Stats at bottom */}
                            <div className="absolute bottom-6 w-full text-center">
                              <div className="inline-block bg-black/40 px-6 py-2 text-sm font-mono font-medium backdrop-blur-sm text-white border border-pink-500/30 rounded">
                                {posterConfig.route.distance} — {posterConfig.route.elevation}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      onClick={handleEditPoster}
                      variant="outline"
                      className="bg-slate-700/50 border-slate-600/50 text-slate-300 hover:bg-slate-600 hover:text-white px-8 py-4 text-lg"
                    >
                      <Edit3 className="mr-2 h-5 w-5" />
                      EDIT POSTER
                    </Button>
                    <Button
                      onClick={handleConfirmPurchase}
                      disabled={isProcessing}
                      className="bg-gradient-to-r from-pink-500 to-cyan-500 hover:from-pink-600 hover:to-cyan-600 text-white font-bold px-8 py-4 text-lg shadow-lg hover:shadow-pink-500/25 transition-all duration-200"
                    >
                      {isProcessing ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          PROCESSING...
                        </>
                      ) : (
                        <>
                          <CreditCard className="mr-2 h-5 w-5" />
                          CONFIRM & PURCHASE
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </div>

              {/* Order Details Sidebar */}
              <div className="space-y-6">
                {/* Order Summary */}
                <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-pink-500/20">
                  <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400 mb-4 uppercase tracking-wider">
                    Order Summary
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">Custom Poster ({posterConfig.layout.size})</span>
                      <span className="text-white font-bold">{posterConfig.layout.price}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-400">Size: {posterConfig.layout.dimensions}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-400">Premium Paper & Printing</span>
                      <span className="text-green-400 font-medium">Included</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-400">Worldwide Shipping</span>
                      <span className="text-green-400 font-medium">FREE</span>
                    </div>
                    <div className="border-t border-slate-700 pt-4 mt-4">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-white">Total</span>
                        <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400">
                          {posterConfig.layout.price}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Route Details */}
                <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-cyan-500/20">
                  <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400 mb-4 uppercase tracking-wider">
                    Route Details
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 text-pink-400 mr-3" />
                      <div>
                        <div className="text-white font-medium">{posterConfig.route.name}</div>
                        <div className="text-slate-400 text-sm">{posterConfig.route.location}</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 text-cyan-400 mr-3" />
                      <span className="text-white text-sm">{posterConfig.route.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Ruler className="h-4 w-4 text-purple-400 mr-3" />
                      <span className="text-white text-sm">{posterConfig.route.distance}</span>
                    </div>
                    <div className="flex items-center">
                      <Mountain className="h-4 w-4 text-green-400 mr-3" />
                      <span className="text-white text-sm">{posterConfig.route.elevation}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-yellow-400 mr-3" />
                      <span className="text-white text-sm">{posterConfig.route.time}</span>
                    </div>
                  </div>
                </div>

                {/* Design Details */}
                <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20">
                  <h3 className="text-lg font-bold text-white mb-4">Design Configuration</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Type className="h-4 w-4 text-pink-400 mr-2" />
                        <span className="text-slate-400 text-sm">Title</span>
                      </div>
                      <span className="text-white text-sm">"{posterConfig.design.title}"</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Palette className="h-4 w-4 text-cyan-400 mr-2" />
                        <span className="text-slate-400 text-sm">Style</span>
                      </div>
                      <span className="text-white text-sm">{posterConfig.design.colorScheme}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 text-sm">Orientation</span>
                      <span className="text-white text-sm">{posterConfig.layout.orientation}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400 text-sm">Print Size</span>
                      <span className="text-white text-sm">{posterConfig.layout.size}</span>
                    </div>
                  </div>
                </div>

                {/* Guarantees */}
                <div className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-xl border border-green-500/20">
                  <h3 className="text-lg font-bold text-white mb-4">Our Guarantees</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <Shield className="h-5 w-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-bold text-white">Quality Guarantee</h4>
                        <p className="text-xs text-slate-400">Premium 200gsm matte paper with fade-resistant inks</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Truck className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-bold text-white">Fast Shipping</h4>
                        <p className="text-xs text-slate-400">Printed and shipped within 2-3 business days</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Heart className="h-5 w-5 text-pink-400 mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-bold text-white">30-Day Returns</h4>
                        <p className="text-xs text-slate-400">Not happy? Full refund within 30 days</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Customer Reviews */}
                <div className="bg-slate-800/30 backdrop-blur-sm p-6 rounded-xl border border-yellow-500/20">
                  <h3 className="text-lg font-bold text-white mb-4">Customer Reviews</h3>
                  <div className="space-y-4">
                    <div className="flex items-center mb-3">
                      <div className="flex text-yellow-400 mr-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                      <span className="text-white font-medium">4.9/5</span>
                      <span className="text-slate-400 text-sm ml-2">(2,847 reviews)</span>
                    </div>
                    <div className="text-sm text-slate-300">
                      "Amazing quality and the retro style looks incredible on my wall. Shipping was super fast too!"
                    </div>
                    <div className="text-xs text-slate-400">- Sarah M., verified buyer</div>
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
