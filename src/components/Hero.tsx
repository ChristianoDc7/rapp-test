import React from "react";
import { ArrowDown } from "../assets/icons/ArrowDown";
import Typewriter from 'typewriter-effect';
import useMediaQuery from "../hooks/useMediaQuery";
import { TProps } from "../models/UIProps";

export const Hero = (props: TProps) => {
    const {open, isSmall, isMedium} = props
    return (
        <div className={`h-full flex align-middle flex-col ${isSmall ? "gap-14" : (isMedium ? "gap-32" : "justify-between")}`}>
            <h1 className={`font-bold text-center ${isSmall ? "text-xl" : (isMedium ? "text-4xl" : "")} ${(open && isSmall) && "hidden"}`}>
                    <Typewriter
                            options={{
                                autoStart: true,
                                loop: true,
                                delay: "natural",
                             }}
                            onInit={(typewriter) => {
                            typewriter
                                .typeString(`We make people`)
                                .pauseFor(700)
                                .deleteAll()
                                .typeString(`More valuable to Brands`)
                                .start();
                            }}
                        /> 
            </h1>
            <div onClick={()=>window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'})} 
                 className={`arrow-wrap self-center cursor-pointer ${(open && isSmall) && "hidden"}`}>
                <ArrowDown className="arrow-down"/>
            </div>
            
        </div>
    );
};
