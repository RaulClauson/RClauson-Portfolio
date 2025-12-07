import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { headerAnimateWithGsap } from "../../utils/animations";
import { AlignJustify, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import RiveLogoAnimation from "../RiveLogoAnimation";

interface MenuProps {
  menu: boolean;
  setMenu: (value: boolean) => void;
}

const Header: React.FC<MenuProps> = ({ menu, setMenu }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const lastScrollY = useRef(0);

  useGSAP(() => {
    headerAnimateWithGsap(".header");
  }, []);

  const isNavVisible = useRef(true);

  // Animação de scroll do header
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Scrolling down
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        if (isNavVisible.current) {
          gsap.to(".gsap-item", {
            y: "-500%",
            stagger: 0.1,
            duration: 0.6,
            ease: "power1.in",
            overwrite: true,
          });

          isNavVisible.current = false;
        }
      }
      // Scrolling up
      else if (currentScrollY < lastScrollY.current) {
        if (!isNavVisible.current) {
          gsap.to(".gsap-item", {
            y: "0%",
            stagger: 0.1,
            duration: 0.6,
            ease: "power1.out",
            overwrite: true,
          });
          isNavVisible.current = true;
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    } else {
      gsap.to(window, {
        duration: 2,
        scrollTo: "#Footer",
        ease: "power4.inOut",
      });
    }
  };

  return (
    <header className="header fixed top-0 left-0 w-full common-padding z-50 mix-blend-difference text-white">
      <nav className="navbar">
        <Link
          to="/"
          className="w-[167px] h-[23px] gsap-item cursor-pointer"
          onClick={() => setMenu(false)}
        >
          <RiveLogoAnimation />
        </Link>
        <div className="gap-12 sm:flex hidden">
          <Link to="/Projetos" className="link link--metis gsap-item">
            Projetos
          </Link>
          <Link to="/Sobre" className="link link--metis gsap-item">
            Sobre
          </Link>
        </div>
        <button
          onClick={scrollToFooter}
          className="lg:w-[167px] w-auto justify-end cursor-pointer sm:flex hidden gsap-item"
        >
          Contato
        </button>
        <button
          className="flex-center gap-1 sm:hidden flex gsap-item"
          onClick={() => setMenu(!menu)}
        >
          {menu ? (
            <X size={26} strokeWidth={2.5} />
          ) : (
            <AlignJustify size={26} strokeWidth={2.5} />
          )}
        </button>
      </nav>
    </header>
  );
};

export default Header;
