import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import LogoSmall from "./LogoSmall";
import PageElement from "./PageElements";

import "../overrides.css";
import SocLinks from "./SocLinks";

function App() {
  

  return (
    <React.Fragment>
      
      <LogoSmall />
      <SocLinks />

      <ReactFullpage
      //fullpage options
      licenseKey={"YOUR_KEY_HERE"}   
      navigation
      loopHorizontal={false}
      dragAndMove={true}
      navigationTooltips={['', 'what we do', 'project', 'what we offer']}
      anchors={['xv-production', 'what-we-do', 'project', 'what-we-offer']}
      scrollingSpeed={1000} /* Options here */
      render={() => {

        return <PageElement />;

      }}
    />

    </React.Fragment>
  );
}


export default App;
