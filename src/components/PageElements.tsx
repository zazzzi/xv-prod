import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import FirstCard from "./FirstCard";
import SecondCard from "./SecondCard";
import ThirdCard from "./ThirdCard";
import FourthCard from "./FourthCard";

export default function PageElement(props: any, state: any) {
  return (
      <ReactFullpage.Wrapper>
        <FirstCard />
        <SecondCard />
        <ThirdCard />
        <FourthCard />
      </ReactFullpage.Wrapper>
  );
}


