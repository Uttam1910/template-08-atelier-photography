import type { ArtworkTone } from "@/content/types";

/**
 * Deterministic editorial plates.
 *
 * Every artwork is derived from its seed string, so a given piece of content
 * always renders the same composition — across reloads, servers and builds.
 * These are placeholders for real photography, drawn to look art-directed
 * rather than like empty boxes. They are pure SVG: no JavaScript, no network,
 * and they follow the theme through the --art-* custom properties.
 *
 * Compositions are laid out against the frame's own aspect ratio, so a plate is
 * composed for the space it occupies rather than cropped to fit it.
 */

type Composition = "horizon" | "bands" | "arch" | "aperture" | "fold" | "contact";

const COMPOSITIONS: Composition[] = [
  "horizon",
  "bands",
  "arch",
  "aperture",
  "fold",
  "contact",
];

/** Opacity ramps per tone: paper is airy, ink is heavy, accent leans warm. */
const RAMPS: Record<ArtworkTone, number[]> = {
  paper: [0.05, 0.1, 0.16, 0.24],
  ink: [0.1, 0.2, 0.34, 0.52],
  accent: [0.07, 0.14, 0.24, 0.36],
};

const INK = "var(--art-ink)";
const ACCENT = "var(--art-accent)";

function hashSeed(seed: string): number {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i += 1) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function createRandom(seed: number): () => number {
  let a = seed;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export interface ArtworkProps {
  seed: string;
  tone?: ArtworkTone;
  /** Width ÷ height of the frame this plate is drawn into. */
  aspect?: number;
  className?: string;
}

export function Artwork({ seed, tone = "paper", aspect = 1, className }: ArtworkProps) {
  const random = createRandom(hashSeed(seed));
  const ramp = RAMPS[tone] as number[];
  const composition = COMPOSITIONS[
    Math.floor(random() * COMPOSITIONS.length)
  ] as Composition;

  const w = 1000;
  const h = Math.round(1000 / aspect);

  const ctx: DrawContext = {
    w,
    h,
    min: Math.min(w, h),
    random,
    between: (min, max) => min + random() * (max - min),
    o: (index) => ramp[index] ?? 0.12,
    accentFirst: tone === "accent",
  };

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      preserveAspectRatio="xMidYMid slice"
      role="presentation"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <rect x="0" y="0" width={w} height={h} fill="var(--art-bg)" />
      {renderComposition(composition, ctx)}
      <rect
        x="0.5"
        y="0.5"
        width={w - 1}
        height={h - 1}
        fill="none"
        stroke={INK}
        strokeOpacity={0.14}
      />
    </svg>
  );
}

interface DrawContext {
  /** Design-space width; always 1000. */
  w: number;
  /** Design-space height, derived from the frame's aspect ratio. */
  h: number;
  /** The shorter of the two, for sizing shapes that must stay circular. */
  min: number;
  random: () => number;
  between: (min: number, max: number) => number;
  o: (index: number) => number;
  accentFirst: boolean;
}

function renderComposition(composition: Composition, ctx: DrawContext) {
  switch (composition) {
    case "horizon":
      return drawHorizon(ctx);
    case "bands":
      return drawBands(ctx);
    case "arch":
      return drawArch(ctx);
    case "aperture":
      return drawAperture(ctx);
    case "fold":
      return drawFold(ctx);
    case "contact":
      return drawContact(ctx);
  }
}

/** A low horizon with a single disc — the quietest of the six. */
function drawHorizon({ w, h, min, between, o, accentFirst }: DrawContext) {
  const horizon = Math.round(h * between(0.56, 0.69));
  const cx = Math.round(w * between(0.3, 0.7));
  const cy = Math.round(horizon * between(0.42, 0.62));
  const r = Math.round(min * between(0.14, 0.21));
  const gap = h * 0.046;

  return (
    <g>
      <rect x="0" y={horizon} width={w} height={h - horizon} fill={INK} opacity={o(1)} />
      <circle
        cx={cx}
        cy={cy}
        r={r}
        fill={accentFirst ? ACCENT : INK}
        opacity={accentFirst ? o(3) : o(2)}
      />
      {[0, 1, 2].map((index) => (
        <line
          key={index}
          x1="0"
          x2={w}
          y1={horizon - gap * (index + 1)}
          y2={horizon - gap * (index + 1)}
          stroke={INK}
          strokeOpacity={o(0)}
        />
      ))}
      <line x1="0" x2={w} y1={horizon} y2={horizon} stroke={INK} strokeOpacity={o(3)} />
    </g>
  );
}

/** Vertical bands, like a facade or a strip of film. */
function drawBands({ w, h, random, between, o, accentFirst }: DrawContext) {
  const count = 5 + Math.floor(random() * 3);
  const accentIndex = Math.floor(random() * count);
  const widths = Array.from({ length: count }, () => between(0.6, 1.6));
  const total = widths.reduce((sum, width) => sum + width, 0);
  const ruleY = Math.round(h * between(0.38, 0.62));

  let x = 0;
  return (
    <g>
      {widths.map((weight, index) => {
        const width = (weight / total) * w;
        const rect = (
          <rect
            key={index}
            x={x}
            y="0"
            width={width}
            height={h}
            fill={index === accentIndex && accentFirst ? ACCENT : INK}
            opacity={o(index % 4)}
          />
        );
        x += width;
        return rect;
      })}
      <line
        x1="0"
        x2={w}
        y1={ruleY}
        y2={ruleY}
        stroke={accentFirst ? ACCENT : INK}
        strokeOpacity={o(3)}
        strokeWidth="2"
      />
    </g>
  );
}

