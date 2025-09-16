import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "./LanguageContext";

const Navbar = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [active, setActive] = useState(false);
  const [openKategori, setOpenKategori] = useState(false);
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 150);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="navbar flex items-center gap-3 p-3 bg-[#FEE715] justify-between">
      <motion.h1
        className="relative text-5xl font-bold text-white before:content-['Sumbarku.'] before:absolute before:left-1 before:text-red-500 before:animate-pulse after:content-['Sumbarku.'] after:absolute after:left-2 after:text-blue-500 after:animate-pulse"
        whileHover={{ skewX: 10 }}
      >
        Sumbarku.
      </motion.h1>

      {/* Menu */}
      <ul
        className={`menu flex sm:gap-10 gap-4 md:static fixed left-1/2
  -translate-x-1/2 md:-translate-x-0 md:opacity-100 bg-white/30 backdrop-blur-md p-3
  rounded-br-2xl rounded-bl-2xl md:bg-transparent transition-all duration-300 z-40
  ${active ? "top-0 opacity-100" : "-top-12 opacity-0"}`}
      >
        <li>
          <button
            onClick={() => {
              const section = document.getElementById("beranda");
              if (section) {
                section.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
            className="flex flex-col items-center justify-center min-w-[90px] hover:text-yellow-500 transition"
          >
            <i className="ri-home-fill ri-lg"></i>
            <span className="text-sm mt-1">{t.home}</span>
          </button>
        </li>

        <li>
          <button
            onClick={() => {
              const section = document.getElementById("tentang");
              if (section) {
                section.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
            className="flex flex-col items-center justify-center min-w-[90px] hover:text-yellow-500 transition"
          >
            <i className="ri-info-i ri-lg"></i>
            <span className="text-sm mt-1">{t.about}</span>
          </button>
        </li>

        <li>
          <button
            onClick={() => {
              const section = document.getElementById("kontak");
              if (section) {
                section.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
            className="flex flex-col items-center justify-center min-w-[90px] hover:text-yellow-500 transition"
          >
            <i className="ri-contacts-fill ri-lg"></i>
            <span className="text-sm mt-1">{t.contact}</span>
          </button>
        </li>

        <li className="relative">
          <button
            onClick={() => setOpenKategori(!openKategori)}
            className="flex flex-col items-center justify-center min-w-[90px] hover:text-yellow-500 transition"
          >
            <i className="ri-list-check ri-lg"></i>
            <span className="text-sm mt-1">{t.category}</span>
          </button>

          {openKategori && (
            <div className="absolute top-full mt-2 bg-white shadow-lg rounded-md py-2 w-40 z-50">
              <button
                onClick={() => {
                  const section = document.getElementById("sejarah");
                  if (section) {
                    section.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                {t.history}
              </button>
              <button
                onClick={() => {
                  const section = document.getElementById("wisata");
                  if (section) {
                    section.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                {t.tourism}
              </button>
              <button
                onClick={() => {
                  const section = document.getElementById("daerah");
                  if (section) {
                    section.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                {t.area}
              </button>
            </div>
          )}
        </li>
      </ul>

      {/* Switch */}
      <div
        onClick={toggleLanguage}
        className="w-20 h-10 flex items-center bg-[#101820] rounded-full p-1 cursor-pointer relative"
      >
        <span className="absolute left-2 text-xs font-semibold text-white">
          ID
        </span>
        <span className="absolute right-2 text-xs font-semibold text-white">
          EN
        </span>
        <div
          className={`w-8 h-8 flex items-center justify-center rounded-full bg-[#FEE715] text-black text-xs shadow-md transform transition-transform duration-300 ${
            language === "en" ? "translate-x-10" : "translate-x-0"
          }`}
        >
          {language.toUpperCase()}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
