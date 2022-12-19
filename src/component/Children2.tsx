import { useRecoilState, useRecoilValue } from "recoil";
import { children1Atom, children2Atom } from "./atom";
import RecoilCount from "./recoilCounter";

const Children2: React.FC = () => {
  const [num, setNum] = useRecoilState(children2Atom);

  // const num2 = useRecoilValue(children1Atom);

  const getColor = () => Math.floor(Math.random() * 255);

  const style = {
    color: `rgb(${getColor()},${getColor()},${getColor()})`,
  };
  return (
    <div>
      <h2 style={style}>{num}</h2>
      <RecoilCount count={num} setCount={setNum} />
      {/* <h2 style={style}>children1Atomの値 : {num2} </h2> */}
    </div>
  );
};
export default Children2;
