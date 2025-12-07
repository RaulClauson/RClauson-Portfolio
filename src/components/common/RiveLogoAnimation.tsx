import { useRive, useStateMachineInput } from "@rive-app/react-canvas";
import { useEffect, useState } from "react";

const RiveLogoAnimation = () => {
  const STATE_MACHINE_NAME = "State Machine 1"; // Nome da sua State Machine
  const INPUT_NAME = "Number"; // Nome da entrada usada no Rive

  const { rive, RiveComponent } = useRive({
    src: "/rive/LogoAnimation.riv", // Substitua pelo caminho do arquivo .riv
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

      setIsCooldown(true);
      setTimeout(() => {
        setIsCooldown(false); // Reativar após 2 segundos
      }, 2000);
    }
  };

  useEffect(() => {
    if (numberInput) {
      // Define um valor aleatório entre 1 e 3 para `animationNumber`
      const randomAnimation = Math.floor(Math.random() * 3) + 1; // Gera 1, 2 ou 3
      numberInput.value = randomAnimation; // Atualiza o input no Rive
    }
  }, [numberInput]); // Executa apenas na montagem

  return (
    <RiveComponent
      className="w-full aspect-[19/4] mix-blend-difference"
      onMouseEnter={handleMouseEnter}
    />
  );
};

export default RiveLogoAnimation;
