import { useGSAP } from "@gsap/react";
import { motion as m } from "framer-motion";
import Hero from "../components/project/Hero";
import Media from "../components/project/Media";
import Footer from "../components/layout/Footer";
import Credits from "../components/project/Credits";
import { animateMenuClose, animateMenuOpen } from "../utils/animations";
import Projects from "../components/common/Projects";

interface MenuProps {
  menu: boolean;
}

const Project: React.FC<MenuProps> = ({ menu }) => {
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
      <div className="flex flex-col md:gap-9 gap-6 common-px">
        <Hero />
        <Media />
        <Credits />
      </div>
      <Projects />
      <Footer />
    </m.main>
  );
};

export default Project;
