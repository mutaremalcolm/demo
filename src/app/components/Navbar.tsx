"use client";

import { useEffect, useState } from 'react';
import Link from "next/link";
import { LayoutDashboard, LockIcon } from "lucide-react";
import { ModeToggle } from './mode-toggle';

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="flex flex-col lg:flex-row justify-between py-4 px-3 lg:px-8">
      <div className="flex items-center">
        <Link href="/">
          <h1 className="text-2xl font-bold">Demo</h1>
        </Link>
      </div>
      <div className="flex flex-row gap-5 text-xl lg:ml-auto">
        <ModeToggle />
        <Link href="/dashboard/" className="flex items-center gap-2">
          <span>
            {isMobile ? (
              <LayoutDashboard />
            ) : (
              <>
                <LayoutDashboard />
                <h1 className="sr-only">Dashboard</h1>
              </>
            )}
          </span>
          {!isMobile && <h1>Dashboard</h1>}
        </Link>
        <Link href="/authentication/" className="flex items-center gap-2">
          <span>
            {isMobile ? (
              <LockIcon />
            ) : (
              <>
                <LockIcon />
                <h1 className="sr-only">Log In</h1>
              </>
            )}
          </span>
          {!isMobile && <h1>Log In</h1>}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;