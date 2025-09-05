"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Type, Palette, Layout, Download, Share2, ChevronRight, ChevronLeft, Check, MapPin } from "lucide-react"
import Image from "next/image"
import NavBar from "@/components/nav-bar"
import { cn } from "@/lib/utils"
import Link from "next/link"

type Step = "style" | "text" | "layout"

export default function PosterDesigner() {
  const [currentStep, setCurrentStep] = useState<Step>("style")
  const [selectedColor, setSelectedColor] = useState("synthwave")
  const [selectedLayout, setSelectedLayout] = useState("portrait")
  const [selectedSize, setSelectedSize] = useState("a2")
  const [lineThickness, setLineThickness] = useState([4])
  const [title, setTitle] = useState("EPIC RIDE")
  const [subtitle, setSubtitle] = useState("Summer 2023")

  // Mock selected route data (would come from previous page)
  const selectedRoute = {
    name: "Morning Mountain Climb",
    location: "Boulder, Colorado",
    distance: "53.3km",
    elevation: "743m",
    date: "January 15, 2024",
  }

  const steps = [
    { id: "style" as Step, icon: Palette, label: "Style", description: "Pick colors and visual style" },
    { id: "text" as Step, icon: Type, label: "Text", description: "Add titles and customize text" },
    { id: "layout" as Step, icon: Layout, label: "Layout", description: "Choose size and orientation" },
  ]

  const colors = [
    {
      id: "synthwave",
      name: "Synthwave",
      gradient: "bg-gradient-to-r from-pink-500 to-cyan-500",
      route: "url(#synthwaveGradient)",
    },
    { id: "neon", name: "Neon", gradient: "bg-cyan-400", route: "#22d3ee" },
    { id: "sunset", name: "Sunset", gradient: "bg-gradient-to-r from-pink-500 to-purple-500", route: "#ec4899" },
    { id: "retro", name: "Retro", gradient: "bg-amber-500", route: "#f59e0b" },
    { id: "midnight", name: "Midnight", gradient: "bg-indigo-800", route: "#3730a3" },
    {
      id: "vaporwave",
      name: "Vapor",
      gradient: "bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400",
      route: "#a855f7",
    },
  ]

  const selectedColorObj = colors.find((c) => c.id === selectedColor) || colors[0]

  const getCurrentStepIndex = () => steps.findIndex((step) => step.id === currentStep)

  const nextStep = () => {
    const currentIndex = getCurrentStepIndex()
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1].id)
    }
  }

  const prevStep = () => {
    const currentIndex = getCurrentStepIndex()
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1].id)
    }
  }

  const isLastStep = getCurrentStepIndex() === steps.length - 1

  return (
    <div className="flex flex-col min-h-screen bg-slate-900">
      <NavBar />

      <div className="flex flex-1 overflow-hidden">
        {/* Simplified Sidebar */}
        <div className="w-96 bg-slate-800/50 backdrop-blur-sm border-r border-pink-500/20 flex flex-col">
          {/* Selected Route Info */}
          <div className="p-6 border-b border-slate-700/50">
            <div className="bg-slate-700/50 rounded-lg p-4 border border-pink-500/20">
              <div className="flex items-center mb-2">
                <MapPin className="h-4 w-4 text-pink-400 mr-2" />
                <span className="text-sm font-medium text-pink-400">Selected Route</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-1">{selectedRoute.name}</h3>
              <p className="text-sm text-slate-300 mb-2">{selectedRoute.location}</p>
              <div className="flex items-center gap-4 text-xs text-slate-400">
                <span>{selectedRoute.distance}</span>
                <span>•</span>
                <span>{selectedRoute.elevation}</span>
                <span>•</span>
                <span>{selectedRoute.date}</span>
              </div>
            </div>
          </div>

          {/* Progress Steps */}
          <div className="p-6 border-b border-slate-700/50">
            <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400 mb-6 uppercase tracking-wider">
              Customize Your Poster
            </h2>
            <div className="space-y-4">
              {steps.map((step, index) => {
                const Icon = step.icon
                const isActive = step.id === currentStep
                const isCompleted = getCurrentStepIndex() > index
                return (
                  <button
                    key={step.id}
                    onClick={() => setCurrentStep(step.id)}
                    className={cn(
                      "w-full flex items-center p-3 rounded-lg transition-all text-left",
                      isActive
                        ? "bg-gradient-to-r from-pink-500/20 to-cyan-500/20 border border-pink-500/50"
                        : isCompleted
                          ? "bg-slate-700/50 border border-green-500/50"
                          : "bg-slate-700/30 border border-slate-600/30 hover:bg-slate-700/50",
                    )}
                  >
                    <div
                      className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center mr-3",
                        isActive
                          ? "bg-gradient-to-r from-pink-500 to-cyan-500"
                          : isCompleted
                            ? "bg-green-500"
                            : "bg-slate-600",
                      )}
                    >
                      {isCompleted ? <Check className="h-4 w-4 text-white" /> : <Icon className="h-4 w-4 text-white" />}
                    </div>
                    <div>
                      <div className={cn("font-medium", isActive ? "text-pink-400" : "text-white")}>{step.label}</div>
                      <div className="text-xs text-slate-400">{step.description}</div>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Step Content */}
          <div className="flex-1 p-6 overflow-y-auto">
            {currentStep === "style" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold mb-4 text-cyan-400">Choose Your Style</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {colors.map((color) => (
                      <button
                        key={color.id}
                        className={cn(
                          "border-2 rounded-lg p-4 cursor-pointer transition-all flex flex-col items-center",
                          selectedColor === color.id
                            ? "border-pink-500 bg-slate-700/70"
                            : "border-slate-600/50 hover:border-pink-400/50",
                        )}
                        onClick={() => setSelectedColor(color.id)}
                      >
                        <div className={`w-12 h-12 rounded-lg ${color.gradient} mb-2`}></div>
                        <span className="text-xs font-medium text-center text-slate-300">{color.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold mb-3 text-cyan-400">Route Line Thickness</h4>
                  <div className="px-2">
                    <Slider
                      defaultValue={[4]}
                      max={10}
                      min={1}
                      step={1}
                      value={lineThickness}
                      onValueChange={setLineThickness}
                      className="py-4"
                    />
                    <div className="flex justify-between text-xs text-slate-400">
                      <span>Thin</span>
                      <span>Thick</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold mb-3 text-cyan-400">Quick Style Presets</h4>
                  <div className="space-y-2">
                    <button className="w-full p-3 bg-slate-700/50 rounded-lg border border-slate-600/50 hover:border-pink-400/50 transition-all text-left">
                      <div className="font-medium text-white text-sm">Retro Vibes</div>
                      <div className="text-xs text-slate-400">Synthwave colors, thick lines, bold text</div>
                    </button>
                    <button className="w-full p-3 bg-slate-700/50 rounded-lg border border-slate-600/50 hover:border-pink-400/50 transition-all text-left">
                      <div className="font-medium text-white text-sm">Minimalist</div>
                      <div className="text-xs text-slate-400">Clean lines, subtle colors, simple text</div>
                    </button>
                    <button className="w-full p-3 bg-slate-700/50 rounded-lg border border-slate-600/50 hover:border-pink-400/50 transition-all text-left">
                      <div className="font-medium text-white text-sm">Neon Glow</div>
                      <div className="text-xs text-slate-400">Bright colors, glowing effects, modern feel</div>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {currentStep === "text" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold mb-4 text-cyan-400">Add Your Text</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm mb-2 block text-slate-300">Main Title</label>
                      <Input
                        placeholder="Enter main title"
                        className="bg-slate-700/70 border-slate-600/50 text-slate-100 placeholder:text-slate-400 focus:border-pink-500/50"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                      <p className="text-xs text-slate-400 mt-1">This will be the main heading on your poster</p>
                    </div>
                    <div>
                      <label className="text-sm mb-2 block text-slate-300">Subtitle</label>
                      <Input
                        placeholder="Enter subtitle"
                        className="bg-slate-700/70 border-slate-600/50 text-slate-100 placeholder:text-slate-400 focus:border-pink-500/50"
                        value={subtitle}
                        onChange={(e) => setSubtitle(e.target.value)}
                      />
                      <p className="text-xs text-slate-400 mt-1">Optional subtitle or date</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold mb-3 text-cyan-400">Text Suggestions</h4>
                  <div className="space-y-2">
                    <button
                      onClick={() => setTitle("EPIC ADVENTURE")}
                      className="block w-full text-left text-sm text-slate-300 hover:text-cyan-400 transition-colors p-2 rounded hover:bg-slate-700/50"
                    >
                      "EPIC ADVENTURE"
                    </button>
                    <button
                      onClick={() => setTitle("MOUNTAIN CONQUEST")}
                      className="block w-full text-left text-sm text-slate-300 hover:text-cyan-400 transition-colors p-2 rounded hover:bg-slate-700/50"
                    >
                      "MOUNTAIN CONQUEST"
                    </button>
                    <button
                      onClick={() => setTitle("RIDE OF A LIFETIME")}
                      className="block w-full text-left text-sm text-slate-300 hover:text-cyan-400 transition-colors p-2 rounded hover:bg-slate-700/50"
                    >
                      "RIDE OF A LIFETIME"
                    </button>
                    <button
                      onClick={() => setTitle(selectedRoute.name.toUpperCase())}
                      className="block w-full text-left text-sm text-slate-300 hover:text-cyan-400 transition-colors p-2 rounded hover:bg-slate-700/50"
                    >
                      Use route name: "{selectedRoute.name.toUpperCase()}"
                    </button>
                  </div>
                </div>

                <div className="rounded-lg bg-slate-800/50 backdrop-blur-sm p-4 border border-pink-500/20">
                  <div className="text-center text-sm py-2 bg-gradient-to-r from-slate-700/70 to-slate-700/30 rounded-md mb-2 font-mono">
                    {selectedRoute.distance} — {selectedRoute.elevation}
                  </div>
                  <div className="text-xs text-slate-300 text-center">
                    Route statistics will be automatically added to your poster
                  </div>
                </div>
              </div>
            )}

            {currentStep === "layout" && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold mb-4 text-cyan-400">Choose Layout</h3>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <button
                      className={cn(
                        "border-2 rounded-lg p-4 flex flex-col items-center cursor-pointer transition-all",
                        selectedLayout === "portrait"
                          ? "border-pink-500 bg-slate-700/70"
                          : "border-slate-600/50 hover:border-pink-400/50",
                      )}
                      onClick={() => setSelectedLayout("portrait")}
                    >
                      <div className="w-8 h-12 bg-gradient-to-br from-slate-700 to-slate-600 rounded-md mb-2"></div>
                      <span className="text-sm font-medium text-slate-300">Portrait</span>
                      <span className="text-xs text-slate-400">Tall format</span>
                    </button>
                    <button
                      className={cn(
                        "border-2 rounded-lg p-4 flex flex-col items-center cursor-pointer transition-all",
                        selectedLayout === "landscape"
                          ? "border-pink-500 bg-slate-700/70"
                          : "border-slate-600/50 hover:border-pink-400/50",
                      )}
                      onClick={() => setSelectedLayout("landscape")}
                    >
                      <div className="w-12 h-8 bg-gradient-to-br from-slate-700 to-slate-600 rounded-md mb-2"></div>
                      <span className="text-sm font-medium text-slate-300">Landscape</span>
                      <span className="text-xs text-slate-400">Wide format</span>
                    </button>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold mb-3 text-cyan-400">Print Size</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { id: "a4", name: "A4", size: "29.7 x 21.0 cm", price: "£45", popular: false },
                      { id: "a3", name: "A3", size: "42.0 x 29.7 cm", price: "£55", popular: false },
                      { id: "a2", name: "A2", size: "59.4 x 42.0 cm", price: "£65", popular: true },
                      { id: "a1", name: "A1", size: "84.1 x 59.4 cm", price: "£85", popular: false },
                    ].map((size) => (
                      <button
                        key={size.id}
                        className={cn(
                          "border-2 rounded-lg p-3 cursor-pointer transition-all relative",
                          selectedSize === size.id
                            ? "border-pink-500 bg-slate-700/70"
                            : "border-slate-600/50 hover:border-pink-400/50",
                        )}
                        onClick={() => setSelectedSize(size.id)}
                      >
                        {size.popular && (
                          <div className="absolute -top-2 -right-2 bg-gradient-to-r from-pink-500 to-cyan-500 text-white text-xs px-2 py-1 rounded-full">
                            Popular
                          </div>
                        )}
                        <div className="text-center">
                          <div className="font-bold uppercase text-slate-200">{size.name}</div>
                          <div className="text-xs text-slate-400 mb-1">{size.size}</div>
                          <div className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-500">
                            {size.price}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <h4 className="text-sm font-bold mb-2 text-white">What's Included</h4>
                  <ul className="text-xs text-slate-300 space-y-1">
                    <li>• Premium matte paper (200gsm)</li>
                    <li>• Vibrant, fade-resistant inks</li>
                    <li>• Worldwide shipping included</li>
                    <li>• 30-day money-back guarantee</li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Navigation Footer */}
          <div className="p-6 border-t border-slate-700/50">
            <div className="flex justify-between items-center mb-4">
              <div className="text-xs">
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400">
                  £65.00
                </span>
                <span className="text-slate-400 ml-1">(A2 - 59.4 x 42 cm)</span>
              </div>
              <div className="text-xs text-slate-400">
                Step {getCurrentStepIndex() + 1} of {steps.length}
              </div>
            </div>
            <div className="flex gap-3">
              <Button
                onClick={prevStep}
                disabled={getCurrentStepIndex() === 0}
                variant="outline"
                className="flex-1 bg-slate-700/50 border-slate-600/50 text-slate-300 hover:bg-slate-600 disabled:opacity-50"
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Back
              </Button>
              {isLastStep ? (
                <Link href="/map-preview">
                  <Button className="flex-1 bg-gradient-to-r from-pink-500 to-cyan-500 hover:from-pink-600 hover:to-cyan-600 text-white font-bold">
                    Preview Poster
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </Link>
              ) : (
                <Button
                  onClick={nextStep}
                  className="flex-1 bg-gradient-to-r from-pink-500 to-cyan-500 hover:from-pink-600 hover:to-cyan-600 text-white font-bold"
                >
                  Next
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Main Preview Area */}
        <div className="flex-1 bg-gradient-to-br from-slate-900 via-slate-800 to-purple-900/30 p-6 overflow-auto">
          <div className="max-w-4xl mx-auto">
            {/* Action buttons */}
            <div className="flex justify-end mb-4 gap-2">
              <Button
                variant="outline"
                size="sm"
                className="text-xs bg-transparent border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white"
              >
                <Download className="h-3 w-3 mr-1" />
                SAVE
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="text-xs bg-transparent border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white"
              >
                <Share2 className="h-3 w-3 mr-1" />
                SHARE
              </Button>
            </div>

            {/* Poster preview */}
            <div
              className={`bg-gradient-to-br from-slate-800 to-slate-900 p-8 shadow-lg mx-auto rounded-lg border border-pink-500/20 ${
                selectedLayout === "portrait" ? "max-w-md" : "max-w-2xl"
              }`}
            >
              <div className="relative">
                <div className="relative">
                  {/* Map with route */}
                  <div className="relative">
                    <Image
                      src="/placeholder.svg?height=800&width=600"
                      width={600}
                      height={800}
                      alt="Map preview"
                      className={`w-full ${
                        selectedLayout === "portrait" ? "h-[700px]" : "h-[500px]"
                      } object-cover opacity-90`}
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
                        <linearGradient id="synthwaveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#f0f" />
                          <stop offset="100%" stopColor="#0ff" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M100,700 Q150,650 200,680 T300,600 T400,500 T500,300 T550,200"
                        fill="none"
                        stroke={selectedColorObj.route}
                        strokeWidth={lineThickness[0]}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      {/* Glow effect */}
                      <path
                        d="M100,700 Q150,650 200,680 T300,600 T400,500 T500,300 T550,200"
                        fill="none"
                        stroke={selectedColorObj.route === "url(#synthwaveGradient)" ? "#f0f" : selectedColorObj.route}
                        strokeWidth={lineThickness[0] * 2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        opacity="0.3"
                        filter="blur(8px)"
                      />
                    </svg>

                    {/* Title if entered */}
                    {title && (
                      <div className="absolute top-6 left-0 right-0 text-center">
                        <h2 className="text-2xl font-bold tracking-widest bg-gradient-to-r from-pink-500 to-cyan-500 text-transparent bg-clip-text inline-block px-4 py-2 backdrop-blur-sm">
                          {title}
                        </h2>
                      </div>
                    )}

                    {/* Subtitle if entered */}
                    {subtitle && (
                      <div className="absolute top-20 left-0 right-0 text-center">
                        <p className="text-sm font-medium tracking-wider text-white inline-block px-3 py-1 backdrop-blur-sm">
                          {subtitle}
                        </p>
                      </div>
                    )}

                    {/* Distance and elevation */}
                    <div className="absolute bottom-6 w-full text-center">
                      <div className="inline-block bg-black/40 px-6 py-2 text-sm font-mono font-medium backdrop-blur-sm text-white border border-pink-500/30 rounded">
                        {selectedRoute.distance} — {selectedRoute.elevation}
                      </div>
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
