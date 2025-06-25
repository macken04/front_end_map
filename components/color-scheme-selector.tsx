"use client"

interface ColorSchemeProps {
  selectedColor: string
  onColorSelect: (color: string) => void
}

export default function ColorSchemeSelector({ selectedColor, onColorSelect }: ColorSchemeProps) {
  const colors = [
    {
      id: "synthwave",
      name: "Synthwave",
      color: "bg-gradient-to-r from-pink-500 to-cyan-500",
      border: "border-pink-600",
    },
    { id: "neon", name: "Neon", color: "bg-cyan-400", border: "border-cyan-500" },
    { id: "sunset", name: "Sunset", color: "bg-gradient-to-r from-pink-500 to-purple-500", border: "border-pink-600" },
    { id: "retro", name: "Retro", color: "bg-amber-500", border: "border-amber-600" },
    { id: "midnight", name: "Midnight", color: "bg-indigo-800", border: "border-indigo-900" },
    { id: "pastel", name: "Pastel", color: "bg-gradient-to-r from-pink-300 to-cyan-300", border: "border-pink-400" },
    {
      id: "monochrome",
      name: "Mono",
      color: "bg-gradient-to-r from-slate-300 to-slate-600",
      border: "border-slate-400",
    },
    {
      id: "vaporwave",
      name: "Vapor",
      color: "bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400",
      border: "border-purple-500",
    },
  ]

  return (
    <div className="grid grid-cols-4 gap-3">
      {colors.map((color) => (
        <div key={color.id} className="flex flex-col items-center">
          <button
            className={`w-14 h-14 rounded-lg ${color.color} border-2 transition-all ${
              selectedColor === color.id ? "ring-2 ring-pink-400 ring-offset-2 ring-offset-slate-900" : color.border
            }`}
            onClick={() => onColorSelect(color.id)}
            aria-label={`Select ${color.name} color scheme`}
          />
          <span className="text-xs mt-1 text-center font-medium">{color.name}</span>
        </div>
      ))}
    </div>
  )
}
