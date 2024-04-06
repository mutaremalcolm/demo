import Link from "next/link";
import { Info, LockIcon } from "lucide-react";

function Navbar() {
  return (

    <nav className="flex flex-col lg:flex-row justify-between py-4 px-3 lg:px-8">
      <div className="flex items-center">
        <Link href="/">
          <h1 className="text-2xl font-bold">Demo</h1>
        </Link>
      </div>
      <div className="flex flex-row gap-5 text-xl lg:ml-auto">
        <Link href="/about" className="flex items-center gap-2">
          <span>
            <Info />
          </span>
          <h1>About</h1>
        </Link>
        <Link href="/authentication/" className="flex items-center gap-2">
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

