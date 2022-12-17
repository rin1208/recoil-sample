import { count } from "console";
import { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { numAtom2, numAtom3, selectornum } from "./atom";
import RecoilCount from "./recoilCounter";
import Text1 from "./Text";
import { useAppContext } from "./util";

export interface Props {}

const Message3: React.FC<Props> = (props: Props) => {
  const selectoNum = useRecoilValue(selectornum);
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
    </div>
  );
};
export default Message3;
