import React from "react";

interface HeaderProps {
    title: string;
    subtitle: string
}

const Header: React.FC<HeaderProps>= ({ title, subtitle }: HeaderProps) => {
  return (
    <main>
      <h1 className="text-4xl text-center lg:text-6xl pb-5">{title}</h1>
      <p className="text-base lg:text-md text-zinc-400 text-center max-w-lg lg:max-w-2xl">
        {subtitle}
      </p>
    </main>
  );
};

export default Header;
