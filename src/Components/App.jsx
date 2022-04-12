import React from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";

import "../globalstyles/globalreset.css"
import Menu from "./Menu/Menu";
import NavBar from "./NavBar/NavBar";


const StyledApp = styled.div`
color: #4C1515;

@media (min-width: 1500px) {
  padding:  0 10em;
}

@media (min-width: 1500px) {
  padding:  0 10em;
}



`;



export default function App() {
  return (
    <StyledApp>
      <NavBar />
      <Switch>
        <Route path="/menu">
          <Menu />
        </Route>
        <Route path="/contact"></Route>
      </Switch>
    </StyledApp>
  );
}
