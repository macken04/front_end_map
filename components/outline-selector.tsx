"use client"

interface OutlineSelectorProps {
  selectedOutline: string
  onOutlineSelect: (outline: string) => void
}

export default function OutlineSelector({ selectedOutline, onOutlineSelect }: OutlineSelectorProps) {
  const outlines = [
    { id: "classic", name: "Classic" },
    { id: "circle", name: "Circle" },
    { id: "square", name: "Square" },
    { id: "none", name: "None" },
  ]

  return (
    <div className="grid grid-cols-4 gap-3">
      {outlines.map((outline) => (
        <div
          key={outline.id}
          className={`border-2 rounded-lg p-3 cursor-pointer transition-all flex flex-col items-center ${
            selectedOutline === outline.id
              ? "border-pink-500 bg-slate-700/70"
              : "border-slate-600/50 hover:border-pink-400/50"
          }`}
          onClick={() => onOutlineSelect(outline.id)}
        >
          <div
            className={`w-8 h-8 border-2 border-slate-400 ${
              outline.id === "circle"
                ? "rounded-full"
                : outline.id === "square"
                  ? "rounded-none"
                  : outline.id === "none"
                    ? "border-dashed"
                    : ""
            }`}
          ></div>
          <span className="text-xs mt-1 font-medium">{outline.name}</span>
        </div>
      ))}
    </div>
  )
}
