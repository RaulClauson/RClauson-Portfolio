import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { animateWithGsap } from "../../utils/animations";
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
    <section id="About" className={style.section}>
      <div className={style.textContainer}>
        <p className={style.text1}>Desenvolvedor Front-End em construção,</p>
        <p className={style.text2}>com paixão por interfaces intuitivas e</p>
        <p className={style.text3}>experiências digitais marcantes.</p>
      </div>
      <div className={style.imageWrapper}>
        <div className={style.imageContainer}>
          <Link to="/Sobre">
            <img
              src="/img/homeAbout.png"
              className={style.image}
              alt="Um retrato de Raul Clauson, um homem branco vestindo uma camiseta preta em um fundo neutro"
            ></img>
          </Link>
        </div>
        <div className={style.nameContainer}>
          <p className={style.firstName}>RAUL</p>
          <p className={style.lastName}>CLAUSON</p>
        </div>
      </div>
      <div className={style.textContainerHidden}>
        <p className={style.hiddenText1}>
          Desenvolvedor Front-End em construção,
        </p>
        <p className={style.hiddenText2}>
          com paixão por interfaces intuitivas e
        </p>
        <p className={style.hiddenText3}>experiências digitais marcantes.</p>
      </div>
    </section>
  );
};

const style = {
  section:
    "w-full overflow-hidden common-padding flex justify-between lg:flex-row flex-col lg:gap-16 md:gap-11 sm:gap-6 gap-6 bg-[var(--background)]",
  textContainer: "text-2xl text-gray flex-shrink-0",
  text1: "about sm:pl-12 pl-0",
  text2: "about sm:pl-6 pl-0",
  text3: "about",
  imageWrapper: "relative w-full sm:h-[720px] h-[440px]",
  imageContainer:
    "about relative w-full h-full overflow-hidden rounded-3xl scale-75",
  image:
    "homeImgAbout w-full h-full object-cover object-center cursor-pointer scale-125 translate-y-16",
  nameContainer:
    "absolute bottom-6 2xl:-right-48 right-0 mix-blend-difference pointer-events-none text-white z-10",
  firstName: "about aboutName text-8xl",
  lastName: "about about2Name text-8xl sm:pl-12 pl-6",
  textContainerHidden:
    "text-2xl opacity-0 flex-shrink-0 2xl:block hidden pointer-events-none",
  hiddenText1: "pl-12",
  hiddenText2: "pl-6",
  hiddenText3: "",
};

export default About;
