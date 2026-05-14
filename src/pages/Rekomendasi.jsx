import { useNavigate } from "react-router";
import arrowBack from "../assets/screening/arrowBack.png";
import logoBuku from "../assets/rekomendasi/logo-buku.png";
import imgTerapiWicara from "../assets/rekomendasi/terapi-wicara.png";
import imgTerapiOkupasi from "../assets/rekomendasi/terapi-okupasi.png";
import imgTerapiMusik from "../assets/rekomendasi/terapi-musik.png";
import imgTerapiDongeng from "../assets/rekomendasi/terapi-dongeng.png";

function Rekomendasi() {
    const navigate = useNavigate();
    const therapies = [
        { title: "Terapi Wicara", image: imgTerapiWicara },
        { title: "Terapi Okupasi", image: imgTerapiOkupasi },
        { title: "Terapi Musik", image: imgTerapiMusik },
        { title: "Terapi Dongeng", image: imgTerapiDongeng },
    ];

    const directHome = () => {
        navigate("/");
    };

    return (
        <>
            <div
                // Jika kamu menggunakan gambar background, ganti bg-[#fce08a] dengan className untuk background image, contoh: bg-[url('/path-to-bg.png')] bg-cover bg-center
                className="min-h-screen bg-[url('/bg-carnival.png')] relative flex flex-col items-center py-10 px-6 font-sans overflow-hidden"
            >
                {/* Logo Kiri Atas */}
                <div className="absolute top-6 left-6 md:top-10 md:left-10">
                    <img
                        src={logoBuku}
                        alt="Logo"
                        className="w-16 h-16 md:w-24 md:h-24 object-contain rounded-full bg-blue-500 shadow-md"
                    />
                </div>

                {/* Judul Halaman */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1e3a8a] text-center max-w-4xl mt-24 md:mt-16 mb-12 leading-tight">
                    Stimulasi Anak Sejak Dini Untuk Masa Depan yang Cerah
                </h1>

                {/* Grid Kartu Terapi */}
                <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 mb-16">
                    {therapies.map((therapy, index) => (
                        <div key={index} className="flex flex-col items-center">
                            {/* Gambar Kotak Melengkung */}
                            <div className="w-48 h-48 md:w-56 md:h-56 mb-4 overflow-hidden rounded-[2.5rem] shadow-lg border-4 border-transparent hover:scale-105 transition-transform duration-300">
                                <img
                                    src={therapy.image}
                                    alt={therapy.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Teks Terapi */}
                            <h3 className="text-xl md:text-2xl font-medium text-[#4a5568]">
                                {therapy.title}
                            </h3>
                        </div>
                    ))}
                </div>

                {/* Teks Footer / Penutup */}
                <p className="text-center font-bold text-[#1e3a8a] max-w-3xl text-lg md:text-xl lg:text-2xl leading-relaxed mt-auto mb-10">
                    Terima kasih telah peduli pada tumbuh kembang si kecil. Mari
                    terus dampingi setiap kata pertamanya dengan kasih sayang
                    dan stimulasi yang tepat!
                </p>

                <button className="fixed bottom-8 left-8 md:bottom-12 md:left-12 hover:scale-110 transition-transform cursor-pointer">
                    <img
                        onClick={directHome}
                        src={arrowBack}
                        alt="Kembali"
                        className="w-12 md:w-16"
                    />
                </button>
            </div>
        </>
    );
}

export default Rekomendasi;
