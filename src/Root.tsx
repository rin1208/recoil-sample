import React from "react";
import "./App.css";
import { RecoilRoot } from "recoil";
import App from "./App";

function Root() {
  return (
    <RecoilRoot>
      <App />
    </RecoilRoot>
  );
}

export default Root;
