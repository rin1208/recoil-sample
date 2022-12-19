import { useRecoilValue, useSetRecoilState } from "recoil";
import { children1Atom, children2Atom } from "./atom";
import RecoilCount from "./recoilCounter";

export interface Props {}

const Children2: React.FC<Props> = (props: Props) => {
  const value = useRecoilValue(children2Atom);

  const setValue = useSetRecoilState(children2Atom);

  const value2 = useRecoilValue(children1Atom);

  // const setValue2 = useSetRecoilState(children1Atom);

  const getColor = () => Math.floor(Math.random() * 255);

  const style = {
    color: `rgb(${getColor()},${getColor()},${getColor()})`,
  };
  return (
    <div>
      <h2 style={style}>{value}</h2>
      <RecoilCount count={value} setCount={setValue} />
      <h2 style={style}>children1Atomの値 : {value2} </h2>
      {/* <RecoilCount count={value2} setCount={setValue2} /> */}
    </div>
  );
};
export default Children2;
