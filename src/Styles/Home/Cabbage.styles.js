import { keyframes } from '@emotion/react';

const ArrowAnimation = keyframes`
    0% {opacity:0},
    40% {opacity:1},
    80% {opacity:0},
    100% {opacity:0}
`;

export default {
    Arrow: {
        mt: "50px",
        textAlign: "center",
        svg: {
            fontSize: "28px",
            display: "block",
            margin: "-20px auto",
            animation: `${ArrowAnimation} 2s infinite`,
            "&.a1": {
                animationDelay: "0s"
            },
            "&.a2": {
                animationDelay: "0.2s"
            },
            "&.a3": {
                animationDelay: "0.5s"
            }
        }
    }
}