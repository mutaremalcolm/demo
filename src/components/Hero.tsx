import React from "react";
import Link from "next/link";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div className="bg-sky-600 dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
      <div className="container mx-auto px-6 flex relative py-16">
        <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
          <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
            <Typewriter
              options={{
                strings: ["ReAct Basics"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className="text-sm sm:text-base text-gray-700 dark:text-white">
            This Application is designed to showcase the usage of basic React
            features. Click the Get started button to be explore.
          </p>
          <div className="flex mt-8">
            <Link
              href="/authentication/"
              className="uppercase py-2 px-4 rounded-lg bg-black border-2 border-transparent text-white text-md mr-4 hover:bg-sky-900"
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
        <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
          <img
            src="/assets/hero/hero.png"
            className="max-w-xs md:max-w-sm m-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
