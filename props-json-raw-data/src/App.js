import React from "react";
import "./styles.css";

import Joke from "./Joke";
import jokesData from "./jokesData";

export default function App() {
  const jokeComponents = jokesData.map(jokesData => {
    return (
      <Joke
        key={jokesData.id}
        question={jokesData.question}
        answer={jokesData.answer}
      />
    );
  });
  return <div>{jokeComponents}</div>;
}
