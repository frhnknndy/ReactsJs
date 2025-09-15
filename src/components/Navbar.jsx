import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "./LanguageContext"; // ✅ pakai context

const Navbar = () => {
  const [active, setActive] = useState(false); // efek scroll
  const [openKategori, setOpenKategori] = useState(false); // dropdown kategori
  const { language, setLanguage, t } = useLanguage(); // ✅ ambil dari context

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // ✅ Fungsi ganti bahasa
  const toggleLanguage = () => {
    setLanguage(language === "id" ? "en" : "id");
  };

  return (
    <div>
      <div className="navbar flex items-center gap-3 p-3 bg-[#FEE715] justify-between relative">
      
        <div className="logo">
          <motion.h1
            className="relative text-5xl font-bold text-white before:content-['Sumbarku.'] before:absolute before:left-1 before:text-red-500 before:animate-pulse after:content-['Sumbarku.'] after:absolute after:left-2 after:text-blue-500 after:animate-pulse"
            whileHover={{ skewX: 10 }}
          >
            Sumbarku.
          </motion.h1>
        </div>

        {/* Menu */}
        <ul
          className={`menu flex mx-auto sm:gap-10 gap-4 md:static fixed left-1/2
          -translate-x-1/2 md:-translate-x-0 md:opacity-100 bg-white/30 backdrop-blur-md p-4
          rounded-br-2xl rounded-bl-2xl
          md:bg-transparent transition-all md:transition-none z-40 ${
            active ? "top-0 opacity-100" : "-top-10 opacity-0"
          }`}
        >
          <li>
            <a
              href="#beranda"
              className="sm:text-lg text-base font-medium hover:text-[#FEE715]"
            >
              <i className="ri-home-fill ri-lg"></i> {t.home}
            </a>
          </li>
          <li>
            <a
              href="#tentang"
              className="sm:text-lg text-base font-medium hover:text-[#FEE715]"
            >
              <i className="ri-information-fill ri-lg"></i> {t.about}
            </a>
          </li>
          <li>
            <a
              href="#kontak"
              className="sm:text-lg text-base font-medium hover:text-[#FEE715]"
            >
              <i className="ri-contacts-fill ri-lg"></i> {t.contact}
            </a>
          </li>

          {/* Dropdown Kategori */}
          <li className="relative">
            <button
              onClick={() => setOpenKategori(!openKategori)}
              className="sm:text-lg text-base font-medium hover:text-[#FEE715] flex items-center gap-1"
            >
              <i className="ri-list-check ri-lg"></i> {t.category}
            </button>

            {openKategori && (
              <div className="absolute top-full mt-2 bg-white shadow-lg rounded-md py-2 w-40 z-50">
                <a
                  href="#kuliner"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Kuliner
                </a>
                <a href="#wisata" className="block px-4 py-2 hover:bg-gray-100">
                  Wisata
                </a>
                <a
                  href="#sejarah"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Sejarah
                </a>
              </div>
            )}
          </li>
        </ul>

        {/* Search + Switch */}
        <div className="ml-auto flex items-center gap-2 z-50 relative">
          <div
            onClick={toggleLanguage} // ✅ ganti bahasa di context
            className="w-20 h-10 flex items-center bg-[#101820] rounded-full p-1 cursor-pointer relative"
          >
            {/* Label */}
            <span className="absolute left-2 text-xs font-semibold text-white">
              ID
            </span>
            <span className="absolute right-2 text-xs font-semibold text-white">
              EN
            </span>

            {/* Bulatan switch */}
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-full bg-[#FEE715] text-black text-xs shadow-md transform transition-transform duration-300 ${
                language === "en" ? "translate-x-10" : "translate-x-0"
              }`}
            >
              {language.toUpperCase()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
