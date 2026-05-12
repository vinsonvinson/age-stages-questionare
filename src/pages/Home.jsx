import hero from "../assets/home/hero.png";
import logo from "../assets/home/logo.png";

import mainImage from "../assets/home/screening.png";
import recommendationsImage from "../assets/home/parents.png";
import identityImage from "../assets/home/sleeping-baby.png";
import consultationImage from "../assets/home/nurse.png";
import foodImage from "../assets/home/food.png";

import MenuItemCard from "../components/MenuItemCard";

function Home() {
    const rightGridCards = [
        {
            imageSrc: recommendationsImage,
            title: "REKOMENDASI",
            description: "stimulasi yang tepat untuk anak anda",
        },
        {
            imageSrc: identityImage,
            title: "IDENTITAS ANAK",
            description: "Traditional Japanese flavors with our own twist.",
        },
        {
            imageSrc: consultationImage,
            title: "KONSULTASI AHLI",
            description: "contact person",
        },
        {
            imageSrc: foodImage,
            title: "MAKU-PIKU",
            description: "cegah risiko sakit ginjal",
        },
    ];

    return (
        <>
            <div className="bg-hijau w-screen">
                <div className="flex flex-col-reverse md:flex-row text-blue-950">
                    <div className="w-full md:w-7/12 m-0 md:m-5 mr-0 p-5 md:p-0">
                        <img src={hero} className="w-full" />
                    </div>
                    <div className="w-full md:w-5/12 text-center content-center">
                        <div className="text-xl pt-10 md:pt-0">
                            <p>deteksi speech delay sejak</p>
                            <p>dini bersama dengan</p>
                            <img
                                src={logo}
                                className="w-10/12 mx-auto mt-5 mb-5 md:mb-15"
                            />
                            <p className="text-lg">politekkes jakarta iii</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="min-h-screen bg-[#fcf9eb] px-6 py-10 md:py-16 flex flex-col items-center font-sans">
                {/* Judul Halaman */}
                <h1 className="text-5xl md:text-6xl font-black text-[#e83e8c] tracking-wide mb-10 text-center">
                    Menu Utama
                </h1>

                {/* Grid Layout Utama */}
                <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
                    {/* Kolom Kiri: Kartu Utama */}
                    <div className="w-full h-full">
                        <MenuItemCard
                            imageSrc={mainImage}
                            title="MULAI SCREENING"
                            description="deteksi dini speech delay sesuai dengan usia anak"
                            isMainCard={true}
                        />
                    </div>

                    {/* Kolom Kanan: Grid 2x2 untuk kartu kecil */}
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
                        {rightGridCards.map((card, index) => (
                            <MenuItemCard
                                key={index}
                                imageSrc={card.imageSrc}
                                title={card.title}
                                description={card.description}
                                isMainCard={false}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
