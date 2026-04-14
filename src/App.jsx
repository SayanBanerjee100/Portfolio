import { lazy, Suspense } from "react";
import Loading from "./components/Loading";
import ScrollProgress from "./components/ScrollProgress";

const Navbar = lazy(() => import("./components/Navbar"));
const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Education = lazy(() => import("./components/Education"));
const Projects = lazy(() => import("./components/Projects"));
const Certificates = lazy(() => import("./components/Certificates"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <ScrollProgress />
      <main id="main-content">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Certificates />
        <Contact />
        <Footer />
      </main>
    </Suspense>
  );
}

export default App;
