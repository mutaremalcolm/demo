"use client";

import Link from "next/link";
import React from "react";
import { Header } from "../../components/Header/Header";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function Dashboard() {
  return (
    <>
      <main className="flex flex-col ml-10 mr-10 mb-10 mt-5">
        <Card>
          <CardHeader>
            <CardTitle className="text-center">State Demonstration</CardTitle>
            <CardDescription className="text-center items-center ml-20 mr-20">
              React uses built-in functions called hooks to manage state and side effects 
              in functional components.<br/> There are various hooks available within the React 
              ecosystem. Here, we will explore two specific hooks: <br/>useState for managing 
              state and useEffect for handling side effects.
            </CardDescription>
          </CardHeader>
          <section className="flex flex-row justify-around">
            <Card className="bg-white rounded-xl shadow-lg px-6 py-4 w-4/12 mt-15 mb-20 ml-10">
              <CardTitle className="text-center mt-5 mb-5">useState Hook</CardTitle>
              <CardDescription className="text-center mt-10 mb-10">
                The useState hook in React allows functional components to manage state. 
                It takes an initial state value as an argument and returns an array with the 
                current state and a function to update it. When the state is updated, 
                React re-renders the component with the new state. You can use multiple 
                useState hooks in a single component to handle different state variables. 
                For state updates based on the previous state, you can pass a function to 
                the state setter. This hook makes functional components powerful and versatile 
                by enabling state management.   
              </CardDescription>
              <div className="flex justify-center mt-10">
                <Link href="/useState/">
                  <button
                    className="text-lg font-semibold rounded-lg px-4 py-2 
                        bg-gradient-to-r from-green-400 to-blue-500
                        transition ease-in-out delay-150 bg-blue-500 
                        hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 
                        duration-300"
                  >
                    useState
                  </button>
                </Link>
              </div>
            </Card>
            <Card className="bg-white rounded-xl shadow-lg px-6 py-4 w-4/12 mt-15 mb-20 ml-10">
              <CardTitle className="text-center mt-5 mb-5">
                useEffect Hook
              </CardTitle>
              <CardDescription className="text-center mt-10 mb-10">
                The useEffect hook in React allows functional components to handle side effects, 
                such as data fetching, subscriptions, or manually changing the DOM. 
                It takes a function as an argument that runs after every render by default. 
                You can control when the effect runs by passing a dependency array as the second 
                argument; the effect will only run if the dependencies change. 
                To clean up side effects, return a cleanup function from within the effect. 
                This hook helps manage lifecycle events and side effects in functional components, 
                enhancing their capabilities.
              </CardDescription>
              <div className="flex justify-center mt-10">
                <Link href="/useEffect/">
                  <button
                    className="text-lg font-semibold rounded-lg px-4 py-2 
                        bg-gradient-to-r from-green-400 to-blue-500
                        transition ease-in-out delay-150 bg-blue-500 
                        hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 
                        duration-300"
                  >
                    useEffect
                  </button>
                </Link>
              </div>
            </Card>
          </section>
        </Card>
      </main>
    </>
  );
}

export default Dashboard;
