import { useState } from "react";
import Challenge from "./Challenge";

/* function Counter() {
  const [number, setNumber] = useState(0);
  function handleClick() {
    setNumber(number + 5);
    setNumber((n) => n + 1);
    // setNumber((n) => n + 1);
    // setNumber((n) => n + 1);
    // alert(number);
    console.log(number);
  }
  return (
    <>
      <h2>{number}</h2>
      <button onClick={handleClick}>Click hard</button>
    </>
  );
} */
// ----------

/**
 * Try out some challenges:
 * 1. Fix a request counter 
    - You’re working on an art marketplace app that lets the user submit multiple orders for an art item at the same time. Each time the user presses the “Buy” button, the “Pending” counter should increase by one. After three seconds, the “Pending” counter should decrease, and the “Completed” counter should increase.

    However, the “Pending” counter does not behave as intended. When you press “Buy”, it decreases to -1 (which should not be possible!). And if you click fast twice, both counters seem to behave unpredictably.

    Why does this happen? Fix both counters.
 */
/* 
function RequestTracker() {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);

  async function handleClick() {
    setPending((p) => p + 1);
    await delay(3000);
    setPending((p) => p - 1);
    setCompleted((c) => c + 1);
  }

  return (
    <>
      <h3>Pending: {pending}</h3>
      <h3>Completed: {completed}</h3>
      <button onClick={handleClick}>Buy</button>
    </>
  );
}

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
} */
//--------

export default function App() {
  return (
    <>
      {/* <Counter /> */}
      {/* <RequestTracker /> */}
      <Challenge />
    </>
  );
}
