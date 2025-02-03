import { useGSAP } from "@gsap/react";
import { animateWithGsap } from "../../../utils/animations";

const Journey = () => {
  useGSAP(() => {
    animateWithGsap(".gsapTextJourney");
    animateWithGsap(".gsapText2Journey");
    animateWithGsap(".gsapText3Journey");
  }, []);
  return (
    <section className="flex justify-between common-padding lg:flex-row flex-col gap-9">
      <h2 className="gsapTextJourney titleAbout">Jornada</h2>
      <div className="common-py max-w-[970px] flex flex-col gap-9">
        <p className="gsapTextJourney textAbout">
          Minha jornada no mundo da tecnologia começou na ETEC Jorge Street,
          onde o Ensino Médio Integrado ao Técnico me abriu as portas para a
          programação.
        </p>
        <p className="gsapTextJourney textAbout">
          Foi lá que descobri a magia de transformar ideias em interfaces que
          realmente conectam com as pessoas.
        </p>
        <div className="gsapText2Journey division"></div>
        <p className="gsapText2Journey textAbout">
          Atualmente, estou aprofundando meus conhecimentos em Análise e
          Desenvolvimento de Sistemas, buscando dominar as últimas tecnologias e
          tendências do Front-End.
        </p>
        <p className="gsapText2Journey textAbout">
          Acredito que a constante evolução nesse campo é fundamental para criar
          soluções inovadoras e impactantes.
        </p>
        <div className="gsapText3Journey division"></div>
        <p className="gsapText3Journey textAbout">
          Busco sempre aprimorar minhas habilidades para construir interfaces
          que sejam não só esteticamente agradáveis, mas também intuitivas e
          fáceis de usar.
        </p>
        <p className="gsapText3Journey textAbout">
          A tecnologia tem o poder de transformar a vida das pessoas, e quero
          contribuir para esse futuro através de projetos que realmente façam a
          diferença.
        </p>
      </div>
    </section>
  );
};

export default Journey;
