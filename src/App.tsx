import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import useLenis from "./hooks/useLenis";
import { AnimatePresence } from "framer-motion";
import About from "./pages/About";
import { useEffect } from "react";
import Project from "./pages/Project";

interface MenuProps {
  menu: boolean;
}

const App: React.FC<MenuProps> = ({ menu }) => {
  useLenis(); // Activate Lenis smooth scrolling
  const location = useLocation();

  useEffect(() => {
    // Adiciona um pequeno delay para esperar a animação terminar
    const timeout = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 300); // Ajuste este valor de acordo com a duração da sua animação

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home menu={menu} />} />
        <Route path="/Projetos" element={<Projects />} />
        <Route path="/Projeto/:id" element={<Project menu={menu} />} />
        <Route path="/Sobre" element={<About menu={menu} />} />
        {/* <Route path="*" element={<NotFound/>} /> */}
      </Routes>
    </AnimatePresence>
  );
};
export default App;
