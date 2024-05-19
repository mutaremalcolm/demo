import React from "react";

interface HeaderProps {
    title: string;
    subtitle: string
}

export const Header: React.FC<HeaderProps>= ({ title, subtitle }: HeaderProps) => {
  return (
    <main className="flex flex-col items-center justify-center">
      <h1 className="text-4xl text-center lg:text-6xl pb-5">{title}</h1>
      <p className="text-base text-center lg:text-md text-black max-w-lg lg:max-w-2xl">
        {subtitle}
      </p>
    </main>
  );
};


