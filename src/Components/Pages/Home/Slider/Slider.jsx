import React, { useState, useEffect, useCallback } from 'react'
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion"


import cakepopHome from '../../../../assets/images/Backgrounds/cakepopHome.png'
import icecreamHome from '../../../../assets/images/Backgrounds/icecreamHome.png'

const variants = {
    enter: (direction) => {
        return {
            x: direction > 0 ? 2000 : -2000,
        };
    },
    center: {
        x: 0,
    },
    exit: (direction) => {
        return {
            x: direction < 0 ? 2000 : -2000,
        };
    }
};



const StyledSlider = styled.div`
position: relative;
height: 80vh;

&>button {
    position: absolute;
    font-size: 2rem;
    z-index: 1;
    height: 60px;
    width: 60px;
    background-color: white;
    top: 30vh;
    border-radius: 50%;
}
&>button:hover {

    background-color: #eeeeee;

}

`;

const StyledButtonLeft = styled.button`
    left: 20px;
  

`;

const StyledButtonRight = styled.button`
    right: 20px;
`;



const StyledPic = styled.div`
background-image: url(${props => props.pic});
background-repeat: no-repeat;
background-size: contain;
background-position: center;
background-color: ${props => props.color1};
position: absolute;
height: 80vh;
width: 100vw;
`;



export default function Slider({ themeArray, imageIndex, page, setPage, direction }) {

    const paginate = useCallback(
        (newDirection) => {
            setPage([page + newDirection, newDirection]);
        },
        [page, setPage],
    )


    let img;
    switch (imageIndex) {
        case 0:
            img = cakepopHome;
            break;
        case 1:
            img = icecreamHome;
            break;
        default:
            img = icecreamHome;
            break;
    }


    useEffect(() => {
        const interval = setInterval(() => {
            paginate(-1)
        }, 2700);
        return () => clearInterval(interval);
    }, [paginate]);

    return (
        <StyledSlider>
            <StyledButtonLeft onClick={() => {
                paginate(1);
            }}>&lt;</StyledButtonLeft>
            <StyledButtonRight onClick={() => {
                paginate(-1);
            }}>&gt;</StyledButtonRight>
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    key={page}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    custom={direction}
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                    }}>
                    <StyledPic color1={themeArray[imageIndex].color1} pic={img} alt="img" />
                </motion.div>
            </AnimatePresence>
        </StyledSlider>
    )
}