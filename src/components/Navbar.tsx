import React, { useEffect } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import Languages from "../widgets/Languages";

const Navbar = () => {
    const isSmall = useMediaQuery("(max-width:600px)");
    const menuButton = document.querySelector("#menu-button");

    const toggleMobileMenu = () => {
        let menu = document.querySelector(".menu");
        console.log("click");
        
        menuButton?.setAttribute(
            "class",
            menuButton?.getAttribute("class") === "close-icon"
                ? "menu-icon"
                : "close-icon"
        );
        if(menu){
            (menu as any).style.top = menuButton?.getAttribute("class") === "close-icon" ? "0" : "-120%";
        }
    }

    const itemMenu = document.querySelectorAll(".menu li a");

    useEffect(()=>{
        menuButton?.addEventListener("click", () => toggleMobileMenu(), false);
        itemMenu?.forEach(element => {
            element.addEventListener("click", () => toggleMobileMenu(), false);
        }); 
        return () => {
            menuButton?.removeEventListener("click", () => toggleMobileMenu(), false);
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
                    className={`menu-icon z-20 ${isSmall ? "block" : "hidden"}`}
                    id="menu-button"
                >
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>

                <ul
                    className={`menu flex place-items-center gap-3 ${
                        isSmall
                            ? "nav-mobile flex-col fixed"
                            : "flex-row"
                    }`}
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
