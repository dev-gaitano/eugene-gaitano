import { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Group } from "three";
import { useIsMobile } from "../../hooks/useIsMobile";
import type { ContactCardProps } from "../../types/MeshImportProps";

gsap.registerPlugin(ScrollTrigger);

import {
  DESKTOP_ROTATION_START,
  DESKTOP_ROTATION_END,
  MOBILE_ROTATION_START,
  MOBILE_ROTATION_END,
} from "./contactCardConstants";

function ContactCard({
  rotationX,
  startX,
  startY,
  startZ,
  endX,
  endY,
  endZ,
  scale,
}: ContactCardProps) {
  const cardRef = useRef<Group>(null);
  const isMobile = useIsMobile();

  // Get scene attribute from model
  const model = useGLTF("/contact_card.glb");
  const model_scene = model.scene;

  useEffect(() => {
    if (!cardRef.current) return;

    const defaultStart = isMobile
      ? MOBILE_ROTATION_START
      : DESKTOP_ROTATION_START;
    const defaultEnd = isMobile ? MOBILE_ROTATION_END : DESKTOP_ROTATION_END;

    const initialX = startX ?? rotationX ?? defaultStart.x;
    const initialY = startY ?? defaultStart.y;
    const initialZ = startZ ?? defaultStart.z;
    const finalX = endX ?? rotationX ?? defaultEnd.x;
    const finalY = endY ?? defaultEnd.y;
    const finalZ = endZ ?? defaultEnd.z;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current!.rotation,
        {
          x: initialX,
          y: initialY,
          z: initialZ,
        },
        {
          x: finalX,
          y: finalY,
          z: finalZ,
          ease: "none",
          scrollTrigger: {
            trigger: "#about",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true,
          },
        },
      );
    });

    return () => ctx.revert();
  }, [isMobile, rotationX, startX, startY, startZ, endX, endY, endZ]);

  // return a primitive element
  return (
    <group ref={cardRef} scale={scale}>
      <primitive object={model_scene} rotation={[0, 0, 0]} />
    </group>
  );
}

// Load the model before it's needed
useGLTF.preload("/contact_card.glb");

export default ContactCard;
