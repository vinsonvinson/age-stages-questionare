import face1 from "../assets/kontak/face1.png";
import face2 from "../assets/kontak/face2.png";
import foto from "../assets/kontak/foto.png";

function Kontak() {
    return (
        <>
            <div className="bg-[#fbf3e4] w-screen min-h-screen">
                <div className="flex pt-5">
                    <div className="w-2/12">
                        <img src={face1} alt="" />
                    </div>
                    <div className="text-center w-8/12 pt-10">
                        <p className="text-3xl md:text-6xl font-bold mb-3">
                            Hubungi Kami :)
                        </p>
                        <p className="text-lg md:text-xl">
                            Kalau kamu butuh bantuan untuk memilih stimulasi
                            yang tepat atau kamu punya pertanyaan terkait
                            perkembangan anak yang ingin ditanyakan :)
                        </p>
                    </div>
                    <div className="w-2/12">
                        <img src={face2} alt="" />
                    </div>
                </div>
                <div className="flex justify-center">
                    <img src={foto} alt="" className="md:max-w-[500px]" />
                </div>
            </div>
        </>
    );
}

export default Kontak;
