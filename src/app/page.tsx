import Image from "next/image";

export default function Home() {
  return (
    <main className="h-[80vh] flex flex-col items-center justify-center gap-6 mx-auto">
        <h1 className="text-4xl">This is the Dashboard Page</h1>
        <p className="text-base text-zinc-400 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
        <button className="text-lg font-semibold rounded-lg px-4 py-2  bg-gradient-to-r from-green-400 to-blue-500 hover:-translate-y-1 ">
          Button
        </button>
      </main>
  );
}
