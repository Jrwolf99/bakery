import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";

import "../globalstyles/globalreset.css"
import "../globalstyles/typography.css"
import useToggle from "../hooks/useToggle";
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

  const [isMobileClicked, toggleMobileClick] = useToggle();
  return (
    <BrowserRouter>
      <StyledApp>
        <NavBar toggleMobileClick={toggleMobileClick} isMobileClicked={isMobileClicked} />
        {isMobileClicked &&
          <MobileNavScreen toggleMobileClick={toggleMobileClick} />}
        {!isMobileClicked &&
          <Routes>
            <Route path="menu" element={<Menu />} />
          </Routes>}
      </StyledApp>

    </BrowserRouter>
  );
}
