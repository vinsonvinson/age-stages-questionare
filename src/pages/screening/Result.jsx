import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import arrowBack from "../../assets/screening/arrowBack.png";
import bayi1 from "../../assets/screening/bayi1.png";
import bayi2 from "../../assets/screening/bayi2.png";
import bayi3 from "../../assets/screening/bayi3.png";

function Result() {
    const navigate = useNavigate();
    const { score, ageInMonths } = useSelector((state) => state.child);

    const getBabyImage = (age) => {
        if ([12, 14, 16].includes(age)) return bayi1;
        if ([18, 22].includes(age)) return bayi2;
        if ([20, 27].includes(age)) return bayi3;
        if ([24, 33].includes(age)) return bayi2;
        if ([30, 36].includes(age)) return bayi3;
        return bayi1; // Fallback default
    };

    const babyImageSrc = getBabyImage(ageInMonths);

    // --- LOGIKA KATEGORI SKOR ---
    let categoryColor = "";
    let resultText = "";

    if (score <= 15) {
        categoryColor = "text-red-600";
        resultText =
            "Perkembangan si kecil tampak memerlukan perhatian lebih 🌱 Disarankan untuk berkonsultasi dengan tenaga kesehatan atau profesional tumbuh kembang agar mendapatkan pemeriksaan dan dukungan yang tepat 💛";
    } else if (score >= 20 && score <= 35) {
        categoryColor = "text-[#f26522]";
        resultText =
            "Perkembangan si kecil sudah berjalan baik 😊 Namun, ada beberapa kemampuan yang masih perlu lebih sering dilatih dan dipantau. Yuk terus beri stimulasi lewat bermain dan aktivitas sehari-hari agar perkembangannya semakin optimal 💛";
    } else {
        categoryColor = "text-[#00a651]";
        resultText =
            "Yay! 🎉 Perkembangan si kecil sejauh ini sesuai dengan usianya. Terus ajak bermain, belajar, dan berinteraksi setiap hari agar kemampuan anak berkembang semakin optimal 💛";
    }

    const timelineNodes = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60];

    const directHome = () => {
        navigate("/");
    };

    return (
        <>
            <div className="min-h-screen bg-[#fbf3e4] relative flex flex-col items-center pt-10 px-4 md:px-16 font-sans overflow-x-hidden">
                <h1
                    className={`text-7xl md:text-[100px] font-black ${categoryColor} mb-8 font-serif drop-shadow-md`}
                >
                    {score}
                </h1>

                <div className="w-full max-w-4xl flex justify-between items-center mb-10 px-2 relative">
                    <div className="absolute top-[60%] left-0 w-full h-1 bg-black -z-10"></div>

                    {timelineNodes.map((node) => {
                        let nodeBg = "bg-[#00a651]";
                        if (node <= 15) nodeBg = "bg-red-600";
                        else if (node <= 35) nodeBg = "bg-[#f26522]";

                        return (
                            <div
                                key={node}
                                className="flex flex-col items-center z-10"
                            >
                                <span className="text-black font-bold text-sm md:text-base mb-2">
                                    {node}
                                </span>
                                <div
                                    className={`w-6 h-6 md:w-8 md:h-8 rounded-full border-[3px] border-black ${nodeBg}`}
                                ></div>
                            </div>
                        );
                    })}
                </div>

                <p
                    className={`text-center max-w-4xl font-bold text-lg md:text-2xl leading-snug mb-12 ${categoryColor}`}
                >
                    {resultText}
                </p>

                <div className="relative w-64 md:w-80 flex justify-center mt-auto">
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-48 h-4 border-t-4 border-orange-400 rounded-[50%]"></div>

                    {/* Gambar yang di-render di sini otomatis menyesuaikan dengan yang di-import */}
                    <img
                        src={babyImageSrc}
                        alt="Ilustrasi Bayi"
                        className="w-full object-contain"
                    />
                </div>

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

export default Result;
