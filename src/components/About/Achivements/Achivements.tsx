import { useGSAP } from "@gsap/react";
import { animateWithGsap } from "../../../utils/animations";
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
    <section className="flex justify-between common-padding lg:flex-row flex-col lg:gap-16 gap-9">
      <div className="gsapImgRef relative w-full h-full">
        <h2 className="gsapTextAchivements titleAbout">Jornada</h2>
        <div className="w-full common-my gsapPin flex flex-col gap-2">
          <div className="relative w-full h-[500px] rounded-2xl overflow-hidden flex items-end">
            <img
              src="img/aboutAchivements.png"
              className="gsapTextAchivements gsapImg opacity-0 translate-y-20 rounded-2xl absolute w-full h-full object-cover object-center"
              alt="Eu e meu grupo recebendo a medálha de 1º lugar na EXCUTE"
            />
            <img
              src="img/aboutAchivements2.png"
              className="gsapTextAchivements gsapImg2 opacity-0 translate-y-20 rounded-2xl absolute w-full h-[0%] object-cover object-center"
              alt="Eu e meu grupo apresentando nosso projeto no NEXT"
            />
          </div>
          <div className="w-full h-[24px] relative flex overflow-hidden">
            <p className="gsapTextAchivements titleImgAbout gsapTextImg top-[0px]">
              58º EXCUTE
            </p>
            <p className="gsapTextAchivements textImgAbout gsapTextImg top-[0px]">
              2023
            </p>
            <p className="gsapTextAchivements titleImgAbout gsapText2Img top-[24px]">
              FIAP NEXT
            </p>
            <p className="gsapTextAchivements textImgAbout gsapText2Img top-[24px]">
              2024
            </p>
          </div>
        </div>
      </div>
      <div className="common-py max-w-[970px] flex flex-col gap-9">
        <div className="common-py flex flex-col gap-9">
          <p className="gsapText2Achivements titleTextAbout">Melhor TCC</p>
          <p className="gsapText2Achivements textAbout">
            Durante minha trajetória na ETEC Jorge Street, participei da EXCUTE
            com meu grupo e conquistamos o 1º lugar com nosso TCC. Foi uma
            experiência inesquecível, repleta de desafios e aprendizados.
          </p>
          <p className="gsapText2Achivements textAbout">
            Esse reconhecimento reforçou minha paixão por tecnologia e inovação,
            mostrando o impacto que boas ideias, dedicação e trabalho em equipe
            podem gerar.
          </p>
        </div>
        <div className="gsapText2Achivements division"></div>
        <div className="common-py flex flex-col gap-9">
          <p className="gsapText2Achivements titleTextAbout">
            Finalistas Challenge
          </p>
          <p className="gsapText2Achivements textAbout">
            Durante minha jornada na FIAP, tive a honra de apresentar, junto com
            meu grupo, nosso projeto no NEXT, a maior feira de tecnologia do
            Brasil. Chegar até lá foi uma grande conquista, fruto de muito
            esforço e dedicação.
          </p>
          <p className="gsapText2Achivements textAbout">
            Foi incrível estar entre grandes talentos e compartilhar nossa
            solução em um evento tão importante para o futuro da tecnologia.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Achivements;
