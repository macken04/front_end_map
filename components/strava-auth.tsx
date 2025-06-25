"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, MapPin, BarChart3, Users, CheckCircle } from "lucide-react"
import NavBar from "@/components/nav-bar"

export default function StravaAuth() {
  const handleStravaConnect = () => {
    // In a real app, this would redirect to Strava OAuth
    // For demo purposes, we'll redirect to the activities page
    window.location.href = "/activities"
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <NavBar />

      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyMzksIDY4LCAyMDAsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>

        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400">
                  CONNECT TO
                </span>
                <br />
                <span className="text-white">STRAVA</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Connect your Strava account to access your activities and transform your favorite rides into stunning
                retro posters.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Benefits */}
              <div className="space-y-8">
                <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-pink-500/20">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">ACCESS YOUR ROUTES</h3>
                      <p className="text-slate-300">
                        Import all your Strava activities with GPS data, elevation profiles, and detailed statistics
                        automatically.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-cyan-500/20">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <BarChart3 className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">RICH ACTIVITY DATA</h3>
                      <p className="text-slate-300">
                        Get detailed metrics including distance, elevation gain, moving time, and average speed for each
                        poster.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">SECURE & PRIVATE</h3>
                      <p className="text-slate-300">
                        We only access your activity data. Your personal information stays private and secure with
                        Strava's OAuth.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side - Connection */}
              <div className="text-center">
                <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-lg border border-pink-500/20 mb-8">
                  <div className="w-24 h-24 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.599h4.172L10.463 0l-7 13.828h4.172" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-4">Ready to Connect?</h2>
                  <p className="text-slate-300 mb-6">
                    Click below to securely connect your Strava account and start creating amazing posters from your
                    rides.
                  </p>
                  <Button
                    onClick={handleStravaConnect}
                    className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold px-8 py-4 text-lg w-full"
                  >
                    CONNECT TO STRAVA
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-center text-slate-300">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                    <span className="text-sm">No credit card required</span>
                  </div>
                  <div className="flex items-center justify-center text-slate-300">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                    <span className="text-sm">Revoke access anytime</span>
                  </div>
                  <div className="flex items-center justify-center text-slate-300">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                    <span className="text-sm">Read-only access to activities</span>
                  </div>
                </div>
              </div>
            </div>

            {/* What we access */}
            <div className="mt-16 bg-slate-800/30 backdrop-blur-sm p-8 rounded-lg border border-slate-700/50">
              <h3 className="text-xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400 mb-6">
                WHAT WE ACCESS FROM YOUR STRAVA ACCOUNT
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <MapPin className="h-6 w-6 text-pink-400" />
                  </div>
                  <h4 className="font-bold text-white mb-2">GPS Routes</h4>
                  <p className="text-slate-400 text-sm">Activity GPS data and route coordinates</p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <BarChart3 className="h-6 w-6 text-cyan-400" />
                  </div>
                  <h4 className="font-bold text-white mb-2">Activity Stats</h4>
                  <p className="text-slate-400 text-sm">Distance, elevation, time, and speed data</p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Users className="h-6 w-6 text-purple-400" />
                  </div>
                  <h4 className="font-bold text-white mb-2">Activity Names</h4>
                  <p className="text-slate-400 text-sm">Activity titles and descriptions you've set</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
