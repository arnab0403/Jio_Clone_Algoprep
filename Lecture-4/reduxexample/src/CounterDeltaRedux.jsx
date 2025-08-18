import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import counterInputSlice from './Redux/slice/CounterInputSlice';

const action = counterInputSlice.actions;

function CounterDeltaRedux() {
    const { count, delta } = useSelector((store)=> store.counterInputState);
    const dispatch = useDispatch();

    const [value,setValue]=useState("");

    const handleChange =(e)=>{
        setValue(e.target.value);
    }

    const handleDeltaSet=()=>{
        dispatch(action.updateDelta(Number(value)));
    }

    const handleIncrement=()=>{
        dispatch(action.increament());
    }

    const handleDecrement=()=>{
        dispatch(action.decreament());
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

export default CounterDeltaRedux;