import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("id");

  const translations = {
    id: {
      contact: "Hubungi Kami",
      home: "Beranda",
      about: "Tentang",
      category: "Kategori",
    },
    en: {
      contact: "Contact Us",
      home: "Home",
      about: "About",
      category: "Category",
    },
  };

  // Tambahin fungsi toggle
  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "id" ? "en" : "id"));
  };

  const value = {
    language,
    toggleLanguage, // tambahin ke context
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
