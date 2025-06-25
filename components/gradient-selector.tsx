"use client"

interface GradientSelectorProps {
  selectedGradient: string
  onGradientSelect: (gradient: string) => void
}

export default function GradientSelector({ selectedGradient, onGradientSelect }: GradientSelectorProps) {
  const gradients = [
    { id: "sunset", name: "Sunset", gradient: "bg-gradient-to-b from-transparent via-pink-500/30 to-purple-600/50" },
    { id: "radial", name: "Radial", gradient: "bg-gradient-to-br from-transparent to-purple-500/50" },
    { id: "cyber", name: "Cyber", gradient: "bg-gradient-to-b from-transparent to-cyan-500/40" },
    { id: "none", name: "None", gradient: "bg-slate-700" },
  ]

  return (
    <div className="grid grid-cols-4 gap-3">
      {gradients.map((gradient) => (
        <div
          key={gradient.id}
          className={`border-2 rounded-lg p-3 cursor-pointer transition-all flex flex-col items-center ${
            selectedGradient === gradient.id
              ? "border-pink-500 bg-slate-700/70"
              : "border-slate-600/50 hover:border-pink-400/50"
          }`}
          onClick={() => onGradientSelect(gradient.id)}
        >
          <div className={`w-8 h-8 rounded ${gradient.gradient}`}></div>
          <span className="text-xs mt-1 font-medium">{gradient.name}</span>
        </div>
      ))}
    </div>
  )
}
