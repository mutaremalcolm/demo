"use client";

import Hero from "@/components/Hero";
import { ThemeProvider } from "@/components/theme-provider";

export default function Home() {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        <main
          className="min-h-screen text-center flex flex-col items-center 
          justify-center gap-6 mx-auto px-4 lg:px-8 bg-white"
        >
          <Hero />
        </main>
      </ThemeProvider>
    </>
  );
}
