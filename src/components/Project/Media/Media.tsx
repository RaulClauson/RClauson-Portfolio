import { useParams } from "react-router-dom";
import { projects } from "../../../constants/Projects";
import { useState, useRef, useLayoutEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { AdvancedImage, AdvancedVideo } from "@cloudinary/react";

interface Params {
  [key: string]: string | undefined;
  id: string;
}

const Media = () => {
  const { id } = useParams<Params>();
  const project = projects.find((p) => p.id === id);

  const [expand, setExpand] = useState(false);
  const [showExpandButton, setShowExpandButton] = useState(false); // New state for the button
  const imagesContainerRef = useRef<HTMLDivElement>(null); // Reference for the images' container
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const handleImageLoad = () => {
    setImagesLoaded(true);
  };

  useLayoutEffect(() => {
    if (imagesLoaded && imagesContainerRef.current) {
      const containerHeight = imagesContainerRef.current.offsetHeight;
      // Check if the height exceeds 300svh, taking into consideration the header height.
      setShowExpandButton(
        containerHeight > (300 * window.innerHeight) / 100 - 80 ||
          window.innerWidth < 1024
      );
    }
  }, [imagesLoaded, expand]);

  if (!project) return null;

  return (
    <section id="Media" className="w-full flex flex-col lg:gap-9 gap-6">
      <div className="w-full aspect-video overflow-hidden lg:rounded-3xl rounded-2xl border-2 border-gray-50">
        <AdvancedVideo
          cldVid={project.big1}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline={true}
        />
      </div>
      <div className="flex flex-col relative">
        <div
          ref={imagesContainerRef} // Attach the ref to this div
          className={`w-full ${
            expand ? "h-fit" : "lg:max-h-[300svh] h-fit"
          } overflow-hidden flex lg:gap-9 gap-6`}
        >
          <AdvancedImage
            className="w-[20%] h-fit lg:rounded-3xl rounded-2xl object-cover border-2 border-gray-50"
            cldImg={project.mobile}
            alt="Landing page"
            onLoad={handleImageLoad}
          />
          <AdvancedImage
            className="lg:w-[calc(80%-36px)] w-[calc(80%-24px)] h-fit lg:rounded-3xl rounded-2xl object-cover border-2 border-gray-50"
            cldImg={project.desk}
            alt="Landing page"
            onLoad={handleImageLoad}
          />
        </div>
        {showExpandButton && (
          <div className="common-padding lg:flex-center flex justify-center">
            <button
              onClick={() => {
                setExpand(!expand);
              }}
              className="w-fit text-2xl text-gray transition-all link link--metis flex items-center gap-2"
            >
              {expand ? (
                <>
                  Minimizar <ChevronUp strokeWidth={2.5} />
                </>
              ) : (
                <>
                  Expandir <ChevronDown strokeWidth={2.5} />
                </>
              )}
            </button>
          </div>
        )}
      </div>
      <div className="w-full aspect-video overflow-hidden lg:rounded-3xl rounded-2xl border-2 border-gray-50">
        <AdvancedVideo
          cldVid={project.big2}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline={true}
        />
      </div>
      <div className="flex flex-col lg:gap-9 gap-6">
        <div className="flex lg:flex-row flex-col lg:gap-9 gap-6">
          <div className="w-full aspect-square overflow-hidden lg:rounded-3xl rounded-2xl border-2 border-gray-50">
            <AdvancedVideo
              cldVid={project.small1}
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline={true}
            />
          </div>
          <div className="w-full aspect-square overflow-hidden lg:rounded-3xl rounded-2xl border-2 border-gray-50">
            <AdvancedVideo
              cldVid={project.small2}
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline={true}
            />
          </div>
        </div>
        <div className="flex lg:flex-row flex-col lg:gap-9 gap-6">
          <div className="w-full aspect-square overflow-hidden lg:rounded-3xl rounded-2xl border-2 border-gray-50">
            <AdvancedVideo
              cldVid={project.small3}
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline={true}
            />
          </div>
          <div className="w-full aspect-square overflow-hidden lg:rounded-3xl rounded-2xl border-2 border-gray-50">
            <AdvancedVideo
              cldVid={project.small4}
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline={true}
            />
          </div>
        </div>
        <div className="w-full aspect-video overflow-hidden lg:rounded-3xl rounded-2xl border-2 border-gray-50">
          <AdvancedVideo
            cldVid={project?.big3}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Media;
