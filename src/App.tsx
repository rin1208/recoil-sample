import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Message from "./component/Parent1";
import { RecoilRoot, useRecoilState } from "recoil";
import { numAtom } from "./component/atom";
import RecoilCount from "./component/recoilCounter";
import Parent from "./component/Parent";

function App() {
  return (
    <RecoilRoot>
      <Parent />
    </RecoilRoot>
  );
}

export default App;
