import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement, addNum} from './store/modules/counterStore'

import './App.css';

function App() {
  const {count} = useSelector(state => state.counter)
  const dispatch = useDispatch();

  return (
    <div className="App">
      <span style={{'fontSize': '40px'}}>{count}</span>
      <div>
        <button onClick={() => {dispatch(increment())}}>+1</button>
        <button onClick={() => {dispatch(decrement())}}>-1</button>
        <button onClick={() => {dispatch(addNum(20))}}>+20</button>
      </div>
    </div>
  );
}

export default App;
