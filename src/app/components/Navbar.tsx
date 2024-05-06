"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { LayoutDashboard, LockIcon, PenLine } from "lucide-react";
import React_Logo from "../../../public/assets/navbar/React_Logo.png";
import Image from "next/image";

function Navbar() {
  return (
    <nav className="flex flex-col lg:flex-row justify-between py-4 px-3 lg:px-8 bg-sky-600 border-b-2 ">
      <div className="flex items-center">
        <Link href="/">
          <Image src={React_Logo} alt="React Logo" className="h-12 w-auto" />
        </Link>
      </div>
      <div className="flex flex-row gap-5 text-xl lg:ml-auto">
        <Link href="/dashboard/" className="flex items-center gap-2">
          <LayoutDashboard />
          <h1 className="sr-only">Dashboard</h1>
          <span>Dashboard</span>
        </Link>
        <Link href="/blog/" className="flex items-center gap-2">
          <PenLine />
          <h1 className="sr-only">Blog</h1>
          <span>Blog</span>
        </Link>
        <Link href="/authentication/" className="flex items-center gap-2">
          <LockIcon />
          <h1 className="sr-only">Log In</h1>
          <span>Log In</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
