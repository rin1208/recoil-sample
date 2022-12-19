import { useRecoilValue, useSetRecoilState } from "recoil";
import { children1Atom } from "./atom";
import RecoilCount from "./recoilCounter";

const Children1: React.FC = () => {
  const value = useRecoilValue(children1Atom);

  const setValue = useSetRecoilState(children1Atom);

  const getColor = () => Math.floor(Math.random() * 255);

  const style = {
    color: `rgb(${getColor()},${getColor()},${getColor()})`,
  };
  return (
    <div>
      <h2 style={style}>{value}</h2>
      <RecoilCount count={value} setCount={setValue} />
    </div>
  );
};
export default Children1;
