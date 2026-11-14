import { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Group } from "three";
import { useIsMobile } from "../../hooks/useIsMobile";
import type { ContactCardProps } from "../../types/MeshImportProps";
import {
  DESKTOP_ROTATION_START,
  DESKTOP_ROTATION_END,
  MOBILE_ROTATION_START,
  MOBILE_ROTATION_END,
} from "./contactCardConstants";

gsap.registerPlugin(ScrollTrigger);

function ContactCard({ scale }: ContactCardProps) {
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

    const initialX = defaultStart.x;
    const initialY = defaultStart.y;
    const initialZ = defaultStart.z;
    const finalX = defaultEnd.x;
    const finalY = defaultEnd.y;
    const finalZ = defaultEnd.z;

    const context = gsap.context(() => {
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

    return () => context.revert();
  }, [isMobile]);

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
