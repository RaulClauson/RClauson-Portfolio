import { Analytics } from "@vercel/analytics/react";
import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Header from "./components/layout/Header.tsx";
import PageLoading from "./components/common/PageLoading.tsx";
import CustomCursor from "./components/common/CustomCursor.tsx";
import { BrowserRouter } from "react-router-dom";
import Menu from "./components/layout/Menu.tsx";
import { LanguageProvider } from "./i18n/LanguageContext.tsx";

export function Root() {
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
    <LanguageProvider>
      <BrowserRouter>
        <Root />
        <Analytics />
      </BrowserRouter>
    </LanguageProvider>
  </StrictMode>
);
