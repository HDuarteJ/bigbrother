import React from "react";
import Hero from "./assets/Hero/Hero";
import Services from "./assets/Services/Services";

const App = () => {
  return (
    <div className="flex flex-col bg-slate-800 min-h-screen">
      <Hero />

      <div className="h-100 bg-[url('assets\images\roof.webp')] bg-center bg-cover bg-fixed items-center justify-center flex flex-col text-4xl text-white font-bold">
        Hello
      </div>
      <Services />
    </div>
  );
};

export default App;
