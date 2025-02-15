import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link, useLocation, useNavigate } from "react-router-dom";
interface MenuProps {
  menu: boolean;
  setMenu: (value: boolean) => void;
}

const Menu: React.FC<MenuProps> = ({ menu, setMenu }) => {
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
    <div className="Menu">
      <ul className="flex flex-col flex-center gap-2">
        <li className="overflow-hidden">
          <Link
            to="/"
            onClick={handleCloseMenu}
            className={`MenuLink ${
              isActive("/") ? "!text-[var(--background)]" : ""
            }`}
          >
            Início
          </Link>
        </li>
        <li className="overflow-hidden">
          <Link
            to="/Projetos"
            onClick={handleCloseMenu}
            className={`MenuLink ${
              isActive("/Projetos") ? "!text-[var(--background)]" : ""
            }`}
          >
            Projetos
          </Link>
        </li>
        <li className="overflow-hidden">
          <Link
            to="/Sobre"
            onClick={handleCloseMenu}
            className={`MenuLink ${
              isActive("/Sobre") ? "!text-[var(--background)]" : ""
            }`}
          >
            Sobre
          </Link>
        </li>
        <li className="overflow-hidden">
          <button
            onClick={scrollToFooter}
            className={`MenuLink ${
              isActive("/Contato") ? "!text-[var(--background)]" : ""
            }`}
          >
            Contato
          </button>
        </li>
      </ul>
      <div className="absolute bottom-0 left-0 w-full common-padding flex-center gap-6 text-3xl text-[var(--background)]">
        <a
          href="https://www.linkedin.com/in/raul-clauson/"
          className="link link--metis hover:text-[var(--background)] transition-all"
        >
          Linkedin
        </a>
        <a
          href="https://github.com/RaulClauson"
          className="link link--metis hover:text-[var(--background)] transition-all"
        >
          Github
        </a>
      </div>
    </div>
  );
};

export default Menu;
