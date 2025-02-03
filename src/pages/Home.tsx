import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Footer from "../components/Footer/Footer";
import About from "../components/Home/About/About";
import Hero from "../components/Home/Hero/Hero";
import Projects from "../components/Home/Projects/Projects";
import { motion as m } from "framer-motion";

interface MenuProps {
  menu: boolean;
}

const Home: React.FC<MenuProps> = ({ menu }) => {
  useGSAP(() => {
    if (menu) {
      // Ensure the element is present before animating
      gsap.to(".page", {
        transform: "translateY(50vh)",
        duration: 1.5,
        ease: "power4.out",
      });
    } else {
      gsap.to(".page", {
        transform: "translateY(0vh)",
        duration: 1.5,
        ease: "power4.out",
      });
    }
  }, [menu]);

  return (
    <m.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="page"
    >
      <Hero />
      <About />
      <Projects />
      <Footer />
    </m.main>
  );
};

export default Home;
