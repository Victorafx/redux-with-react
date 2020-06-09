import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  counter: state
});

class CounterComponent extends React.Component {
  render() {
    const { counter, dispatch } = this.props
    return(
      <div>
        <p>{counter}</p>
        <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
        <button onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>
        <button onClick={() => dispatch({ type: 'ADDMORE' })}>+10</button>
        <button onClick={() => dispatch({ type: 'REMOVEMORE' })}>-10</button>
        <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
      </div>
    )
  }
}

export default connect(mapStateToProps)(CounterComponent);