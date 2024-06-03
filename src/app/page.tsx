"use client";

import Hero from "@/components/Hero";


export default function Home() {
  return (
    <>
      <main className="min-h-screen text-center flex flex-col items-center 
          justify-center gap-6 mx-auto px-4 lg:px-8 bg-white">
          <Hero />
      </main>
    </>
  );
}
