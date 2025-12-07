import { useParams } from "react-router-dom";
import { projects } from "../../constants/Projects";
import { useGSAP } from "@gsap/react";
import { animateWithGsap } from "../../utils/animations";

interface Params {
  [key: string]: string | undefined;
  id: string;
}

const Credits = () => {
  const { id } = useParams<Params>();
  const project = projects.find((p) => p.id === id);

  useGSAP(() => {
    animateWithGsap(".gsap");
  }, []);

  if (!project) return null;
  return (
    <section className={style.section}>
      <div className={style.container}>
        <h2 className={style.title}>Créditos</h2>
        <div className={style.creditsContainer}>
          {Array.isArray(project?.credits) &&
            project.credits.map((credit, index) => (
              <div key={index} className={style.creditItem}>
                <p className={style.creditName}>
                  {typeof credit === "string" ? credit : credit.name}
                </p>
                <div className={style.divider}></div>
                <p className={style.creditWork}>
                  {typeof credit === "string" ? credit : credit.work}
                </p>
              </div>
            ))}
        </div>
      </div>
      {project.team && (
        <picture className={style.picture}>
          <source srcSet={`/${project.team}.webp`} type="image/webp" />
          <source srcSet={`/${project.team}.png`} type="image/png" />
          <img
            src={`/${project.team}.png`}
            className={style.image}
            loading="lazy"
          />
        </picture>
      )}
    </section>
  );
};

const style = {
  section:
    "flex lg:flex-row flex-col lg:gap-16 md:gap-11 sm:gap-6 gap-6 lg:p-0 common-py",
  container:
    "flex flex-col justify-center lg:gap-9 gap-6 lg:max-w-[600px] max-w-full w-full",
  title: "gsap text-5xl",
  creditsContainer: "flex flex-col gap-4",
  creditItem: "gsap flex items-center justify-between text-2xl text-gray gap-2",
  creditName: "flex-shrink-0",
  divider: "w-full h-[2px] bg-gray-400",
  creditWork: "flex-shrink-0",
  picture:
    "gsap lg:w-[65%] w-full lg:rounded-3xl rounded-2xl border-2 border-gray-50 overflow-hidden",
  image: "w-full h-full object-cover",
};

export default Credits;
