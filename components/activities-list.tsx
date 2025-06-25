"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Search, Filter, Calendar, MapPin, Bike, ChevronDown } from "lucide-react"
import Link from "next/link"
import NavBar from "@/components/nav-bar"

// Mock data for Strava activities
const mockActivities = [
  {
    id: 1,
    name: "Morning Mountain Climb",
    type: "Ride",
    date: "2024-01-15",
    distance: "45.2 km",
    elevation: "1,234 m",
    time: "2h 15m",
    avgSpeed: "20.1 km/h",
    location: "Boulder, Colorado",
    hasGPS: true,
  },
  {
    id: 2,
    name: "City Loop Adventure",
    type: "Ride",
    date: "2024-01-12",
    distance: "32.8 km",
    elevation: "456 m",
    time: "1h 45m",
    avgSpeed: "18.7 km/h",
    location: "San Francisco, CA",
    hasGPS: true,
  },
  {
    id: 3,
    name: "Coastal Highway Cruise",
    type: "Ride",
    date: "2024-01-10",
    distance: "67.5 km",
    elevation: "789 m",
    time: "3h 12m",
    avgSpeed: "21.1 km/h",
    location: "Big Sur, California",
    hasGPS: true,
  },
  {
    id: 4,
    name: "Forest Trail Exploration",
    type: "Ride",
    date: "2024-01-08",
    distance: "28.3 km",
    elevation: "892 m",
    time: "2h 05m",
    avgSpeed: "13.6 km/h",
    location: "Whistler, BC",
    hasGPS: true,
  },
  {
    id: 5,
    name: "Weekend Century Ride",
    type: "Ride",
    date: "2024-01-06",
    distance: "102.4 km",
    elevation: "1,567 m",
    time: "4h 32m",
    avgSpeed: "22.5 km/h",
    location: "Napa Valley, CA",
    hasGPS: true,
  },
  {
    id: 6,
    name: "Quick Commute",
    type: "Ride",
    date: "2024-01-05",
    distance: "15.7 km",
    elevation: "123 m",
    time: "42m",
    avgSpeed: "22.4 km/h",
    location: "Portland, Oregon",
    hasGPS: true,
  },
]

