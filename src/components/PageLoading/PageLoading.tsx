import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import CountUp from "./CountUp";
import RiveLogoAnimation from "../RiveLogoAnimation";

const PageLoading = () => {
  useGSAP(() => {
    gsap.to("#PageLoading", {
      top: "-100vh",
      duration: 2,
      delay: 1.5,
      ease: "power4.inOut",
    });
  }, []);

  return (
    <section
      id="PageLoading"
      className="bg-[var(--color)] fixed top-0 left-0 w-full h-full flex-center z-50"
    >
      <div className="w-[300px] mb-12">
        <RiveLogoAnimation />
      </div>
      <CountUp
        from={0}
        to={100}
        separator=","
        direction="up"
        duration={1}
        className="count-up-text text-[var(--background)] text-8xl absolute left-0 bottom-0 common-padding"
      />
    </section>
  );
};

export default PageLoading;
