import classes from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { counterActions } from "../store";
const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);
  function incrementHandler() {
    dispatch(counterActions.increment());
  }
  function increaseHandler() {
    dispatch(counterActions.increase(10));
  }
  function decrementHandler() {
    dispatch(counterActions.decrement());
  }
  function toggleCounterHandler() {
    dispatch(counterActions.toggleCounter());
  }
  // const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>

        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
