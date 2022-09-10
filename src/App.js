import Big from "big-js";
import "./App.css";
import Result from "./UI/Result";
import AllButtons from "./UI/AllButtons";
import { useEffect, useState } from "react";
import calculate from "./Calculation/calculate";

function App() {
  const [data, setData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  const buttonClick = (name) => {
    setData({ ...data, ...calculate(data, name) });
  };

  return (
    <div className="App">
      <Result value={data.next || data.total || "0"} />
      <AllButtons onClickHandler={buttonClick} />
    </div>
  );
}

export default App;
