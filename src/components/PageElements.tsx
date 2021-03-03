import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import FirstCard from "./FirstCard";
import SecondCard from "./SecondCard";
import ThirdCard from "./ThirdCard";
import FourthCard from "./FourthCard";

export default class PageElement extends React.Component {
  onLeave(origin: any, destination: any, direction: any) {
    // console.log({origin});
    const index = origin.index;
    console.log(index);
  }

  afterLoad(origin: any, destination: any, direction: any) {
    console.log("After load: " + destination.index);
  }
  afterSlideLoad(section: any, origin: any, destination: any, direction: any) {
    console.log("lol");
  }

  render() {
    return (
      <ReactFullpage
        licenseKey={"OPEN-SOURCE-GPLV3-LICENSE"}
        // v2compatible={true}
        fullpage_api
        onLeave={this.onLeave.bind(this)}
        afterLoad={this.afterLoad.bind(this)}
        navigation
        loopHorizontal={false}
        dragAndMove={true}
        slidesNavigation={true}
        navigationTooltips={["", "what we do", "project", "what we offer"]}
        anchors={["xv-production", "what-we-do", "project", "what-we-offer"]}
        scrollingSpeed={1000} /* Options here */
        render={({ state, fullpageApi }: any) => {
          return (
            <ReactFullpage.Wrapper>
              <FirstCard />
              <SecondCard />
              <ThirdCard />
              <FourthCard />
            </ReactFullpage.Wrapper>
          );
        }}
      />
    );
  }
}
