import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement } from './features/Slice';

function App() {
  const data = useSelector(state=>state.mySliceKey); 
  const dispatch = useDispatch();
  const [custom,setCustom]= useState();
  return (
    <>
      <h1>Counter Redux Example</h1>
      <h3>Value : {data.value}</h3>
      <input placeholder='Enter custom Value' onChange={(e)=>{setCustom(e.target.value)
      }}></input>
      <button onClick={()=>{dispatch(increment(custom))}}>+</button>
      <button onClick={()=>{dispatch(decrement(custom))}}>-</button>
    </>
  )
}

export default App