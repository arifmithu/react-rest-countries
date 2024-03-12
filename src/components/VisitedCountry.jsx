import React, { useState } from "react";

function VisitecCountry({
  country,
  visitedCountries,
  setVisitedCountries,
  countries,
  setCountries,
}) {
  const handleRemove = (country) => {
    const finalVisitedTotal = visitedCountries.filter(
      (visitedCountry) => visitedCountry !== country
    );
    setVisitedCountries(finalVisitedTotal);
    setCountries([country, ...countries]);
  };
  return (
    <div
      className={`border p-3 rounded-lg shadow-lg 
         bg-green-300
      }`}
    >
      <div className="bg-cover mb-4">
        <img
          className=" h-[250px] bg-cover rounded border w-full"
          src={country.flags.png}
          alt=""
        />
      </div>
      <h1>
        <span className="font-bold text-base">Country : </span>{" "}
        <span className="text-xl font-bold">{country.name.common}</span>
      </h1>
      <h1>
        <span className="font-bold text-base">Total Area : </span>{" "}
        <span className="text-xl font-bold">{country.area}</span> Sq.Km
      </h1>
      <p>
        <span className="font-bold text-base">Independent : </span>{" "}
        <span className="text-xl font-bold">
          {country.independent ? "Yes" : "No"}
        </span>{" "}
      </p>
      <p>
        <span className="font-bold text-base">Total Population : </span>{" "}
        <span className="font-bold text-xl">{country.population}</span>
      </p>
      <button
        className="px-3 py-2 text-white font-bold bg-blue-400 rounded-lg mt-4"
        onClick={() => handleRemove(country)}
      >
        Remove
      </button>
    </div>
  );
}

export default VisitecCountry;
