import React, { useState } from 'react'
import styled from "styled-components";

import AboutLines from "../../../../assets/images/AboutLines.svg"

import Img from "../../../../assets/images/Img.png"
import ImgGrpTwo from "../../../../assets/images/ImgGrpTwo.png"

const StyledHoriScroll = styled.div`
height: 80vh;
position: relative;
`;

const StyledOuterWrap = styled.div`
height: 100vw;
width: 80vh;
position: absolute;

transform: rotate(-90deg) translateX(-80vh);
transform-origin: top left;

overflow-x: hidden;
overflow-y: scroll;
scroll-behavior: smooth;

scrollbar-width: none ;
-ms-overflow-style: none;
&::-webkit-scrollbar{
    display: none;
}

perspective: 8px;
perspective-origin: 0%;

&>* {
    transform-origin: top left;
    transform-style: preserve-3d;
}

`;

const StyledBackground = styled.div`
position: absolute;
width: 150vw;
overflow: hidden;
height: 80vh;
transform: rotate(90deg) translateX(-40vw) translateY(-120vh) translateZ(-6px) scale(1.75);
`;
const StyledAboutLinesImg = styled.img`
position: absolute;
bottom: 50%;
height: 20%;
width: 100%;
transform: scale(1.5) translateX(10%);
`;

const StyledMidground = styled.div`
height: 80vh;
transform: rotate(90deg) translateX(42vw) translateY(-50vh) translateZ(3px) scale(.625);
font-size: 4rem;
display: flex;
gap: 30vw;
`;



const StyledForeground = styled.div`
width: 200vw;
height: 80vh;
transform: rotate(90deg) translateX(0vw) translateY(-30vh) translateZ(4px) scale(.5);
font-size: 20rem;
display: flex;
gap: 30vw;
`;




const StyledImgGrp = styled.div`

    position: relative;

    height: 37vw;
    width: 30vw;

    &>img:nth-of-type(1) {
        position: absolute;
    }
    
    &>img:nth-of-type(2) {
        position: absolute;
        right: 0;
        bottom: 0;
    }

`;
const StyledImgGrpTwo = styled.div`
width: 800px;
transform: translateY(-100px);
`;










export default function HoriScroll() {
    return (
        <StyledHoriScroll>
            <StyledOuterWrap>
                <StyledBackground>
                    <StyledAboutLinesImg src={AboutLines} />
                </StyledBackground>
                <StyledMidground>
                    <div>DATE</div>
                    <div>DATE</div>
                    <div>DATE</div>
                    <div>DATE</div>
                </StyledMidground>

                <StyledForeground>
                    <StyledImgGrp>
                        <img src={Img} alt="girl" />
                    </StyledImgGrp>
                    <StyledImgGrpTwo>
                        <img src={ImgGrpTwo} alt="girl" />
                    </StyledImgGrpTwo>
                    <StyledImgGrp>
                        <img src={Img} alt="girl" />
                    </StyledImgGrp>
                    <StyledImgGrp>
                        <img src={Img} alt="girl" />
                    </StyledImgGrp>
                </StyledForeground>


            </StyledOuterWrap>
        </StyledHoriScroll>
    )
}