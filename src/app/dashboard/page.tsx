"use client";

import React, { useState } from "react";

function Dashboard() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 mx-auto px-4 lg:px-8">
      <div className="max-w-md">
        <h1 className="text-4xl text-center lg:text-6xl pb-5">
          Dashboard Page
        </h1>
        <p className="text-base text-zinc-400 text-center pb-10">
          The two buttons below are to illustrate the implementation of State management & tracking changes
        </p>
        <div className="flex items-center justify-center gap-x-4">
          <button
            className="text-lg font-semibold rounded-lg px-4 py-2 
            bg-gradient-to-r from-green-400 to-blue-500"
          >
            useState
          </button>
          <button
            className="text-lg font-semibold rounded-lg px-4 py-2 
            bg-gradient-to-r from-green-400 to-blue-500 transition:-translate-y-2"
          >
            useEffect
          </button>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
