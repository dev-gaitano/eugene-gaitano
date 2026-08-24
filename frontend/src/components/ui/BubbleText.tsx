import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";

interface BubbleTextProps {
  rotationX: number;
  rotationY: number;
  rotationZ: number;
  scale: number;
  setIsLoaded: React.Dispatch<React.SetStateAction<boolean>>;
}

function BubbleText({
  rotationX,
  rotationY,
  rotationZ,
  scale,
  setIsLoaded,
}: BubbleTextProps) {
  // Get scene attribute from model
  const model = useGLTF("/portfolio_bubble_text_ss1.glb");
  const model_scene = model.scene;

  // Update isLoaded state variable to match model load state
  useEffect(() => {
    setIsLoaded(true);
  }, [model_scene, setIsLoaded]);

  // return a primitive element
  return (
    <primitive
      object={model_scene}
      scale={scale}
      rotation={[rotationX, rotationY, rotationZ]}
    />
  );
}

// Load the model before it's needed
useGLTF.preload("/portfolio_bubble_text_ss1.glb");

export default BubbleText;
