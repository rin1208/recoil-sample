import { count } from "console";
import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { numAtom, numAtom2, numAtom4 } from "./atom";
import Message3 from "./Parent2";
import RecoilCount from "./recoilCounter";
import { useAppContext } from "./util";

export interface Props {}

const Children2: React.FC<Props> = (props: Props) => {
  const value = useRecoilValue(numAtom4);

  const setValue = useSetRecoilState(numAtom4);

  const getColor = () => Math.floor(Math.random() * 255);
  useEffect(() => {
    console.log("hugahuga2");
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
export default Children2;