/** An arch, springing from a heavy base. Elliptical so it survives wide frames. */
function drawArch({ w, h, between, o, accentFirst }: DrawContext) {
  const width = Math.round(w * between(0.36, 0.52));
  const cx = Math.round(w * between(0.43, 0.57));
  const left = Math.round(cx - width / 2);
  const right = Math.round(cx + width / 2);
  const base = Math.round(h * 0.9);
  const springing = Math.round(h * between(0.5, 0.62));
  const rx = width / 2;
  const ry = Math.min(rx, springing - h * 0.06);
  const outerRx = rx + w * 0.054;
  const outerRy = Math.min(outerRx, springing - h * 0.09);

  const inner = `M ${left} ${base} L ${left} ${springing} A ${rx} ${ry} 0 0 1 ${right} ${springing} L ${right} ${base} Z`;
  const outer = `M ${left - w * 0.054} ${base} L ${left - w * 0.054} ${springing} A ${outerRx} ${outerRy} 0 0 1 ${right + w * 0.054} ${springing} L ${right + w * 0.054} ${base} Z`;

  return (
    <g>
      <rect x="0" y={base} width={w} height={h - base} fill={INK} opacity={o(2)} />
      <path d={outer} fill="none" stroke={INK} strokeOpacity={o(1)} />
      <path d={inner} fill={accentFirst ? ACCENT : INK} opacity={accentFirst ? o(2) : o(3)} />
      <line x1="0" x2={w} y1={springing} y2={springing} stroke={INK} strokeOpacity={o(0)} />
    </g>
  );
}

/** Concentric rings, offset from centre. */
function drawAperture({ w, h, min, between, o, accentFirst }: DrawContext) {
  const cx = Math.round(w * between(0.42, 0.58));
  const cy = Math.round(h * between(0.43, 0.57));
  const base = min * 0.92;
  const rings = [0.47, 0.37, 0.28, 0.2, 0.135];

  return (
    <g>
      {rings.map((factor, index) => (
        <circle
          key={factor}
          cx={cx}
          cy={cy}
          r={Math.round(base * factor)}
          fill="none"
          stroke={INK}
          strokeOpacity={o(index % 3)}
          strokeWidth={index === 1 ? 2 : 1}
        />
      ))}
      <circle
        cx={cx}
        cy={cy}
        r={Math.round(base * 0.072)}
        fill={accentFirst ? ACCENT : INK}
        opacity={accentFirst ? o(3) : o(2)}
      />
      <line x1={cx} x2={cx} y1="0" y2={h} stroke={INK} strokeOpacity={o(0)} />
      <line x1="0" x2={w} y1={cy} y2={cy} stroke={INK} strokeOpacity={o(0)} />
    </g>
  );
}

/** Two folded planes meeting on a diagonal. */
function drawFold({ w, h, between, o, accentFirst }: DrawContext) {
  const leftEdge = Math.round(h * between(0.28, 0.46));
  const rightEdge = Math.round(h * between(0.56, 0.76));
  const band = Math.round(h * 0.026);

  return (
    <g>
      <polygon points={`0,0 ${w},0 ${w},${rightEdge} 0,${leftEdge}`} fill={INK} opacity={o(1)} />
      <polygon
        points={`0,${leftEdge} ${w},${rightEdge} ${w},${h} 0,${h}`}
        fill={INK}
        opacity={o(2)}
      />
      <polygon
        points={`0,${leftEdge} ${w},${rightEdge} ${w},${rightEdge + band} 0,${leftEdge + band}`}
        fill={accentFirst ? ACCENT : INK}
        opacity={accentFirst ? o(3) : o(0)}
      />
    </g>
  );
}

/** A three-by-three contact sheet with one frame marked up. */
function drawContact({ w, h, min, random, o, accentFirst }: DrawContext) {
  const inset = min * 0.11;
  const gutter = min * 0.026;
  const tileW = (w - inset * 2 - gutter * 2) / 3;
  const tileH = (h - inset * 2 - gutter * 2) / 3;
  const marked = Math.floor(random() * 9);
  const markedColumn = marked % 3;
  const markedRow = Math.floor(marked / 3);
  const mark = min * 0.012;

  return (
    <g>
      {Array.from({ length: 9 }, (_, index) => {
        const column = index % 3;
        const row = Math.floor(index / 3);
        const isMarked = index === marked;
        return (
          <rect
            key={index}
            x={inset + column * (tileW + gutter)}
            y={inset + row * (tileH + gutter)}
            width={tileW}
            height={tileH}
            fill={isMarked && accentFirst ? ACCENT : INK}
            opacity={isMarked ? o(3) : o((column + row) % 3)}
          />
        );
      })}
      <rect
        x={inset + markedColumn * (tileW + gutter) - mark}
        y={inset + markedRow * (tileH + gutter) - mark}
        width={tileW + mark * 2}
        height={tileH + mark * 2}
        fill="none"
        stroke={accentFirst ? ACCENT : INK}
        strokeOpacity={0.6}
        strokeWidth="2"
      />
    </g>
  );
}
