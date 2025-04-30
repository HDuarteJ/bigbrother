import React from "react";
import background from "/images/deck_background.webp";
import logo from "/images/big_brother-no_background.png";

const Hero = () => {
  return (
    <>
      <div className="relative h-screen w-full flex flex-col items-center justify-center">
        {/* Masked background image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            maskImage:
              "linear-gradient(to bottom, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 100%)",
          }}
        ></div>

        {/* Title + image on top of background */}
        <div className="z-10 flex flex-col items-center space-y-6">
          <div className="bg-slate-100/20 backdrop-blur-sm w-60 p-3 rounded-2xl border-2 border-slate-400/50 hover:scale-105 transition-all duration-200 shadow-lg shadow-slate-900/50 hover:shadow-2xl hover:shadow-slate-900/70 md:w-1/2 lg:w-1/3 xl:w-1/4">
            <img src={logo} alt="Big Brother Logo" />
          </div>
          <p
            className="mt-5 text-2xl font-bold text-center text-slate-300 px-6"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          >
            We Help You Build Your Dreams
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
