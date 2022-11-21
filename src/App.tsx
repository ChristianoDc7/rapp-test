import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { Hero } from "./components/Hero";
import Landing from "./components/Landing";
import useMediaQuery from "./hooks/useMediaQuery";
import Footer from "./components/Footer";

function App() {
    const isSmall = useMediaQuery("(max-width:600px)");

    return (
        <div className="relative main flex place-items-center flex-col">
            <video autoPlay muted playsInline loop id="bg-video" className="">
                <source src="/video/video.mp4" type="video/mp4" />
            </video>
            <main className={`absolute top-0 w-full h-full flex flex-col ${isSmall ? "": "gap-64"}`}>
                <Navbar />
                <Hero />
            </main>
            <Landing />
            <Footer />
        </div>
    );
}

export default App;
