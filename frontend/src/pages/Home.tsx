import { useEffect } from "react";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Projects from "../components/Projects/Projects";
import ScrollIndicator from "../components/ScrollIndicator/ScrollIndicator";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".main",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        snap: {
          snapTo: "labels",
          duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
          delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
          ease: "power1.inOut", // the ease of the snap animation ("power3" by default)
        },
      },
    });

    tl.addLabel("1")
      .to(".scroll-marker", { top: "0%" })
      .addLabel("2")
      .to(".scroll-marker", { top: "5%" })
      .addLabel("3")
      .to(".scroll-marker", { top: "10%" })
      .addLabel("4")
      .to(".scroll-marker", { top: "15%" })
      .addLabel("5")
      .to(".scroll-marker", { top: "20%" })
      .addLabel("6")
      .to(".scroll-marker", { top: "25%" })
      .addLabel("7")
      .to(".scroll-marker", { top: "30%" })
      .addLabel("8")
      .to(".scroll-marker", { top: "35%" })
      .addLabel("9")
      .to(".scroll-marker", { top: "40%" })
      .addLabel("10")
      .to(".scroll-marker", { top: "45%" })
      .addLabel("11")
      .to(".scroll-marker", { top: "50%" })
      .addLabel("12")
      .to(".scroll-marker", { top: "55%" })
      .addLabel("13")
      .to(".scroll-marker", { top: "60%" })
      .addLabel("14")
      .to(".scroll-marker", { top: "65%" })
      .addLabel("15")
      .to(".scroll-marker", { top: "70%" })
      .addLabel("16")
      .to(".scroll-marker", { top: "75%" })
      .addLabel("17")
      .to(".scroll-marker", { top: "80%" })
      .addLabel("18")
      .to(".scroll-marker", { top: "85%" })
      .addLabel("19")
      .to(".scroll-marker", { top: "90%" })
      .to(".scroll-indicator", { x: 50, opacity: 0, duration: 1 });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <>
      <Navbar />
      <main className="main">
        <Hero className="hero-section" />
        <About className="about-section" />
        <Projects className="projects-section" />
      </main>
      <Footer />
      <ScrollIndicator className="scroll-indicator">
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
