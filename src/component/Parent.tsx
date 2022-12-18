import * as React from "react";

import Parent1 from "./Parent1";
import Parent2 from "./Parent2";

export interface Props {}

const Parent: React.FC<Props> = (props: Props) => {
  return (
    <div className="App">
      <p>親1</p>
      <Parent1 />
      <p>親2</p>
      <Parent2 />
    </div>
  );
};
export default Parent;
