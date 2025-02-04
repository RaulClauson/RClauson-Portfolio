import { Analytics } from "@vercel/analytics/react";
import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Header from "./components/Header/Header.tsx";
import PageLoading from "./components/PageLoading/PageLoading.tsx";
import CustomCursor from "./components/CustomCursor/CustomCursor.tsx";
import { BrowserRouter } from "react-router-dom";
import Menu from "./components/Menu/Menu.tsx";

export function Root() {
  /*   const location = useLocation(); */
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const handleOrientationChange = () => {
      window.location.reload();
    };

    window.addEventListener("orientationchange", handleOrientationChange);
    return () =>
      window.removeEventListener("orientationchange", handleOrientationChange);
  }, []);

  return (
    <>
      <PageLoading />
      <CustomCursor />
      <Header menu={menu} setMenu={setMenu} />
      <Menu menu={menu} setMenu={setMenu} />
      <App menu={menu} />
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
