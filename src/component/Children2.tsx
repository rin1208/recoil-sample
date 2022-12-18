import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { children2Atom } from "./atom";
import RecoilCount from "./recoilCounter";

export interface Props {}

const Children2: React.FC<Props> = (props: Props) => {
  const value = useRecoilValue(children2Atom);

  const setValue = useSetRecoilState(children2Atom);

  const getColor = () => Math.floor(Math.random() * 255);

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
