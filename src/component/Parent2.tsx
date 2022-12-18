import { count } from "console";
import { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { parent2Atom } from "./atom";
import Children2 from "../App";
import RecoilCount from "./recoilCounter";

export interface Props {}

const Parent2: React.FC<Props> = (props: Props) => {
  const getColor = () => Math.floor(Math.random() * 255);

  const value = useRecoilValue(parent2Atom);

  const setValue = useSetRecoilState(parent2Atom);

  useEffect(() => {
    console.log("hugahuga3");
  });

  const style = {
    color: `rgb(${getColor()},${getColor()},${getColor()})`,
  };
  return (
    <div>
      <h2 style={style}>{value}</h2>
      <RecoilCount count={value} setCount={setValue} />
      <p>子2</p>
      <Children2 />
    </div>
  );
};
export default Parent2;
