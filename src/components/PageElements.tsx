import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import FirstCard from "./FirstCard";
import SecondCard from "./SecondCard";
import ThirdCard from "./ThirdCard";
import FourthCard from "./FourthCard";


interface State {
  activePageSection: number;
  activePageSlide: number;
}

export default class PageElement extends React.Component<{}, State> {
  state: State = {
    activePageSection: 0,
    activePageSlide: 0
  }

  onLeave = (origin: any, destination: any, direction: any) => {
    this.setState({
      activePageSection: destination.index
    })
  }

  afterSlideLoad = (section: any, origin: any, destination: any, direction: any) => {
    this.setState({
      activePageSlide: destination.index
    })

  }

  render() {
    return (
      <ReactFullpage
        licenseKey={"OPEN-SOURCE-GPLV3-LICENSE"}
        // v2compatible={true}
        fullpage_api
        onLeave={this.onLeave} //vertical
        afterSlideLoad={this.afterSlideLoad} //horizontal
        navigation
        loopHorizontal={false}
        dragAndMove={true}
        slidesNavigation={true}
        resetSliders={true}
        navigationTooltips={["", "what we do", "project", "what we offer"]}
        anchors={["xv-production", "what-we-do", "project", "what-we-offer"]}
        scrollingSpeed={800} /* Options here */
        render={({}: any) => {
          return (
            <ReactFullpage.Wrapper>
              <FirstCard />
              <SecondCard {...this.state} />
              <ThirdCard {...this.state} />
              <FourthCard />
            </ReactFullpage.Wrapper>
          );
        }}
      />
    );
  }
}
