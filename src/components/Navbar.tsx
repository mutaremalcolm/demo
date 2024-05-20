"use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
import { LayoutDashboard, LockIcon, PenLine } from "lucide-react";
import React_Logo from "../../public/assets/navbar/React_Logo.png";
import Image from "next/image";

function Navbar() {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <nav className="flex flex-col lg:flex-row justify-between py-4 px-3 lg:px-8 bg-sky-600 border-b-2">
//       <div className="flex items-center">
//         <Link href="/">
//         <Image src={React_Logo} alt="React Logo" className="h-12 w-auto" />
//         </Link>
//       </div>
//       <div className="flex flex-row gap-5 text-xl lg:ml-auto">
//         <Link href="/dashboard/" className="flex items-center gap-2">
//           <span>
//             {isMobile ? (
//               <LayoutDashboard />
//             ) : (
//               <>
//                 <LayoutDashboard />
//                 <h1 className="sr-only">Dashboard</h1>
//               </>
//             )}
//           </span>
//           {!isMobile && <h1>Dashboard</h1>}
//         </Link>
//         <Link href="/blog/" className="flex items-center gap-2">
//           <span>
//             {isMobile ? (
//               <PenLine />
//             ) : (
//               <>
//                 <PenLine />
//                 <h1 className="sr-only">Blog</h1>
//               </>
//             )}
//           </span>
//           {!isMobile && <h1>Blog</h1>}
//         </Link>
//         <Link href="/authentication/" className="flex items-center gap-2">
//           <span>
//             {isMobile ? (
//               <LockIcon />
//             ) : (
//               <>
//                 <LockIcon />
//                 <h1 className="sr-only">Log In</h1>
//               </>
//             )}
//           </span>
//           {!isMobile && <h1>Log In</h1>}
//         </Link>
//       </div>
//     </nav>
//   );
// }
return (
<>
<header className="flex flex-col items-center justify-between max-w-full md:max-w-6xl px-2 md:px-6 py-4 mx-auto md:flex-row">
    <a href="/" className="text-indigo-900 z-10 active">
        <Image src={React_Logo} alt='logo' className="w-24 py-4 md:py-0 g-image" />
    </a>
    <nav className="z-10">
        <ul className="flex flex-row items-center px-6 py-2 text-indigo-100 bg-sky-600 rounded-lg">
            <li className="pr-4">
                <a href="/dashboard/">Dashboard</a>
            </li>
            <li className="pr-4">
                <a href="/blog/" >Blog</a>
            </li>
            <li className="text-red-200">
                <a href="/authentication/" className="ml-2">Log In</a>
            </li>
        </ul>
    </nav>
</header>

</>
)
}
 
export default Navbar;
