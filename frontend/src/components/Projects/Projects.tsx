import { Canvas } from "@react-three/fiber";
import ProjectCard from "../ui/ProjectCard";
import { Suspense, useEffect, useRef, useState } from "react";
import "./Projects.css";
import ProjectCard01 from "../ui/ProjectCard01";
import ProjectCard02 from "../ui/ProjectCard02";
import { useIsMobile } from "../../hooks/useIsMobile";
import { gsap } from "gsap";

interface ProjectsProps {
  className: string;
}

const CARDS = [
  {
    id: "card-c",
    Component: ProjectCard02,
    rotationY: 2 * (Math.PI / 180),
    swipe: { x: "120vw", y: "-8vh", rotation: 16 },
  },
  {
    id: "card-b",
    Component: ProjectCard01,
    rotationY: -12 * (Math.PI / 180),
    swipe: { x: "-120vw", y: "-8vh", rotation: -16 },
  },
  {
    id: "card-a",
    Component: ProjectCard,
    rotationY: 10 * (Math.PI / 180),
    swipe: null,
  },
];

function Projects({ className }: ProjectsProps) {
  const rotationX = Math.PI / 2;
  const isMobile = useIsMobile();
  const scale = isMobile ? 0.24 : 0.25;

  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const tweens = useRef<(gsap.core.Tween | null)[]>([]);
  const isAnimating = useRef(false);

  useEffect(() => {
    const activeTweens = tweens.current;
    return () => {
      activeTweens.forEach((t) => t?.kill());
    };
  }, []);

  const handleCardClick = (index: number) => (e: React.MouseEvent) => {
    if (e.button !== 0) return;
    if (isAnimating.current) return;
    if (index !== activeIndex) return;

    const isLastCard = index === CARDS.length - 1;

    if (!isLastCard) {
      const cardEl = cardRefs.current[index];
      const swipe = CARDS[index].swipe;
      if (!cardEl || !swipe) return;

      isAnimating.current = true;
      tweens.current[index]?.kill();
      tweens.current[index] = gsap.to(cardEl, {
        x: swipe.x,
        y: swipe.y,
        rotation: swipe.rotation,
        opacity: 0,
        duration: 0.65,
        ease: "power2.inOut",
        onComplete: () => {
          isAnimating.current = false;
          setActiveIndex(index + 1);
        },
      });
    } else {
      isAnimating.current = true;

      const swipedIndices = Array.from(
        { length: index },
        (_, i) => i,
      ).reverse();
      const totalDuration = (swipedIndices.length - 1) * 0.18 + 0.65;

      swipedIndices.forEach((swipedIdx, i) => {
        const delay = i * 0.18;
        const tween = tweens.current[swipedIdx];
        if (delay === 0) {
          tween?.reverse();
        } else {
          gsap.delayedCall(delay, () => {
            tween?.reverse();
          });
        }
      });

      gsap.delayedCall(totalDuration, () => {
        isAnimating.current = false;
        setActiveIndex(0);
      });
    }
  };

  return (
    <>
      <section id="projects" className={`section projects ${className}`}>
        {CARDS.map((card, index) => {
          const CardComponent = card.Component;
          const isActive = index === activeIndex;

          return (
            <article
              key={card.id}
              className={`project-card ${card.id} ${isActive ? "active" : "inactive"
                }`}
              onClick={handleCardClick(index)}
            >
              <div
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className="project-card-inner"
              >
                <Canvas>
                  <ambientLight intensity={1.2} />
                  <directionalLight position={[3, 4, 5]} intensity={1.8} />
                  <Suspense>
                    <CardComponent
                      rotationX={rotationX}
                      rotationY={card.rotationY}
                      rotationZ={0}
                      scale={scale}
                    />
                  </Suspense>
                </Canvas>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
}

export default Projects;
