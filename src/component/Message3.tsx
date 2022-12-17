import { count } from "console";
import { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { numAtom2 } from "./atom";
import RecoilCount from "./recoilCounter";
import Text1 from "./Text";
import { useAppContext } from "./util";

export interface Props {}

const Message3: React.FC<Props> = (props: Props) => {
  const [value, setValue] = useState(0);

  const getColor = () => Math.floor(Math.random() * 255);

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

      <p>TEXT</p>

      <Text1 />
    </div>
  );
};
export default Message3;
