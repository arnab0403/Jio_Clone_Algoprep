import React from 'react'

import {useSelector} from "react-redux"
import store from './store'
import counterSlice from './counterSlice'


function ReduxCounter() {
    const actions = counterSlice.actions
    const count = useSelector((store) => store.CounterState.count);
  return (
    <div> 
        <h1>
          ReduxCounter
        </h1>
        <h1>{count}</h1>
    </div>
  )
}

export default ReduxCounter