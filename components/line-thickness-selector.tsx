"use client"

interface LineThicknessSelectorProps {
  selectedThickness: string
  onThicknessSelect: (thickness: string) => void
}

export default function LineThicknessSelector({ selectedThickness, onThicknessSelect }: LineThicknessSelectorProps) {
  const thicknesses = [
    { id: "thin", height: "h-0.5" },
    { id: "medium", height: "h-1" },
    { id: "thick", height: "h-1.5" },
    { id: "extra-thick", height: "h-2" },
    { id: "ultra-thick", height: "h-3" },
  ]

  return (
    <div className="grid grid-cols-5 gap-2">
      {thicknesses.map((thickness) => (
        <div
          key={thickness.id}
          className={`border-2 rounded-lg p-2 cursor-pointer transition-all ${
            selectedThickness === thickness.id
              ? "border-pink-500 bg-slate-700/70"
              : "border-slate-600/50 hover:border-pink-400/50"
          }`}
          onClick={() => onThicknessSelect(thickness.id)}
        >
          <div className="flex items-center justify-center h-8">
            <div className={`w-full ${thickness.height} bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full`}></div>
          </div>
        </div>
      ))}
    </div>
  )
}
