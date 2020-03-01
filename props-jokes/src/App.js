import React from "react";
import "./styles.css";

import Joke from "./Joke";

export default function App() {
  return (
    <div>
      <Joke answer="Can't stop laughing :)" />
      <Joke question="Knock Knock" answer="Knock it off" />
      <Joke question="Speed up" answer="We are in a train" />
      <Joke question="What is the dead line?" answer="We are already dead" />
      <Joke question="Power up" answer="You have to connect the power cord" />
      <Joke
        question="Did you saw the mouse?"
        answer="Yes, I have my hand on."
      />
    </div>
  );
}
