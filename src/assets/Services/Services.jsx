import React from "react";
import deck from "../../assets/images/deck.webp";
import renovate from "../../assets/images/renovate.webp";
import build from "../../assets/images/build.webp";

const Services = () => {
  return (
    <>
      <div className="flex flex-col h-full md:h-screen">
        <div className="flex flex-col items-center justify-center p-6">
          <h1 className="text-white font-bold text-2xl">Services</h1>
        </div>
        <div className="flex flex-col space-x-0 space-y-6 items-center justify-evenly p-6 md:flex-row md:space-x-6 md:space-y-0">
          <div className="bg-[url('images/renovate.webp')] h-100 w-70 bg-cover flex flex-col border-2 items-center justify-start border-slate-500 rounded-2xl p-4 text-white hover:scale-105 transition-transform duration-300 ease-in-out">
            <h3 className="font-bold mb-4">Renovate</h3>
          </div>
          <div className="bg-[url('images/build.webp')] h-100 w-70 bg-cover flex flex-col border-2 items-center justify-start border-slate-500 rounded-2xl p-4 text-white hover:scale-105 transition-transform duration-300 ease-in-out">
            <h3 className="font-bold mb-4">Build</h3>
          </div>
          <div className="bg-[url('images/deck.webp')] bg-cover h-100 w-70 flex flex-col border-2 items-center justify-start border-slate-500 rounded-2xl p-4 text-white hover:scale-105 transition-transform duration-300 ease-in-out">
            <h3 className="font-bold mb-4">Repair</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
