"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUserContext } from "../contexts/UserContext";
import React_Logo from "../../public/assets/navbar/React_Logo.png";
import Image from "next/image";
import { ModeToggle } from "./themeToggle";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const { state, dispatch } = useUserContext();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <>
      <header
        className="flex flex-col items-center justify-between max-w-full 
          md:max-w-6xl px-2 md:px-6 py-4 mx-auto md:flex-row rounded-lg"
      >
        <Link href="/" className="text-indigo-900 z-10 active">
          <Image
            src={React_Logo}
            alt="logo"
            className="w-24 py-4 md:py-0 g-image"
          />
        </Link>
        <nav className="z-10">
          <ul className="flex flex-row items-center px-6 py-2 text-indigo-100 bg-sky-600 rounded-lg">
            {state.isAuthenticated ? (
              <>
                <li className="pr-4">
                  <Link href="/Dashboard/">Dashboard</Link>
                </li>
                <li className="pr-4">
                  <Link href="/Blog/">Blog</Link>
                </li>
                <li className="text-red-200">
                  <button onClick={handleLogout} className="ml-2">
                    Log Out
                  </button>
                </li>
                <li className="ml-12">
                  <Avatar>
                    <AvatarImage src="/assets/hero/shadcn.jpeg/" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </li>
              </>
            ) : (
              <li className="text-red-200">
                <Link href="/Authentication/" className="ml-2">
                  Log In
                </Link>
              </li>
            )}
            <li className="pl-4">
            <ModeToggle />
            </li>
          </ul>     
        </nav>
      </header>
    </>
  );
}

export default Navbar;





