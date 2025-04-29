import React from "react";
import background from "/images/deck_background.jpeg";

const App = () => {
  return (
    <>
      <div
        className="h-screen scale-100 p-30 items-center justify-center flex flex-col "
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col bg-slate-100/20 backdrop backdrop-blur-sm p6 rounded-2xl border-2 border-slate-400/50 hover:scale-105 transition-all duration-200 shadow-lg shadow-slate-900/50 hover:shadow-2xl hover:shadow-slate-900/70 md:w-1/2 lg:w-1/3 xl:w-1/4">
          <img src="images/big_brother-no_background.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default App;
