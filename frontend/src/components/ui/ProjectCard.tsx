import { useGLTF } from "@react-three/drei";
import type { ProjectCardProps } from "../../types/MeshImportProps";

function ProjectCard({
  rotationX,
  rotationY,
  rotationZ,
  scale,
}: ProjectCardProps) {
  // Get scene attribute from model
  const model = useGLTF("/project_card.glb");
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
useGLTF.preload("/project_card.glb");

export default ProjectCard;
