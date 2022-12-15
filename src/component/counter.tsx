import { count } from "console";
import * as React from "react";
import { useAppContext } from "./util";

export interface Props {
  setCount: React.Dispatch<React.SetStateAction<number>>;
  count: number;
}

const Count: React.FC<Props> = (props: Props) => {
  const getColor = () => Math.floor(Math.random() * 255);
  const style = {
    color: `rgb(${getColor()},${getColor()},${getColor()})`,
  };
  return (
    <div>
      <p style={style}>Button</p>
      <button onClick={() => props.setCount(props.count + 1)}>Increment</button>
    </div>
  );
};
export default Count;