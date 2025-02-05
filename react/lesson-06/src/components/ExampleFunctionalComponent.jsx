import React, { useState, useEffect } from "react";

const ExampleFunctionComponent = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("Hej!");

  useEffect(() => {
    console.log("Komponenten har monterats!");

    return () => {
      console.log("Komponenten tas bort!");
    };
  }, []);

  useEffect(() => {
    console.log("Räknaren har uppdaterats!", count);
  }, [count]);

  useEffect(() => {
    console.log("Texten har uppdaterats!", text);
  }, [text]);

  return (
    <div>
      <h2>Funktionskomponent</h2>
      <p>Räknare: {count}</p>
      <p>Text: {text}</p>
      <button onClick={() => setCount(count + 1)}>Öka</button>
      <button
        onClick={() =>
          setText("Ny text: " + Math.random().toString(36).substring(7))
        }
      >
        Uppdatera text
      </button>
    </div>
  );
};

export default ExampleFunctionComponent;
