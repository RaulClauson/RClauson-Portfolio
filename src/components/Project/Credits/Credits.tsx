import { useParams } from "react-router-dom";
import { projects } from "../../../constants/Projects";
import { useGSAP } from "@gsap/react";
import { animateWithGsap } from "../../../utils/animations";

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
    <section className="flex lg:flex-row flex-col lg:gap-16 md:gap-11 sm:gap-6 gap-6 lg:p-0 common-py">
      <div className="flex flex-col justify-center lg:gap-9 gap-6 lg:max-w-[600px] max-w-full w-full">
        <h2 className="gsap text-5xl">Créditos</h2>
        <div className="flex flex-col gap-4">
          {Array.isArray(project?.credits) &&
            project.credits.map((credit, index) => (
              <div
                key={index}
                className="gsap flex items-center justify-between text-2xl text-gray gap-2"
              >
                <p className="flex-shrink-0">
                  {typeof credit === "string" ? credit : credit.name}
                </p>
                <div className="w-full h-[2px] bg-gray-400"></div>
                <p className="flex-shrink-0">
                  {typeof credit === "string" ? credit : credit.work}
                </p>
              </div>
            ))}
        </div>
      </div>
      <picture className="gsap lg:w-[65%] w-full lg:rounded-3xl rounded-2xl border-2 border-gray-50 overflow-hidden">
        <source srcSet={`/${project.team}.webp`} type="image/webp" />
        <source srcSet={`/${project.team}.png`} type="image/png" />
        <img
          src={`/${project.team}.png`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </picture>
    </section>
  );
};

export default Credits;
