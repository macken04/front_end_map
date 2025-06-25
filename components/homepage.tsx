"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Star, MapPin, Palette, Play, Users, Globe, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import NavBar from "@/components/nav-bar"

export default function Homepage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <NavBar />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyMzksIDY4LCAyMDAsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>

        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl md:text-7xl font-black tracking-tighter mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">
                TURN YOUR RIDES
              </span>
              <br />
              <span className="text-white">INTO ART</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Transform your Strava activities into stunning retro-style posters. Celebrate every epic ride, memorable
              route, and personal achievement with custom artwork that's uniquely yours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/design">
                <Button className="bg-gradient-to-r from-pink-500 to-cyan-500 hover:from-pink-600 hover:to-cyan-600 text-white font-bold px-8 py-4 text-lg">
                  START DESIGNING
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white px-8 py-4 text-lg"
              >
                <Play className="mr-2 h-5 w-5" />
                WATCH DEMO
              </Button>
            </div>
          </div>
        </div>

        {/* Floating poster previews */}
        <div className="absolute top-20 left-10 opacity-20 rotate-12 hidden lg:block">
          <div className="w-32 h-48 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg border border-pink-500/20 p-2">
            <div className="w-full h-full bg-slate-700 rounded relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-pink-500/30"></div>
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 120">
                <path
                  d="M20,100 Q30,80 40,85 T60,75 T80,50"
                  fill="none"
                  stroke="#ec4899"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="absolute top-32 right-16 opacity-20 -rotate-6 hidden lg:block">
          <div className="w-40 h-32 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg border border-cyan-500/20 p-2">
            <div className="w-full h-full bg-slate-700 rounded relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-cyan-500/30"></div>
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 120 100">
                <path
                  d="M20,80 Q40,60 60,70 T100,40"
                  fill="none"
                  stroke="#22d3ee"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400 mb-4">
              FEATURES THAT INSPIRE
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Everything you need to create professional-quality posters from your cycling adventures
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-pink-500/20">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">ROUTE VISUALIZATION</h3>
              <p className="text-slate-300">
                Import your Strava data and watch your route come to life with stunning visual effects and customizable
                styling options.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-cyan-500/20">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                <Palette className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">RETRO AESTHETICS</h3>
              <p className="text-slate-300">
                Choose from synthwave, vaporwave, and vintage color schemes that make your rides look like they're
                straight out of the 80s.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">INSTANT CREATION</h3>
              <p className="text-slate-300">
                Our intuitive design tool lets you create stunning posters in minutes, not hours. No design experience
                required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400 mb-4">
              POSTER GALLERY
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              See what's possible with our design tool. Every poster tells a unique story.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="group relative bg-gradient-to-br from-slate-800 to-slate-900 p-4 rounded-lg border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300"
              >
                <div className="aspect-[3/4] bg-slate-700 rounded relative overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=300"
                    width={300}
                    height={400}
                    alt={`Poster example ${i}`}
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-purple-900/50"></div>
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 400">
                    <path
                      d={`M${50 + i * 10},350 Q${100 + i * 15},${300 - i * 20} ${150 + i * 10},${320 - i * 15} T${250 - i * 5},${200 + i * 10}`}
                      fill="none"
                      stroke={i % 3 === 0 ? "#ec4899" : i % 3 === 1 ? "#22d3ee" : "#a855f7"}
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black/40 backdrop-blur-sm rounded px-3 py-1 text-white text-sm font-mono">
                      {25 + i * 8}.{i}km — {400 + i * 100}m
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 right-4 text-center">
                    <h3 className="text-white font-bold text-lg">
                      {
                        ["MOUNTAIN CLIMB", "CITY LOOP", "COASTAL RIDE", "FOREST TRAIL", "EPIC JOURNEY", "WEEKEND RIDE"][
                          i - 1
                        ]
                      }
                    </h3>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/0 via-purple-500/0 to-cyan-500/0 group-hover:from-pink-500/10 group-hover:via-purple-500/10 group-hover:to-cyan-500/10 rounded-lg transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400 mb-4">
              HOW IT WORKS
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              From Strava data to stunning poster in just three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">UPLOAD YOUR RIDE</h3>
              <p className="text-slate-300">
                Connect your Strava account or upload a GPX file. We'll automatically extract your route data and
                statistics.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">CUSTOMIZE YOUR STYLE</h3>
              <p className="text-slate-300">
                Choose from retro color schemes, adjust layouts, add titles, and personalize every aspect of your
                poster.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">PRINT & SHARE</h3>
              <p className="text-slate-300">
                Download high-resolution files for printing or share directly to social media. Your ride, your art.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400 mb-4">
              LOVED BY CYCLISTS
            </h2>
            <div className="flex items-center justify-center gap-8 text-slate-300">
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2 text-pink-400" />
                <span>50,000+ Posters Created</span>
              </div>
              <div className="flex items-center">
                <Star className="h-5 w-5 mr-2 text-cyan-400" />
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex items-center">
                <Globe className="h-5 w-5 mr-2 text-purple-400" />
                <span>120+ Countries</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-pink-500/20">
              <div className="flex items-center mb-4">
                <div className="flex text-pink-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-slate-300 mb-4">
                "Absolutely love my poster! The retro aesthetic perfectly captures the vibe of my mountain bike
                adventures. Quality is amazing."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold">S</span>
                </div>
                <div>
                  <p className="text-white font-medium">Sarah Chen</p>
                  <p className="text-slate-400 text-sm">Mountain Biker</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-cyan-500/20">
              <div className="flex items-center mb-4">
                <div className="flex text-cyan-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-slate-300 mb-4">
                "The design tool is so intuitive! I created three posters for my favorite routes and they look
                incredible on my wall."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold">M</span>
                </div>
                <div>
                  <p className="text-white font-medium">Mike Rodriguez</p>
                  <p className="text-slate-400 text-sm">Road Cyclist</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20">
              <div className="flex items-center mb-4">
                <div className="flex text-purple-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-slate-300 mb-4">
                "Perfect gift for any cycling enthusiast! The synthwave style makes every ride look epic. Highly
                recommend!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold">A</span>
                </div>
                <div>
                  <p className="text-white font-medium">Alex Thompson</p>
                  <p className="text-slate-400 text-sm">Gravel Rider</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 via-purple-900/50 to-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-black tracking-tighter mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400">
              READY TO CREATE
            </span>
            <br />
            <span className="text-white">YOUR MASTERPIECE?</span>
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Join thousands of cyclists who've transformed their rides into stunning wall art. Start designing your
            poster today.
          </p>
          <Link href="/design">
            <Button className="bg-gradient-to-r from-pink-500 to-cyan-500 hover:from-pink-600 hover:to-cyan-600 text-white font-bold px-12 py-6 text-xl">
              START DESIGNING NOW
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-pink-500/20 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-pink-500 to-cyan-500 flex items-center justify-center mr-2">
                  <span className="font-bold text-white text-sm">SR</span>
                </div>
                <span className="text-white font-bold">Strava Rides</span>
              </div>
              <p className="text-slate-400 text-sm">
                Transform your cycling adventures into stunning retro-style posters.
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>
                  <Link href="/design" className="hover:text-cyan-400 transition-colors">
                    Design Tool
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="hover:text-cyan-400 transition-colors">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-cyan-400 transition-colors">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>
                  <Link href="/help" className="hover:text-cyan-400 transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-cyan-400 transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/shipping" className="hover:text-cyan-400 transition-colors">
                    Shipping Info
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Newsletter</h4>
              <p className="text-slate-400 text-sm mb-4">Get design tips and new features.</p>
              <div className="flex">
                <Input
                  placeholder="Your email"
                  className="bg-slate-800 border-slate-700 text-slate-100 placeholder:text-slate-400 rounded-r-none"
                />
                <Button className="bg-gradient-to-r from-pink-500 to-cyan-500 hover:from-pink-600 hover:to-cyan-600 rounded-l-none">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400 text-sm">
            <p>&copy; 2024 Strava Rides. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
