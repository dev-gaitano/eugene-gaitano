import About from "../components/About/About";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Projects from "../components/Projects/Projects";
import ScrollIndicator from "../components/ScrollIndicator/ScrollIndicator";

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
      </main>
      <ScrollIndicator />
    </>
  );
}

export default Home;
