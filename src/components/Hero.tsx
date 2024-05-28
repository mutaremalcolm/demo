import React from "react";
import Link from "next/link";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div className="bg-white dark:bg-gray-800 flex flex-col items-center relative z-20 overflow-hidden">
      <div className="sm:w-2/3 lg:w-full flex flex-col relative z-20 items-center">
        <div className="h-14 sm:h-32">
          <h1 className="font-bebas-neue uppercase text-2xl sm:text-8xl font-black leading-none dark:text-white text-sky-600 whitespace-nowrap">
            <Typewriter
              options={{
                strings: ["React Basics"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
        </div>
        <p className="text-sm sm:text-base text-gray-700 dark:text-white text-center">
          This Application is designed to showcase the usage of basic React
          features. <br /> Click the Get started button to explore.
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <Link
            href="/authentication/"
            className="uppercase py-2 px-4 rounded-lg bg-black border-2 border-transparent text-white text-md hover:bg-sky-900"
          >
            Get started
          </Link>
          <Link
            href="/blog/"
            className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-black text-black dark:text-white hover:bg-sky-600 hover:text-white text-md"
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
