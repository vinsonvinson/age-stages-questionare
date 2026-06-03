import { Link } from "react-router-dom";
const MenuItemCard = ({ imageSrc, title, description, isMainCard, to }) => {
    return (
        <Link
            to={to}
            className={`flex flex-col items-center bg-[#d4f6a1] rounded-4xl w-full h-full shadow-sm hover:scale-105
        ${isMainCard ? "p-6 md:p-8" : "p-4 md:p-5"}
      `}
        >
            {/* Gambar */}
            <img
                src={imageSrc}
                alt={title}
                className={`w-full object-cover rounded-3xl bg-white
          ${isMainCard ? "aspect-4/3" : "aspect-video"}
        `}
            />

            {/* Container Teks */}
            <div className="flex flex-col items-center justify-center grow mt-4 md:mt-6">
                {/* Judul */}
                <h2
                    className={`font-black text-[#f9a885] uppercase text-center
            ${isMainCard ? "text-2xl md:text-3xl mb-2" : "text-base md:text-lg mb-1"}
          `}
                >
                    {title}
                </h2>

                {/* Deskripsi */}
                <p
                    className={`text-[#659b3f] text-center font-medium leading-snug
            ${isMainCard ? "text-lg md:text-xl" : "text-xs md:text-sm"}
          `}
                >
                    {description}
                </p>
            </div>
        </Link>
    );
};

export default MenuItemCard;
