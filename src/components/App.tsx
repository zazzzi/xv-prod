import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import LogoSmall from "./LogoSmall";
import PageElement from "./PageElements";

import "../overrides.css";

function App() {
  function handleSectionChange(origin: any, destination: any, direction: any) {
    console.log(origin, destination, direction);
 
  }

  return (
    <React.Fragment>
      
      <LogoSmall />

      <ReactFullpage
      //fullpage options
      navigation
      navigationTooltips={['xv production ', 'what we do', 'project', 'what we offer']}
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
