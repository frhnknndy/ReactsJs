import { useLanguage } from "./LanguageContext";

const Footer = () => {
  const { t } = useLanguage(); // ambil terjemahan

  return (
    <div className="bg-[#FEE715] p-10 mt-20">
      <h1 className="text-center text-3xl font-semibold mb-10">{t.contact}</h1>
      <div className="flex gap-6 items-center justify-center">
        <a
          href="https://www.linkedin.com/in/farhan-kennedy-610895334//"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="ri-linkedin-line ri-lg"></i>
        </a>
        <a
          href="https://github.com/frhnknndy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="ri-github-fill ri-lg"></i>
        </a>
        <a
          href="https://wa.me/6289503919872"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="ri-whatsapp-line ri-lg"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
