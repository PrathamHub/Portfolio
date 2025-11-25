import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      {/* GLOBAL SPACING */}
      <main className="container mx-auto px-6 md:px-12 lg:px-20 py-10 space-y-32">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}
