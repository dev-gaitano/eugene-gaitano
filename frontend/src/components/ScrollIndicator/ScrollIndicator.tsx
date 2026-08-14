import "./ScrollIndicator.css";

function ScrollIndicator() {
  return (
    <>
      <div className="scroll-indicator" aria-hidden="true">
        <div className="tick long" style={{ top: "0%" }}></div>
        <div className="tick" style={{ top: "10%" }}></div>
        <div className="tick" style={{ top: "20%" }}></div>
        <div className="tick" style={{ top: "30%" }}></div>
        <div className="tick" style={{ top: "40%" }}></div>
        <div className="tick long" style={{ top: "50%" }}></div>
        <div className="tick" style={{ top: "60%" }}></div>
        <div className="tick" style={{ top: "70%" }}></div>
        <div className="tick" style={{ top: "80%" }}></div>
        <div className="tick" style={{ top: "90%" }}></div>
        <div className="tick long" style={{ top: "100%" }}></div>
      </div>
    </>
  );
}

export default ScrollIndicator;
