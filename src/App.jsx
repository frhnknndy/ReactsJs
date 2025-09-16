import { useState, useEffect } from "react";
import { useLanguage } from "./components/LanguageContext";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false); // State modal
  const [selectedContent, setSelectedContent] = useState(null);

  const handleOpen = (content) => {
    setSelectedContent(content);
    setOpen(true);
  };

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <>
      {/* Hero Section */}
      {/* Hero Section */}
      <div
        className="relative w-full h-[300px] sm:h-[500px] md:h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/Gadang.jpg')" }}
      >
        <div className="flex items-center justify-center h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full max-w-screen-lg h-[200px] sm:h-[500px] md:h-[650px] object-cover rounded-lg shadow-lg transition-transform duration-500 ease-in-out hover:scale-105 cursor-pointer z-10"
          >
            <source src="/SumBar.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Section Tentang */}
      <div className="bg-[#101820] py-2 text-center px-4 sm:px-10">
        <section id="tentang">
          <h1
            className="flex items-center justify-center text-2xl sm:text-3xl md:text-4xl font-fredoka font-semibold text-[#101820] bg-[#FEE715] p-2 sm:p-3"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            {t.about}
          </h1>
        </section>

        <h2
          className="text-xl sm:text-2xl font-fredoka text-[#FEE715] p-3 sm:p-5 mt-2 bg-black rounded-md"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          {t.provinsi}
        </h2>

        <p
          className="text-sm sm:text-base text-white text-justify p-3 sm:p-5 leading-relaxed indent-4 sm:indent-8 opacity-70"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          {t.sumbar}
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-5"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <figure className="w-full sm:w-[420px]">
            <img
              src="/map.png"
              alt="map"
              className="w-full max-w-2xl h-auto object-cover rounded-md shadow-md transition-transform duration-500 ease-in-out hover:scale-105 cursor-pointer mt-10"
            />
            <figcaption className="text-sm text-gray-300 italic mt-2">
              Lokasi Sumatra Barat
            </figcaption>
          </figure>
          <figure className="w-full sm:w-[500px]">
            <img
              src="data.jpg"
              alt="data"
              className="w-full max-w-2xl h-auto object-cover rounded-md shadow-md transition-transform duration-500 ease-in-out hover:scale-105 cursor-pointer mt-10"
            />
            <figcaption className="text-sm text-gray-300 italic mt-2">
              Data agama di Sumbar
            </figcaption>
          </figure>
        </div>

        {/* Sejarah */}
        <section id="sejarah" className="mt-8">
          <h2
            className="text-xl sm:text-2xl md:text-2xl font-fredoka text-[#FEE715] py-3 px-5 sm:px-20 bg-black rounded-md mx-auto w-fit"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            {t.history}
          </h2>
          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5 px-2 sm:px-10">
            <p className="text-sm sm:text-base text-white text-justify leading-relaxed indent-4 sm:indent-8">
              {t.historyText}
            </p>
            <figure className="w-full flex flex-col items-center">
              <img
                src="/sejarahhh.jpg"
                alt="Sejarah Padang"
                className="w-full sm:w-[600px] md:w-[800px] h-auto object-cover rounded-md shadow-md transition-transform duration-500 ease-in-out hover:scale-105 cursor-pointer mt-10"
              />
              <figcaption className="text-sm text-gray-300 italic mt-5">
                Kediaman gubernur Westkust van Sumatra atau "pantai barat
                Sumatra" (litografi berdasarkan lukisan oleh Josias Cornelis
                Rappard, 1883-1889)
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Daerah */}
        <section id="daerah" className="mt-10">
          <h2
            className="text-xl sm:text-2xl md:text-2xl font-fredoka text-[#FEE715] py-3 px-5 sm:px-20 bg-black rounded-md mx-auto w-fit mb-5"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            {t.area}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 px-2 sm:px-10">
            <button
              onClick={() => handleOpen(t.padang)}
              className="text-base sm:text-lg font-medium text-black hover:text-[#FEE715] bg-[#FEE715] py-3 sm:py-4 px-8 sm:px-20 rounded-md transition-transform duration-500 ease-in-out hover:scale-105 cursor-pointer"
            >
              Padang
            </button>
            <button
              onClick={() => handleOpen(t.sawahlunto)}
              className="text-base sm:text-lg font-medium text-black hover:text-[#FEE715] bg-[#FEE715] py-3 sm:py-4 px-8 sm:px-20 rounded-md transition-transform duration-500 ease-in-out hover:scale-105 cursor-pointer"
            >
              Sawahlunto
            </button>
            <button
              onClick={() => handleOpen(t.solok)}
              className="text-base sm:text-lg font-medium text-black hover:text-[#FEE715] bg-[#FEE715] py-3 sm:py-4 px-8 sm:px-20 rounded-md transition-transform duration-500 ease-in-out hover:scale-105 cursor-pointer"
            >
              Solok
            </button>
          </div>

          {open && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50 px-4">
              <div className="bg-white w-full sm:w-[600px] md:w-[900px] max-w-full p-6 rounded-2xl shadow-lg animate-[fadeInUp_0.5s_ease-out_forwards]">
                <h2 className="text-xl font-bold mb-4">{t.informasi}</h2>
                <p className="text-gray-700 text-justify leading-relaxed indent-4 sm:indent-8">
                  {selectedContent}
                </p>
                <button
                  onClick={() => setOpen(false)}
                  className="mt-4 px-4 py-3 bg-[#FEE715] text-black rounded-lg hover:bg-red-600 w-full sm:w-auto"
                >
                  Tutup
                </button>
              </div>
            </div>
          )}
        </section>

        {/* Wisata */}
        <section id="wisata" className="mt-10 px-2 sm:px-10">
          <h1 className="text-xl sm:text-2xl md:text-2xl font-fredoka text-[#FEE715] py-3 px-5 sm:px-20 bg-black rounded-md mx-auto w-fit mb-8 text-center">
            {t.tempat}
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 px-4 sm:px-6 md:px-10">
            {["Gadang.jpg", "kampung.jpg", "jam.jpg"].map((img, idx) => (
              <div
                key={idx}
                className="relative w-full h-60 sm:h-72 md:h-80 mx-auto"
              >
                <img
                  src={img}
                  alt={`wisata-${idx}`}
                  className="w-full h-full object-cover rounded-lg"
                />
                <h2 className="absolute inset-x-0 top-2 sm:top-4 text-center text-lg sm:text-xl md:text-2xl font-bold text-black drop-shadow-lg">
                  {
                    ["Istano Basa Pagaruyung", "Kampung Eropa", "Jam Gadang"][
                      idx
                    ]
                  }
                </h2>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Kontak */}
      <section id="kontak" className="mt-10 sm:p-10 p-4">
        <h1 className="text-2xl sm:text-4xl mb-4 sm:mb-6 font-bold text-center text-[#FEE715]">
          {t.contact}
        </h1>
        <p className="text-sm sm:text-base text-center mb-6 sm:mb-10 opacity-70 text-[#FEE715]">
          {t.berhubung}
        </p>
        <form
          action="https://formsubmit.co/farhankenedy177@gmail.com"
          method="POST"
          className="bg-[#FEE715] p-6 sm:p-10 rounded-md max-w-md mx-auto w-full"
          autoComplete="off"
        >
          <div className="flex flex-col gap-4 sm:gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">{t.nama}</label>
              <input
                type="text"
                name="nama"
                placeholder={t.masukkanNama}
                className="border border-black p-2 rounded-md w-full"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <input
                type="email"
                name="email"
                placeholder={t.email}
                className="border border-black p-2 rounded-md w-full"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="pesan" className="font-semibold">
                {t.pesan}
              </label>
              <textarea
                name="pesan"
                cols="30"
                rows="5"
                placeholder={t.pesan}
                className="border border-black p-2 rounded-md w-full"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-yellow-700 hover:bg-yellow-500 py-3 px-4 rounded-md text-white font-semibold"
            >
              {t.kirim}
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default App;
