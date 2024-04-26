import React from "react";
import Header from "../components/Header/page";

const UseState = () => {
  return (
    <>
      <Header
        title="This is the useState Page"
        subtitle="This page demonstrates how useState works in React"
      />
      <main className="flex items-center justify-center">
      <button
        className="text-lg lg:text-xl font-semibold rounded-lg px-6 py-3 lg:py-4 
            bg-gradient-to-r from-red-400 to-red-500"
      >
        Red
      </button>
      <button
        className="text-lg lg:text-xl font-semibold rounded-lg px-6 py-3 lg:py-4 
            bg-gradient-to-r from-green-400 to-blue-500"
      >
        Blue
      </button>
      <button
        className="text-lg lg:text-xl font-semibold rounded-lg px-6 py-3 lg:py-4 
            bg-gradient-to-r from-green-400 to-blue-500"
      >
        Green
      </button>
      </main>
    </>
  );
};

export default UseState;
