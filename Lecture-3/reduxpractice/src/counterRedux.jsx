import React from 'react'
import { useSelector } from 'react-redux'


function CounterRedux() {
    const count = useSelector((store) =>  store.counterState.count)
    const increament=()=>{
        console.log(" inc ")
    }

    const decreamnt=()=>{
        console.log(" dec ")
    }
  return (
    <div>
        <h1>Count {count}</h1>
        <button onClick={increament}>+ Add</button>
        <button onClick={decreamnt}>- less</button>
    </div>
  )
}

export default CounterRedux