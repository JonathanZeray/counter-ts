import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleMinus = () => {
    setCount(count - 1);
  };

  const handlePlus = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleMinus}>-</button>
      <button onClick={handlePlus}>+</button>
    </>
  );
}

export default App;
