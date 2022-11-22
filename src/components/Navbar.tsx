import React, { useEffect } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { TProps } from "../models/UIProps";
import Languages from "../widgets/Languages";


const Navbar = (props: TProps) => {
    const {open, toggleOpen, isSmall} = props

    const itemMenu = document.querySelectorAll(".menu li a");

    useEffect(()=>{
        itemMenu?.forEach(element => {
            element.addEventListener("click", () => toggleOpen?.(), false);
        }); 
        return () => {
            itemMenu?.forEach(element => {
                element.removeEventListener("click", () => toggleOpen?.(), false);
            }); 
        }
    },[])


    return (
        <div className="flex w-full ">
            <nav
                className={`flex flex-row w-full justify-between p-7 ${(open && isSmall) ? "fixed top-0" : ""}`}
                style={{ alignItems: "center" }}
            >
                <div className="logo-nav">
                    <img
                        src={`/image/logo${isSmall ? "-mobile" : ""}.png`}
                        className="max-h-9"
                        alt="proximity logo"
                    />
                </div>
                {
                    isSmall && ( 
                        <div
                            className={`z-20 
                            ${open ? "close-icon" : "menu-icon"}
                            `}
                            onClick={toggleOpen}
                        >
                            <div className="bar1"></div>
                            <div className="bar2"></div>
                            <div className="bar3"></div>
                        </div>
                     )
                }

                <ul
                    className={`menu flex place-items-center
                    ${ isSmall ? "flex-col fixed top-0 left-0 w-full justify-center gap-20" : "flex-row gap-3"}
                    ${open ? "nav-mobile block" : (isSmall ? "hidden" : "")}
                    `}
                    >
                    {
                        isSmall && <li><Languages /></li>
                    }
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
            {
                !isSmall && <Languages className="self-center"/>
            }
        </div>
    );
};

export default Navbar;
