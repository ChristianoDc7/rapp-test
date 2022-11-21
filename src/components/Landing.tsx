import React from "react";

const Landing = () => {
    return (
        <div className="m-24 xs:m-10 flex flex-col gap-8">
            <div className="title text-center">
                <h6 className="text-red-500 text-sm">HOW WE DO IT</h6>
                <h2 className="text-[#5A4660] text-3xl">
                    We use data-driven creativity <br /> to solve business problems
                </h2>
            </div>
            <div>
                <img src="/image/tg-banner.jpg" alt="Two guys talking" />
                <div className="text-[#5A4660] bottom-0 bg-white w-2/3 text-2xl text-center self-center" style={{marginTop:"-5opx"}}>
                    By harnessing powerful insights and smart targeting, we're
                    able to create behavior-changing ideas and experiences that
                    deliver value to brands. Supported by our proprietary
                    Creative Intelligence process, unique tools and global
                    partners, we are able to put data at the heart of everything
                    we do to orchestrate experiences that deliver creativity
                    with precision and purpose.
                </div>
            </div>
        </div>
    );
};

export default Landing;
