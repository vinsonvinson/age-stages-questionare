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
            to: "/rekomendasi",
        },
        {
            imageSrc: identityImage,
            title: "IDENTITAS ANAK",
            description: "Traditional Japanese flavors with our own twist.",
            to: "/",
        },
        {
            imageSrc: consultationImage,
            title: "KONSULTASI AHLI",
            description: "contact person",
            to: "/",
        },
        {
            imageSrc: foodImage,
            title: "MAKU-PIKU",
            description: "cegah risiko sakit ginjal",
            to: "/",
        },
    ];

    return (
        <>
            <div className="min-h-screen bg-[#fcf9eb] px-6 py-10 md:py-16 flex flex-col items-center font-sans">
                {/* Judul Halaman */}
                <h1 className="text-5xl md:text-6xl font-black text-[#f9a885] tracking-wide mb-10 text-center">
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
                            to="/screening"
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
                                to={card.to}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
