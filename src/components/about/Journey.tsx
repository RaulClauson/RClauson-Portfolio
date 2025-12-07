import { useGSAP } from "@gsap/react";
import { animateWithGsap } from "../../utils/animations";
import { useTranslation } from "../../i18n/useTranslation";

const Journey = () => {
  const { t } = useTranslation();
  useGSAP(() => {
    animateWithGsap(".gsapTextJourney");
    animateWithGsap(".gsapText2Journey");
    animateWithGsap(".gsapText3Journey");
  }, []);
  return (
    <section className={style.section}>
      <h2 className={style.title}>{t.about.journey.title}</h2>
      <div className={style.contentContainer}>
        <p className={style.text1}>{t.about.journey.paragraph1}</p>
        <p className={style.text1}>{t.about.journey.paragraph2}</p>
        <div className={style.division2}></div>
        <p className={style.text2}>{t.about.journey.paragraph3}</p>
        <p className={style.text2}>{t.about.journey.paragraph4}</p>
        <div className={style.division3}></div>
        <p className={style.text3}>{t.about.journey.paragraph5}</p>
        <p className={style.text3}>{t.about.journey.paragraph6}</p>
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
