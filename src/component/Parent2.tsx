import { count } from "console";
import { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { numAtom2, numAtom3, selectornum } from "./atom";
import Children2 from "./Children2";
import RecoilCount from "./recoilCounter";
import { useAppContext } from "./util";

export interface Props {}

const Parent2: React.FC<Props> = (props: Props) => {
  const getColor = () => Math.floor(Math.random() * 255);

  const value = useRecoilValue(numAtom3);

  const setValue = useSetRecoilState(numAtom3);

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
