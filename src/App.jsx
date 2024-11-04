import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tech from "./components/Tech";
import Project from "./components/Project";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      {/* Background Div */}
      <div className="fixed -z-10 min-h-screen w-full bg-[radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      
      {/* Main Content */}
      <main className="relative flex flex-col items-center px-4 md:px-8 lg:px-16">
        <Navbar />
        <Hero />
        <Tech />
        <Project />
        <Contact />
      </main>
    </>
  );
}
