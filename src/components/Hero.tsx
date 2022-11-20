import React from "react";
import { ArrowDown } from "../assets/icons/ArrowDown";

export const Hero = () => {
    return (
        <div className="h-full flex justify-evenly flex-col">
            <h1 className="font-bold text-center">
                We make people <br /> more valuable to Brands
            </h1>
            <div onClick={()=>window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'})} className="arrow-wrap self-center cursor-pointer">
                <ArrowDown className="arrow-down"/>
            </div>
        </div>
    );
};
