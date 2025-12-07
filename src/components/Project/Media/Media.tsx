import { useParams } from "react-router-dom";
import { projects } from "../../../constants/Projects";
import { useState, useRef, useLayoutEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface Params {
  [key: string]: string | undefined;
  id: string;
}

const style = {
  section: "w-full flex flex-col lg:gap-9 gap-6",
  bigVideoContainer:
    "w-full aspect-video overflow-hidden lg:rounded-3xl rounded-2xl border-2 border-gray-50",
  video: "w-full h-full object-cover",
  imagesWrapper: "flex flex-col relative",
  imagesContainer: "w-full overflow-hidden flex lg:gap-9 gap-6",
  mobilePicture:
    "w-[20%] h-fit lg:rounded-3xl rounded-2xl object-cover border-2 border-gray-50 overflow-hidden",
  desktopPicture:
    "lg:w-[calc(80%-36px)] w-[calc(80%-24px)] h-fit lg:rounded-3xl rounded-2xl object-cover border-2 border-gray-50 overflow-hidden",
  img: "w-full h-fit object-cover",
  expandButtonContainer: "common-padding lg:flex-center flex justify-center",
  expandButton:
    "w-fit text-2xl text-gray transition-all link link--metis flex items-center gap-2",
  smallVideosWrapper: "flex flex-col lg:gap-9 gap-6",
  smallVideosRow: "flex lg:flex-row flex-col lg:gap-9 gap-6 justify-center",
  smallVideoContainer:
    "w-full aspect-square overflow-hidden lg:rounded-3xl rounded-2xl border-2 border-gray-50",
};

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
      // Check if the height exceeds 300svh and we're not in mobile view
      setShowExpandButton(
        containerHeight > (300 * window.innerHeight) / 100 - 80 &&
          window.innerWidth >= 1024
      );
    }
  }, [imagesLoaded, expand]);

  if (!project) return null;

  return (
    <section id="Media" className={style.section}>
      <div className={style.bigVideoContainer}>
        <video className={style.video} autoPlay muted loop playsInline={true}>
          <source src={`/media/${project.id}/big1.webm`} type="video/webm" />
          <source src={`/media/${project.id}/big1.mp4`} type="video/mp4" />
        </video>
      </div>
      <div className={style.imagesWrapper}>
        <div
          ref={imagesContainerRef} // Attach the ref to this div
          className={`${style.imagesContainer} ${
            expand ? "h-fit" : "lg:max-h-[300svh] h-fit"
          }`}
        >
          <picture className={style.mobilePicture}>
            <source
              src={`/media/${project.id}/mobile.webp`}
              type="image/webp"
            />
            <source src={`/media/${project.id}/mobile.png`} type="image/png" />
            <img
              src={`/media/${project.id}/mobile.png`}
              className={style.img}
              loading="lazy"
              alt="Landing page"
              onLoad={handleImageLoad}
            />
          </picture>
          <picture className={style.desktopPicture}>
            <source src={`/media/${project.id}/desk.webp`} type="image/webp" />
            <source src={`/media/${project.id}/desk.png`} type="image/png" />
            <img
              src={`/media/${project.id}/desk.png`}
              className={style.img}
              alt="Landing page"
              onLoad={handleImageLoad}
              loading="lazy"
            />
          </picture>
        </div>
        {showExpandButton && (
          <div className={style.expandButtonContainer}>
            <button
              onClick={() => {
                setExpand(!expand);
              }}
              className={style.expandButton}
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
      <div className={style.bigVideoContainer}>
        <video className={style.video} autoPlay muted loop playsInline={true}>
          <source src={`/media/${project.id}/big2.webm`} type="video/webm" />
          <source src={`/media/${project.id}/big2.mp4`} type="video/mp4" />
        </video>
      </div>
      <div className={style.smallVideosWrapper}>
        <div className={style.smallVideosRow}>
          <div className={style.smallVideoContainer}>
            <video
              className={style.video}
              autoPlay
              muted
              loop
              playsInline={true}
            >
              <source
                src={`/media/${project.id}/small1.webm`}
                type="video/webm"
              />
              <source
                src={`/media/${project.id}/small1.mp4`}
                type="video/mp4"
              />
            </video>
          </div>
          <div className={style.smallVideoContainer}>
            <video
              className={style.video}
              autoPlay
              muted
              loop
              playsInline={true}
            >
              <source
                src={`/media/${project.id}/small2.webm`}
                type="video/webm"
              />
              <source
                src={`/media/${project.id}/small2.mp4`}
                type="video/mp4"
              />
            </video>
          </div>
        </div>
        <div className={style.smallVideosRow}>
          <div className={style.smallVideoContainer}>
            <video
              className={style.video}
              autoPlay
              muted
              loop
              playsInline={true}
            >
              <source
                src={`/media/${project.id}/small3.webm`}
                type="video/webm"
              />
              <source
                src={`/media/${project.id}/small3.mp4`}
                type="video/mp4"
              />
            </video>
          </div>
          <div className={style.smallVideoContainer}>
            <video
              className={style.video}
              autoPlay
              muted
              loop
              playsInline={true}
            >
              <source
                src={`/media/${project.id}/small4.webm`}
                type="video/webm"
              />
              <source
                src={`/media/${project.id}/small4.mp4`}
                type="video/mp4"
              />
            </video>
          </div>
        </div>
        <div className={style.bigVideoContainer}>
          <video className={style.video} autoPlay muted loop playsInline={true}>
            <source src={`/media/${project.id}/big3.webm`} type="video/webm" />
            <source src={`/media/${project.id}/big3.mp4`} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default Media;
