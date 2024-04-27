import React from "react";
import Header from "../components/Header/page";

const useEffect = () => {
  return (
    <>
      <main className="min-h-screen flex flex-col items-center justify-center gap-6 mx-auto px-4 lg:px-8">
        <Header
          title="This is the useEffect Page"
          subtitle="This page demonstrates how useEffect works in React!!!"
        />
      </main>
    </>
  );
};

export default useEffect;
