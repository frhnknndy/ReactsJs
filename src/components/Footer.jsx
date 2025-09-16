import { useLanguage } from "./LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#FEE715] p-6 sm:p-10 mt-20">
      <h1 className="text-center text-2xl sm:text-3xl font-semibold mb-6 sm:mb-10">
        {t.contact}
      </h1>

      <div className="flex gap-6 flex-wrap items-center justify-center text-2xl">
        <a
          href="https://www.linkedin.com/in/farhan-kennedy-610895334/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-[#101820] transition-colors duration-300"
        >
          <i className="ri-linkedin-line"></i>
        </a>
        <a
          href="https://github.com/frhnknndy"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-[#101820] transition-colors duration-300"
        >
          <i className="ri-github-fill"></i>
        </a>
        <a
          href="https://wa.me/6289503919872"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="hover:text-[#101820] transition-colors duration-300"
        >
          <i className="ri-whatsapp-line"></i>
        </a>
      </div>

      <p className="text-center text-sm text-black mt-6 opacity-70">
        © {new Date().getFullYear()} Farhan Kennedy. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
