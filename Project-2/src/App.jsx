import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Cards from "./components/Cards";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <h1 className="text-3xl bg-green-500 p-3 rounded-md">
        Vite with tailwind
      </h1> */}
      <div className="flex flex-wrap gap-5 ">
        <Cards name="Peacock Leaf" />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </>
  );
}

export default App;
