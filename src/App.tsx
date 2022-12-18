import { Grid } from "@mui/material";
import * as React from "react";
import Parent1 from "./component/Parent1";
import Parent2 from "./component/Parent2";

export interface Props {}

const App: React.FC<Props> = (props: Props) => {
  return (
    <div className="App">
      <Grid container>
        <Grid item xs={2}>
          <p>親1</p>
          <Parent1 />
        </Grid>
        <Grid item xs={2}>
          <p>親2</p>
          <Parent2 />
        </Grid>
      </Grid>
    </div>
  );
};
export default App;
