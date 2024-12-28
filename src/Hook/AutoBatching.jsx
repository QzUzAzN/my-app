import React, { useEffect, useState } from "react";
import { flushSync } from "react-dom";

export default function AutoBatching() {
  const [count, setCount] = useState(1);
  const [flag, setFlag] = useState(false);

  function handleClick() {
    setCount((c) => c + 1);
    setFlag((f) => !f);
    console.log("render");
  }

  useEffect(() => {
    setTimeout(() => {
      flushSync(() => {
        setCount((c) => c + 1);
      });
      flushSync(() => {
        setFlag((f) => !f);
      });
    }, 3000);
  }, []);
  console.log("render");

  return (
    <div>
      <button onClick={handleClick}>Click</button>
      AutoBatching
    </div>
  );
}
