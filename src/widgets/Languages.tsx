import React from "react";

const Languages = ({className}:{className?:string}) => {
    return (
        <div className={`languages flex cursor-pointer self-center px-1 gap-2 max-h-6 border border-white border-solid ${className}`}>
            <span className="font-bold">EN</span>
            <span className="hover:font-bold">FR</span>
        </div>
    );
};

export default Languages;
