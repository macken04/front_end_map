"use client"

interface SizeSelectorProps {
  selectedSize: string
  onSizeSelect: (size: string) => void
}

export default function SizeSelector({ selectedSize, onSizeSelect }: SizeSelectorProps) {
  const sizes = [
    { id: "a1", name: "A1", dimensions: "59.4 x 84.1", unit: "cm" },
    { id: "a2", name: "A2", dimensions: "42.0 x 59.4", unit: "cm" },
    { id: "a3", name: "A3", dimensions: "29.7 x 42.0", unit: "cm" },
    { id: "a4", name: "A4", dimensions: "21.0 x 29.7", unit: "cm" },
  ]

  return (
    <div className="grid grid-cols-2 gap-3">
      {sizes.map((size) => (
        <div
          key={size.id}
          className={`border-2 rounded-lg p-3 cursor-pointer transition-all ${
            selectedSize === size.id
              ? "border-pink-500 bg-slate-700/70"
              : "border-slate-600/50 hover:border-pink-400/50"
          }`}
          onClick={() => onSizeSelect(size.id)}
        >
          <div className="text-center">
            <div className="font-bold">{size.name}</div>
            <div className="text-xs text-slate-400">
              {size.dimensions} {size.unit}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
