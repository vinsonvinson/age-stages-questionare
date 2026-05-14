import { useSelector, useDispatch } from "react-redux";
import { updateField } from "../../store/childSlice";
import { useNavigate } from "react-router";
import arrow from "../../assets/screening/arrow.png";
import boy from "../../assets/screening/boy.png";
import girl from "../../assets/screening/girl.png";
import food from "../../assets/screening/food.png";

function Start() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Mengambil state dari Redux
    const { name, age, gender } = useSelector((state) => state.child);

    const isFormComplete =
        name.trim() !== "" && age.trim() !== "" && gender !== "";

    // Fungsi untuk menangani perubahan input
    const handleChange = (field, value) => {
        dispatch(updateField({ field, value }));
    };

    // Fungsi saat tombol next/panah diklik
    const handleSubmit = () => {
        if (isFormComplete) {
            console.log("Data tersimpan di Redux:", { name, age, gender });
            navigate("/usia");
        }
    };
    return (
        <>
            <div className="min-h-screen bg-[#fbf3e4] p-6 md:p-12 font-sans relative overflow-hidden flex items-center justify-center">
                <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
                    {/* KOLOM KIRI: Judul & Gambar */}
                    <div className="flex flex-col">
                        <h1 className="text-6xl md:text-8xl font-black text-[#e83e8c] tracking-wide leading-none mb-8 drop-shadow-sm">
                            Identitas
                            <br />
                            anak
                        </h1>

                        <div className="relative">
                            {/* Gambar utama (Makanan) */}
                            <img
                                src={food}
                                alt="Ilustrasi Makanan"
                                className="w-full max-w-md rounded-4xl object-cover"
                            />
                            {/* Ornamen Jelly melayang (Opsional, jika gambarnya terpisah) */}
                            {/* <img src="/images/jelly.png" className="absolute -top-16 right-4 w-32 drop-shadow-xl" /> */}
                        </div>
                    </div>

                    {/* KOLOM KANAN: Form Input */}
                    <div className="flex flex-col space-y-6 mb-20 md:mb-0">
                        {/* Input Nama */}
                        <div className="flex items-center bg-[#d4f6a1] rounded-[40px] px-8 py-5 shadow-sm">
                            <span className="text-[#e83e8c] font-black text-2xl uppercase mr-4">
                                Nama:
                            </span>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) =>
                                    handleChange("name", e.target.value)
                                }
                                className="bg-transparent outline-none flex-1 text-2xl text-[#e83e8c] font-semibold"
                            />
                        </div>

                        {/* Input Umur */}
                        <div className="flex items-center bg-[#d4f6a1] rounded-[40px] px-8 py-5 shadow-sm">
                            <span className="text-[#e83e8c] font-black text-2xl uppercase mr-4 break-after-avoid">
                                Umur:
                            </span>
                            <input
                                type="text"
                                value={age}
                                onChange={(e) =>
                                    handleChange("age", e.target.value)
                                }
                                className="bg-transparent outline-none flex-1 text-2xl text-[#e83e8c] font-semibold"
                            />
                        </div>

                        {/* Pemilihan Jenis Kelamin */}
                        <div className="pt-6">
                            <h2 className="text-[#e83e8c] font-black text-2xl uppercase mb-6 ml-4">
                                Jenis Kelamin:
                            </h2>
                            <div className="flex justify-center gap-8 md:gap-16">
                                {/* Tombol Laki-laki */}
                                <button
                                    onClick={() =>
                                        handleChange("gender", "laki-laki")
                                    }
                                    className={`transition-transform duration-200 hover:scale-105 cursor-pointer ${
                                        gender === "laki-laki"
                                            ? "ring-4 ring-[#e83e8c] rounded-4xl scale-105 bg-white/50"
                                            : "opacity-80"
                                    }`}
                                >
                                    <img
                                        src={boy}
                                        alt="Laki-laki"
                                        className="w-32 md:w-48 object-contain rounded-4xl"
                                    />
                                </button>

                                {/* Tombol Perempuan */}
                                <button
                                    onClick={() =>
                                        handleChange("gender", "perempuan")
                                    }
                                    className={`transition-transform duration-200 hover:scale-105 cursor-pointer ${
                                        gender === "perempuan"
                                            ? "ring-4 ring-[#e83e8c] rounded-3xl scale-105 bg-white/50"
                                            : "opacity-80"
                                    }`}
                                >
                                    <img
                                        src={girl}
                                        alt="Perempuan"
                                        className="w-32 md:w-48 object-contain rounded-4xl"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tombol Panah Kanan Bawah */}
                <button
                    onClick={handleSubmit}
                    disabled={!isFormComplete} // Menonaktifkan tombol jika form belum lengkap
                    className={`absolute bottom-8 right-8 md:bottom-12 md:right-16 transition-all duration-300 z-50
          ${
              !isFormComplete
                  ? "opacity-40 cursor-not-allowed grayscale" // Style saat disabled
                  : "hover:scale-110 hover:translate-x-2 cursor-pointer" // Style saat aktif
          }
        `}
                >
                    <img src={arrow} alt="Lanjut" className="w-20 md:w-28" />
                </button>
            </div>
        </>
    );
}

export default Start;
