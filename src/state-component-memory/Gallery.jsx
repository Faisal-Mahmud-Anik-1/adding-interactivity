import { useState } from "react";
import { sculptureList } from "./data.js";

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleClickNext() {
    setIndex(index + 1);
  }

  function handleShowClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleClickNext}>Next</button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <img src={sculpture.url} alt={sculpture.alt} />
      <div>
        <button onClick={handleShowClick}>
          {showMore ? "Hide Details" : "Show Details"}
        </button>
        {showMore ? <p>{sculpture.description}</p> : null}
      </div>
    </>
  );
}
