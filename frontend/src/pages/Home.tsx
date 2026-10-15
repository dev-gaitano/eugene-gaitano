import { useEffect, useState } from "react";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Projects from "../components/Projects/Projects";
import ScrollIndicator from "../components/ScrollIndicator/ScrollIndicator";
import { SCROLL_POSITIONS } from "../components/ScrollIndicator/scrollPositions";
import { useIsMobile } from "../hooks/useIsMobile";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (!isLoaded) return;

    const markerProp = isMobile ? "left" : "top";
    const exitProp = isMobile ? "y" : "x";

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".main",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        snap: {
          snapTo: "labels",
          duration: { min: 0.2, max: 3 },
          delay: 0.2,
          ease: "power1.inOut",
        },
      },
    });

    SCROLL_POSITIONS.forEach((position, index) => {
      tl.addLabel(String(index + 1));
      tl.to(".scroll-marker", { [markerProp]: position });
    });

    tl.to(".scroll-indicator", {
      [exitProp]: 50,
      opacity: 0,
      duration: 1,
    });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, [isLoaded, isMobile]);

  return (
    <>
      {!isLoaded && (
        <div className="loading-screen">
          <div className="loading-logo">
            <img
              src="https://res.cloudinary.com/diwkfbsgv/image/upload/v1787583339/gaitano-logo_ajp6gp.png"
              alt=""
            />
          </div>
        </div>
      )}

      <Navbar className={`${!isLoaded ? "hidden" : ""}`} />

      <main className={`main ${!isLoaded ? "hidden" : ""}`}>
        <Hero className="hero-section" setIsLoaded={setIsLoaded} />
        <About className="about-section" />
        <Projects className="projects-section" />
      </main>

      <Footer className={`footer-section ${!isLoaded ? "hidden" : ""}`} />

      <ScrollIndicator
        className={`scroll-indicator ${!isLoaded ? "hidden" : ""}`}
      >
        <svg
          className="scroll-marker"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="var(--black)"
        >
          <path d="M400-280v-400l200 200-200 200Z" />
        </svg>
      </ScrollIndicator>
    </>
  );
}

export default Home;
