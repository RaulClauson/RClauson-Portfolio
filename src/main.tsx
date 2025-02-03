import { Analytics } from "@vercel/analytics/react";
import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Header from "./components/Header/Header.tsx";
import PageLoading from "./components/PageLoading/PageLoading.tsx";
import CustomCursor from "./components/CustomCursor/CustomCursor.tsx";
/* import Footer from "./components/Footer/Footer.tsx"; */
import { BrowserRouter /* useLocation */ } from "react-router-dom";
import Menu from "./components/Menu/Menu.tsx";

export function Root() {
  /*   const location = useLocation(); */
  const [menu, setMenu] = useState(false);

  /*   // Define the paths where you don't want the footer
  const pathsWithoutFooter = ["/Projetos", "/Projeto"]; */

  return (
    <>
      <PageLoading />
      <CustomCursor />
      <Header menu={menu} setMenu={setMenu} />
      <Menu menu={menu} setMenu={setMenu} />
      <App menu={menu} />
      {/* Only render the footer if the current path is not in the excluded list */}
      {/*       {!pathsWithoutFooter.includes(location.pathname) && <Footer />} */}
    </>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Root />
      <Analytics />
    </BrowserRouter>
  </StrictMode>
);
