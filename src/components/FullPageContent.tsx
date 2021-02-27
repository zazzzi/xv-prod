import React, { CSSProperties } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import PageElement from "./PageElements";

// interface Content {
//   name: string;
// }
// export default function FullPageContent() {
//   return <FullPage />;
// }

export default function FullPage(props: any, state: any) {
  return (
    <ReactFullpage
      //fullpage options
      licenseKey={"YOUR_KEY_HERE"}
      scrollingSpeed={1000} /* Options here */
      render={({ state, fullpageApi }: any) => {
        return <PageElement />;
      }}
    />
  );
}
