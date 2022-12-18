import React from "react";
import "./App.css";
import { RecoilRoot, useRecoilState } from "recoil";
import Parent from "./component/Parent";

function App() {
  return (
    <RecoilRoot>
      <Parent />
    </RecoilRoot>
  );
}

export default App;
