import React, { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import useMobile from "../hooks/useMobile";

import styled from "styled-components";
import "../globalstyles/globalreset.css"
import "../globalstyles/typography.css"

import MobileNavScreen from "./MobileNavScreen/MobileNavScreen";
import NavBar from "./NavBar/NavBar";

import Home from "./Pages/Home/Home";
import Menu from "./Pages/Menu/Menu";
import Contact from "./Pages/Contact/Contact";
import CoffeeCakeInfo from "./Pages/CoffeeCakeInfo/CoffeeCakeInfo";
import About from "./Pages/About/About";
import Find from "./Pages/Find/Find";


const StyledApp = styled.div`
color: #4C1515;

`;


export default function App() {

  const { isMobile, isNavClicked, toggleNavClick } = useMobile();
  return (
    <BrowserRouter>
      <StyledApp>
        {isNavClicked ?
          <MobileNavScreen
            color2="#4C1515"
            isMobile={isMobile}
            toggleNavClick={toggleNavClick}

          />
          :
          <Routes>

            <Route path="/" element={<Home
              isMobile={isMobile}
              toggleNavClick={toggleNavClick}
            />} />

            <Route path="/about" element={<About
              isMobile={isMobile}
              toggleNavClick={toggleNavClick}
            />} />

            <Route path="/find" element={<Find
              isMobile={isMobile}
              toggleNavClick={toggleNavClick}
            />} />


            <Route path="/menu" element={<Menu
              color2="#4C1515"
              isMobile={isMobile}
              toggleNavClick={toggleNavClick}
            />} />

            <Route path="/contact" element={<Contact
              color2="#4C1515"
              isMobile={isMobile}
              toggleNavClick={toggleNavClick}
            />} />



            <Route path="/menu/coffeecakeinfo"
              element={<CoffeeCakeInfo
                isMobile={isMobile}
                toggleNavClick={toggleNavClick}
                color="#709B4E"
                color2="#162C05"
              />} />



            <Route path="/menu/icecreaminfo"
              element={<CoffeeCakeInfo
                isMobile={isMobile}
                toggleNavClick={toggleNavClick}
                color="#709B4E"
                color2="#162C05"
              />} />

            <Route path="/menu/cakepopinfo"
              element={<CoffeeCakeInfo
                isMobile={isMobile}
                toggleNavClick={toggleNavClick}
                color="#709B4E"
                color2="#162C05"
              />} />





          </Routes>
        }

      </StyledApp>
    </BrowserRouter>
  );
}
