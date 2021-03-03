import React, { Component } from "react";
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
