import React from "react";
import Hero from "./assets/Hero/Hero";
import Services from "./assets/Services/Services";

const App = () => {
  return (
    <div className="flex flex-col bg-slate-800 min-h-screen">
      <Hero />
      <Services />
    </div>
  );
};

export default App;
