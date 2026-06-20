/**
 * Inline SVG icons — 1:1 replacements for the lucide-react icons used on /in.
 * Same 24x24 viewBox, currentColor stroke — drop-in for <Icon size={..} strokeWidth={..} />.
 * Keeps the bundle small (no lucide-react import on this route).
 */
import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number; strokeWidth?: number };

function svg(path: React.ReactNode) {
  return function IconCmp({ size = 24, strokeWidth = 2, ...rest }: IconProps) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...rest}
      >
        {path}
      </svg>
    );
  };
}

export const Shield = svg(<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />);
export const Star = svg(<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />);
export const Wind = svg(<>
  <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
  <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
  <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
</>);
export const Scissors = svg(<>
  <circle cx="6" cy="6" r="3" />
  <path d="M8.12 8.12 12 12" />
  <path d="M20 4 8.12 15.88" />
  <circle cx="6" cy="18" r="3" />
  <path d="M14.8 14.8 20 20" />
</>);
export const Dumbbell = svg(<>
  <path d="M14.4 14.4 9.6 9.6" />
  <path d="M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z" />
  <path d="m21.5 21.5-1.4-1.4" />
  <path d="M3.9 3.9 2.5 2.5" />
  <path d="M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z" />
</>);
export const HandHeart = svg(<>
  <path d="M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16" />
  <path d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
  <path d="m2 15 6 6" />
  <path d="M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z" />
</>);
export const Baby = svg(<>
  <path d="M9 12h.01" />
  <path d="M15 12h.01" />
  <path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" />
  <path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" />
</>);
export const Clock = svg(<>
  <circle cx="12" cy="12" r="10" />
  <polyline points="12 6 12 12 16 14" />
</>);
export const Repeat = svg(<>
  <path d="m17 2 4 4-4 4" />
  <path d="M3 11v-1a4 4 0 0 1 4-4h14" />
  <path d="m7 22-4-4 4-4" />
  <path d="M21 13v1a4 4 0 0 1-4 4H3" />
</>);
export const Smartphone = svg(<>
  <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
  <path d="M12 18h.01" />
</>);
export const CheckCircle2 = svg(<>
  <circle cx="12" cy="12" r="10" />
  <path d="m9 12 2 2 4-4" />
</>);
export const Mail = svg(<>
  <rect width="20" height="16" x="2" y="4" rx="2" />
  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
</>);
export const Lock = svg(<>
  <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
</>);
export const CreditCard = svg(<>
  <rect width="20" height="14" x="2" y="5" rx="2" />
  <line x1="2" x2="22" y1="10" y2="10" />
</>);
export const UserCircle = svg(<>
  <circle cx="12" cy="12" r="10" />
  <circle cx="12" cy="10" r="3" />
  <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
</>);
export const Play = svg(<polygon points="6 3 20 12 6 21 6 3" />);
export const Calendar = svg(<>
  <path d="M8 2v4" />
  <path d="M16 2v4" />
  <rect width="18" height="18" x="3" y="4" rx="2" />
  <path d="M3 10h18" />
</>);
export const Menu = svg(<>
  <line x1="4" x2="20" y1="12" y2="12" />
  <line x1="4" x2="20" y1="6" y2="6" />
  <line x1="4" x2="20" y1="18" y2="18" />
</>);
export const X = svg(<>
  <path d="M18 6 6 18" />
  <path d="m6 6 12 12" />
</>);
export const ChevronDown = svg(<polyline points="6 9 12 15 18 9" />);
export const ChevronLeft = svg(<polyline points="15 18 9 12 15 6" />);
export const ChevronRight = svg(<polyline points="9 18 15 12 9 6" />);
export const ArrowRight = svg(<>
  <path d="M5 12h14" />
  <path d="m12 5 7 7-7 7" />
</>);
export const Gift = svg(<>
  <rect x="3" y="8" width="18" height="4" rx="1" />
  <path d="M12 8v13" />
  <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
  <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
</>);
export const MessageCircle = svg(<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />);
