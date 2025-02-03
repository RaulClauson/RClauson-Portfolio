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
    <div className="fixed bottom-0 left-0 w-full justify-between common-padding md:flex hidden">
      <h2 className="hero text-2xl">Codando - 2021/2025</h2>
      <div className="flex gap-2">
        <button className="projectsControl hero" onClick={onPrev}>
          <ChevronLeft />
        </button>
        <button className="projectsControl hero" onClick={onNext}>
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Controls;
