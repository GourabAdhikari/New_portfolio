import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="bg-zinc-950 min-h-screen w-full flex flex-col items-center justify-center">
        <Navbar />
        <Hero />
      </main>
    </div>
  );
}
