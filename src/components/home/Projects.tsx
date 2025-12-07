import { projects } from "../../constants/Projects";
import { useGSAP } from "@gsap/react";
import { animateVideoWithGsap, animateWithGsap } from "../../utils/animations";
import { imgProject1 } from "../../constants/media";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Projects = () => {
  // No longer need refs for individual elements
  // Instead use the class names to target the elements

  useGSAP(() => {
    // Select all project item containers
    const projectItems = document.querySelectorAll(".project-item");
    projectItems.forEach((projectItem) => {
      const imgElement = projectItem.querySelector(
        ".homeImgProject"
      ) as HTMLImageElement;
      const vidElement = projectItem.querySelector(
        ".homeVidProject"
      ) as HTMLVideoElement;

      if (imgElement && vidElement) {
        animateVideoWithGsap(imgElement, vidElement);
      }
    });
    animateWithGsap(".gsap");
  }, []);

  return (
    <section id="Projects" className={style.section}>
      <div className={style.header}>
        <h1 className={style.title}>Projetos</h1>
        <p className={style.description}>
          Aqui estão os principais projetos que trabalhei para a criação de
          experiências memoráveis.
        </p>
      </div>
      <div className={style.grid}>
        {projects.map((project) => (
          <Link
            to={`/Projeto/${project.id}`}
            key={project.id}
            className={style.projectItem}
          >
            <div className={style.imageContainer}>
              <picture className={style.picture}>
                <source srcSet={`/${project.image}.webp`} type="image/webp" />
                <source srcSet={`/${project.image}.png`} type="image/png" />
                <img
                  src={`/${project.image}.png`}
                  alt={project.title}
                  className={style.image}
                  loading="lazy"
                />
              </picture>
              <video
                className={style.video}
                preload="none"
                muted
                autoPlay
                playsInline
              >
                <source src={`/${project.video}.webm`} type="video/webm" />
                <source src={`/${project.video}.mp4`} type="video/mp4" />
              </video>
            </div>
            <div className={style.projectInfo}>
              <p className={style.subtitle}>{project.subtitle}</p>
              <h2 className={style.projectTitle}>{project.title}</h2>
            </div>
          </Link>
        ))}
        <div className={style.viewAllContainer}>
          <div className={style.imageContainer}>
            <picture>
              <source srcSet={`/${imgProject1}.webp`} type="image/webp" />
              <source srcSet={`/${imgProject1}.png`} type="image/png" />
              <img
                src={`/${imgProject1}.png`}
                className={style.placeholderImage}
                loading="lazy"
              />
            </picture>
            <Link to="/Projetos" className={style.viewAllLink}>
              Ver todos projetos
              <ArrowRight strokeWidth={2.5} className="lg:size-12 size-9" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const style = {
  section: "common-padding flex flex-col lg:gap-16 md:gap-11 sm:gap-9 gap-9",
  header: "w-full flex justify-between align-bottom lg:flex-row flex-col gap-6",
  title: "text-8xl gsap",
  description: "text-3xl max-w-[650px] gsap",
  grid: "w-full grid lg:grid-cols-2 grid-cols-1 gap-x-9 lg:gap-y-16 md:gap-y-11 sm:gap-y-9 gap-y-9",
  projectItem: "flex flex-col md:gap-4 gap-2 project-item",
  imageContainer: "flex flex-center overflow-hidden rounded-2xl relative",
  picture: "w-full object-cover",
  image: "homeImgProject cursor-pointer",
  video: "homeVidProject cursor-pointer",
  projectInfo: "flex flex-col md:gap-2 gap-1",
  subtitle: "text-xl text-gray-400",
  projectTitle: "text-5xl",
  viewAllContainer: "flex flex-col md:gap-4 gap-2",
  placeholderImage: "homeImgProject opacity-0",
  viewAllLink: "!absolute text-5xl link link--metis flex flex-center gap-2",
};

export default Projects;