export default function ActivitiesList() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedFilter, setSelectedFilter] = useState("all")

  const filteredActivities = mockActivities.filter((activity) =>
    activity.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-slate-900">
      <NavBar />

      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyMzksIDY4LCAyMDAsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>

        <div className="relative container mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.599h4.172L10.463 0l-7 13.828h4.172" />
                </svg>
              </div>
              <div className="text-left">
                <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400">
                  YOUR STRAVA ACTIVITIES
                </h1>
                <p className="text-slate-400">Connected as John Doe</p>
              </div>
            </div>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Select any activity below to create a stunning retro poster. Activities with GPS data work best for
              detailed route visualization.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                <Input
                  placeholder="Search activities..."
                  className="pl-10 bg-slate-800/50 border-slate-600/50 text-slate-100 placeholder:text-slate-400 focus:border-pink-500/50"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  className="bg-slate-800/50 border-slate-600/50 text-slate-300 hover:bg-slate-700 hover:text-white"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                  <ChevronDown className="h-4 w-4 ml-2" />
                </Button>
                <Button
                  variant="outline"
                  className="bg-slate-800/50 border-slate-600/50 text-slate-300 hover:bg-slate-700 hover:text-white"
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  Date Range
                </Button>
              </div>
            </div>

            {/* Activity Stats Summary */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-slate-800/50 backdrop-blur-sm p-4 rounded-lg border border-pink-500/20 text-center">
                <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                  {mockActivities.length}
                </div>
                <div className="text-slate-400 text-sm">Total Activities</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm p-4 rounded-lg border border-cyan-500/20 text-center">
                <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  291.9
                </div>
                <div className="text-slate-400 text-sm">Total Distance (km)</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm p-4 rounded-lg border border-purple-500/20 text-center">
                <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  5,061
                </div>
                <div className="text-slate-400 text-sm">Total Elevation (m)</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm p-4 rounded-lg border border-green-500/20 text-center">
                <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
                  14h 31m
                </div>
                <div className="text-slate-400 text-sm">Total Time</div>
              </div>
            </div>
          </div>

          {/* Activities Grid */}
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredActivities.map((activity) => (
                <div
                  key={activity.id}
                  className="group bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700/50 hover:border-pink-500/50 transition-all duration-300 overflow-hidden"
                >
                  {/* Activity Preview */}
                  <div className="relative h-48 bg-slate-700 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-600 to-slate-800"></div>
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAyMCAwIEwgMCAyMCBNIDEwIDAgTCAwIDEwIE0gMjAgMTAgTCAxMCAyMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDIzOSwgNjgsIDIwMCwgMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>

                    {/* Mock route visualization */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 200">
                      <path
                        d={`M${20 + activity.id * 10},180 Q${60 + activity.id * 15},${140 - activity.id * 10} ${120 + activity.id * 10},${150 - activity.id * 5} T${260 - activity.id * 5},${80 + activity.id * 15}`}
                        fill="none"
                        stroke={activity.id % 3 === 0 ? "#ec4899" : activity.id % 3 === 1 ? "#22d3ee" : "#a855f7"}
                        strokeWidth="3"
                        strokeLinecap="round"
                        opacity="0.8"
                      />
                      {/* Glow effect */}
                      <path
                        d={`M${20 + activity.id * 10},180 Q${60 + activity.id * 15},${140 - activity.id * 10} ${120 + activity.id * 10},${150 - activity.id * 5} T${260 - activity.id * 5},${80 + activity.id * 15}`}
                        fill="none"
                        stroke={activity.id % 3 === 0 ? "#ec4899" : activity.id % 3 === 1 ? "#22d3ee" : "#a855f7"}
                        strokeWidth="6"
                        strokeLinecap="round"
                        opacity="0.3"
                        filter="blur(4px)"
                      />
                    </svg>

                    {/* Activity type badge */}
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-slate-900/80 text-white border-slate-700">
                        <Bike className="h-3 w-3 mr-1" />
                        {activity.type}
                      </Badge>
                    </div>

                    {/* GPS indicator */}
                    {activity.hasGPS && (
                      <div className="absolute top-3 right-3">
                        <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center border border-green-500/50">
                          <MapPin className="h-4 w-4 text-green-400" />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Activity Details */}
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-lg font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-cyan-400 transition-all">
                        {activity.name}
                      </h3>
                      <div className="flex items-center text-slate-400 text-sm">
                        <Calendar className="h-3 w-3 mr-1" />
                        {new Date(activity.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                        <span className="mx-2">•</span>
                        <MapPin className="h-3 w-3 mr-1" />
                        {activity.location}
                      </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="text-center p-2 bg-slate-700/30 rounded">
                        <div className="text-sm font-bold text-white">{activity.distance}</div>
                        <div className="text-xs text-slate-400">Distance</div>
                      </div>
                      <div className="text-center p-2 bg-slate-700/30 rounded">
                        <div className="text-sm font-bold text-white">{activity.elevation}</div>
                        <div className="text-xs text-slate-400">Elevation</div>
                      </div>
                      <div className="text-center p-2 bg-slate-700/30 rounded">
                        <div className="text-sm font-bold text-white">{activity.time}</div>
                        <div className="text-xs text-slate-400">Time</div>
                      </div>
                      <div className="text-center p-2 bg-slate-700/30 rounded">
                        <div className="text-sm font-bold text-white">{activity.avgSpeed}</div>
                        <div className="text-xs text-slate-400">Avg Speed</div>
                      </div>
                    </div>

                    {/* Create Poster Button */}
                    <Link href="/design">
                      <Button className="w-full bg-gradient-to-r from-pink-500 to-cyan-500 hover:from-pink-600 hover:to-cyan-600 text-white font-bold group-hover:shadow-lg group-hover:shadow-pink-500/25 transition-all">
                        CREATE POSTER
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button
                variant="outline"
                className="bg-slate-800/50 border-slate-600/50 text-slate-300 hover:bg-slate-700 hover:text-white px-8 py-3"
              >
                LOAD MORE ACTIVITIES
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
