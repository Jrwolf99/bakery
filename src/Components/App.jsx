import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";

import "../globalstyles/globalreset.css"
import "../globalstyles/typography.css"
import useMobile from "../hooks/useMobile";
import CoffeeCakeInfo from "./CoffeeCakeInfo/CoffeeCakeInfo";
import Contact from "./Contact/Contact";
import Menu from "./Menu/Menu";
import MobileNavScreen from "./MobileNavScreen/MobileNavScreen";
import NavBar from "./NavBar/NavBar";


const StyledApp = styled.div`
color: #4C1515;
@media (min-width: 1700px) {
  padding:  0 10em;
}
@media (min-width: 1700px) {
  padding:  0 10em;
}

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
            <Route path="/" element={<Menu
              color2="#4C1515"
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
          </Routes>
        }

      </StyledApp>
    </BrowserRouter>
  );
}
