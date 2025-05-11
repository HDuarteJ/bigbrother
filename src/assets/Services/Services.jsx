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
          <div
            className="h-100 shadow-lg shadow-black w-70 flex flex-col border-2 items-center justify-start border-slate-500 rounded-2xl p-4 text-white hover:shadow-2xl hover:scale-105 transition-transform-all duration-300 ease-in-out"
            style={{
              backgroundImage: `url(${renovate})`,
              backgroundSize: "cover",
            }}
          >
            <h3 className="font-bold text-xl text-shadow-lg text-slate-200 text-shadow-black">
              Renovate
            </h3>
          </div>
          <div
            className="h-100 shadow-lg shadow-black w-70 flex flex-col border-2 items-center justify-start border-slate-500 rounded-2xl p-4 text-white hover:shadow-2xl hover:scale-105 transition-transform-all duration-300 ease-in-out"
            style={{
              backgroundImage: `url(${build})`,
              backgroundSize: "cover",
            }}
          >
            <h3 className="font-bold text-xl text-shadow-lg text-slate-200 text-shadow-black">
              Build
            </h3>
          </div>
          <div
            className="shadow-lg shadow-black h-100 w-70 flex flex-col border-2 items-center justify-start border-slate-500 rounded-2xl p-4 text-white hover:shadow-2xl hover:scale-105 transition-transform-all duration-300 ease-in-out"
            style={{ backgroundImage: `url(${deck})`, backgroundSize: "cover" }}
          >
            <h3 className="font-bold text-xl text-shadow-lg text-slate-200 text-shadow-black">
              Repair
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
