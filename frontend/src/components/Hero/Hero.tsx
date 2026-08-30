import { Canvas } from "@react-three/fiber";
import BubbleText from "../ui/BubbleText";
import { Suspense } from "react";
import "./Hero.css";
import { useIsMobile } from "../../hooks/useIsMobile";

const DESKTOP_BUBBLE_MODEL = "/portfolio_bubble_text_ss1.glb";
const MOBILE_BUBBLE_MODEL = "/portfolio_bubble_text_mobile.glb";

interface HeroProps {
  className: string;
  setIsLoaded: React.Dispatch<React.SetStateAction<boolean>>;
}

function Hero({ className, setIsLoaded }: HeroProps) {
  const isMobile = useIsMobile();
  const scale = isMobile ? 1.0 : 0.65;

  return (
    <>
      <section id="hero" className={`section hero ${className}`}>
        <div className="hero-content">
          <h1>GAITANO'S</h1>
          <div className="bubble-container">
            <Canvas>
              <Suspense fallback={null}>
                <ambientLight intensity={0.1} />
                <directionalLight color="red" position={[0, 0, 5]} />
                <BubbleText
                  key={isMobile ? "mobile" : "desktop"}
                  modelPath={
                    isMobile ? MOBILE_BUBBLE_MODEL : DESKTOP_BUBBLE_MODEL
                  }
                  setIsLoaded={setIsLoaded}
                  rotationX={0}
                  rotationY={0}
                  rotationZ={0}
                  scale={scale}
                />
              </Suspense>
            </Canvas>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
