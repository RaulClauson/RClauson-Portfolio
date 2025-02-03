import React, { useEffect, useRef, useState } from "react";
import Lenis from "@studio-freight/lenis";
import { projects } from "../constants/Projects";
import { useGSAP } from "@gsap/react";
import { animateVideoWithGsap, heroAnimateWithGsap } from "../utils/animations";
import Controls from "../components/Projects/Controls";
import { motion as m } from "framer-motion";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";
import { AdvancedImage, AdvancedVideo } from "@cloudinary/react";

const Projects: React.FC = () => {
  const imgRefs = useRef<React.RefObject<AdvancedImage>[]>([]);
  const vidRefs = useRef<React.RefObject<AdvancedVideo>[]>([]);
  const lenisRef = useRef<Lenis | null>(null); // Ref for Lenis instance
  const [gridItemWidth, setGridItemWidth] = useState(0); // State to store grid item width
  const [displayProjects, setDisplayProjects] = useState(projects);

  // Initialize refs dynamically based on project count
  if (imgRefs.current.length === 0) {
    projects.forEach(() => {
      imgRefs.current.push(React.createRef());
      vidRefs.current.push(React.createRef());
    });
  }

  useGSAP(() => {
    const setupAnimations = () => {
      const gridItems = document.querySelectorAll(".project-item");
      gridItems.forEach((projectItem) => {
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
      heroAnimateWithGsap(".hero", 0.1);
    };

    // Add a small delay before setting up animations
    setTimeout(setupAnimations, 100); // Adjust delay as needed
  }, []);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    if (!isMobile) {
      const lenis = new Lenis({
        smoothWheel: true,
        infinite: isMobile ? false : true,
        orientation: isMobile ? "vertical" : "horizontal",
        gestureOrientation: "both",
      });

      lenisRef.current = lenis; // Save instance

      lenis.scrollTo(0);

      const raf = (time: number) => {
        lenis.raf(time);
        requestAnimationFrame(raf);
      };

      requestAnimationFrame(raf);

      const repeatedProjects = [
        ...projects,
        ...projects.slice(0, projects.length - 1), // Exclude last item
      ];
      setDisplayProjects(repeatedProjects);

      const gridElement = document.querySelector(".grid") as HTMLElement;
      if (gridElement) {
        // Set the grid item width once the component mounts
        const gridItem = gridElement.querySelector(".gridItem") as HTMLElement;
        if (gridItem) {
          setGridItemWidth(gridItem.getBoundingClientRect().width); // Get width dynamically
        }
      }

      return () => {
        lenis.destroy();
      };
    } else {
      setDisplayProjects(projects); // Use original array on mobile
    }
  }, []);

  const scrollForward = () => {
    if (lenisRef.current && gridItemWidth > 0) {
      const currentScroll = lenisRef.current.scroll; // Get current scroll position
      const newScrollAmount = currentScroll + gridItemWidth; // Use grid item width for scroll
      lenisRef.current.scrollTo(newScrollAmount); // Scroll by grid item width
      console.log("Scroll forward to:", newScrollAmount);
    }
  };

  const scrollBackward = () => {
    if (lenisRef.current && gridItemWidth > 0) {
      const currentScroll = lenisRef.current.scroll; // Get current scroll position
      const newScrollAmount = currentScroll - gridItemWidth; // Use grid item width for scroll
      lenisRef.current.scrollTo(newScrollAmount); // Scroll back by grid item width
      console.log("Scroll backward to:", newScrollAmount);
    }
  };

  return (
    <m.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="page md:h-[100vh] h-auto w-full md:flex block !justify-center lg:pt-0 md:pt-9 sm:pt-6 pt-6"
    >
      <div className="md:h-[65vh] h-auto w-full md:auto-cols-[23.5vw] auto-cols-auto md:grid-flow-col grid-flow-row md:gap-[2vw] gap-[4vh] md:p-0 common-padding md:m-0 common-my grid">
        {displayProjects.map((project, index) => (
          <Link
            to={`/Projeto/${project.id}`}
            key={`${project.id}-${index}`} // Ensure unique keys
            className="hero gridItem h-full flex flex-col md:gap-2 gap-1 project-item"
          >
            <div className="h-full flex flex-center overflow-hidden rounded-2xl relative">
              <AdvancedImage
                cldImg={project.image}
                alt={project.title}
                className="homeImgProject cursor-pointer"
              />
              <AdvancedVideo
                cldVid={project.video}
                className="homeVidProject cursor-pointer"
                preload="none"
                muted
                autoPlay
              />
            </div>
            <div className="flex flex-col md:gap-1 gap-0">
              <p className="text-xl text-gray-400">{project.subtitle}</p>
              <h2 className="text-3xl">{project.title}</h2>
            </div>
          </Link>
        ))}
      </div>
      <Controls onNext={scrollForward} onPrev={scrollBackward} />
      <div className="md:hidden block">
        <Footer />
      </div>
    </m.main>
  );
};

export default Projects;
