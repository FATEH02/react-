import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  let MyObj = {
    // username:"hitesh",
    age: 10,
  };
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl">Tailwind test</h1>
      <Card  btntxt="visit me" />
      <Card username="fateh" btntxt="click me" />
    </>
  );
}

export default App;
