import { useDispatch, useSelector } from 'react-redux';

import CounterSlice from './counterSlice';
const actions = CounterSlice.actions;

function CounterRedux() {
    const count = useSelector((store) =>  store.counterState.count);
    const dispatch = useDispatch();

    const increament=()=>{
        console.log(" inc ")
        dispatch(actions.increment());
    }

    const decreamnt=()=>{
        console.log(" dec ");
        dispatch(actions.decrement());
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