import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Message from "./component/Message";
import Count from "./component/counter";

function App() {
  const [count, setCount] = React.useState(0);
  return (
    <div className="App">
      <Message count={count} />
      <Message count={count} />
      <Message count={count} />
      <Message count={count} />
      <Message count={count} />
      <Count count={count} setCount={setCount} />
    </div>
  );
}

export default App;
