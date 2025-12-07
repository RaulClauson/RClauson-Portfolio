import { useGSAP } from "@gsap/react";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);
import gsap from "gsap";
import { heroAnimateWithGsap } from "../../utils/animations";
import { ChevronDown, Pause, Play } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { heroVideo, smallHeroVideo } from "../../constants/media";
import {
  AdvancedVideo,
  AdvancedVideo as AdvancedVideoComponent,
} from "@cloudinary/react";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(heroVideo);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<AdvancedVideoComponent | null>(null); // Ref for the AdvancedVideo component

  useGSAP(() => {
    heroAnimateWithGsap(".hero");
  }, []);

  const scrollToAbout = (e: React.MouseEvent) => {
    e.preventDefault();
    gsap.to(window, {
      duration: 2,
      scrollTo: "#About",
      ease: "power4.inOut",
    });
  };

  const handleVideoClick = async () => {
    if (!videoRef.current?.videoRef.current) return;
    const video = videoRef.current.videoRef.current;

    if (document.fullscreenElement) {
      await document.exitFullscreen();
      video.style.objectFit = "cover";
      video.muted = true;
      video.controls = false;
    } else {
      video.muted = false;
      video.currentTime = 0;
      video.controls = true;
      video.style.objectFit = "contain";
      await video.requestFullscreen();
      video.play();
    }
  };

  const handlePauseButton = () => {
    if (!videoRef.current?.videoRef.current) return;
    const video = videoRef.current.videoRef.current;
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleResize = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    const handleFullscreenChange = () => {
      if (!videoRef.current?.videoRef.current) return;
      const video = videoRef.current.videoRef.current;
      if (!document.fullscreenElement) {
        video.muted = true;
        video.controls = false;
        video.style.objectFit = "cover";
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  return (
    <section id="Hero" className={style.section}>
      <div className={style.spacer}></div>
      <div id="heroVideo" className={style.videoContainer}>
        <AdvancedVideo
          ref={videoRef}
          className={style.video}
          autoPlay
          muted
          loop
          playsInline={true}
          onClick={handleVideoClick}
          cldVid={videoSrc}
        />
        <div className={style.controlButton} onClick={handlePauseButton}>
          {isPlaying ? <Pause strokeWidth={2.5} /> : <Play strokeWidth={2.5} />}
        </div>
      </div>
      <div className={style.footer}>
        <div className={style.titleContainer}>
          <p className={style.subtitle}>Desenvolvedor</p>
          <h1 className={style.title}>Front-End</h1>
        </div>
        <button onClick={scrollToAbout} className={style.scrollButton}>
          Scroll
          <ChevronDown strokeWidth={2.5} className="pointer-events-none" />
        </button>
      </div>
    </section>
  );
};

const style = {
  section: "w-full h-[100svh] common-padding flex flex-col justify-between",
  spacer: "min-h-[23px]",
  videoContainer:
    "hero relative w-full h-full common-my z-0 rounded-2xl overflow-hidden border-2 border-gray-50",
  video: "w-full h-full object-cover cursor-pointer",
  controlButton:
    "absolute bottom-3 right-3 z-10 text-gray cursor-pointer text-2xl",
  footer: "w-full flex justify-between items-end",
  titleContainer: "flex flex-col gap-2",
  subtitle: "hero text-3xl text-gray",
  title: "hero text-8xl",
  scrollButton: "hero flex gap-1 text-gray text-xl cursor-pointer",
};

export default Hero;
