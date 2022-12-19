import { useRecoilState } from "recoil";
import { children1Atom } from "./atom";
import RecoilCount from "./recoilCounter";

const Children1: React.FC = () => {
  const [num, setNum] = useRecoilState(children1Atom);

  const getColor = () => Math.floor(Math.random() * 255);

  const style = {
    color: `rgb(${getColor()},${getColor()},${getColor()})`,
  };
  return (
    <div>
      <h2 style={style}>{num}</h2>
      <RecoilCount count={num} setCount={setNum} />
    </div>
  );
};
export default Children1;
