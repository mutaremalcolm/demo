import Link from "next/link";
import { Info, LockIcon } from "lucide-react";

function Navbar() {
  return (
    <nav className="flex flex-row justify-between py-4 px-3">
      <Link href="/page.tsx">
        <h1 className="text-2xl font-bold ml-2">Demo</h1>
      </Link>
      <div className="flex flex-row gap-5 text-xl">
        <Link href="src/app/about/About.js" className="flex flex-row gap-2">
          <span>
            <Info />
          </span>
          <h1>About</h1>
        </Link>
        <Link href="/Authentication.js" className="flex flex-row gap-2">
          <span>
            <LockIcon />
          </span>
          <h1>Log In</h1>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;