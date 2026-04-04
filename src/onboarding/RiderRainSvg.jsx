export default function RiderRainSvg({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 280 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1e3a2f" />
          <stop offset="100%" stopColor="#0D2B1F" />
        </linearGradient>
      </defs>
      <rect width="280" height="200" rx="16" fill="url(#sky)" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <line
          key={i}
          x1={30 + i * 45}
          y1={20 + (i % 2) * 8}
          x2={20 + i * 45}
          y2={55 + (i % 2) * 8}
          stroke="#60a5fa"
          strokeOpacity="0.35"
          strokeWidth="2"
          strokeLinecap="round"
        />
      ))}
      <ellipse cx="200" cy="165" rx="70" ry="8" fill="#000" fillOpacity="0.2" />
      <path
        d="M85 145 L120 95 L155 100 L175 130 L165 155 L95 155 Z"
        fill="#22C55E"
        fillOpacity="0.9"
      />
      <circle cx="132" cy="78" r="18" fill="#fcd9a6" />
      <path d="M118 88 L108 105 L118 112 L128 95 Z" fill="#f4b942" />
      <rect x="108" y="108" width="50" height="38" rx="6" fill="#fff" />
      <path d="M95 125 L108 118 L108 146 L95 152 Z" fill="#e5e7eb" />
      <rect x="125" y="125" width="28" height="22" rx="3" fill="#F59E0B" fillOpacity="0.3" />
      <circle cx="200" cy="120" r="4" fill="#22C55E" />
      <circle cx="215" cy="128" r="3" fill="#22C55E" />
      <circle cx="208" cy="140" r="3.5" fill="#22C55E" />
    </svg>
  )
}
