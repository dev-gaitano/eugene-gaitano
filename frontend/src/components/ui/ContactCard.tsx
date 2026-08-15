import { useGLTF } from "@react-three/drei";
import type { PolaroidFilmProps } from "../../types/MeshImportProps";

function ContactCard({
  rotationX,
  rotationY,
  rotationZ,
  scale,
}: PolaroidFilmProps) {
  // Get scene attribute from model
  const model = useGLTF("/polaroid_film.glb");
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
useGLTF.preload("/polaroid_film.glb");

export default ContactCard;
