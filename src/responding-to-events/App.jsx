// Responding to event

// Reading props in event handler
/* function AlertButton({ message, children }) {
  return (
    <div>
      <button onClick={() => alert(message)}>{children}</button>
    </div>
  );
}

function Toolbar() {
  return (
    <>
      <AlertButton message="Playing Song">Play Movie</AlertButton>
      <AlertButton message="Uploading Movie">Upload Movie</AlertButton>
      <AlertButton message="Playing Song">Play Song</AlertButton>
      <AlertButton message="Uploading Song">Upload Song</AlertButton>
    </>
  );
}
 */

// Passing event handlers as props
/* function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}

function PlayButton({ movieName }) {
  function handlePlayClick() {
    alert(`Playing ${movieName}!`);
  }

  return <Button onClick={handlePlayClick}>Play "{movieName}"</Button>;
}

function UploadButton() {
  return <Button onClick={() => alert("Uploading!")}>Upload Image</Button>;
}

function Toolbar() {
  return (
    <div>
      <PlayButton movieName="Kiki's Delivery Service" />
      <UploadButton />
    </div>
  );
} */

// Event propagation and stopping propagation
/* function Button({ onClick, children }) {
  return (
    <>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
      >
        {children}
      </button>
    </>
  );
}

function Toolbar() {
  return (
    <div
      className="Toolbar"
      onClick={() => {
        alert("You clicked on the toolbar!");
      }}
    >
      <Button onClick={() => alert("Playing Movie")}>Play Movie</Button>
      <Button onClick={() => alert("Uploading Images")}>Upload Image</Button>
    </div>
  );
}
 */

/**
 *  Try out some challenge
 */

// Challenge 1 of 2: Fix an event handler
function LightSwitch() {
  function handleClick() {
    let bodyStyle = document.body.style;
    if (bodyStyle.backgroundColor === "black") {
      bodyStyle.backgroundColor = "white";
    } else {
      bodyStyle.backgroundColor = "black";
    }
  }

  return <button onClick={handleClick}>Toggle the lights</button>;
}

// Challenge 2 of 2: Wire up the events
// I solve the solution on the web 😚

export default function App() {
  return (
    <>
      <LightSwitch />
    </>
  );
}
