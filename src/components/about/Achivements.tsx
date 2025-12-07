import { useGSAP } from "@gsap/react";
import { animateWithGsap } from "../../utils/animations";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useTranslation } from "../../i18n/useTranslation";

const Achivements = () => {
  const { t } = useTranslation();
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
        <h2 className={style.title}>{t.about.achievements.title}</h2>
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
            <p className={style.titleImg1}>{t.about.achievements.event1}</p>
            <p className={style.textImg1}>{t.about.achievements.year1}</p>
            <p className={style.titleImg2}>{t.about.achievements.event2}</p>
            <p className={style.textImg2}>{t.about.achievements.year2}</p>
          </div>
        </div>
      </div>
      <div className={style.contentContainer}>
        <div className={style.textSection}>
          <p className={style.sectionTitle}>{t.about.achievements.bestTCC}</p>
          <p className={style.sectionText}>
            {t.about.achievements.bestTCCText1}
          </p>
          <p className={style.sectionText}>
            {t.about.achievements.bestTCCText2}
          </p>
        </div>
        <div className={style.division}></div>
        <div className={style.textSection}>
          <p className={style.sectionTitle}>{t.about.achievements.finalists}</p>
          <p className={style.sectionText}>
            {t.about.achievements.finalistsText1}
          </p>
          <p className={style.sectionText}>
            {t.about.achievements.finalistsText2}
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
