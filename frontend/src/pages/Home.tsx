import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
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
        <Footer />
      </main>
      <ScrollIndicator />
    </>
  );
}

export default Home;
