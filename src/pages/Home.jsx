import hero from "../assets/home/hero.png";
import logo from "../assets/home/logo.png";
import start from "../assets/home/start.png";
import kemenkes from "../assets/home/kemenkes.png";

import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <div className="bg-hijau w-screen min-h-screen">
                <div className="flex flex-col-reverse md:flex-row text-blue-950">
                    <div className="w-full md:w-7/12 m-0 md:m-5 mr-0 p-5 md:p-0">
                        <img src={hero} className="w-full" />
                    </div>
                    <div className="w-full md:w-5/12 text-center">
                        <img src={kemenkes} className="w-8/12 ml-auto" />
                        <div className="text-xl pt-10">
                            <p>deteksi speech delay sejak</p>
                            <p>dini bersama dengan</p>
                            <img
                                src={logo}
                                className="w-10/12 mx-auto mt-5 mb-5"
                            />
                            <Link to="/menu">
                                <img
                                    src={start}
                                    className="w-7/12 mx-auto md:mb-15 cursor-pointer hover:scale-110"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
