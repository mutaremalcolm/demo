"use client";

import { useEffect, useState } from "react";
import { useUserContext } from '../contexts/UserContext';
import { LayoutDashboard, LockIcon, PenLine } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Image from "next/image";
import  Home  from '../app/page';
import BlogPage from '../app/Blog/page';
import DashboardPage from '../app/DashboardPage/page';
import React_Logo from "../../public/assets/navbar/React_Logo.png";
import AuthenticationPage from '../app/Authentication/page';
import ProtectedRoute from '../components/ProtectedRoutes'; 

export const Navbar = () => {
    const { state, dispatch } = useUserContext();
    const [isMobile, setIsMobile] = useState(false);

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
        <header className="flex flex-col items-center justify-between max-w-full md:max-w-6xl px-2 md:px-6 py-4 mx-auto md:flex-row rounded-lg">
            <Link to="/" className="text-indigo-900 z-10 active">
                <Image src={React_Logo} alt="React Logo" className="w-24 py-4 md:py-0 g-image" />
            </Link>
            <nav className="z-10">
                <ul className="flex flex-row items-center px-6 py-2 text-indigo-100 bg-sky-600 rounded-lg">
                    <li className="pr-4">
                        <Link to="/dashboard/" className="flex items-center gap-2">
                            <LayoutDashboard />
                            {!isMobile && <span>Dashboard</span>}
                        </Link>
                    </li>
                    <li className="pr-4">
                        <Link to="/blog/" className="flex items-center gap-2">
                            <PenLine />
                            {!isMobile && <span>Blog</span>}
                        </Link>
                    </li>
                    <li className="ml-12">
                        {state.isAuthenticated && state.user ? (
                            <div className="flex items-center gap-2">
                                <Avatar>
                                    <AvatarImage src={state.user.avatarUrl || "https://github.com/shadcn.png"} />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <button onClick={handleLogout} className="text-red-200">Logout</button>
                            </div>
                        ) : (
                            <Link to="/authentication/" className="flex items-center gap-2 text-red-200">
                                <LockIcon />
                                {!isMobile && <span>Log In</span>}
                            </Link>
                        )}
                    </li>
                </ul>
            </nav>
        </header>
    );
}


function App() {
    return (
        <>
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/authentication" element={<AuthenticationPage />} />
                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                            <DashboardPage />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/blog"
                    element={
                        <ProtectedRoute>
                            <BlogPage />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </Router>
        </>
    );
}

export default App;
