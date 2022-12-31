import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';


function App() {

  const dispatch = useDispatch()
 const data = useSelector((item)=>item.plusminus)

let handlePlus=()=>{
  dispatch({type:"PLUS_NUMBER", payload:5})  // 5 kore barbe
}

let handleMinus=()=>{
  dispatch({type:"MINUS_NUMBER", payload:2})  //2 kore kombe
}

  return (
   <>
   <h1>Development testing</h1>
   <button onClick={handlePlus}>+</button>
   <h1>{data}</h1>
   <button onClick={handleMinus}>-</button>
   </>
  );
}

export default App;
