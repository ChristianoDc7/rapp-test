import React, { useEffect } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import Languages from "../widgets/Languages";

const Navbar = () => {
    const isSmall = useMediaQuery("(max-width:600px)");
    const [open, setOpen ] = React.useState(false);

    const toggleMobileMenu = () => {
        setOpen(!open)
    }

    const itemMenu = document.querySelectorAll(".menu li a");

    useEffect(()=>{
        itemMenu?.forEach(element => {
            element.addEventListener("click", () => toggleMobileMenu(), false);
        }); 
        return () => {
            itemMenu?.forEach(element => {
                element.removeEventListener("click", () => toggleMobileMenu(), false);
            }); 
        }
    },[])


    return (
        <div className="flex w-full ">
            <nav
                className="flex flex-row w-full justify-between p-7"
                style={{ alignItems: "center" }}
            >
                <div className="logo-nav">
                    <img
                        src={`public/image/logo${isSmall ? "-mobile" : ""}.png`}
                        className="max-h-9"
                        alt="proximity logo"
                    />
                </div>

                <div
                    className={`z-20 
                    ${isSmall ? "block" : "hidden"}
                    ${open ? "close-icon" : "menu-icon"}
                    `}
                    onClick={()=>toggleMobileMenu()}
                >
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>

                <ul
                    className={`menu flex place-items-center  
                    ${ isSmall ? "flex-col fixed top-0 left-0 w-full justify-center gap-24" : "flex-row gap-3"}
                    ${open ? "nav-mobile block" : "hidden"}
                    `}
                >
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Works</a>
                    </li>
                    <li>
                        <a href="#">Latest</a>
                    </li>
                    <li>
                        <a href="#">People & Careers</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </nav>
            <Languages className={isSmall ? "hidden" : ""}/>
        </div>
    );
};

export default Navbar;
