import { projects } from "../../../constants/Projects";
import { useGSAP } from "@gsap/react";
import {
  animateVideoWithGsap,
  animateWithGsap,
} from "../../../utils/animations";
import { imgProject1 } from "../../../utils/utils";
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
    <section
      id="Projects"
      className="common-padding flex flex-col lg:gap-16 md:gap-11 sm:gap-9 gap-9"
    >
      <div className="w-full flex justify-between align-bottom lg:flex-row flex-col gap-6">
        <h1 className="text-8xl gsap">Projetos</h1>
        <p className="text-3xl max-w-[650px] gsap">
          Aqui estão os principais projetos que trabalhei para a criação de
          experiências memoráveis.
        </p>
      </div>
      <div className="w-full grid lg:grid-cols-2 grid-cols-1 gap-x-9 lg:gap-y-16 md:gap-y-11 sm:gap-y-9 gap-y-9">
        {projects.map((project) => (
          <Link
            to={`/Projeto/${project.id}`}
            key={project.id}
            className="flex flex-col md:gap-4 gap-2 project-item"
          >
            <div className="flex flex-center overflow-hidden rounded-2xl relative">
              <picture className="w-full object-cover">
                <source srcSet={`/${project.image}.webp`} type="image/webp" />
                <source srcSet={`/${project.image}.png`} type="image/png" />
                <img
                  src={`/${project.image}.png`}
                  alt={project.title}
                  className="homeImgProject cursor-pointer"
                  loading="lazy"
                />
              </picture>
              <video
                className="homeVidProject cursor-pointer"
                preload="none"
                muted
                autoPlay
                playsInline
              >
                <source src={`/${project.video}.webm`} type="video/webm" />
                <source src={`/${project.video}.mp4`} type="video/mp4" />
              </video>
            </div>
            <div className="flex flex-col md:gap-2 gap-1">
              <p className="text-xl text-gray-400">{project.subtitle}</p>
              <h2 className="text-5xl">{project.title}</h2>
            </div>
          </Link>
        ))}
        <div className="flex flex-col md:gap-4 gap-2">
          <div className="flex flex-center overflow-hidden rounded-2xl relative">
            <picture>
              <source srcSet={`/${imgProject1}.webp`} type="image/webp" />
              <source srcSet={`/${imgProject1}.png`} type="image/png" />
              <img
                src={`/${imgProject1}.png`}
                className="homeImgProject opacity-0"
                loading="lazy"
              />
            </picture>
            <Link
              to="/Projetos"
              className="!absolute text-5xl link link--metis flex flex-center gap-2"
            >
              Ver todos projetos
              <ArrowRight strokeWidth={2.5} className="lg:size-12 size-9" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
