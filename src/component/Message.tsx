import { count } from "console";
import { useAppContext } from "./util";

export interface Props {
  count: number;
}

const Message: React.FC<Props> = (props: Props) => {
  const getColor = () => Math.floor(Math.random() * 255);
  const style = {
    color: `rgb(${getColor()},${getColor()},${getColor()})`,
  };
  return (
    <div>
      <h4 style={style}>{props.count}</h4>
    </div>
  );
};
export default Message;
