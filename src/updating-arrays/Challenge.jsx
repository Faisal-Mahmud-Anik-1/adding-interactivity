// Challenge 1 of 3: Fix incorrect state updates
/* This form has a few bugs. Click the button that increases the score a few times. Notice that it does not increase. Then edit the first name, and notice that the score has suddenly “caught up” with your changes. Finally, edit the last name, and notice that the score has disappeared completely.

Your task is to fix all of these bugs. As you fix them, explain why each of them happens. */

import { useState } from "react";

/* function ScoreBoard() {
  const [player, setPlayer] = useState({
    firstName: "Ranjani",
    lastName: "Shettar",
    score: 10,
  });

  function handleFirstNameChange(e) {
    setPlayer({
      ...player,
      firstName: e.target.value,
    });
  }
  function handleLastNameChange(e) {
    setPlayer({
      ...player,
      lastName: e.target.value,
    });
  }
  function handleClick(e) {
    setPlayer({
      ...player,
      score: player.score + 1,
    });
  }
  return (
    <>
      <label>
        Score: <button onClick={handleClick}>+{player.score}</button>
      </label>
      <label htmlFor="first-name">
        First Name:
        <input
          onChange={handleFirstNameChange}
          value={player.firstName}
          id="first-name"
        />
      </label>
      <label htmlFor="last-name">
        Last Name:
        <input
          onChange={handleLastNameChange}
          value={player.lastName}
          id="last-name"
        />
      </label>
      <p>FirstName: {player.firstName}</p>
      <p>FirstName: {player.lastName}</p>
      <p>Total Count: {player.score}</p>
    </>
  );
} */

// Challenge 2 of 3: Find and fix the mutation

/* There is a draggable box on a static background. You can change the box’s color using the select input.

But there is a bug. If you move the box first, and then change its color, the background (which isn’t supposed to move!) will “jump” to the box position. But this should not happen: the Background’s position prop is set to initialPosition, which is { x: 0, y: 0 }. Why is the background moving after the color change?

Find the bug and fix it. */

function Background({ position }) {
  return (
    <div
      style={{
        position: "absolute",
        transform: `translate(
          ${position.x}px,
          ${position.y}px
        )`,
        width: 250,
        height: 250,
        backgroundColor: "rgba(200, 200, 0, 0.2)",
      }}
    />
  );
}

function Box({ children, color, position, onMove }) {
  const [lastCoordinates, setLastCoordinates] = useState(null);

  function handlePointerDown(e) {
    e.target.setPointerCapture(e.pointerId);
    setLastCoordinates({
      x: e.clientX,
      y: e.clientY,
    });
  }

  function handlePointerMove(e) {
    if (lastCoordinates) {
      setLastCoordinates({
        x: e.clientX,
        y: e.clientY,
      });
      const dx = e.clientX - lastCoordinates.x;
      const dy = e.clientY - lastCoordinates.y;
      onMove(dx, dy);
    }
  }

  function handlePointerUp(e) {
    setLastCoordinates(null);
  }

  return (
    <div
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      style={{
        width: 100,
        height: 100,
        cursor: "grab",
        backgroundColor: color,
        position: "absolute",
        border: "1px solid black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transform: `translate(
            ${position.x}px,
            ${position.y}px
          )`,
      }}
    >
      {children}
    </div>
  );
}
const initialPosition = {
  x: 0,
  y: 0,
};

function Canvas() {
  const [shape, setShape] = useState({
    color: "orange",
    position: initialPosition,
  });

  function handleMove(dx, dy) {
    shape.position.x += dx;
    shape.position.y += dy;
    setShape({
      ...shape,
      position: {
        x: shape.position.x + dx,
        y: shape.position.x + dy,
      },
    });
  }

  function handleColorChange(e) {
    setShape({
      ...shape,
      color: e.target.value,
    });
  }

  return (
    <>
      <select value={shape.color} onChange={handleColorChange}>
        <option value="orange">orange</option>
        <option value="lightpink">lightpink</option>
        <option value="aliceblue">aliceblue</option>
      </select>
      <Background position={initialPosition} />
      <Box color={shape.color} position={shape.position} onMove={handleMove}>
        Drag me!
      </Box>
    </>
  );
}

export default function Challenge() {
  return (
    <>
      <Canvas />
    </>
  );
}
