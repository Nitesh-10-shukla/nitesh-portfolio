/**
 * Abstract diagram of the stack Nitesh works across.
 *
 * It replaces the personal photograph that used to sit here: it's on-brand,
 * weighs nothing (inline SVG, no network request), and says something about the
 * work instead of the person's face.
 */

const LAYERS = [
  {
    y: 16,
    label: "Client",
    detail: "React · Next.js · TypeScript",
    stroke: "#16f2b3",
    fill: "rgba(22,242,179,0.08)",
  },
  {
    y: 136,
    label: "API Layer",
    detail: "Node.js · NestJS · GraphQL · REST",
    stroke: "#8b5cf6",
    fill: "rgba(139,92,246,0.1)",
  },
  {
    y: 256,
    label: "Data",
    detail: "PostgreSQL · MongoDB · Redis",
    stroke: "#38bdf8",
    fill: "rgba(56,189,248,0.08)",
  },
];

export default function ArchitectureDiagram() {
  return (
    <svg
      viewBox="0 0 440 348"
      role="img"
      aria-label="Diagram of the application stack: a React and Next.js client calls a Node.js, NestJS, GraphQL and REST API layer, which reads from PostgreSQL, MongoDB and Redis, and connects to an OpenAI and RAG service."
      className="h-auto w-full max-w-[28rem]"
    >
      <defs>
        <linearGradient id="arch-sheen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="rgba(255,255,255,0.08)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
        <pattern id="arch-grid" width="22" height="22" patternUnits="userSpaceOnUse">
          <path d="M22 0H0V22" fill="none" stroke="rgba(255,255,255,0.045)" strokeWidth="1" />
        </pattern>
      </defs>

      <rect width="440" height="348" fill="url(#arch-grid)" rx="16" />

      {/* Vertical flow between layers */}
      <g stroke="#3b4573" strokeWidth="1.5" strokeLinecap="round">
        <path d="M160 88 V136" className="dash-flow" />
        <path d="M160 208 V256" className="dash-flow" />
      </g>

      {/* Branch to the AI service */}
      <path
        d="M300 172 H334"
        stroke="#f472b6"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="dash-flow"
      />

      {LAYERS.map((layer) => (
        <g key={layer.label}>
          <rect
            x="20"
            y={layer.y}
            width="280"
            height="72"
            rx="14"
            fill={layer.fill}
            stroke={layer.stroke}
            strokeOpacity="0.45"
            strokeWidth="1.25"
          />
          <rect x="20" y={layer.y} width="280" height="72" rx="14" fill="url(#arch-sheen)" />
          <circle cx="44" cy={layer.y + 26} r="4" fill={layer.stroke} />
          <text
            x="58"
            y={layer.y + 30}
            fill="#e9eefb"
            fontSize="15"
            fontWeight="600"
            fontFamily="var(--font-geist-sans), sans-serif"
          >
            {layer.label}
          </text>
          <text
            x="58"
            y={layer.y + 52}
            fill="#9aa5c0"
            fontSize="11.5"
            fontFamily="var(--font-geist-mono), monospace"
          >
            {layer.detail}
          </text>
        </g>
      ))}

      {/* AI service */}
      <g>
        <rect
          x="334"
          y="146"
          width="90"
          height="52"
          rx="12"
          fill="rgba(244,114,182,0.1)"
          stroke="#f472b6"
          strokeOpacity="0.5"
          strokeWidth="1.25"
        />
        <text
          x="379"
          y="170"
          textAnchor="middle"
          fill="#e9eefb"
          fontSize="13"
          fontWeight="600"
          fontFamily="var(--font-geist-sans), sans-serif"
        >
          AI
        </text>
        <text
          x="379"
          y="186"
          textAnchor="middle"
          fill="#9aa5c0"
          fontSize="10"
          fontFamily="var(--font-geist-mono), monospace"
        >
          OpenAI · RAG
        </text>
      </g>
    </svg>
  );
}
