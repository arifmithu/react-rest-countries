import React from "react";

function Navbar() {
  const scrolldown = () => {
    window.scrollTo(0, 235);
  };
  return (
    <div className="bg-green-500 py-3 px-14  flex justify-between text-white items-center shadow-xl">
      <h1 className="text-[50px] font-bold">Global Info</h1>
      <button
        onClick={scrolldown}
        className="bg-blue-400 py-3 text-lg font-bold px-3 rounded-lg shadow-lg"
      >
        Check All Countries
      </button>
    </div>
  );
}

export default Navbar;
