import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";

import "../globalstyles/globalreset.css"
import "../globalstyles/typography.css"
import useMobile from "../hooks/useMobile";
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

  const { isMobile } = useMobile();
  return (
    <BrowserRouter>
      <StyledApp>
        <NavBar
          isMobile={isMobile} />
        <Routes>
          <Route path="menu" element={<Menu />} />
          <Route path="contact" element={<Contact />} />
          <Route path="mobilenavscreen" element={<MobileNavScreen />} />
        </Routes>
      </StyledApp>
    </BrowserRouter>
  );
}
