import React, { Component } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import LogoSmall from "./LogoSmall";
import PageElement from "./PageElements";
import "../overrides.css";
import SocLinks from "./SocLinks";

export default function App() {
  return (
    <React.Fragment>
      <LogoSmall />
      <SocLinks />
      <PageElement />
    </React.Fragment>
  );
}

// export class FullpageWrapper extends React.Component {
//   onLeave(origin: any, destination: any, direction: any) {
//     // console.log({origin});
//     const index = origin.index;
//     // console.log(index);
 
//   }
//   onSlideLeave(section: any, origin: any, destination: any, direction: any){
//     const leavingSlide = this;
//     if(section.index == 1 && origin.index == 0 && direction == 'right'){
// 			alert("Leaving the fist slide!!");
// 		}

// 		//leaving the 3rd slide of the 2nd Section to the left
// 		if(section.index == 1 && origin.index == 2 && direction == 'left'){
// 			alert("Going to slide 2! ");
// 		}
    
//   }
//   afterLoad(origin: any, destination: any, direction: any) {
//     // console.log("After load: " + destination.index);
//   }

//   render() {
//     return (
//       <ReactFullpage
//         licenseKey={"OPEN-SOURCE-GPLV3-LICENSE"}
//         fullpage_api
//         onLeave={this.onLeave.bind(this)}
//         afterLoad={this.afterLoad.bind(this)}
//         navigation
//         loopHorizontal={false}
//         dragAndMove={true}
//         slidesNavigation={true}
//         navigationTooltips={["", "what we do", "project", "what we offer"]}
//         anchors={["xv-production", "what-we-do", "project", "what-we-offer"]}
//         scrollingSpeed={1000} /* Options here */
//         render={({ state, fullpageApi }: any) => {
//           return <PageElement />;
//         }}
//       />
//     );
//   }
// }

// const fullpageOptions = {
//   licenseKey: ["OPEN-SOURCE-GPLV3-LICENSE"],
//   callbacks: ["onLeave", "afterLoad"],
//   navigation: [true],
//   loopHorizontal: [false],
//   dragAndMove: [true],
//   slidesNavigation: [true],
//   navigationTooltips: ["", "what we do", "project", "what we offer"],
//   anchors: ["xv-production", "what-we-do", "project", "what-we-offer"],
//   scrollingSpeed: [1000] /* Options here */,
// };

// const FullpageWrapper = (fullpageProps: any) => (
//   <ReactFullpage
//     {...fullpageProps}
//
//   />
// );
