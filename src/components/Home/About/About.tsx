import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { animateWithGsap } from "../../../utils/animations";
import { Link } from "react-router-dom";

const About = () => {
  useGSAP(() => {
    animateWithGsap(".about");
    gsap.to(".homeImgAbout", {
      scrollTrigger: {
        trigger: ".homeImgAbout",
        start: "top bottom",
        end: "200% top",
        scrub: 2,
      },
      scale: 1.25,
      transform: "translateY(-1rem)",
      duration: 2,
      ease: "power4.out",
    });
    gsap.to(".aboutName", {
      scrollTrigger: {
        trigger: ".homeImgAbout",
        start: "50% bottom",
        end: "200% top",
        scrub: 2,
      },
      scale: 1,
      transform: "translateX(-6rem)",
      duration: 2,
      ease: "power4.out",
    });
    gsap.to(".about2Name", {
      scrollTrigger: {
        trigger: ".homeImgAbout",
        start: "50% bottom",
        end: "200% top",
        scrub: 4,
      },
      scale: 1,
      transform: "translateX(-4rem)",
      delay: 1,
      duration: 2,
      ease: "power4.out",
    });
  }, []);
  return (
    <section
      id="About"
      className="w-full overflow-hidden common-padding flex justify-between lg:flex-row flex-col lg:gap-16 md:gap-11 sm:gap-6 gap-6 bg[var(--background)]"
    >
      <div className="text-2xl text-gray flex-shrink-0">
        <p className="about sm:pl-12 pl-0">
          Desenvolvedor Front-End em construção,
        </p>
        <p className="about sm:pl-6 pl-0">
          com paixão por interfaces intuitivas e
        </p>
        <p className="about">experiências digitais marcantes.</p>
      </div>
      <div className="relative w-full sm:h-[720px] h-[440px]">
        <div className="about relative w-full h-full overflow-hidden rounded-3xl scale-75">
          <Link to="/Sobre">
            <img
              src="/img/homeAbout.png"
              className="homeImgAbout w-full h-full object-cover object-center cursor-pointer scale-125 translate-y-16"
              alt="Um retrato de Raul Clauson, um homem branco vestindo uma camiseta preta em um fundo neutro"
            ></img>
          </Link>
        </div>
        <div className="absolute bottom-6 2xl:-right-48 right-0 mix-blend-difference pointer-events-none text-white z-10">
          <p className="about aboutName text-8xl">RAUL</p>
          <p className="about about2Name text-8xl sm:pl-12 pl-6">CLAUSON</p>
        </div>
      </div>
      <div className="text-2xl opacity-0 flex-shrink-0 2xl:block hidden pointer-events-none">
        <p className="pl-12">Desenvolvedor Front-End em construção,</p>
        <p className="pl-6">com paixão por interfaces intuitivas e</p>
        <p>experiências digitais marcantes.</p>
      </div>
    </section>
  );
};

export default About;
