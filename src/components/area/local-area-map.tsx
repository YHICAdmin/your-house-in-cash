import type { NearbyCity } from "@/data/areas";
import styles from "./areas-hero.module.css";

// A schematic regional illustration, not a street map or a service boundary.
// Lake Erie lies northwest; Euclid is northeast of Cleveland, Cleveland Heights east,
// and Parma south. Marker placement is intentionally simplified for legibility.
export function LocalAreaMap({ cities }: { cities: readonly NearbyCity[] }) {
  return (
    <div className={styles.illustration} aria-hidden="true">
      <svg viewBox="0 0 600 500" className={styles.map} focusable="false">
        <defs>
          <pattern id="local-map-dots" width="8" height="8" patternUnits="userSpaceOnUse">
            <circle cx="4" cy="4" r="1.35" fill="var(--color-brand)" />
          </pattern>
          <linearGradient id="local-map-fade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="white" stopOpacity=".2" />
            <stop offset=".2" stopColor="white" stopOpacity=".8" />
            <stop offset=".55" stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="local-map-edge">
            <stop offset=".5" stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="local-map-lake">
            <stop stopColor="var(--color-brand-light)" stopOpacity=".7" />
            <stop offset="1" stopColor="var(--color-brand-light)" stopOpacity="0" />
          </radialGradient>
          <mask id="local-map-soft-edge">
            <ellipse cx="310" cy="270" rx="310" ry="260" fill="url(#local-map-edge)" />
          </mask>
          <mask id="local-map-bottom-fade">
            <rect width="600" height="500" fill="url(#local-map-fade)" />
          </mask>
        </defs>
        <ellipse cx="215" cy="150" rx="250" ry="140" fill="url(#local-map-lake)" />
        <g mask="url(#local-map-bottom-fade)">
          <g mask="url(#local-map-soft-edge)">
            <path d="M-30 268C30 251 70 241 112 231S178 221 208 224 233 210 251 211 274 202 291 197 315 174 338 157 379 130 405 116 451 82 483 70 545 37 630 0V530H-30Z" fill="url(#local-map-dots)" />
            <path d="M-30 268C30 251 70 241 112 231S178 221 208 224 233 210 251 211 274 202 291 197 315 174 338 157 379 130 405 116 451 82 483 70 545 37 630 0" fill="none" stroke="var(--color-brand)" strokeOpacity=".3" strokeWidth="1" />
            <path d="M253 231C248 250 269 264 255 286S260 312 254 338 262 368 248 405" fill="none" stroke="var(--color-background)" strokeWidth="5" />
          </g>
          <g fill="none" stroke="var(--color-brand)" strokeWidth="1" strokeOpacity=".35">
            <path d="M252 240Q358 205 456 285" />
            <path d="M252 240Q336 45 468 110" />
            <path d="M252 240Q349 292 264 390" />
          </g>
        </g>
      </svg>
      {cities.map((city, index) => (
        <div key={city.slug} className={`${styles.pin} ${styles[`pin${index}`]}`}>
          <span className={`${styles.pinLabel} text-body`}>{city.name}</span>
          <span className={styles.mapMarker} />
        </div>
      ))}
    </div>
  );
}
