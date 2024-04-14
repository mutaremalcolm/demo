"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen flex flex-col items-center justify-center gap-6 mx-auto px-4 lg:px-0">
      <h1 className="text-4xl text-center lg:text-6xl">
        Welcome to my React Fundamentals Application
      </h1>
      <p className="text-base lg:text-md text-zinc-400 text-center max-w-lg lg:max-w-2xl">
        This Application is designed to showcase the usage of basic React
        features. <br />
        To explore the application please click the button below to be
        authenticated. <br /> Lets ReAct!!!
      </p>
      <Link href="/authentication/">
        <button
          className="text-lg lg:text-xl font-semibold rounded-lg px-6 py-3 lg:py-4 bg-gradient-to-r from-green-400 to-blue-500"
        >
          Start
        </button>
      </Link>
    </main>
  );
}
