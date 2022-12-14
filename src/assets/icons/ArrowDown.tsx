import { SVGProps } from "react";

export const ArrowDown = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="50px"
            height="30px"
            viewBox="0 0 512.000000 512.000000"
            {...props}
        >
            <g
                transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                fill="white"
                stroke="none"
            >
                <path
                    d="M2400 2970 l0 -2150 -325 0 c-179 0 -325 -3 -325 -8 0 -4 182 -189
                    405 -412 l405 -405 405 405 c223 223 405 408 405 412 0 5 -146 8 -325 8 l-325
                    0 0 2150 0 2150 -160 0 -160 0 0 -2150z"
                />
            </g>
        </svg>
    );
};
