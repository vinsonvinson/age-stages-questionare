import { useSelector, useDispatch } from "react-redux";
import { updateField } from "../../store/childSlice";
import { useNavigate } from "react-router";
import arrow from "../../assets/screening/arrow.png";

function Usia() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Ambil state usia bulan yang tersimpan di Redux
    const selectedAgeInMonths = useSelector((state) => state.child.ageInMonths);

    // Data bulan yang akan ditampilkan, dibagi per baris agar susunannya persis seperti desain
    const row1 = [12, 14, 16, 18];
    const row2 = [20, 22, 24];
    const row3 = [27, 30, 33, 36];

    const handleSelectMonth = (month) => {
        dispatch(updateField({ field: "ageInMonths", value: month }));
    };

    const handleNext = () => {
        console.log("Usia bulan yang dipilih:", selectedAgeInMonths);
        navigate("/questions");
    };

    // Komponen Tombol Blob
    const BlobButton = ({ month }) => {
        const isSelected = selectedAgeInMonths === month;

        return (
            <button
                onClick={() => handleSelectMonth(month)}
                className={`flex flex-col items-center justify-center w-28 h-24 md:w-32 md:h-28 transition-transform duration-200 hover:scale-110 cursor-pointer 
          ${isSelected ? "bg-[#ff9900] ring-4 ring-white scale-110" : "bg-[#ffbc2f]"}
        `}
                // Custom border-radius untuk efek bentuk blob organik (tidak bulat kaku)
                style={{ borderRadius: "50% 40% 60% 40% / 60% 50% 40% 50%" }}
            >
                <span className="text-[#1e2a5e] font-black text-3xl md:text-4xl leading-none font-serif">
                    {month}
                </span>
                <span className="text-[#1e2a5e] font-medium text-sm md:text-base mt-1">
                    bulan
                </span>
            </button>
        );
    };

    return (
        <>
            <div className="min-h-screen bg-hijau relative flex flex-col items-center py-16 px-6 font-sans">
                {/* Judul */}
                <h1 className="text-4xl md:text-5xl font-black text-[#1e2a5e] tracking-wide mb-16 text-center font-serif">
                    pilih usia anak dalam bulan
                </h1>

                {/* Container Grid Bulan */}
                <div className="flex flex-col gap-6 md:gap-8 items-center w-full max-w-3xl">
                    {/* Baris 1 (4 tombol) */}
                    <div className="flex justify-center gap-4 md:gap-8 w-full flex-wrap">
                        {row1.map((month) => (
                            <BlobButton key={month} month={month} />
                        ))}
                    </div>

                    {/* Baris 2 (3 tombol) */}
                    <div className="flex justify-center gap-4 md:gap-8 w-full flex-wrap">
                        {row2.map((month) => (
                            <BlobButton key={month} month={month} />
                        ))}
                    </div>

                    {/* Baris 3 (4 tombol) */}
                    <div className="flex justify-center gap-4 md:gap-8 w-full flex-wrap">
                        {row3.map((month) => (
                            <BlobButton key={month} month={month} />
                        ))}
                    </div>
                </div>

                {/* Tombol Panah Kanan Bawah */}
                <button
                    onClick={handleNext}
                    disabled={!selectedAgeInMonths} // Tombol disable jika belum memilih usia
                    className={`absolute bottom-8 right-8 md:bottom-12 md:right-16 transition-all duration-300
          ${!selectedAgeInMonths ? "opacity-50 cursor-not-allowed grayscale" : "hover:scale-110 hover:translate-x-2"}
        `}
                >
                    <img src={arrow} alt="Lanjut" className="w-20 md:w-28" />
                </button>
            </div>
        </>
    );
}

export default Usia;
