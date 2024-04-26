import React from "react";

interface HeaderProps {
    title: string;
    subtitle: string
}

const Header = ({ title, subtitle }: HeaderProps) => {
  return (
    <main className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl text-center lg:text-6xl">{title}</h1>
      <p className="text-base lg:text-md text-zinc-400 text-center max-w-lg lg:max-w-2xl mt-4">
        {subtitle}
      </p>
    </main>
  );
};

export default Header;
