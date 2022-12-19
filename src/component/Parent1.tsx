import { useRecoilState } from "recoil";
import { parent1Atom } from "./atom";
import Children1 from "./Children1";
import RecoilCount from "./recoilCounter";

const Parent1: React.FC = () => {
  const [num, setNum] = useRecoilState(parent1Atom);

  const getColor = () => Math.floor(Math.random() * 255);
  const style = {
    color: `rgb(${getColor()},${getColor()},${getColor()})`,
  };
  return (
    <div>
      <h2 style={style}>{num}</h2>
      <RecoilCount count={num} setCount={setNum} />
      <p>子1</p>
      <Children1 />
    </div>
  );
};
export default Parent1;
