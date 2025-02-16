import { useState } from 'react';
import NumCounter from "./Components/counter"


const App = () => {
  // Counter
  const [number, setNumber] = useState(0);
  const numMinus = () => {setNumber(number - 1)};
  const numPlus = () => {setNumber(number + 1)};


  // Dark/Light Mode 
  const [mode, setMode] = useState("Light");
  const changeMode = () => {
    if(mode === "Light"){setMode("Dark")}
    else{setMode("Light");}
  };

  return(
    <div>
      <NumCounter number={number} />
      <button onClick={numMinus}>Azalt</button> 
      <button onClick={numPlus}>Coxalt</button>
      <div>
        <button onClick={changeMode}>{mode}</button>
      </div>  
    </div>
  );
};
export default App;
