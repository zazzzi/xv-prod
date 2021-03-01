import React, { CSSProperties } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import fullpageApi from "@fullpage/react-fullpage";
import LogoSmall from "./LogoSmall";
import FirstCard from "./FirstCard";
import SecondCard from "./SecondCard";

export default function PageElement(props: any, state: any) {
  return (
      <ReactFullpage.Wrapper>
        <FirstCard />
        <SecondCard />
      </ReactFullpage.Wrapper>
  );
}


