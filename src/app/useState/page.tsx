"use client";

import React, { useState } from "react";
import { Header } from "../components/Header/Header";

const UseState = () => {
  const [color, setColor] = useState('black');

  function handleClick(newColor: React.SetStateAction<string>) {
    setColor(newColor);
  }

  return (
    <>
      <main className="min-h-screen flex flex-col items-center justify-center gap-6 mx-auto px-4 lg:px-8">
        <Header
          title="This is the useState Page"
          subtitle="This page demonstrates how useState works in React, The color of the text changes based on the button clicked"
        />
        <div style={{ color }}>
          <span className="text-bold">Color</span>
        </div>
        <div className="flex items-center justify-center gap-x-4 mt-0">
          <button
            className="text-lg lg:text-xl font-semibold rounded-lg px-6 py-3 lg:py-4 
            bg-gradient-to-r from-red-400 to-red-500"
            onClick={() => handleClick('red')} 
          >
            Red
          </button>
          <button
            className="text-lg lg:text-xl font-semibold rounded-lg px-6 py-3 lg:py-4 
            bg-gradient-to-r from-blue-400 to-blue-500"
            onClick={() => handleClick('blue')} 
          >
            Blue
          </button>
          <button
            className="text-lg lg:text-xl font-semibold rounded-lg px-6 py-3 lg:py-4 
            bg-gradient-to-r from-green-400 to-green-500"
            onClick={() => handleClick('green')} 
          >
            Green
          </button>
        </div>
      </main>
    </>
  );
};

export default UseState;
