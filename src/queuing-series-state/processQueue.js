import { useState } from "react";
export function getFinalState(baseState, queue) {
  let finalState = baseState;
  for (let update of queue) {
    if (typeof update === "function") {
      finalState = update(finalState);
    } else {
      finalState = update;
    }
  }

  // TODO: do something with the queue...

  return finalState;
}
