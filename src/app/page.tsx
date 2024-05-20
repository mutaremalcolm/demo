"use client"

import Link from "next/link";
import { Header } from "../components/Header/Header";
import Hero from "@/components/Hero";
// import Typewriter, { Options } from "typewriter-effect";

export default function Home() {
  return (
    <>
    <main className="min-h-screen text-center flex flex-col items-center justify-center gap-6 mx-auto px-4 lg:px-8 bg-sky-600">
        <Hero/>
    </main>
    </>
  );
}
