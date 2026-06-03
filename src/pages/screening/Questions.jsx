import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateField } from "../../store/childSlice";
import { useNavigate } from "react-router";
import arrow from "../../assets/screening/arrow.png";
import { questionsData } from "../../data/questionsData";
import bola from "../../assets/screening/bola.png";

function Questions() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Ambil usia bulan dari Redux
    const ageInMonths = useSelector((state) => state.child.ageInMonths) || 12; // Default ke 12 jika belum ada (untuk testing)

    // Local state untuk menyimpan jawaban: format { idPertanyaan: skor }
    // Contoh isi: { 1: 10, 2: 0, 3: 5 }
    const [answers, setAnswers] = useState({});

    // Ambil daftar pertanyaan sesuai usia yang dipilih
    // Jika data belum ada, berikan array kosong sebagai fallback
    const currentQuestions = questionsData[ageInMonths] || [];

    // Fungsi untuk menangani klik audio
    const playAudio = (audioSrc) => {
        if (audioSrc) {
            const audio = new Audio(audioSrc);
            audio
                .play()
                .catch((err) =>
                    console.error(
                        "Gagal memutar audio, pastikan path benar:",
                        err,
                    ),
                );
        }
    };

    // Fungsi saat opsi dipilih
    const handleOptionSelect = (questionId, score) => {
        setAnswers((prev) => ({
            ...prev,
            [questionId]: score,
        }));
    };

    // Fungsi submit (hitung total dan simpan ke Redux)
    const handleSubmit = () => {
        // Jumlahkan semua value (skor) yang ada di object answers
        const totalScore = Object.values(answers).reduce(
            (total, score) => total + score,
            0,
        );

        // Simpan ke Redux
        dispatch(updateField({ field: "score", value: totalScore }));

        console.log("Jawaban Detail:", answers);
        console.log("Total Skor tersimpan:", totalScore);

        // Navigate ke halaman hasil
        navigate("/result");
    };

    // Validasi: Tombol panah aktif jika jumlah jawaban == jumlah pertanyaan
    const isAllAnswered =
        Object.keys(answers).length === currentQuestions.length &&
        currentQuestions.length > 0;

    return (
        <>
            <div className="min-h-screen bg-[#fcf9eb] py-8 px-4 md:py-12 md:px-16 font-sans relative flex flex-col items-center">
                {/* Judul Halaman */}
                <h1 className="text-4xl md:text-6xl font-black text-[#1e2a5e] font-serif mb-6 md:mb-10 drop-shadow-sm">
                    {ageInMonths} bulan
                </h1>

                {/* Header Tabel Opsi - Hanya tampil di desktop (md ke atas) */}
                <div className="hidden md:flex w-full max-w-5xl justify-end mb-2">
                    <div className="flex gap-9 justify-between font-black text-[#1e2a5e] pr-4">
                        <span>tidak</span>
                        <span>kadang</span>
                        <span>ya</span>
                    </div>
                </div>

                {/* Daftar Pertanyaan */}
                {/* Tambahkan padding bottom besar (pb-32) agar pertanyaan terakhir tidak tertutup tombol panah */}
                <div className="flex flex-col gap-6 w-full max-w-5xl pb-32">
                    {currentQuestions.map((q, index) => (
                        // flex-col untuk HP, md:flex-row untuk Laptop
                        <div
                            key={q.id}
                            className="flex flex-col md:flex-row items-center md:items-stretch gap-4 w-full"
                        >
                            {/* Pembungkus Speaker & Teks (Sisi Kiri di Desktop, Atas di HP) */}
                            <div className="flex items-start md:items-center gap-3 w-full md:flex-1">
                                {/* Ikon Speaker */}
                                <div className="w-10 h-20 shrink-0 flex justify-center mt-2 md:mt-0">
                                    {q.hasAudio ? (
                                        <button
                                            onClick={() =>
                                                playAudio(q.audioSrc)
                                            }
                                            className="hover:scale-110 transition-transform cursor-pointer"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                className="w-8 h-8 md:w-10 md:h-10"
                                            >
                                                <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 11-1.06-1.06 8.25 8.25 0 000-11.668.75.75 0 010-1.06z" />
                                                <path d="M15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z" />
                                            </svg>
                                        </button>
                                    ) : (
                                        q?.isShowImg && (
                                            <img
                                                src={bola}
                                                alt=""
                                                className="min-w-30 z-10 object-cover overflow-visible translate-x-5 translate-y-15 md:translate-0"
                                            />
                                        )
                                    )}
                                </div>

                                {/* Kotak Teks Pertanyaan */}
                                <div className="flex-1 bg-[#cbf3a1] rounded-2xl md:rounded-[30px] px-5 md:px-6 py-4 flex items-start shadow-sm w-full">
                                    <span className="text-[#f9a885] font-black text-lg md:text-xl mr-3 md:mr-4">
                                        {index + 1}.
                                    </span>
                                    <p className="text-[#659b3f] font-bold text-sm md:text-base leading-snug pt-0.5">
                                        {q.text}
                                    </p>
                                </div>
                            </div>

                            {/* Pembungkus Tombol Pilihan (Bawah di HP, Kanan di Desktop) */}
                            <div className="flex w-full md:w-auto justify-center md:justify-between items-center gap-4 lg:gap-8 ml-0 md:ml-4">
                                {/* Tombol TIDAK */}
                                <div className="flex flex-col items-center">
                                    {/* Label teks hanya tampil di HP (md:hidden) */}
                                    <span className="text-xs font-bold text-[#1e2a5e] mb-1 md:hidden">
                                        tidak
                                    </span>
                                    <button
                                        onClick={() =>
                                            handleOptionSelect(q.id, 0)
                                        }
                                        className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                                            answers[q.id] === 0
                                                ? "bg-red-500 ring-4 ring-red-700 scale-110"
                                                : "bg-red-500 hover:bg-red-700"
                                        }`}
                                    >
                                        <svg
                                            className="w-5 h-5 md:w-6 md:h-6 text-white"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={3}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                </div>

                                {/* Tombol KADANG */}
                                <div className="flex flex-col items-center">
                                    <span className="text-xs font-bold text-[#1e2a5e] mb-1 md:hidden">
                                        kadang
                                    </span>
                                    <button
                                        onClick={() =>
                                            handleOptionSelect(q.id, 5)
                                        }
                                        className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                                            answers[q.id] === 5
                                                ? "bg-blue-500 ring-4 ring-blue-700 scale-110"
                                                : "bg-blue-500 hover:bg-blue-700"
                                        }`}
                                    >
                                        <svg
                                            className="w-5 h-5 md:w-6 md:h-6 text-white"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={4}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M20 12H4"
                                            />
                                        </svg>
                                    </button>
                                </div>

                                {/* Tombol YA */}
                                <div className="flex flex-col items-center">
                                    <span className="text-xs font-bold text-[#1e2a5e] mb-1 md:hidden">
                                        ya
                                    </span>
                                    <button
                                        onClick={() =>
                                            handleOptionSelect(q.id, 10)
                                        }
                                        className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center transition-all cursor-pointer ${
                                            answers[q.id] === 10
                                                ? "bg-green-500 ring-4 ring-green-700 scale-110"
                                                : "bg-green-500 hover:bg-green-700"
                                        }`}
                                    >
                                        <svg
                                            className="w-6 h-6 md:w-8 md:h-8 text-white"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={3}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Tombol Panah Kanan Bawah */}
                {/* Menggunakan 'fixed' agar selalu berada di pojok kanan bawah layar walau halaman di-scroll */}
                <button
                    onClick={handleSubmit}
                    disabled={!isAllAnswered}
                    className={`fixed bottom-6 right-6 md:bottom-12 md:right-16 transition-all duration-300 z-50
          ${
              !isAllAnswered
                  ? "opacity-40 cursor-not-allowed grayscale"
                  : "hover:scale-110 hover:translate-x-2"
          }
        `}
                >
                    <img
                        src={arrow}
                        alt="Lanjut"
                        className="w-16 md:w-28 drop-shadow-lg"
                    />
                </button>
            </div>
        </>
    );
}

export default Questions;
