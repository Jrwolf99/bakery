import { useState } from "react";
import { wrap } from "@popmotion/popcorn";
import Footer from "../../Footer/Footer";
import NavBar from "../../NavBar/NavBar";
import Slider from "./Slider/Slider";



//component
export default function Home({ isMobile, toggleNavClick }) {
    const themeArray = [
        {
            color1: "#FFC5C4",
            color2: "#5F2828"
        },
        {
            color1: "#4EB4D4",
            color2: "#084356"
        }
    ]
    const [[page, direction], setPage] = useState([0, 0]);
    const imageIndex = wrap(0, themeArray.length, page);
    return (
        <>
            <NavBar color2={themeArray[imageIndex].color2}
                isMobile={isMobile}
                toggleNavClick={toggleNavClick} />

            <Slider themeArray={themeArray}
                imageIndex={imageIndex}
                page={page}
                setPage={setPage}
                direction={direction} />


            <Footer />
        </>

    )

}
