import React, { useState } from 'react'
import styled from "styled-components";
import Footer from '../../Footer/Footer';
import NavBar from '../../NavBar/NavBar';
import HoriScroll from './HoriScroll/HoriScroll';

export default function About({ isMobile, toggleNavClick }) {
    return (
        <>
            <NavBar color2="#5F2828"
                isMobile={isMobile}
                toggleNavClick={toggleNavClick} />
            <HoriScroll />
            <Footer />
        </>
    )
}