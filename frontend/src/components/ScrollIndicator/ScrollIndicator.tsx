import "./ScrollIndicator.css";

interface ScrollIndicatorProps {
  children: React.ReactNode;
  className?: string;
}

function ScrollIndicator({ children, className }: ScrollIndicatorProps) {
  return (
    <>
      <div className={className} aria-hidden="true">
        {children}
        <div>
          <div className="tick long" style={{ top: "0%" }}></div>
          <div className="tick" style={{ top: "5%" }}></div>
          <div className="tick" style={{ top: "10%" }}></div>
          <div className="tick" style={{ top: "15%" }}></div>
          <div className="tick" style={{ top: "20%" }}></div>
          <div className="tick long" style={{ top: "25%" }}></div>
          <div className="tick" style={{ top: "30%" }}></div>
          <div className="tick" style={{ top: "35%" }}></div>
          <div className="tick" style={{ top: "40%" }}></div>
          <div className="tick" style={{ top: "45%" }}></div>
          <div className="tick long" style={{ top: "50%" }}></div>
          <div className="tick" style={{ top: "55%" }}></div>
          <div className="tick" style={{ top: "60%" }}></div>
          <div className="tick" style={{ top: "65%" }}></div>
          <div className="tick" style={{ top: "70%" }}></div>
          <div className="tick long" style={{ top: "75%" }}></div>
          <div className="tick" style={{ top: "80%" }}></div>
          <div className="tick" style={{ top: "85%" }}></div>
          <div className="tick" style={{ top: "90%" }}></div>
          <div className="tick" style={{ top: "95%" }}></div>
          <div className="tick long" style={{ top: "100%" }}></div>
        </div>
      </div>
    </>
  );
}

export default ScrollIndicator;
