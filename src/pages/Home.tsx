import { useGSAP } from "@gsap/react";
import Footer from "../components/layout/Footer";
import About from "../components/home/About";
import Hero from "../components/home/Hero";
import Projects from "../components/home/Projects";
import { motion as m } from "framer-motion";
import { animateMenuClose, animateMenuOpen } from "../utils/animations";

interface MenuProps {
  menu: boolean;
}

const Home: React.FC<MenuProps> = ({ menu }) => {
  useGSAP(() => {
    if (menu) {
      animateMenuOpen(".page");
    } else {
      animateMenuClose(".page");
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
