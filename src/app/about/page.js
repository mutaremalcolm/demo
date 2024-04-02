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
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 mx-auto px-4 lg:px-8">
      <div className="max-w-md">
        <h1 className="text-4xl text-center lg:text-6xl">This is the About Page</h1>
        <p className="text-base text-zinc-400 text-center">
          Below is a simple counter.<br />Click Add 1 to take it up and Minus 1 to take it down.<br /> It stays above zero and below 10
        </p>
        <div className="flex items-center justify-center gap-x-4">
          <button onClick={incrementCount} className="text-lg font-semibold rounded-lg px-4 py-2 bg-gradient-to-r from-green-400 to-blue-500 hover:-translate-y-1">
            Add 1
          </button>
          <div className="text-2xl">{count}</div>
          <button onClick={decrementCount} className="text-lg font-semibold rounded-lg px-4 py-2 bg-gradient-to-r from-green-400 to-blue-500 hover:-translate-y-1">
            Minus 1
          </button>
        </div>
        {count === 0 && <div className="text-red-500 text-center mt-2">Cannot go below 0</div>}
        {count === 10 && <div className="text-red-500 text-center mt-2">Cannot go above 10</div>}
      </div>
    </main>
  );
}

export default About;
