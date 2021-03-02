import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import LogoSmall from "./LogoSmall";
import PageElement from "./PageElements";

import "../overrides.css";

function App() {
  

  return (
    <React.Fragment>
      
      <LogoSmall />

      <ReactFullpage
      //fullpage options
      licenseKey={"YOUR_KEY_HERE"}   
      navigation
      loopHorizontal={false}
      dragAndMove={true}
      navigationTooltips={['', 'what we do', 'project', 'what we offer']}
      anchors={['xv-production', 'what-we-do', 'project', 'what-we-offer']}
      scrollingSpeed={1000} /* Options here */
      render={({}: any) => {

        return <PageElement />;

      }}
    />

    </React.Fragment>
  );
}


export default App;
