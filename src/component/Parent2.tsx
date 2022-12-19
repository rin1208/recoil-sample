import { useRecoilValue, useSetRecoilState } from "recoil";
import { parent2Atom } from "./atom";
import Children2 from "./Children2";
import RecoilCount from "./recoilCounter";

const Parent2: React.FC = () => {
  const getColor = () => Math.floor(Math.random() * 255);

  const value = useRecoilValue(parent2Atom);

  const setValue = useSetRecoilState(parent2Atom);

  const style = {
    color: `rgb(${getColor()},${getColor()},${getColor()})`,
  };
  return (
    <div>
      <h2 style={style}>{value}</h2>
      <RecoilCount count={value} setCount={setValue} />
      <p>子2</p>
      <Children2 />
    </div>
  );
};
export default Parent2;
