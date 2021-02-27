import React from "react";
import FullPage from "./FullPageContent";
import ReactFullpage from "@fullpage/react-fullpage";
import LogoSmall from "./LogoSmall";
import NavList from "./NavList";

function App() {
  return (
    <React.Fragment>
      
      <LogoSmall />
      <NavList />
      <FullPage />
    </React.Fragment>
  );
}


export default App;
