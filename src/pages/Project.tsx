import { useGSAP } from "@gsap/react";
import { motion as m } from "framer-motion";
import Hero from "../components/Project/Hero/Hero";
import Media from "../components/Project/Media/Media";
import Footer from "../components/Footer/Footer";
import Credits from "../components/Project/Credits/Credits";
import Next from "../components/Project/Next/Next";
import { animateMenuClose, animateMenuOpen } from "../utils/animations";

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
      <Next />
      <Footer />
    </m.main>
  );
};

export default Project;
