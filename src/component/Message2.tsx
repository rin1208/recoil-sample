import { count } from "console";
import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { numAtom, numAtom2 } from "./atom";
import Message3 from "./Message3";
import RecoilCount from "./recoilCounter";
import { useAppContext } from "./util";

export interface Props {}

const Message2: React.FC<Props> = (props: Props) => {
  const value = useRecoilValue(numAtom2);

  const setValue = useSetRecoilState(numAtom2);

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
      <p>通常描写</p>
      <Message3 />
    </div>
  );
};
export default Message2;
