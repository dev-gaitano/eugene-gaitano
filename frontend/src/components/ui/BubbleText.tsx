import { useGLTF } from "@react-three/drei";
import type { BubbleTextProps } from "../../types/MeshImportProps";

function BubbleText({
  rotationX,
  rotationY,
  rotationZ,
  scale,
}: BubbleTextProps) {
  // Get scene attribute from model
  const model = useGLTF("/portfolio_bubble_text_ss1.glb");
  const model_scene = model.scene;

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
