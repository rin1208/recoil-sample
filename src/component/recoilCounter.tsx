import * as React from "react";
import { SetterOrUpdater } from "recoil";

export interface Props {
  setCount: SetterOrUpdater<number>;
  count: number;
}

const RecoilCount: React.FC<Props> = (props: Props) => {
  return (
    <div>
      <button onClick={() => props.setCount(props.count + 1)}>Increment</button>
    </div>
  );
};
export default RecoilCount;
