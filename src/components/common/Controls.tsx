import { ChevronLeft, ChevronRight } from "lucide-react";
import { heroAnimateWithGsap } from "../../utils/animations";
import { useGSAP } from "@gsap/react";

interface ControlsProps {
  onNext: () => void;
  onPrev: () => void;
}

const Controls: React.FC<ControlsProps> = ({ onNext, onPrev }) => {
  useGSAP(() => {
    heroAnimateWithGsap(".hero");
  }, []);
  return (
    <div className={style.container}>
      <h2 className={style.title}>(2021 - 2025)</h2>
      <div className={style.buttonsContainer}>
        <button className={style.button} onClick={onPrev}>
          <ChevronLeft />
        </button>
        <button className={style.button} onClick={onNext}>
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

const style = {
  container:
    "fixed bottom-0 left-0 w-full justify-between common-padding md:flex hidden",
  title: "hero text-2xl",
  buttonsContainer: "flex gap-2",
  button: "projectsControl hero",
};

export default Controls;
