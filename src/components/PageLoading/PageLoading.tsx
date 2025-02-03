import { useEffect } from "react";
import { useRive, useStateMachineInput } from "@rive-app/react-canvas";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import CountUp from "./CountUp";

const PageLoading = () => {
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

  useEffect(() => {
    if (numberInput) {
      // Define um valor aleatório entre 1 e 3 para `animationNumber`
      const randomAnimation = Math.floor(Math.random() * 3) + 1; // Gera 1, 2 ou 3
      numberInput.value = randomAnimation; // Atualiza o input no Rive
    }
  }, [numberInput]); // Executa apenas na montagem

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
      <RiveComponent
        style={{
          width: 300,
          height: 300,
          color: "black",
          mixBlendMode: "difference",
        }}
      />
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
