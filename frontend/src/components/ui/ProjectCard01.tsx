import { useGLTF } from "@react-three/drei";
import type { ProjectCardProps } from "../../types/MeshImportProps";
import { useMemo } from "react";

function ProjectCard01({
  rotationX,
  rotationY,
  rotationZ,
  scale,
}: ProjectCardProps) {
  // Get scene attribute from model
  const model = useGLTF("/project_card.glb");
  const modelScene = model.scene;
  const clonedScene = useMemo(() => modelScene.clone(), [modelScene]);

  // return a primitive element
  return (
    <primitive
      object={clonedScene}
      scale={scale}
      rotation={[rotationX, rotationY, rotationZ]}
    />
  );
}

// Load the model before it's needed
useGLTF.preload("/project_card.glb");

export default ProjectCard01;
