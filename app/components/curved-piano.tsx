"use client"

interface CurvedPianoProps {
  className?: string
  size?: "sm" | "md" | "lg"
  opacity?: number
  direction?: "left" | "right"
}

export default function CurvedPiano({
  className = "",
  size = "md",
  opacity = 0.15,
  direction = "right",
}: CurvedPianoProps) {
  const sizeClasses = {
    sm: "w-64 h-64",
    md: "w-96 h-96",
    lg: "w-[600px] h-[600px]",
  }

  const transform = direction === "left" ? "scale(-1, 1)" : ""

  return (
    <div className={`${sizeClasses[size]} ${className}`} style={{ opacity }}>
      <svg viewBox="0 0 400 400" className="w-full h-full" style={{ transform }}>
        <defs>
          {/* Gradient for depth */}
          <linearGradient id="whiteKeyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#f8f8f8" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#e0e0e0" stopOpacity="0.7" />
          </linearGradient>

          <linearGradient id="blackKeyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2a2a2a" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#1a1a1a" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0a0a0a" stopOpacity="0.7" />
          </linearGradient>

          <linearGradient id="goldKeyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#B98B3B" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#B8860B" stopOpacity="0.2" />
          </linearGradient>

          <linearGradient id="purpleKeyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3F2161" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#4A2C6A" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#2D1B3D" stopOpacity="0.4" />
          </linearGradient>
        </defs>

        {/* Curved Piano Path - Main Flow */}
        <path
          d="M50,350 
             Q80,320 120,300 
             Q160,280 200,270
             Q240,260 280,265
             Q320,270 350,290
             Q370,310 380,340
             Q385,370 375,390
             Q360,400 340,395
             Q300,385 260,370
             Q220,355 180,335
             Q140,315 100,290
             Q70,270 50,240
             Q40,210 55,180
             Q75,160 105,155
             Q140,152 175,160
             Q210,168 240,185
             Q270,202 290,225
             Q305,245 310,270"
          fill="none"
          stroke="url(#goldKeyGradient)"
          strokeWidth="25"
          strokeLinecap="round"
        />

        {/* White Keys Pattern */}
        <g>
          {/* First curve section */}
          {Array.from({ length: 12 }, (_, i) => {
            const angle = i * 15 - 90
            const radius = 120 + i * 8
            const x = 200 + Math.cos((angle * Math.PI) / 180) * radius
            const y = 200 + Math.sin((angle * Math.PI) / 180) * radius

            return (
              <rect
                key={`white-${i}`}
                x={x - 8}
                y={y - 3}
                width="16"
                height="6"
                fill="url(#whiteKeyGradient)"
                rx="1"
                transform={`rotate(${angle + 90} ${x} ${y})`}
              />
            )
          })}

          {/* Second curve section */}
          {Array.from({ length: 10 }, (_, i) => {
            const angle = i * 18 + 45
            const radius = 80 - i * 3
            const x = 200 + Math.cos((angle * Math.PI) / 180) * radius
            const y = 200 + Math.sin((angle * Math.PI) / 180) * radius

            return (
              <rect
                key={`white2-${i}`}
                x={x - 8}
                y={y - 3}
                width="16"
                height="6"
                fill="url(#goldKeyGradient)"
                rx="1"
                transform={`rotate(${angle + 90} ${x} ${y})`}
              />
            )
          })}
        </g>

        {/* Black Keys Pattern */}
        <g>
          {/* First curve black keys */}
          {Array.from({ length: 8 }, (_, i) => {
            if (i === 2 || i === 6) return null // Skip positions where black keys don't exist

            const angle = i * 15 - 85
            const radius = 125 + i * 8
            const x = 200 + Math.cos((angle * Math.PI) / 180) * radius
            const y = 200 + Math.sin((angle * Math.PI) / 180) * radius

            return (
              <rect
                key={`black-${i}`}
                x={x - 5}
                y={y - 2}
                width="10"
                height="4"
                fill="url(#purpleKeyGradient)"
                rx="0.5"
                transform={`rotate(${angle + 90} ${x} ${y})`}
              />
            )
          })}

          {/* Second curve black keys */}
          {Array.from({ length: 7 }, (_, i) => {
            if (i === 2 || i === 5) return null

            const angle = i * 18 + 50
            const radius = 82 - i * 3
            const x = 200 + Math.cos((angle * Math.PI) / 180) * radius
            const y = 200 + Math.sin((angle * Math.PI) / 180) * radius

            return (
              <rect
                key={`black2-${i}`}
                x={x - 5}
                y={y - 2}
                width="10"
                height="4"
                fill="url(#blackKeyGradient)"
                rx="0.5"
                transform={`rotate(${angle + 90} ${x} ${y})`}
              />
            )
          })}
        </g>

        {/* Musical notes floating around */}
        <text x="100" y="100" fill="#B98B3B" fontSize="20" opacity="0.3">
          ♪
        </text>
        <text x="320" y="120" fill="#B98B3B" fontSize="16" opacity="0.4">
          ♫
        </text>
        <text x="80" y="320" fill="#B98B3B" fontSize="18" opacity="0.3">
          ♬
        </text>
        <text x="350" y="300" fill="#B98B3B" fontSize="14" opacity="0.5">
          ♩
        </text>
        <text x="180" y="80" fill="#3F2161" fontSize="12" opacity="0.4">
          ♭
        </text>
        <text x="250" y="350" fill="#3F2161" fontSize="15" opacity="0.3">
          ♯
        </text>
      </svg>
    </div>
  )
}
