import { count } from "console";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { numAtom, selectornum } from "./atom";
import Children1 from "./Children1";
import RecoilCount from "./recoilCounter";
import { useAppContext } from "./util";

export interface Props {}

const Parent1: React.FC<Props> = (props: Props) => {
  const getColor = () => Math.floor(Math.random() * 255);

  const [num, setNum] = useRecoilState(numAtom);
  useEffect(() => {
    console.log("hugahuga1");
  });

  const style = {
    color: `rgb(${getColor()},${getColor()},${getColor()})`,
  };
  return (
    <div>
      <h2 style={style}>{num}</h2>
      <RecoilCount count={num} setCount={setNum} />
      <p>子1</p>
      <Children1 />
    </div>
  );
};
export default Parent1;
