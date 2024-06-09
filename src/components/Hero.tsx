import React from "react";
import Link from "next/link";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div className="flex flex-col items-center relative z-20 overflow-hidden">
      <div className="sm:w-2/3 lg:w-full flex flex-col relative z-20 items-center">
        <div className="h-14 sm:h-32">
          <h1 className="font-bebas-neue uppercase text-2xl sm:text-8xl font-black leading-none text-sky-600 whitespace-nowrap">
            <Typewriter
              options={{
                strings: ["React Basics"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
        </div>
        <p className=" font-reddit-mono text-xl sm:text-base text-sky-600  text-center">
          React is a popular JavaScript library for building user interfaces,
          particularly single-page applications.
          <br /> It allows developers to create reusable UI components, manage
          state efficiently, and render changes <br />
          quickly with a virtual DOM. Developed and maintained by Facebook/Meta
          , React promotes a component <br />
          based architecture and supports both web and mobile applications
          through React Native. <br />
          This Application is designed to showcase the usage of basic React
          features. <br />
          <div className="mt-8">
            <span className="font-rubik text-2xl">
              CLICK BELOW TO EXPLORE REACT.
            </span>
          </div>
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <Link
            href="/authentication/"
            className="uppercase py-2 px-4 rounded-lg bg-sky-600 border-2 border-transparent text-white text-md hover:bg-sky-900"
          >
            Get started
          </Link>
          <Link
            href="https://react.dev/blog/2024/04/25/react-19" target="new"
            className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-sky-600 text-sky-600 dark:text-white hover:bg-sky-600 hover:text-white text-md"
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
