import { useGSAP } from "@gsap/react";
import { animateWithGsap } from "../../utils/animations";

const Journey = () => {
  useGSAP(() => {
    animateWithGsap(".gsapTextJourney");
    animateWithGsap(".gsapText2Journey");
    animateWithGsap(".gsapText3Journey");
  }, []);
  return (
    <section className={style.section}>
      <h2 className={style.title}>Jornada</h2>
      <div className={style.contentContainer}>
        <p className={style.text1}>
          Minha jornada no mundo da tecnologia começou na ETEC Jorge Street,
          onde o Ensino Médio Integrado ao Técnico me abriu as portas para a
          programação.
        </p>
        <p className={style.text1}>
          Foi lá que descobri a magia de transformar ideias em interfaces que
          realmente conectam com as pessoas.
        </p>
        <div className={style.division2}></div>
        <p className={style.text2}>
          Atualmente, estou aprofundando meus conhecimentos em Análise e
          Desenvolvimento de Sistemas, buscando dominar as últimas tecnologias e
          tendências do Front-End.
        </p>
        <p className={style.text2}>
          Acredito que a constante evolução nesse campo é fundamental para criar
          soluções inovadoras e impactantes.
        </p>
        <div className={style.division3}></div>
        <p className={style.text3}>
          Busco sempre aprimorar minhas habilidades para construir interfaces
          que sejam não só esteticamente agradáveis, mas também intuitivas e
          fáceis de usar.
        </p>
        <p className={style.text3}>
          A tecnologia tem o poder de transformar a vida das pessoas, e quero
          contribuir para esse futuro através de projetos que realmente façam a
          diferença.
        </p>
      </div>
    </section>
  );
};

const style = {
  section: "flex justify-between common-padding lg:flex-row flex-col gap-9",
  title: "gsapTextJourney titleAbout",
  contentContainer: "common-py max-w-[970px] flex flex-col gap-9",
  text1: "gsapTextJourney textAbout",
  division2: "gsapText2Journey division",
  text2: "gsapText2Journey textAbout",
  division3: "gsapText3Journey division",
  text3: "gsapText3Journey textAbout",
};

export default Journey;
