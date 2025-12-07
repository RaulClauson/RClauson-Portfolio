import { useGSAP } from "@gsap/react";
import {
  animateWithGsap,
  heroAboutAnimateWithGsap,
} from "../../utils/animations";
import GridDistortion from "./GridDistortion";

const Hero = () => {
  useGSAP(() => {
    heroAboutAnimateWithGsap(".heroAbout", ".heroImgAbout");
    animateWithGsap(".gsap");
  }, []);
  return (
    <section id="Hero" className={style.section}>
      <div className={style.spacer}></div>
      <div className={style.heroContainer}>
        <GridDistortion
          imageSrc="img/aboutHero.png"
          grid={30}
          mouse={0.1}
          strength={0.15}
          relaxation={0.9}
          className="heroImgAbout"
        />
      </div>
      <div className={style.contentContainer}>
        <h1 className={style.title}>Raul Clauson</h1>
        <p className={style.description}>
          Olá, me chamo Raul e sou Desenvolvedor Front-End em construção, com
          paixão por interfaces intuitivas e experiências digitais marcantes.{" "}
        </p>
      </div>
    </section>
  );
};

const style = {
  section: "common-padding flex flex-col items-center",
  spacer: "min-h-[23px]",
  heroContainer:
    "heroAbout w-full h-[125lvh] flex flex-center common-my rounded-3xl overflow-hidden",
  contentContainer:
    "w-full flex justify-between lg:items-end items-start lg:flex-row flex-col lg:gap-16 gap-3",
  title: "gsap text-8xl flex-shrink-0",
  description: "gsap text-3xl text-gray-400 max-w-[970px]",
};

export default Hero;
