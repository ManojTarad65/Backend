"use client";
import React, { useState } from "react";
import Main from "./Components/Main";

const page = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button>Increment</button>
      </div>
      <div>
        <button>{count}</button>
      </div>
      <Main />
    </div>
  );
};

export default page;

// concept 1
// 1. typescript : if there is any error in the code then this will not effect our any page
// 2. error.tsx is used for user benefit
