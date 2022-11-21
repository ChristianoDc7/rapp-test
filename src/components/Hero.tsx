import React from "react";
import { ArrowDown } from "../assets/icons/ArrowDown";
import Typewriter from 'typewriter-effect';
import useMediaQuery from "../hooks/useMediaQuery";

export const Hero = () => {
    const isSmall = useMediaQuery("(max-width: 600px)")

    return (
        <div className="h-full flex align-middle flex-col">
            <h1 className={`font-bold text-center ${isSmall ? "text-xl" : ""}`}>
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
            <div onClick={()=>window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'})} className="arrow-wrap self-center cursor-pointer">
                <ArrowDown className="arrow-down"/>
            </div>
            
        </div>
    );
};
