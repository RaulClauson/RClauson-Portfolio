import { useParams } from "react-router-dom";
import { projects } from "../../../constants/Projects";
import { useGSAP } from "@gsap/react";
import { animateWithGsap } from "../../../utils/animations";
import { AdvancedImage } from "@cloudinary/react";

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
      <AdvancedImage
        cldImg={project.team}
        className="gsap lg:w-[65%] w-full lg:rounded-3xl rounded-2xl border-2 border-gray-50"
        alt=""
      />
    </section>
  );
};

export default Credits;
