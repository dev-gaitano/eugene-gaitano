import "./ScrollIndicator.css";

function ScrollIndicator() {
  return (
    <>
      <div className="scroll-indicator" aria-hidden="true">
        <svg
          className="scroll-marker top"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="var(--black)"
        >
          <path d="M400-280v-400l200 200-200 200Z" />
        </svg>
        <div>
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
      </div>
    </>
  );
}

export default ScrollIndicator;
