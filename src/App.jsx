import React from "react";
import Hello from "./components/Hello";
import Websites from "./components/Websites";
import Footet from "./components/Footet";
import Graphics from "./components/Graphics";
import Circles from "./components/Circles";

const App = () => {
  return (
    <>
      <div className="hidden">
        <Circles />
      </div>

      <Hello />
      <Websites />
      <Graphics />
      <Footet />
    </>
  );
};

export default App;
