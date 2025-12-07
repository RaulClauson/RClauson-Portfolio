import { useGSAP } from "@gsap/react";
import { motion as m } from "framer-motion";
import Hero from "../components/about/Hero";
import Journey from "../components/about/Journey";
import {
  animateMenuClose,
  animateMenuOpen,
  animateWithGsap,
} from "../utils/animations";
import Achivements from "../components/about/Achivements";
import Footer from "../components/layout/Footer";
import Specialty from "../components/about/Skills";

interface MenuProps {
  menu: boolean;
}

const About: React.FC<MenuProps> = ({ menu }) => {
  useGSAP(() => {
    if (menu) {
      animateMenuOpen(".page");
    } else {
      animateMenuClose(".page");
    }
    animateWithGsap(".divisionComp1");
    animateWithGsap(".divisionComp2");
    animateWithGsap(".divisionComp3");
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
      <div className="divisionComp1 divisionComp"></div>
      <Journey />
      <div className="divisionComp2 divisionComp"></div>
      <Achivements />
      <div className="divisionComp3 divisionComp"></div>
      <Specialty />
      <Footer />
    </m.main>
  );
};

export default About;
