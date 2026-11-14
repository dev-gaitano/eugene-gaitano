import { useGLTF } from "@react-three/drei";
import type { ProjectCardProps } from "../../types/MeshImportProps";

function ProjectCard02({
  rotationX,
  rotationY,
  rotationZ,
  scale,
}: ProjectCardProps) {
  // Get scene attribute from model
  const model = useGLTF("/project_card_jasmijn_schrofer.glb");
  const modelScene = model.scene;

  // return a primitive element
  return (
    <primitive
      object={modelScene}
      scale={scale}
      rotation={[rotationX, rotationY, rotationZ]}
    />
  );
}

// Load the model before it's needed
useGLTF.preload("/project_card_jasmijn_schrofer.glb");

export default ProjectCard02;
