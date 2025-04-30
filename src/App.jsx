import React from "react";
import background from "/images/deck_background.jpeg";
import logo from "/images/big_brother-no_background.png";
import Hero from "./assets/Hero";

const App = () => {
  return (
    <div className="flex flex-col bg-slate-800 min-h-screen">
      <Hero />
      {/* Content section */}
      <div className="flex scroll-smooth flex-col w-50 h-200 m-auto items-center justify-center p-6 rounded-2xl border-2 border-slate-400/50 hover:scale-105 transition-all duration-200 shadow-lg shadow-slate-900/50 hover:shadow-2xl hover:shadow-slate-900/70 md:w-1/2 lg:w-1/3 xl:w-1/4 mx-auto">
        hello
      </div>
    </div>
  );
};

export default App;
