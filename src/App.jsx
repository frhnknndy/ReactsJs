import { useState } from "react"; // ⬅️ WAJIB import

const App = () => {
  const [open, setOpen] = useState(false); // ⬅️ State untuk modal
    const [selectedContent, setSelectedContent] = useState(null);

  const handleOpen = (content) => {
    setSelectedContent(content);
    setOpen(true);
  };
  return (
    <>
      {/* Hero Section */}
      <div
        className="relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/Gadang.jpg')" }}
      >
        <h1 className="text-3xl font-bebas bg-[#101820] text-[#FEE715] font-semibold flex items-center justify-center p-5 ">
          Selamat Datang di Sumatra Barat.
          <i className="ri-corner-right-down-line ri-lg"></i>
        </h1>

        <div className="flex items-center justify-center h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-[1300px] h-[700px] object-cover rounded-lg shadow-lg 
                       transition-transform duration-500 ease-in-out 
                       hover:scale-110 cursor-pointer z-10"
          >
            <source src="/SumBar.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Section Tentang */}
      <div className="bg-[#101820] py-2 text-center">
        <h1 className="flex items-center justify-center text-4xl font-fredoka font-semibold text-[#101820] bg-[#FEE715] p-2">
          Tentang
        </h1>
        <h2 className="text-center text-2xl font-fredoka text-[#FEE715] p-5 mt-2 bg-black rounded-md">
          Sumatra Barat
        </h2>
        <p className="text-base/loose text-white text-justify p-5 leading-relaxed indent-8 ml-8 opacity-50">
          Sumatera Barat (diakronimkan: Sumbar) adalah sebuah provinsi di
          Indonesia yang terletak di Pulau Sumatra dengan ibu kota Padang.
          Provinsi Sumatera Barat terletak sepanjang pesisir barat Sumatra
          bagian tengah, dataran tinggi Bukit Barisan di sebelah timur, dan
          sejumlah pulau di lepas pantainya seperti Kepulauan Mentawai. Dari
          utara ke selatan, provinsi dengan wilayah seluas 42.120,00 km² ini
          berbatasan dengan empat Provinsi, yakni Sumatera Utara, Riau, Jambi,
          dan Bengkulu. Sumatera Barat adalah rumah bagi etnis Minangkabau dan
          Mentawai, walaupun wilayah adat Minangkabau sendiri lebih luas dari
          wilayah administratif Provinsi Sumatera Barat saat ini. Pada akhir
          tahun 2024, provinsi ini memiliki penduduk sebanyak 5.820.359 jiwa,
          dengan mayoritas beragama Islam. Sumatera Barat terdiri dari 12
          kabupaten dan 7 kota dengan pembagian wilayah administratif sesudah
          kecamatan di seluruh kabupaten (kecuali Kabupaten Kepulauan Mentawai)
          dinamakan sebagai nagari.
        </p>
        <div className="flex items-center justify-center">
          <figure>
            <img
              src="map.png"
              alt="map"
              className="w-[420px] rounded-md mt-10 mb-8 ml-20 transition-transform duration-500 ease-in-out 
                       hover:scale-110 cursor-pointer z-10"
            />
            <figcaption className="text-sm text-gray-300 italic mb-10 ml-10">
              Lokasi sumatra barat
            </figcaption>
          </figure>
          <figure>
            <img
              src="data.jpg"
              alt="data"
              className="w-[500px] rounded-md mt-10 mb-8 ml-20 transition-transform duration-500 ease-in-out 
                       hover:scale-110 cursor-pointer z-10"
            />
            <figcaption className="text-sm text-gray-300 italic mb-10 ml-10">
              Data agama di sumbar
            </figcaption>
          </figure>
        </div>
        <h2 className="text-center text-2xl font-fredoka text-[#FEE715] py-5 px-20 bg-black rounded-md">
          Sejarah
        </h2>
        <div className=" p-5 max-w-9xl grid grid-cols-4 gap-5">
          {/* Kolom teks: ambil 2/3 */}
          <div className="col-span-2">
            <p className="text-base/loose text-white text-justify leading-relaxed indent-8">
              Nama Provinsi Sumatera Barat bermula pada zaman Vereenigde
              Oostindische Compagnie (VOC), di mana sebutan wilayah untuk
              kawasan pesisir barat Sumatra adalah Hoofdcomptoir van Sumatra's
              westkust. Kemudian dengan semakin menguatnya pengaruh politik dan
              ekonomi VOC, sampai abad ke 18 wilayah administratif ini telah
              mencakup kawasan pantai barat Sumatra mulai dari Barus sampai
              Inderapura.[9] Seiring dengan kejatuhan Kerajaan Pagaruyung, dan
              keterlibatan Belanda dalam Perang Padri, pemerintah Hindia Belanda
              mulai menjadikan kawasan pedalaman Minangkabau sebagai bagian dari
              Pax Nederlandica, kawasan yang berada dalam pengawasan Belanda,
              dan wilayah Minangkabau ini dibagi atas Residentie Padangsche
              Benedenlanden dan Residentie Padangsche Bovenlanden.[10]
              Selanjutnya dalam perkembangan administrasi pemerintahan kolonial
              Hindia Belanda, daerah ini tergabung dalam Gouvernement Sumatra's
              Westkust, termasuk di dalamnya wilayah Residentie Bengkulu yang
              baru diserahkan Inggris kepada Belanda. Kemudian diperluas lagi
              dengan memasukkan Tapanuli dan Singkil. Namun pada tahun 1905,
              wilayah Tapanuli ditingkatkan statusnya menjadi Residentie
              Tapanuli, sedangkan wilayah Singkil diberikan kepada Residentie
              Atjeh. Kemudian pada tahun 1914, Gouvernement Sumatra's Westkust,
              diturunkan statusnya menjadi Residentie Sumatra's Westkust, dan
              menambahkan wilayah Kepulauan Mentawai di Samudra Hindia ke dalam
              Residentie Sumatra's Westkust, serta pada tahun 1935 wilayah
              Kerinci juga digabungkan ke dalam Residentie Sumatra's Westkust.
              Pasca pemecahan Gouvernement Sumatra's Oostkust, wilayah Rokan dan
              Kampar Kiri dimasukkan ke Residentie Sumatra's Oostkust sedangkan
              Kuantan diberikan kepada Residentie Riouw en Onderhoorigheden, dan
              juga dibentuk Residentie Djambi pada periode yang hampir
              bersamaan.[9] Pada masa pendudukan tentara Jepang, Residentie
              Sumatra's Westkust berubah nama menjadi Sumatora Nishi Kaigan Shu.
              Atas dasar geostrategis militer, daerah Kampar Kanan dikeluarkan
              dari Sumatora Nishi Kaigan Shu dan dimasukkan ke dalam wilayah
              Rhio Shu.[9] Pada awal kemerdekaan Indonesia pada tahun 1945,
              wilayah Sumatera Barat tergabung dalam provinsi Sumatra yang
              berpusat di Bukittinggi. Empat tahun kemudian, Provinsi Sumatra
              dipecah menjadi tiga provinsi, yakni Sumatera Utara, Sumatra
              Tengah, dan Sumatera Selatan. Sumatera Barat beserta Riau dan
              Jambi merupakan bagian dari keresidenan di dalam Provinsi Sumatra
              Tengah. Pada masa PRRI, berdasarkan Undang-undang darurat nomor 19
              tahun 1957, Provinsi Sumatra Tengah dipecah lagi menjadi tiga
              provinsi yakni Provinsi Sumatera Barat, Provinsi Riau, dan
              Provinsi Jambi. Wilayah Kerinci yang sebelumnya tergabung dalam
              Kabupaten Pesisir Selatan Kerinci, digabungkan ke dalam Provinsi
              Jambi sebagai kabupaten tersendiri. Begitu pula wilayah Rokan,
              Kampar Kanan/Bangkinang dan Kampar Kiri (saat itu tergabung dalam
              kabupaten Kampar) dan Kuantan (saat itu tergabung dalam kabupaten
              Indragiri) ditetapkan masuk ke dalam wilayah Provinsi Riau.
              Selanjutnya ibu kota provinsi Sumatera Barat yang baru ini masih
              tetap di Bukittinggi. Kemudian berdasarkan Surat Keputusan
              Gubernur Sumatera Barat No. 1/g/PD/1958, tanggal 29 Mei 1958 ibu
              kota provinsi dipindahkan ke Padang.[9]
            </p>
          </div>
          {/* Kolom gambar: ambil 1/3 */}
          <figure className="col-span-2 flex flex-col items-center justify-center  ">
            <img
              src="/sejarahhh.jpg"
              alt="Sejarah Padang"
              className="w-[800px] h-auto object-cover rounded-md shadow-md transition-transform duration-500 ease-in-out 
                       hover:scale-110 cursor-pointer z-10 "
            />
            <figcaption className="text-sm text-gray-300 mt-2 italic mt-8">
              Kediaman gubernur Westkust van Sumatra atau "pantai barat Sumatra"
              (litografi berdasarkan lukisan oleh Josias Cornelis Rappard,
              1883-1889)
            </figcaption>
          </figure>
        </div>
        <div>
          <h2 className="text-center text-2xl font-fredoka text-[#FEE715] py-5 px-20 bg-black rounded-md mb-10">
            Daerah
          </h2>
          <div className="box grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1  gap-10 ml-10 mr-10 mb-10">
            <button
              onClick={() =>
                handleOpen(
                  "Kota Padang adalah kota terbesar di pantai barat Pulau Sumatra sekaligus ibu kota Provinsi Sumatera Barat, Indonesia. Kota ini adalah pintu gerbang barat Indonesia dari Samudra Hindia.[7] Secara geografi, Padang dikelilingi perbukitan yang mencapai ketinggian 1.853 mdpl dengan luas wilayah 694,337 km²,[8] lebih dari separuhnya berupa hutan lindung.[9] Berdasarkan data Badan Pusat Statistik (BPS) pada 2022, kota ini memiliki jumlah penduduk sebanyak 919.145 jiwa,[3] dan pada akhir tahun 2024, penduduk Padang sebanyak 946.982 jiwa.[2][3] Padang merupakan kota inti dari pengembangan wilayah metropolitan Palapa. Penduduk Kota Padang terus meningkat pada tahun 2024 yang berjumlah sebanyak 954.177 dengan laju pertumbuhan sebesar 1,26% per tahunnya.[10]"
                )
              }
              className="sm:text-lg text-base font-medium text-black hover:text-[#FEE715] bg-[#FEE715] py-4 px-20 rounded-md transition-transform duration-500 ease-in-out hover:scale-110 cursor-pointer z-10"
            >
              Padang
            </button>

            <button
              onClick={() =>
                handleOpen(
                  "Kota Sawahlunto adalah salah satu kota yang berada di provinsi Sumatera Barat, Indonesia. Kota yang terletak 95 km sebelah timur laut kota Padang ini, dikelilingi oleh tiga kabupaten di Sumatera Barat, yaitu kabupaten Tanah Datar, kabupaten Solok, dan kabupaten Sijunjung. Kota Sawahlunto memiliki luas 273,45 km² yang terdiri dari empat kecamatan dengan jumlah penduduk lebih dari 66.962 jiwa (2021).[2] Pada masa pemerintah Hindia Belanda, kota Sawalunto dikenal sebagai kota tambang batu bara. Kota ini sempat mati, setelah penambangan batu bara dihentikan. Saat ini kota Sawahlunto[5] berkembang menjadi kota wisata tua yang multi etnik, sehingga menjadi salah satu kota tua terbaik di Indonesia.[6] Di kota yang didirikan pada tahun 1888 ini, banyak berdiri bangunan-bangunan tua peninggalan Belanda. Sebagian telah ditetapkan sebagai cagar budaya oleh pemerintah setempat dalam rangka mendorong pariwisata dan mencanangkan Sawahlunto menjadi ''Kota Wisata Tambang yang Berbudaya''"
                )
              }
              className="sm:text-lg text-base font-medium text-black hover:text-[#FEE715] bg-[#FEE715] py-4 px-20 rounded-md transition-transform duration-500 ease-in-out hover:scale-110 cursor-pointer z-10"
            >
              Sawahlunto
            </button>
            <button
              onClick={() =>
                handleOpen(
                  "Kota Solok Merupakan salah satu kotamadya yang berada di provinsi Sumatera Barat, Indonesia. Pada pertengahan tahun 2024, jumlah penduduk kota Solok sebanyak 83.907 jiwa.[2] Lokasi kota Solok sangat strategis, karena terletak pada persimpangan jalan antar provinsi dan antar kabupaten/kota. Dari arah Selatan merupakan jalur lintas dari provinsi Lampung, provinsi Sumatera Selatan dan provinsi Jambi. Kelurahan IX Korong Kecamatan Lubuk Sikarah adalah pusat pemerintahan kota ini. Kota ini merupakan titik persimpangan untuk menuju Kota Padang sebagai ibu kota provinsi Sumatera Barat yang jaraknya hanya sekitar 64 km. Bila ke arah Utara akan menuju Kota Bukittinggi yang berjarak sekitar 71 km untuk menuju kawasan Sumatra Bagian Utara. Sebelumnya, Solok merupakan ibu kota dari Kabupaten Solok, dan sekarang menjadi enklave dari kabupaten tersebut,dan dahulunya kota Solok merupakan sebuah kenagarian yang bernama nagari Solok, Kecamatan Kubung, Kabupaten solok, Ketika kota Solok menjadi kotamadya Jorong/korong di nagari Solok di statuskan menjadi kelurahan di kota solok."
                )
              }
              className="sm:text-lg text-base font-medium text-black hover:text-[#FEE715] bg-[#FEE715] py-4 px-20 rounded-md transition-transform duration-500 ease-in-out hover:scale-110 cursor-pointer z-10"
            >
              Solok
            </button>

            {open && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
                <div className="bg-white w-[900px] max-w-full p-6 rounded-2xl shadow-lg animate-[fadeInUp_0.5s_ease-out_forwards]">
                  <h2 className="text-xl font-bold mb-4">Informasi Kota</h2>
                  <p className="text-gray-700 text-justify leading-relaxed indent-8">
                    {selectedContent}
                  </p>

                  <button
                    onClick={() => setOpen(false)}
                    className="mt-4 px-4 py-2 bg-[#FEE715] text-black rounded-lg hover:bg-red-600"
                  >
                    Tutup
                  </button>
                </div>
              </div>
            )}
          </div>
          <div>
            <h1 className="text-center text-2xl font-fredoka text-[#FEE715] py-5 px-20 bg-black rounded-md mb-10">
              Tempat Wisata
            </h1>
          </div>
          <div className="grid grid-cols-3">
            <div className="relative w-[500px] h-[300px] mx-auto">
              <img
                src="Gadang.jpg"
                alt="pagaruyuang"
                className="w-full h-full object-cover rounded-lg"
              />
              <h2 className="absolute inset-x-0 top-4 text-center text-2xl font-bold text-black drop-shadow-lg">
                Istano Basa Pagaruyung
              </h2>
            </div>
            <div className="relative w-[500px] h-[300px] mx-auto">
              <img
                src="kampung.jpg"
                alt="kampung"
                className="w-full h-full object-cover rounded-lg"
              />
              <h2 className="absolute inset-x-0 top-4 text-center text-2xl font-bold text-black drop-shadow-lg">
                Kampung Eropa
              </h2>
            </div>
            <div className="relative w-[500px] h-[300px] mx-auto">
              <img
                src="jam.jpg"
                alt="jam"
                className="w-full h-full object-cover rounded-lg"
              />
              <h2 className="absolute inset-x-0 top-4 text-center text-2xl font-bold text-black drop-shadow-lg">
                Jam Gadang
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="kontak mt-30 sm:p-10 p-0" id="kontak ">
        <h1 className="text-4xl mb-2 font-bold text-center text-[#FEE715]">
          Kontak
        </h1>
        <p className="text-base/loose text-center mb-10 opacity-70 text-[#FEE715]">
          Mari terhubung dengan saya
        </p>
        <form
          action="https://formsubmit.co/farhankenedy177@gmail.com"
          method="POST"
          className="bg-[#FEE715] p-10 sm:w-fit w-full mx-auto rounded-md"
          autoComplete="off"
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Nama Lengkap</label>
              <input
                type="text"
                name="nama"
                placeholder="Masukkan Nama :"
                className="border border-black p-2 rounded-md"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Masukkan Email :"
                className="border border-black p-2 rounded-md"
                required
              />
            </div>
            <div className=" flex flex-col gap-2 bg:black">
              <label htmlFor="pesan" className="font-semibold">
                Pesan
              </label>
              <textarea
                name="pesan"
                id=""
                cols="45"
                rows="7"
                placeholder="Pesan..."
                className="border border-black p-2 rounded-md"
                required
              ></textarea>
            </div>
            <div className="flex flex-col gap-2">
              <button
                type="submit"
                className="bg-yellow-700 hover:bg-yellow-500 p-2 rounded-md"
              >
                Kirim Pesan
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default App;
