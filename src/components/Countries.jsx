import React, { useState } from "react";
import Country from "./Country";
import VisitecCountry from "./VisitedCountry";

function Countries({ countries, setCountries }) {
  const [showAll, setShowAll] = useState(true);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [showVisitedCountries, setShowVisitedCountries] = useState(false);

  const handleShowAll = () => {
    setShowAll(!showAll);
  };
  const handleShowVisitedCountries = () => {
    setShowVisitedCountries(!showVisitedCountries);
  };
  return (
    <div className="pb-10">
      <h1 className="mx-[50px] mt-12 text-xl font-bold">
        Total Visited : ({visitedCountries.length})
      </h1>
      <button
        onClick={handleShowVisitedCountries}
        className="mx-[50px] mt-1 text-lg bg-blue-400 px-3 rounded text-white py-2 font-bold"
      >
        {showVisitedCountries && visitedCountries.length
          ? "Hide Visited Countries"
          : "Show Visited Countries"}
      </button>

      <div
        className={`grid grid-cols-2 gap-10 mx-[50px] mt-10 ${
          showVisitedCountries ? "" : "hidden"
        }`}
      >
        {visitedCountries.map((country) => (
          <VisitecCountry
            key={country.cca3}
            country={country}
            visitedCountries={visitedCountries}
            setVisitedCountries={setVisitedCountries}
            countries={countries}
            setCountries={setCountries}
          />
        ))}
      </div>
      <div className="flex justify-between mx-[50px] mt-4 items-center">
        <h1 className="  text-xl font-bold">
          Countries to Visit : ({countries.length})
        </h1>
        <h1
          onClick={handleShowAll}
          className="bg-blue-400 text-white text-xl font-bold px-4 py-2 rounded cursor-pointer"
        >
          {showAll ? "Hide All" : "Show All"}
        </h1>
      </div>
      <div
        className={`grid grid-cols-2 gap-4 mx-[50px] mt-5 ${
          showAll ? "" : "hidden"
        }`}
      >
        {countries.map((country) => (
          <Country
            key={country.cca3}
            country={country}
            visitedCountries={visitedCountries}
            setVisitedCountries={setVisitedCountries}
            countries={countries}
            setCountries={setCountries}
          />
        ))}
      </div>
    </div>
  );
}

export default Countries;
