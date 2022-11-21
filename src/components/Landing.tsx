import React from "react";
import { COLORS } from "../config/Color";
import useMediaQuery from "../hooks/useMediaQuery";
import { Card } from "../widgets/Card";
import ScrollTop from "../widgets/ScrollTop";

const Landing = () => {
    const isSmall = useMediaQuery("(max-width: 600px)")

    return (
        <div className={`${isSmall ? "mt-5 gap-3" : "m-24 mb-3 gap-8"} flex flex-col `}>
            <div className="title text-center">
                <h6 className="text-red-500 text-sm">HOW WE DO IT</h6>
                <h2 className={`text-gray-700 ${isSmall ? "text-xl":"text-3xl"}`}>
                    We use data-driven creativity <br /> to solve business problems
                </h2>
            </div>
            <div className="flex place-items-center flex-col">
                <img src="/image/tg-banner.jpg" alt="Two guys talking" />
                <div className={`text-gray-700 bottom-0 tracking-wider bg-white ${isSmall ? "w-5/6 p-5 text-base":" p-10 w-2/3"} text-2xl text-center self-center`} 
                        style={{marginTop:isSmall ? "-70px" : "-150px"}}>
                    By harnessing powerful insights and smart targeting, we're
                    able to create behavior-changing ideas and experiences that
                    deliver value to brands. Supported by our proprietary 
                    <u>Creative Intelligence process</u>, <u>unique tools</u> and <u>global
                    partners</u>, we are able to put data at the heart of everything
                    we do to orchestrate experiences that deliver creativity
                    with precision and purpose.
                </div>
            </div>
            <div className="flex flex-col place-items-center">
                <img src="/image/pencil.gif" alt="pencil"/>
                <h6 className="text-red-500 text-sm">BUSINESS PROBLEM WE'VE SOLVED</h6>
            </div>
            <div className={`flex gap-3 m-6 ${isSmall ? "flex-col" : ""}`}>
                <Card label="Can a love story double as a hearing test ?"/>
                <Card label="How close to an AFL player can you get ?"/>
            </div>
            <a href="#" className={`underline text-gray-700 self-center`}>View your work</a>
            <ScrollTop />
        </div>
    );
};

export default Landing;
