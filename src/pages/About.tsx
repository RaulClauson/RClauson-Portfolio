import { useGSAP } from "@gsap/react";
import { motion as m } from "framer-motion";
import Hero from "../components/About/Hero/Hero";
import Journey from "../components/About/Journey/Journey";
import {
  animateMenuClose,
  animateMenuOpen,
  animateWithGsap,
} from "../utils/animations";
import Achivements from "../components/About/Achivements/Achivements";
import Footer from "../components/Footer/Footer";
import Specialty from "../components/About/Specialty/Specialty";

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
