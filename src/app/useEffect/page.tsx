"use client";

import React, { useEffect, useState } from "react";
import { Header } from "../components/Header/Header";

const UseEffectDemo = () => {
  const [color, setColor] = useState('#000000'); 


  useEffect(() => {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16); 
    setColor(randomColor);
  }, []); 

  return (
    <>
      <main className="min-h-screen flex flex-col items-center justify-center gap-6 mx-auto px-4 lg:px-8">
        <Header
          title="This is the useEffect Page"
          subtitle="This page demonstrates how useEffect works in React!!!. The color of the circle below will change with every page refresh"
        />
        <div className="flex justify-center items-center">
          <button
            className="w-40 h-40 rounded-full border-5 border-solid border p-4 bg-opacity-50 text-gray flex items-center transition-transform duration-300 transform hover:-translate-y-1 
            hover:scale-10 focus:outline-none focus:ring focus:border-white"
            style={{ backgroundColor: color }}  
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-14 w-14 margin"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
            </svg>
          </button>
        </div>
      </main>
    </>
  );
};

export default UseEffectDemo;
