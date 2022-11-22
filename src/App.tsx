import { useMemo, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Hero } from "./components/Hero";
import Landing from "./components/Landing";
import useMediaQuery from "./hooks/useMediaQuery";
import Footer from "./components/Footer";
import { TProps } from "./models/UIProps";
import "animate.css/animate.min.css";

function App() {
    const isSmall = useMediaQuery("(max-width:600px)");
    const isMedium = useMediaQuery("(max-width:900px) and (min-width:600px)");

    const [open, setOpen ] = useState(false);

    const toggleMobileMenu = () => {        
        setOpen(!open)
    }

    const propsComp = useMemo((): TProps=>{
        return {
            open,
            toggleOpen: toggleMobileMenu,
            isSmall,
            isMedium
        }
    },[open, setOpen, isSmall, isMedium])
    
    return (
        <div className="relative main flex place-items-center flex-col">
            <video autoPlay muted playsInline loop id="bg-video" className="">
                <source src="/video/video.mp4" type="video/mp4" />
            </video>
            <main className={`absolute top-0 w-full h-full flex flex-col ${isSmall ? "": (isMedium ? "gap-32" : "gap-64")}`}>
                <Navbar {...propsComp}  />
                <Hero {...propsComp} />
            </main>
            <Landing {...propsComp} />
            <Footer {...propsComp} />
        </div>
    );
}

export default App;
