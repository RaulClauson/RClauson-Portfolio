import { createContext, useState, ReactNode, useEffect } from "react";
import { pt, Translations } from "./pt";
import { en } from "./en";

type Language = "pt" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Get initial language from localStorage or default to 'pt'
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("language");
    return (saved === "pt" || saved === "en" ? saved : "pt") as Language;
  });

  const translations = {
    pt,
    en,
  };

  // Persist language to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
