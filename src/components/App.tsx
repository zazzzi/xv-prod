import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import LogoSmall from "./LogoSmall";
import NavList from "./NavList";
import PageElement from "./PageElements";


function App() {
  function handleSectionChange(origin: any, destination: any, direction: any) {
    console.log(origin, destination, direction);
 
  }

  return (
    <React.Fragment>
      
      <LogoSmall />
      <NavList />


      <ReactFullpage
      //fullpage options
      navigation
      onLeave={handleSectionChange}
      licenseKey={"YOUR_KEY_HERE"}
      scrollingSpeed={1000} /* Options here */
      render={({ state, fullpageApi }: any) => {

        return <PageElement />;

      }}
    />

    </React.Fragment>
  );
}


export default App;
