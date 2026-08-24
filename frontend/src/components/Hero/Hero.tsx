import { Canvas } from "@react-three/fiber";
import BubbleText from "../ui/BubbleText";
import { Suspense } from "react";
import "./Hero.css";

interface HeroProps {
  className: string;
}

function Hero({ className }: HeroProps) {
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
                  rotationX={0}
                  rotationY={0}
                  rotationZ={0}
                  scale={0.65}
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
