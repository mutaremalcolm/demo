"use client"

import Link from "next/link";
import Header from "./components/Header/page";

export default function Home() {
  return (
    <>
      <Header 
        title="Welcome to my React Fundamentals Application"
        subtitle="This Application is designed to showcase the usage of basic React features. To explore the application please click the button below to be authenticated. Lets ReAct!!!"
        />
      <main className="flex flex-col items-center justify-center gap-6 mx-auto px-4 lg:px-0">
        <Link href="/authentication/">
          <button className="text-lg lg:text-xl font-semibold rounded-lg px-6 py-3 lg:py-4 
            bg-gradient-to-r from-green-400 to-blue-500">
            Start
          </button>
        </Link>
      </main>
    </>
  );
}
