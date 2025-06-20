"use client"

interface PianoSpiralProps {
  className?: string
  size?: "sm" | "md" | "lg"
  opacity?: number
}

export default function PianoSpiral({ className = "" opacity = 0.1 }: PianoSpiralProps) {
const size = "lg"
  const sizeClasses = {
    sm: "w-32 h-32",
    md: "w-48 h-48",
    lg: "w-[800px] h-[800px]",
  }

  return (
    <div className={`${sizeClasses[size]} ${className}`} style={{ opacity }}>
      <svg viewBox="0 0 200 200" className="w-full h-full animate-spin" style={{ animationDuration: "00s" }}>
        <defs>
          <pattern id="pianoKeys" x="0" y="0" width="20" height="8" patternUnits="userSpaceOnUse">
            {/* White keys */}
            <rect x="0" y="0" width="20" height="8" fill="white" />
            {/* Black keys */}
            <rect x="2" y="0" width="2" height="5" fill="#1a1a1a" />
            <rect x="6" y="0" width="2" height="5" fill="#1a1a1a" />
            <rect x="12" y="0" width="2" height="5" fill="#1a1a1a" />
            <rect x="16" y="0" width="2" height="5" fill="#1a1a1a" />
            <rect x="18" y="0" width="2" height="5" fill="#1a1a1a" />
          </pattern>

          <pattern id="pianoKeysGold" x="0" y="0" width="20" height="8" patternUnits="userSpaceOnUse">
            {/* Gold-tinted white keys */}
            <rect x="0" y="0" width="20" height="8" fill="#B98B3B" opacity="0.3" />
            {/* Dark keys */}
            <rect x="2" y="0" width="2" height="5" fill="#3F2161" opacity="0.8" />
            <rect x="6" y="0" width="2" height="5" fill="#3F2161" opacity="0.8" />
            <rect x="12" y="0" width="2" height="5" fill="#3F2161" opacity="0.8" />
            <rect x="16" y="0" width="2" height="5" fill="#3F2161" opacity="0.8" />
            <rect x="18" y="0" width="2" height="5" fill="#3F2161" opacity="0.8" />
          </pattern>
        </defs>

        {/* Spiral path */}
        <path
          d="M100,100 
             m0,-80 
             a80,80 0 0,1 80,80 
             a70,70 0 0,1 -70,70 
             a60,60 0 0,1 -60,-60 
             a50,50 0 0,1 50,-50 
             a40,40 0 0,1 40,40 
             a30,30 0 0,1 -30,30 
             a20,20 0 0,1 -20,-20 
             a10,10 0 0,1 10,-10"
          fill="none"
          stroke="url(#pianoKeysGold)"
          strokeWidth="8"
          strokeLinecap="round"
        />

        {/* Inner spiral for depth */}
        <path
          d="M100,100 
             m0,-60 
             a60,60 0 0,1 60,60 
             a50,50 0 0,1 -50,50 
             a40,40 0 0,1 -40,-40 
             a30,30 0 0,1 30,-30 
             a20,20 0 0,1 20,20 
             a10,10 0 0,1 -10,10"
          fill="none"
          stroke="url(#pianoKeys)"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.6"
        />

        {/* Musical notes scattered around */}
        <text x="50" y="50" fill="#B98B3B" fontSize="16" opacity="0.4">
          ♪
        </text>
        <text x="150" y="60" fill="#B98B3B" fontSize="12" opacity="0.3">
          ♫
        </text>
        <text x="40" y="150" fill="#B98B3B" fontSize="14" opacity="0.5">
          ♬
        </text>
        <text x="160" y="140" fill="#B98B3B" fontSize="10" opacity="0.3">
          ♩
        </text>
      </svg>
    </div>
  )
}
