import React, { useState } from 'react'
import styled from "styled-components";


import Footer from '../../Footer/Footer';
import NavBar from '../../NavBar/NavBar';


const StyledPink = styled.div`
height: 100vh;
background-color: #FFC5C4;
`;
const StyledText = styled.div`
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     text-align: center;
     height: 100%;
       &>h2 {
        font-size: 4rem;
    }
    &>p {
        font-size: 2rem;
    }
    `;


const StyledBlue = styled.div`
height: 100vh;
background-color: #4EB4D4;
`;


const StyledGreen = styled.div`
height: 100vh;
background-color: #6B9649;
`;


const StyledMoreInfo = styled.div`



`;


export default function Find({ isMobile, toggleNavClick }) {
    return (
        <>
            <StyledPink>
                <NavBar color2="#5F2828"
                    isMobile={isMobile}
                    toggleNavClick={toggleNavClick} />
                <StyledText>
                    <h2>Find Us</h2>
                    <p>Browse the Various Locations We Serve Our Delicious Treats From.</p>
                </StyledText>
            </StyledPink>
            <StyledBlue>
                <StyledText>
                    <h2>The Green Beetle</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius purus magna semper feugiat enim fringilla condimentum. At nibh sed vivamus egestas in sit volutpat. Viverra dictum ac amet, imperdiet pulvinar volutpat platea.</p>

                </StyledText>
            </StyledBlue>
            <StyledGreen>
                <StyledText>
                    <h2>The Green Beetle</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius purus magna semper feugiat enim fringilla condimentum. At nibh sed vivamus egestas in sit volutpat. Viverra dictum ac amet, imperdiet pulvinar volutpat platea.</p>
                </StyledText>
            </StyledGreen>


            <StyledMoreInfo>

                <h2>Check Out the Events Tab to See Even More Places Were Popping In To!</h2>
                <button></button>
            </StyledMoreInfo>

            <Footer />


        </>
    )
}