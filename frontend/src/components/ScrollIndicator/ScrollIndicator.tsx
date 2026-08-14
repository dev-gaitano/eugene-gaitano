import "./ScrollIndicator.css";

function ScrollIndicator() {
  return (
    <>
      <div className="scroll-indicator" aria-hidden="true">
        <span className="scroll-mark"></span>
      </div>
    </>
  );
}

export default ScrollIndicator;
