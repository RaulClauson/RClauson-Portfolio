import { projects } from "../../constants/Projects";
import { useGSAP } from "@gsap/react";
import { animateVideoWithGsap, animateWithGsap } from "../../utils/animations";
import { imgProject1 } from "../../constants/media";
import { ArrowRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";

interface Params {
  [key: string]: string | undefined;
  id: string;
}

const Next = () => {
  const { id } = useParams<Params>();
  const currentIndex = projects.findIndex((p) => p.id === id);
  const nextProject =
    currentIndex < projects.length - 1
      ? projects[currentIndex + 1]
      : projects[0];

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
        <h1 className={style.title}>Próximo projeto</h1>
      </div>
      <div className={style.grid}>
        <Link
          to={`/Projeto/${nextProject.id}`}
          key={nextProject.id}
          className={style.projectItem}
        >
          <div className={style.imageContainer}>
            <picture>
              <source srcSet={`/${nextProject.image}.webp`} type="image/webp" />
              <source srcSet={`/${nextProject.image}.png`} type="image/png" />
              <img
                src={`/${nextProject.image}.png`}
                alt={nextProject.title}
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
              <source src={`/${nextProject.video}.webm`} type="video/webm" />
              <source src={`/${nextProject.video}.mp4`} type="video/mp4" />
            </video>
          </div>
          <div className={style.projectInfo}>
            <p className={style.subtitle}>{nextProject.subtitle}</p>
            <h2 className={style.projectTitle}>{nextProject.title}</h2>
          </div>
        </Link>
        <div className={style.viewAllContainer}>
          <div className={style.imageContainer}>
            <picture>
              <source srcSet={`/${imgProject1}.webp`} type="image/webp" />
              <source srcSet={`/${imgProject1}.png`} type="image/png" />
              <img
                src={`/${imgProject1}.png`}
                alt={nextProject.title}
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
  grid: "w-full grid lg:grid-cols-2 grid-cols-1 gap-x-9 lg:gap-y-16 md:gap-y-11 sm:gap-y-9 gap-y-9",
  projectItem: "flex flex-col md:gap-4 gap-2 project-item",
  imageContainer: "flex flex-center overflow-hidden rounded-2xl relative",
  image: "homeImgProject cursor-pointer",
  video: "homeVidProject cursor-pointer",
  projectInfo: "flex flex-col md:gap-2 gap-1",
  subtitle: "text-xl text-gray-400",
  projectTitle: "text-5xl",
  viewAllContainer: "flex flex-col md:gap-4 gap-2",
  placeholderImage: "homeImgProject opacity-0",
  viewAllLink: "!absolute text-5xl link link--metis flex flex-center gap-2",
};

export default Next;
