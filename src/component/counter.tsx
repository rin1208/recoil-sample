import { count } from "console";
import * as React from "react";
import { useAppContext } from "./util";

export interface Props {
  setCount: React.Dispatch<React.SetStateAction<number>>;
  count: number;
}

const Count: React.FC<Props> = (props: Props) => {
  return (
    <div>
      <button onClick={() => props.setCount(props.count + 1)}>Increment</button>
    </div>
  );
};
export default Count;
