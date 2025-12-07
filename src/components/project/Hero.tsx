import { useParams } from "react-router-dom";
import { projects } from "../../constants/Projects";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { heroAnimateWithGsap } from "../../utils/animations";
import { ChevronDown, ExternalLink } from "lucide-react";
import { useTranslation } from "../../i18n/useTranslation";

interface Params {
  [key: string]: string | undefined;
  id: string;
}

const Hero = () => {
  const { t } = useTranslation();
  const { id } = useParams<Params>();
  const project = projects.find((p) => p.id === id);

  // Get translated project data
  const projectKey = id
    ?.toLowerCase()
    .replace("-", "") as keyof typeof t.projects;
  const translatedProject = t.projects[projectKey];

  useGSAP(() => {
    heroAnimateWithGsap(".hero", 0.1);
    gsap.to(".gsapPin", {
      scrollTrigger: {
        trigger: ".gsapPin",
        start: "top top",
        end: "bottom top",
        pin: true,
        pinType: "transform",
      },
    });
    gsap.to(".projectTexts", {
      marginLeft: "-700px",
      height: 0,
      duration: 1.5,
      ease: "power4.inOut",
      scrollTrigger: {
        trigger: ".gsapRef",
        start: "top top",
        end: "50% top",
        scrub: 2,
      },
    });
    gsap.to(".projectText", {
      marginLeft: "-400px",
      stagger: 0.05,
      duration: 1.5,
      ease: "power4.inOut",
      scrollTrigger: {
        trigger: ".gsapRef",
        start: "top top",
        end: "50% top",
        scrub: 2,
      },
    });
    gsap.to(".projectHero", {
      height: "100%",
      duration: 1.5,
      ease: "power4.inOut",
      scrollTrigger: {
        trigger: ".gsapRef",
        start: "top top",
        end: "50% top",
        scrub: 2,
      },
    });
    gsap.to(".heroBottom", {
      marginBottom: "-200px",
      opacity: 0,
      duration: 1.5,
      ease: "power4.inOut",
      scrollTrigger: {
        trigger: ".gsapRef",
        start: "top top",
        end: "50% top",
        scrub: 2,
      },
    });
    gsap.to(".heroVideo", {
      borderRadius: "24px",
      duration: 1.5,
      ease: "power4.inOut",
      scrollTrigger: {
        trigger: ".gsapRef",
        start: "top top",
        end: "50% top",
        scrub: 2,
      },
    });
  }, []);

  const scrollToAbout = (e: React.MouseEvent) => {
    e.preventDefault();
    gsap.to(window, {
      duration: 2,
      scrollTo: "#Media",
      ease: "power4.inOut",
    });
  };

  if (!project?.video) return null;

  return (
    <section className={style.section}>
      <div className={style.pinContainer}>
        <div className={style.heroContainer}>
          <div className={style.textWrapper}>
            <div className={style.titleContainer}>
              <h1 className={style.title}>{project?.title}</h1>
              <p className={style.subtitle}>{project.subtitle}</p>
            </div>
            <div className={style.infoContainer}>
              <div className={style.servicesContainer}>
                <h4 className={style.infoTitle}>{t.project.services}</h4>
                <ul>
                  {project?.services.map((service, index) => (
                    <li key={index} className={style.serviceItem}>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={style.aboutContainer}>
                <h4 className={style.infoTitle}>{t.project.about}</h4>
                <p className={style.description}>
                  {translatedProject?.description}
                </p>
              </div>
            </div>
            {project?.link && (
              <a href={project?.link} className={style.link}>
                {t.project.visitProject}
                <ExternalLink strokeWidth={2.5} />
              </a>
            )}
          </div>
          <div id="heroVideo" className={style.videoContainer}>
            <a href={project?.youtubeLink} className={style.videoLink}>
              <iframe
                className={style.iframe}
                style={{
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  aspectRatio: "16/9",
                }}
                src={`${project?.youtube}&controls=0&autoplay=1&loop=1&mute=1&modestbranding=1&showinfo=0`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </a>
          </div>
        </div>
        <div className={style.bottomContainer}>
          <p className={style.year}>{translatedProject.year}</p>
          <a onClick={scrollToAbout} className={style.scrollButton}>
            {t.project.scroll}
            <ChevronDown strokeWidth={2.5} className="pointer-events-none" />
          </a>
        </div>
      </div>
    </section>
  );
};

const style = {
  section: "gsapRef w-full h-[200svh]",
  pinContainer: "gsapPin w-full h-[100svh] flex flex-center relative",
  heroContainer:
    "projectHero w-full md:h-[65vh] h-auto flex lg:flex-row flex-col lg:items-center items-start justify-between lg:gap-16 md:gap-11 sm:gap-6 gap-6",
  textWrapper:
    "projectTexts ml-0 max-w-[600px] w-full flex flex-col lg:gap-16 md:gap-11 sm:gap-6 gap-6 flex-shrink-0",
  titleContainer: "flex flex-col md:gap-1 gap-0",
  title: "hero projectText text-8xl flex-shrink-0",
  subtitle:
    "hero projectText text-2xl text-gray-400 md:pb-2 pb-0 flex-shrink-0",
  infoContainer: "flex lg:gap-16 md:gap-11 sm:gap-6 gap-6",
  servicesContainer: "flex flex-col md:gap-2 gap-0 flex-shrink-0",
  infoTitle: "hero projectText text-2xl",
  serviceItem: "hero projectText text-xl text-gray-400 flex-shrink-0",
  aboutContainer: "flex flex-col md:gap-2 gap-0 max-w-[350px]",
  description: "hero projectText text-xl text-gray-400",
  link: "hero projectText flex gap-2 text-2xl link link--metis w-fit",
  videoContainer:
    "hero heroVideo relative w-full h-full z-0 lg:rounded-2xl !rounded-2xl overflow-hidden border-2 border-gray-50 aspect-video! min-h-32",
  videoLink:
    "absolute inset-0 flex items-center justify-center aspect-video! pointer-events-auto cursor-pointer",
  iframe:
    "absolute min-w-full min-h-full w-auto h-auto aspect-video! pointer-events-none",
  bottomContainer:
    "absolute heroBottom bottom-0 left-0 w-full common-py flex items-center justify-between",
  year: "hero text-xl text-gray",
  scrollButton: "hero flex gap-1 text-gray text-xl cursor-pointer",
};

export default Hero;
