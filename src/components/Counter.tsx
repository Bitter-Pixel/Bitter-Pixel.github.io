import React, { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount((x) => x + 1)}>
      Interactive button that has been clicked exactly {count} times!
    </button>
  );
}
