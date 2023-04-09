import { useState } from "react";
import Challenge from "./Challenge";

/* function Form() {
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState("Hi!");
  if (isSent) {
    return <h1>Your message is on its way!</h1>;
  }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setIsSent(true);
        sendMessage(message);
      }}
    >
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
}

function sendMessage(message) {
  // ...
} */
/** This Form component:
 * Here’s what happens when you click the button:
    1. The onSubmit event handler executes.
    2. setIsSent(true) sets isSent to true and queues a new render.
    3. React re-renders the component according to the new isSent value.
*/
//------------------

/* function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber(number + 1);
          setNumber(number + 1);
          setNumber(number + 1);
        }}
      >
        +3
      </button>
      <button
        onClick={() => {
          setNumber(number + 1);
          alert(number);
        }}
      >
        +3
      </button>
      <button
        onClick={() => {
          setNumber(number + 1);
          setTimeout(() => {
            alert(number);
          }, 3000);
        }}
      >
        +3
      </button>
    </>
  );
}
 */
// -------------

function Form() {
  const [to, setTo] = useState("Alice");
  const [message, setMessage] = useState("Hello");

  function handleSubmit(e) {
    e.preventDefault();
    setTimeout(() => {
      alert(`You said ${message} to ${to}`);
    }, 5000);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        To:{" "}
        <select value={to} onChange={(e) => setTo(e.target.value)}>
          <option value="Alice">Alice</option>
          <option value="Bob">Bob</option>
        </select>
      </label>
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
}

export default function App() {
  return (
    <>
      {/* <Form /> */}
      {/* <Counter /> */}
      {/* <Form /> */}
      <Challenge />
    </>
  );
}
