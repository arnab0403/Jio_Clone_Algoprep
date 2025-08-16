import { useState } from 'react'
import CounterRedux from './counterRedux'
import './App.css'
import {Provider} from "react-redux"
import store from './store'


function App() {


  return (
    <>
      <Provider store={store}>
        <CounterRedux/>
      </Provider>
    </>
  )
}

export default App
