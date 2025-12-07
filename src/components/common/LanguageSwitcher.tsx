import { useTranslation } from "../../i18n/useTranslation";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useTranslation();

  return (
    <div className={style.container}>
      <button
        onClick={() => setLanguage("pt")}
        className={`${style.button} ${language === "pt" && style.active}`}
        title="Mudar para Português"
      >
        PT
      </button>
      <button
        onClick={() => setLanguage("en")}
        className={`${style.button} ${language === "en" && style.active}`}
        title="Switch to English"
      >
        EN
      </button>
    </div>
  );
};

const style = {
  container: "flex flex-center gap-2 bg-gray-50 px-2 py-1 rounded-sm gsap-item",
  button:
    "gsap-item flex items-center gap-2 text-sm font-medium hover:opacity-80 transition-opacity cursor-pointer px-1 rounded-sm",
  active: "bg-text text-background",
};

export default LanguageSwitcher;
