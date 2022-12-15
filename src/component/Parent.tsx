import { count } from "console";
import * as React from "react";
import {
  SetterOrUpdater,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { numAtom, numAtom2 } from "./atom";
import Count from "./counter";
import Message2 from "./Message2";
import Message from "./Message";
import RecoilCount from "./recoilCounter";
import { useAppContext } from "./util";
import Message3 from "./Message3";

export interface Props {}

const Parent: React.FC<Props> = (props: Props) => {
  return (
    <div className="App">
      <p>Recoilの全体描写</p>
      <Message />

      <p>Recoilの個別描写</p>
      <Message2 />
      <p>通常描写</p>
      <Message3 />
    </div>
  );
};
export default Parent;
