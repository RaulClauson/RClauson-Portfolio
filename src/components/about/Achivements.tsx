import { useGSAP } from "@gsap/react";
import { animateWithGsap } from "../../utils/animations";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Achivements = () => {
  useGSAP(() => {
    animateWithGsap(".gsapTextAchivements");
    animateWithGsap(".gsapText2Achivements");
    gsap.to(".gsapPin", {
      scrollTrigger: {
        trigger: ".gsapPin",
        start: "50% 50%",
        end: "130% 50%",
        pin: true,
        pinType: "transform",
      },
    });
    gsap.to(".gsapImg", {
      height: "0%",
      duration: 1.5,
      ease: "power4.inOut",
      scrollTrigger: {
        trigger: ".gsapImgRef",
        start: "50% 50%",
        end: "50% 50%",
        toggleActions: "play none none reverse",
      },
    });
    gsap.to(".gsapImg2", {
      height: "100%",
      duration: 1.5,
      ease: "power4.inOut",
      scrollTrigger: {
        trigger: ".gsapImgRef",
        start: "50% 50%",
        end: "50% 50%",
        toggleActions: "play none none reverse",
      },
    });
    gsap.to(".gsapTextImg", {
      top: "-24px",
      duration: 1,
      stagger: 0.4,
      ease: "power4.inOut",
      scrollTrigger: {
        trigger: ".gsapImgRef",
        start: "50% 50%",
        end: "50% 50%",
        toggleActions: "play none none reverse",
      },
    });
    gsap.to(".gsapText2Img", {
      top: "0px",
      duration: 1,
      stagger: 0.4,
      ease: "power4.inOut",
      scrollTrigger: {
        trigger: ".gsapImgRef",
        start: "50% 50%",
        end: "50% 50%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);
  return (
    <section className={style.section}>
      <div className={style.imageContainer}>
        <h2 className={style.title}>Jornada</h2>
        <div className={style.pinContainer}>
          <div className={style.imageWrapper}>
            <img
              src="img/aboutAchivements.png"
              className={style.image1}
              alt="Eu e meu grupo recebendo a medálha de 1º lugar na EXCUTE"
            />
            <img
              src="img/aboutAchivements2.png"
              className={style.image2}
              alt="Eu e meu grupo apresentando nosso projeto no NEXT"
            />
          </div>
          <div className={style.textContainer}>
            <p className={style.titleImg1}>58º EXCUTE</p>
            <p className={style.textImg1}>2023</p>
            <p className={style.titleImg2}>FIAP NEXT</p>
            <p className={style.textImg2}>2024</p>
          </div>
        </div>
      </div>
      <div className={style.contentContainer}>
        <div className={style.textSection}>
          <p className={style.sectionTitle}>Melhor TCC</p>
          <p className={style.sectionText}>
            Durante minha trajetória na ETEC Jorge Street, participei da EXCUTE
            com meu grupo e conquistamos o 1º lugar com nosso TCC. Foi uma
            experiência inesquecível, repleta de desafios e aprendizados.
          </p>
          <p className={style.sectionText}>
            Esse reconhecimento reforçou minha paixão por tecnologia e inovação,
            mostrando o impacto que boas ideias, dedicação e trabalho em equipe
            podem gerar.
          </p>
        </div>
        <div className={style.division}></div>
        <div className={style.textSection}>
          <p className={style.sectionTitle}>Finalistas Challenge</p>
          <p className={style.sectionText}>
            Durante minha jornada na FIAP, tive a honra de apresentar, junto com
            meu grupo, nosso projeto no NEXT, a maior feira de tecnologia do
            Brasil. Chegar até lá foi uma grande conquista, fruto de muito
            esforço e dedicação.
          </p>
          <p className={style.sectionText}>
            Foi incrível estar entre grandes talentos e compartilhar nossa
            solução em um evento tão importante para o futuro da tecnologia.
          </p>
        </div>
      </div>
    </section>
  );
};

const style = {
  section:
    "flex justify-between common-padding lg:flex-row flex-col lg:gap-16 gap-9",
  imageContainer: "gsapImgRef relative w-full h-full",
  title: "gsapTextAchivements titleAbout",
  pinContainer: "w-full common-my gsapPin flex flex-col gap-2",
  imageWrapper:
    "relative w-full h-[500px] rounded-2xl overflow-hidden flex items-end",
  image1:
    "gsapTextAchivements gsapImg opacity-0 translate-y-20 rounded-2xl absolute w-full h-full object-cover object-center",
  image2:
    "gsapTextAchivements gsapImg2 opacity-0 translate-y-20 rounded-2xl absolute w-full h-[0%] object-cover object-center",
  textContainer: "w-full h-[24px] relative flex overflow-hidden",
  titleImg1: "gsapTextAchivements titleImgAbout gsapTextImg top-[0px]",
  textImg1: "gsapTextAchivements textImgAbout gsapTextImg top-[0px]",
  titleImg2: "gsapTextAchivements titleImgAbout gsapText2Img top-[24px]",
  textImg2: "gsapTextAchivements textImgAbout gsapText2Img top-[24px]",
  contentContainer: "common-py max-w-[970px] flex flex-col gap-9",
  textSection: "common-py flex flex-col gap-9",
  sectionTitle: "gsapText2Achivements titleTextAbout",
  sectionText: "gsapText2Achivements textAbout",
  division: "gsapText2Achivements division",
};

export default Achivements;
