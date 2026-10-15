import "./ScrollIndicator.css";
import { LONG_TICK_INDICES, SCROLL_POSITIONS } from "./scrollPositions";

interface ScrollIndicatorProps {
  children: React.ReactNode;
  className?: string;
}

function ScrollIndicator({ children, className }: ScrollIndicatorProps) {
  return (
    <div className={className} aria-hidden="true">
      {children}
      <div className="scroll-indicator-track">
        {SCROLL_POSITIONS.map((position, index) => (
          <div
            key={position}
            className={`tick${LONG_TICK_INDICES.has(index) ? " long" : ""}`}
            style={{ "--pos": position } as React.CSSProperties}
          />
        ))}
      </div>
    </div>
  );
}

export default ScrollIndicator;
