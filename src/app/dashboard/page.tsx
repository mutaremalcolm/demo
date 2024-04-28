"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Header } from "../components/Header/Header";

function Dashboard() {
  return (
    <>
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 mx-auto px-4 lg:px-8">
      <Header 
        title=" This is the DashBoard Page"
        subtitle="This page demonstates how Navigation in React works"
        />
        <div className="flex items-center justify-center gap-x-4 mt-0">
        <Link href="/useState/">
          <button
            className="text-lg font-semibold rounded-lg px-4 py-2 
            bg-gradient-to-r from-green-400 to-blue-500"
          >
            useState
          </button>
          </Link>
          <Link href="/useEffect/">
          <button
            className="text-lg font-semibold rounded-lg px-4 py-2 
            bg-gradient-to-r from-green-400 to-blue-500 transition:-translate-y-2"
          >
            useEffect
          </button>
          </Link>
        </div>
    </main>
    </>
  );
}

export default Dashboard;
