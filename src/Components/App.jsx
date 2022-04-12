import React from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";


import "../globalstyles/globalreset.css"
import Menu from "./Menu/Menu";
import NavBar from "./NavBar/NavBar";


const StyledApp = styled.div`
`;



export default function App() {
  return (
    <StyledApp>
      <Switch>
        <NavBar />
        <Route path="/menu">
          <Menu />
        </Route>
        <Route path="/contact"></Route>
      </Switch>
    </StyledApp>
  );
}
