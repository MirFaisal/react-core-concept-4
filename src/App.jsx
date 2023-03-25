import React, { useEffect, useState } from "react";
import "./App.css";
import Bags from "./components/bags/Bags";
import Person from "./components/person/Person";
import Phone from "./components/phones/Phone";

function App() {
  // useState Hooks
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);

  // useEffect hooks
  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <div className="App">
      <h1>Count - {count} </h1>
      <button onClick={increase}>Click me</button>

      <Bags />
      <Phone />
      <Person />
    </div>
  );
}

export default App;
