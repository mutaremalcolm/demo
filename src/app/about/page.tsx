"use client";

import React, { useState } from "react";

function About() {
  const [count, setCount] = useState(0);
  const [belowZeroError, setBelowZeroError] = useState(false);
  const [aboveTenError, setAboveTenError] = useState(false);

  const incrementCount = () => {
    if (count < 10) {
      setCount(count + 1);
      setBelowZeroError(false);
    } else {
      setAboveTenError(true);
    }
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
      setAboveTenError(false);
    } else {
      setBelowZeroError(true);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 mx-auto px-4 lg:px-8">
      <div className="max-w-md">
        <h1 className="text-4xl text-center lg:text-6xl pb-5">
          This is the About Page
        </h1>
        <p className="text-base text-zinc-400 text-center pb-10">
          Below is a simple counter.
          <br />
          Click Add 1 to take it up and Minus 1 to take it down.
          <br /> It stays above zero and below 10
        </p>
        <div className="flex items-center justify-center gap-x-4">
          <button
            onClick={incrementCount}
            className="text-lg font-semibold rounded-lg px-4 py-2 
            bg-gradient-to-r from-green-400 to-blue-500"
          >
            Add 1
          </button>
          <div className="text-2xl">{count}</div>
          <button
            onClick={decrementCount}
            className="text-lg font-semibold rounded-lg px-4 py-2 
            bg-gradient-to-r from-green-400 to-blue-500 transition:-translate-y-2"
          >
            Minus 1
          </button>
        </div>
        {belowZeroError && (
          <div className="text-red-500 text-center mt-2">Cannot go below 0</div>
        )}
        {aboveTenError && (
          <div className="text-red-500 text-center mt-2">
            Cannot go above 10
          </div>
        )}
      </div>
    </main>
  );
}

export default About;
