import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { children1Atom } from "./atom";
import RecoilCount from "./recoilCounter";

export interface Props {}

const Children1: React.FC<Props> = (props: Props) => {
  const value = useRecoilValue(children1Atom);

  const setValue = useSetRecoilState(children1Atom);

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
export default Children1;
