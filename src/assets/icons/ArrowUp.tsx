import { SVGProps } from "react";

export const ArrowUp = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="30px"
            height="20px"
            viewBox="0 0 512.000000 512.000000"
            {...props}
        >
            <g
                transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                fill="#000000"
                stroke="none"
            >
                <path
                    d="M2152 4717 c-221 -221 -402 -405 -402 -410 0 -4 146 -7 325 -7 l325
                    0 0 -2150 0 -2150 160 0 160 0 0 2150 0 2150 325 0 c179 0 325 3 325 8 0 8
                    -802 812 -810 812 -3 0 -186 -181 -408 -403z"
                />
            </g>
        </svg>
    );
};
