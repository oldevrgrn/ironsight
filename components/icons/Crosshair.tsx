type Props = {
  className?: string;
};

/**
 * The crosshair-through-a-windowpane mark from the Iron Sight logo,
 * redrawn as inline SVG so it scales cleanly and inherits currentColor.
 */
export function CrosshairMark({ className }: Props) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* window frame, 4 panes */}
      <rect x="12" y="10" width="24" height="28" rx="1.5" stroke="currentColor" strokeWidth="2.5" />
      <line x1="24" y1="10" x2="24" y2="38" stroke="currentColor" strokeWidth="2.5" />
      <line x1="12" y1="24" x2="36" y2="24" stroke="currentColor" strokeWidth="2.5" />
      {/* crosshair ticks */}
      <line x1="24" y1="0" x2="24" y2="7" stroke="currentColor" strokeWidth="2.5" />
      <line x1="24" y1="41" x2="24" y2="48" stroke="currentColor" strokeWidth="2.5" />
      <line x1="0" y1="24" x2="9" y2="24" stroke="currentColor" strokeWidth="2.5" />
      <line x1="39" y1="24" x2="48" y2="24" stroke="currentColor" strokeWidth="2.5" />
    </svg>
  );
}
