import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";

interface BubbleTextProps {
  modelPath: string;
  rotationX: number;
  rotationY: number;
  rotationZ: number;
  scale: number;
  setIsLoaded: React.Dispatch<React.SetStateAction<boolean>>;
}

function BubbleText({
  modelPath,
  rotationX,
  rotationY,
  rotationZ,
  scale,
  setIsLoaded,
}: BubbleTextProps) {
  // Get scene attribute from model
  const model = useGLTF(modelPath);
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

// Load the models before they're needed
useGLTF.preload("/portfolio_bubble_text_ss1.glb");
useGLTF.preload("/portfolio_bubble_text_mobile.glb");

export default BubbleText;
