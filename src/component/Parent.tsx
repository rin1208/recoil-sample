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
import Text1 from "./Text";

export interface Props {}

const Parent: React.FC<Props> = (props: Props) => {
  return (
    <div className="App">
      <p>親</p>
      <Message />
    </div>
  );
};
export default Parent;
