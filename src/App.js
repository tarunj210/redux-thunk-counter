import React, { useState } from 'react';
import { connect } from 'react-redux';
import { increment, decrement, reset, changeCountTo } from './actions';
import './App.css';

const App = (props) => {
  const [changeCount, setChangeCount] = useState(0);
  const handleChange = (e) => {
    const { value } = e.target;
    setChangeCount(parseInt(value, 0));

  }

  const handleSubmit = () => {
    props.changeCountTo(changeCount);
    setChangeCount(0);
  }
  return (
    <div className="App">
      <p>Current count: {props.count}</p>
      <div>
        <button className="incrementBtn" onClick={props.increment}>+</button>
        <button className="decrementBtn" onClick={props.decrement}>-</button>
        <button className="resetBtn" onClick={props.reset}>Reset</button>

      </div>
      <br></br>
      <input
        className="countInput"
        type="number"
        value={changeCount}
        onChange={(e) => handleChange(e)}
      />

      <button className="changeBtn" onClick={handleSubmit}>Change</button>

    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.count.count,
  }
}
export default connect(mapStateToProps, {
  increment,
  decrement,
  reset,
  changeCountTo,
})(App);
