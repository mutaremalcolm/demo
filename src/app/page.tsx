"use client"

import React from 'react';

export default function Home() {
  const handleExploreClick = () => {
    alert('This is a placeholder button, click on About & Authentication to explore the App');
  };

  return (
    <main className="h-screen flex flex-col items-center justify-center gap-6 mx-auto px-4 lg:px-0">
      <h1 className="text-4xl text-center lg:text-6xl">This is the Dashboard Page</h1>
      <p className="text-base lg:text-lg text-zinc-400 text-center max-w-lg lg:max-w-2xl">
        Welcome to the counter App. This app is designed to show simple functionality for a counter and verification. Explore and enjoy!!
      </p>
      <button onClick={handleExploreClick} className="text-lg lg:text-xl font-semibold rounded-lg px-6 py-3 lg:py-4 bg-gradient-to-r from-green-400 to-blue-500 hover:-translate-y-1">
        Explore
      </button>
    </main>
  );
}
