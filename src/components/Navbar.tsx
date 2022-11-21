import React from "react";

const Navbar = () => {
    return (
        <div className="flex w-full ">

            <nav className="flex flex-row w-full justify-between p-7" style={{alignItems:"center"}}>
                    <div className="logo-nav">
                        <img src="public/image/logo.png" className="max-h-9" alt="proximity logo"/>
                    </div>

                    <ul className="flex gap-3">
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
            <div className="languages flex cursor-pointer self-center px-1 gap-2 max-h-6 border border-white border-solid">
                <span className="font-bold">EN</span>
                <span className="hover:font-bold">FR</span>
            </div>
        </div>
    );
};

export default Navbar;
