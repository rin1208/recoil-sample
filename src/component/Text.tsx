import { count } from "console";
import { useCallback, useEffect } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { numAtom, numAtom2, text } from "./atom";
import RecoilCount from "./recoilCounter";
import { useAppContext } from "./util";
import TextField from "@mui/material/TextField";

export interface Props {}

const Text1: React.FC<Props> = (props: Props) => {
  const value = useRecoilValue(numAtom2);
  const [{ textValue }, setState] = useRecoilState(text);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setState((currVal) => {
        return {
          ...currVal,
          textValue: event.target.value,
        };
      });
    },
    []
  );

  const getColor = () => Math.floor(Math.random() * 255);
  useEffect(() => {
    console.log("hugahuga2");
  });

  const style = {
    color: `rgb(${getColor()},${getColor()},${getColor()})`,
  };
  return (
    <div>
      <h2 style={style}>{textValue}</h2>
      <TextField
        label={"password"}
        type={"password"}
        value={textValue}
        onChange={handleChange}
      />
    </div>
  );
};
export default Text1;
