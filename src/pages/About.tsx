import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { motion as m } from "framer-motion";
import Hero from "../components/About/Hero/Hero";
import Journey from "../components/About/Journey/Journey";
import { animateWithGsap } from "../utils/animations";
import Achivements from "../components/About/Achivements/Achivements";
import Footer from "../components/Footer/Footer";
import Specialty from "../components/About/Specialty/Specialty";

interface MenuProps {
  menu: boolean;
}

const About: React.FC<MenuProps> = ({ menu }) => {
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
