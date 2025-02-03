import { useRive, useStateMachineInput } from "@rive-app/react-canvas";
import { ChevronUp } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);
import gsap from "gsap";

const Footer = () => {
  const STATE_MACHINE_NAME = "State Machine 1"; // Nome da sua State Machine
  const INPUT_NAME = "Number"; // Nome da entrada usada no Rive

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

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    gsap.to(window, {
      duration: 2,
      scrollTo: 0,
      ease: "power4.inOut",
    });
  };

  return (
    <footer
      id="Footer"
      className="w-full h-[80svh] common-padding bg-gray-50 flex flex-col justify-between"
    >
      <div className="flex justify-between sm:flex-row flex-col gap-6">
        <div className="flex sm:gap-24 gap-12">
          <ul className="text-3xl flex flex-col lg:gap-2 gap-0">
            <li className="md:mb-2 mb-1">Sitemap</li>
            <li>
              <Link
                to="/"
                className="text-gray-400 link link--metis hover:text-[var(--color)] transition-all"
              >
                Início
              </Link>
            </li>
            <li>
              <Link
                to="/Projetos"
                className="text-gray-400 link link--metis hover:text-[var(--color)] transition-all"
              >
                Projetos
              </Link>
            </li>
            <li>
              <Link
                to="/Sobre"
                className="text-gray-400 link link--metis hover:text-[var(--color)] transition-all"
              >
                Sobre
              </Link>
            </li>
          </ul>
          <ul className="text-3xl flex flex-col lg:gap-2 gap-0">
            <li className="md:mb-2 mb-1">Redes</li>
            <li>
              <a
                href="https://www.linkedin.com/in/raul-clauson/"
                className="text-gray-400 link link--metis hover:text-[var(--color)] transition-all"
              >
                Linkedin
              </a>
            </li>
            <li>
              <a
                href="https://github.com/RaulClauson"
                className="text-gray-400 link link--metis hover:text-[var(--color)] transition-all"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
        <ul className="text-3xl flex flex-col sm:items-end items-start lg:gap-2 gap-0">
          <li className="md:mb-2 mb-1">Contato</li>
          <li>
            <a
              href="mailto:rclauson141@gmail.com"
              className="text-gray-400 link link--metis hover:text-[var(--color)] transition-all"
            >
              rclauson141@gmail.com
            </a>
          </li>
        </ul>
      </div>
      <div className="w-full flex justify-between items-end gap-6">
        <RiveComponent
          className="sm:w-[500px] w-full sm:h-[115px] h-auto sm:aspect-auto aspect-[19/4] cursor-pointer mix-blend-difference"
          onMouseEnter={handleMouseEnter}
        />
        <a
          href="#"
          className="text-2xl link link--metis flex flex-center flex-shrink-0 md:gap-2 gap-0"
          onClick={scrollToTop}
        >
          Voltar <ChevronUp strokeWidth={2.5} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
