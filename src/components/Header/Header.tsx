import { useRive, useStateMachineInput } from "@rive-app/react-canvas";
import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { headerAnimateWithGsap } from "../../utils/animations";
import { AlignJustify, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

interface MenuProps {
  menu: boolean;
  setMenu: (value: boolean) => void;
}

const Header: React.FC<MenuProps> = ({ menu, setMenu }) => {
  const STATE_MACHINE_NAME = "State Machine 1"; // Nome da sua State Machine
  const INPUT_NAME = "Number"; // Nome da entrada usada no Rive
  const location = useLocation();
  const navigate = useNavigate();

  const { rive, RiveComponent } = useRive({
    src: "/rive/Animation_white.riv", // Substitua pelo caminho do arquivo .riv
    stateMachines: STATE_MACHINE_NAME,
    autoplay: true,
  });

  // Controlar o input "Number" da State Machine
  const numberInput = useStateMachineInput(
    rive,
    STATE_MACHINE_NAME,
    INPUT_NAME
  );

  // Estado para controlar a ativação do random value
  const [isCooldown, setIsCooldown] = useState(false);
  const [lastValue, setLastValue] = useState<number | null>(null);

  const handleMouseEnter = () => {
    if (numberInput && !isCooldown) {
      let randomValue: number;

      // Gerar um novo valor que seja diferente do último
      do {
        randomValue = Math.floor(Math.random() * 3) + 1; // Random value between 1 and 3
      } while (randomValue === lastValue);

      numberInput.value = randomValue; // Atualizar o valor no Rive
      setLastValue(randomValue); // Armazenar o novo valor como último gerado

      setIsCooldown(true); // Ativar cooldown
      setTimeout(() => {
        setIsCooldown(false); // Reativar após 2 segundos
      }, 2000);
    }
  };

  useGSAP(() => {
    headerAnimateWithGsap(".header");
  }, []);

  const scrollToFooter = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === "/Projetos") {
      navigate("/");
      setTimeout(() => {
        gsap.to(window, {
          duration: 2,
          scrollTo: "#Footer",
          ease: "power4.inOut",
        });
      }, 400);
    } else {
      gsap.to(window, {
        duration: 2,
        scrollTo: "#Footer",
        ease: "power4.inOut",
      });
    }
  };

  return (
    <header className="header fixed top-0 left-0 w-full common-padding z-50 mix-blend-difference text-white">
      <nav className="navbar">
        <Link to="/">
          <RiveComponent
            className="w-[167px] h-[23px] cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onClick={() => setMenu(false)}
          />
        </Link>
        <div className="gap-12 sm:flex hidden">
          <Link to="/Projetos" className="link link--metis">
            Projetos
          </Link>
          <Link to="/Sobre" className="link link--metis">
            Sobre
          </Link>
        </div>
        <button
          onClick={scrollToFooter}
          className="lg:w-[167px] w-auto justify-end cursor-pointer sm:flex hidden"
        >
          Contato
        </button>
        <button
          className="flex-center gap-1 sm:hidden flex"
          onClick={() => setMenu(!menu)}
        >
          {menu ? (
            <X size={26} strokeWidth={2.5} />
          ) : (
            <AlignJustify size={26} strokeWidth={2.5} />
          )}
        </button>
      </nav>
    </header>
  );
};

export default Header;
