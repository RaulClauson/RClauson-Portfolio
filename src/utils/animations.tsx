import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let isFirstVisitHeader = true;
let isFirstVisit = true;

export const headerAnimateWithGsap = (target: string) => {
  // Define o delay com base na variável isFirstVisit
  const delayHeader = isFirstVisitHeader ? 2.75 : 0.3;
  if (isFirstVisit) {
    gsap.to(target, {
      translateY: 0,
      translateX: 0,
      opacity: 1,
      duration: 1.5,
      delay: delayHeader,
      stagger: 0.2,
      ease: "power4.out",
      onComplete: () => {
        // Se for a primeira visita, seta a variável para false, pra que não tenha delay em próximas animações
        if (isFirstVisitHeader) {
          isFirstVisitHeader = false;
        }
      },
    });
  }
};

export const heroAnimateWithGsap = (target: string, stagger?: number) => {
  const delay = isFirstVisit ? 2.95 : 0.3;
  gsap.to(target, {
    translateY: 0,
    translateX: 0,
    opacity: 1,
    duration: 1.5,
    delay: delay,
    stagger: stagger || 0.2,
    ease: "power4.out",
    onComplete: () => {
      if (isFirstVisit) {
        isFirstVisit = false;
      }
    },
  });
};

export const heroAboutAnimateWithGsap = (target: string, target2: string) => {
  const delay = isFirstVisit ? 2.95 : 0.3;
  gsap.to(target, {
    translateY: 0,
    opacity: 1,
    duration: 1.5,
    delay: delay,
    ease: "power4.out",
    onComplete: () => {
      if (isFirstVisit) {
        isFirstVisit = false;
      }
    },
  });
  gsap.to(target2, {
    scale: 1.2,
    duration: 1.5,
    delay: delay,
    ease: "power4.out",
    onComplete: () => {
      if (isFirstVisit) {
        isFirstVisit = false;
      }
    },
  });
  gsap.to(target2, {
    scrollTrigger: {
      trigger: target2,
      start: "-10% top",
      end: "90% top",
      scrub: 2,
    },
    top: "0vh",
    scale: 1.2,
    duration: 2,
    ease: "power4.out",
  });
};

export const animateMenuOpen = (target: string) => {
  gsap.to(target, {
    transform: "translateY(50vh)",
    duration: 1.5,
    ease: "power4.out",
  });
};
export const animateMenuClose = (target: string) => {
  gsap.to(target, {
    transform: "translateY(0vh)",
    duration: 1.5,
    ease: "power4.out",
  });
};

export const animateWithGsap = (target: string) => {
  gsap.to(target, {
    translateY: 0,
    translateX: 0,
    scale: 1,
    opacity: 1,
    duration: 1.5,
    stagger: 0.2,
    ease: "power4.out",
    scrollTrigger: {
      trigger: target,
      start: "top bottom",
      toggleActions: "play none none reverse",
    },
  });
};

export const animateVideoWithGsap = (
  imgElement: HTMLImageElement,
  vidElement: HTMLVideoElement
) => {
  gsap.to(imgElement, {
    scrollTrigger: {
      trigger: imgElement,
      toggleActions: "restart none restart reverse",
      start: "top bottom",
    },
    opacity: 1,
    ease: "power2",
  });
  gsap.to(imgElement, {
    scrollTrigger: {
      trigger: imgElement,
      scrub: 2,
      start: "top bottom",
    },
    scale: 1,
    duration: 2,
    ease: "power2",
  });
  imgElement.addEventListener("mouseenter", () => {
    gsap.to(imgElement, {
      filter: "blur(25px)",
      duration: 0.5,
      ease: "power3.out",
    });
    gsap.to(vidElement, {
      filter: "blur(0px)",
      scale: 1,
      opacity: 1,
      duration: 0.5,
      ease: "power3.out",

      onStart: () => {
        vidElement.play();
        vidElement.loop = true;
      },
    });
  });
  imgElement.addEventListener("mouseleave", () => {
    gsap.to(imgElement, {
      filter: "blur(0px)",
      duration: 0.5,
      ease: "power3.out",
    });
    gsap.to(vidElement, {
      filter: "blur(25px)",
      scale: 1.5,
      opacity: 0,
      duration: 0.5,
      ease: "power3.out",

      onComplete: () => {
        vidElement.loop = false;
      },
    });
  });
};
