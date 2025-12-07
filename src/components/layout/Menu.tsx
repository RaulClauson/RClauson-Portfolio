import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "../../i18n/useTranslation";
interface MenuProps {
  menu: boolean;
  setMenu: (value: boolean) => void;
}

const Menu: React.FC<MenuProps> = ({ menu, setMenu }) => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const isActive = (path: string) => location.pathname === path;

  useGSAP(() => {
    if (menu) {
      gsap.to(".Menu", {
        top: "0vh",
        duration: 1.5,
        ease: "power4.out",
      });
    } else {
      gsap.to(".Menu", {
        top: "-100vh",
        duration: 1.5,
        ease: "power4.out",
      });
    }
  }, [menu]);

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
      setMenu(false); // Close the menu
    } else {
      gsap.to(window, {
        duration: 2,
        scrollTo: "#Footer",
        ease: "power4.inOut",
      });
      setMenu(false); // Close the menu
    }
  };

  const handleCloseMenu = () => {
    setMenu(false); // Close the menu
  };

  return (
    <div className={style.menu}>
      <ul className={style.list}>
        <li className={style.listItem}>
          <Link
            to="/"
            onClick={handleCloseMenu}
            className={`${style.link} ${isActive("/") ? style.activeLink : ""}`}
          >
            {t.menu.home}
          </Link>
        </li>
        <li className={style.listItem}>
          <Link
            to="/Projetos"
            onClick={handleCloseMenu}
            className={`${style.link} ${
              isActive("/Projetos") ? style.activeLink : ""
            }`}
          >
            {t.menu.projects}
          </Link>
        </li>
        <li className={style.listItem}>
          <Link
            to="/Sobre"
            onClick={handleCloseMenu}
            className={`${style.link} ${
              isActive("/Sobre") ? style.activeLink : ""
            }`}
          >
            {t.menu.about}
          </Link>
        </li>
        <li className={style.listItem}>
          <button
            onClick={scrollToFooter}
            className={`${style.link} ${
              isActive("/Contato") ? style.activeLink : ""
            }`}
          >
            {t.menu.contact}
          </button>
        </li>
      </ul>
      <div className={style.socialLinks}>
        <a
          href="https://www.linkedin.com/in/raul-clauson/"
          className={style.socialLink}
        >
          Linkedin
        </a>
        <a href="https://github.com/RaulClauson" className={style.socialLink}>
          Github
        </a>
      </div>
    </div>
  );
};

const style = {
  menu: "Menu",
  list: "flex flex-col flex-center gap-2",
  listItem: "overflow-hidden",
  link: "MenuLink",
  activeLink: "!text-[var(--background)]",
  socialLinks:
    "absolute bottom-0 left-0 w-full common-padding flex-center gap-6 text-3xl text-[var(--background)]",
  socialLink: "link link--metis hover:text-[var(--background)] transition-all",
};

export default Menu;
