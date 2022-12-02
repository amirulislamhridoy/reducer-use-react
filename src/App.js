import Parent from "./Component/Parent/Parent";
import './App.css'
import { createContext, useState } from "react";
import Reducer from "./Component/Reducer/Reducer";
import PlusMinuse from "./Component/Reducer/PlusMinuse";

export const COUNT_REDUCER = createContext()
function App() {
  const [count, setCount] = useState(1);
  const value = {count, setCount}

  return (
    <COUNT_REDUCER.Provider value={value}>
      <div className='App'>
        <h1>Start Redux</h1>
        <h2>Grand Parent {count}</h2>
        <Parent count={count} setCount={setCount}></Parent>
        <PlusMinuse></PlusMinuse>
        <Reducer></Reducer>
      </div>
    </COUNT_REDUCER.Provider>
  );
}

export default App;
