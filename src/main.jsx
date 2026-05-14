import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import Home from "./pages/Home.jsx";
import Start from "./pages/screening/Start.jsx";
import Usia from "./pages/screening/Usia.jsx";
import Questions from "./pages/screening/Questions.jsx";
import Result from "./pages/screening/Result.jsx";
import Rekomendasi from "./pages/Rekomendasi.jsx";
import Menu from "./pages/Menu.jsx";
import { Provider } from "react-redux"; // Import Provider
import { store } from "./store/store"; // Import store yang baru dibuat

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/screening" element={<Start />} />
                    <Route path="/usia" element={<Usia />} />
                    <Route path="/questions" element={<Questions />} />
                    <Route path="/result" element={<Result />} />
                    <Route path="/rekomendasi" element={<Rekomendasi />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    </StrictMode>,
);
