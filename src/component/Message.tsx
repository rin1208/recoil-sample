import { count } from "console";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { numAtom } from "./atom";
import RecoilCount from "./recoilCounter";
import { useAppContext } from "./util";

export interface Props {}

const Message: React.FC<Props> = (props: Props) => {
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
    </div>
  );
};
export default Message;
