import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { parent2Atom } from "./atom";
import Children2 from "./Children2";
import RecoilCount from "./recoilCounter";

const Parent2: React.FC = () => {
  const [num, setNum] = useRecoilState(parent2Atom);

  const getColor = () => Math.floor(Math.random() * 255);

  const style = {
    color: `rgb(${getColor()},${getColor()},${getColor()})`,
  };
  return (
    <div>
      <h2 style={style}>{num}</h2>
      <RecoilCount count={num} setCount={setNum} />
      <p>子2</p>
      <Children2 />
    </div>
  );
};
export default Parent2;
