"use client"

import React, { useState } from 'react';

function About() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <main className="h-[80vh] flex flex-col items-center justify-center gap-6 mx-auto">
      <h1 className="text-4xl">This is the About Page</h1>
      <p className="text-base text-zinc-400 text-center">
        Below is a simple counter.<br/>Click "Add 1" to take it up and "Minus 1" to take it down.<br/> It stays above zero and below 10
      </p>
      <div>Count: {count}</div> 
      {count === 0 && <div className="text-red-500">Cannot go below 0</div>}
      {count === 10 && <div className="text-red-500">Cannot go above 10</div>}
      <div className="flex gap-x-4">
        <button onClick={incrementCount} className="text-lg font-semibold rounded-lg px-4 py-2 bg-gradient-to-r from-green-400 to-blue-500 hover:-translate-y-1">
          Add 1
        </button>
        <button onClick={decrementCount} className="text-lg font-semibold rounded-lg px-4 py-2 bg-gradient-to-r from-green-400 to-blue-500 hover:-translate-y-1">
          Minus 1
        </button>
      </div>
    </main>
  );
}

export default About;
