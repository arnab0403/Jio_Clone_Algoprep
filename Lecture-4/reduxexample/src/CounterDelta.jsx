import React, { useState } from 'react'

function CounterDelta() {
    const [delat,setDelta]=useState(1);
    const [count,setCount]=useState(0);
    const [value,setValue]=useState("");

    const handleChange =(e)=>{
        setValue(e.target.value);
    }

    const handleDeltaSet=()=>{
        setDelta(Number(value));
    }
    const handleIncrement=()=>{
        setCount(count+delat);
    }

    const handleDecrement=()=>{
        setCount(count-delat);
    }


  return (
    <div>
        <div>
            <input type="text" onChange={handleChange} />
            <button onClick={handleDeltaSet}>Delta</button>
        </div>

        <div>
            <button onClick={handleIncrement}>+</button>
            <h1>{count}</h1>
            <button onClick={handleDecrement}>-</button>
        </div>
    </div>
  )
}

export default CounterDelta