import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { motion as m } from "framer-motion";
import Hero from "../components/Project/Hero/Hero";
import Media from "../components/Project/Media/Media";
import Footer from "../components/Footer/Footer";
import Credits from "../components/Project/Credits/Credits";
import Next from "../components/Project/Next/Next";

interface MenuProps {
  menu: boolean;
}

const Project: React.FC<MenuProps> = ({ menu }) => {
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
