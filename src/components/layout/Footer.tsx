import { ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);
import gsap from "gsap";
import RiveLogoAnimation from "../common/RiveLogoAnimation";

const Footer = () => {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    gsap.to(window, {
      duration: 2,
      scrollTo: 0,
      ease: "power4.inOut",
    });
  };

  return (
    <footer id="Footer" className={style.footer}>
      <div className={style.topSection}>
        <div className={style.linksContainer}>
          <ul className={style.list}>
            <li className={style.listTitle}>Sitemap</li>
            <li>
              <Link to="/" className={style.link}>
                Início
              </Link>
            </li>
            <li>
              <Link to="/Projetos" className={style.link}>
                Projetos
              </Link>
            </li>
            <li>
              <Link to="/Sobre" className={style.link}>
                Sobre
              </Link>
            </li>
          </ul>
          <ul className={style.list}>
            <li className={style.listTitle}>Redes</li>
            <li>
              <a
                href="https://www.linkedin.com/in/raul-clauson/"
                className={style.link}
              >
                Linkedin
              </a>
            </li>
            <li>
              <a href="https://github.com/RaulClauson" className={style.link}>
                Github
              </a>
            </li>
          </ul>
        </div>
        <ul className={style.contactList}>
          <li className={style.listTitle}>Contato</li>
          <li>
            <a href="mailto:rclauson141@gmail.com" className={style.link}>
              rclauson141@gmail.com
            </a>
          </li>
        </ul>
      </div>
      <div className={style.bottomSection}>
        <Link to="/" className={style.logoLink}>
          <RiveLogoAnimation />
        </Link>
        <a href="#" className={style.scrollTopButton} onClick={scrollToTop}>
          Voltar <ChevronUp strokeWidth={2.5} />
        </a>
      </div>
    </footer>
  );
};

const style = {
  footer:
    "w-full h-[80svh] common-padding bg-gray-50 flex flex-col justify-between",
  topSection: "flex justify-between sm:flex-row flex-col gap-6",
  linksContainer: "flex sm:gap-24 gap-12",
  list: "text-3xl flex flex-col lg:gap-2 gap-0",
  listTitle: "md:mb-2 mb-1",
  link: "text-gray-400 link link--metis hover:text-[var(--color)] transition-all",
  contactList: "text-3xl flex flex-col sm:items-end items-start lg:gap-2 gap-0",
  bottomSection: "w-full flex justify-between items-end gap-6",
  logoLink: "sm:w-[500px] w-full sm:h-[115px] cursor-pointer",
  scrollTopButton:
    "text-2xl link link--metis flex flex-center flex-shrink-0 md:gap-2 gap-0",
};

export default Footer;
