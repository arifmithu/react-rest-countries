import React, { useState } from "react";

function Country({
  country,
  visitedCountries,
  setVisitedCountries,
  countries,
  setCountries,
}) {
  const [visited, setVisited] = useState(false);

  const handleVisited = (country) => {
    setVisited(!visited);
    if (!visited) {
      setVisitedCountries([...visitedCountries, country]);
      const notVisited = countries.filter(
        (countryFromAll) => countryFromAll !== country
      );
      setCountries(notVisited);
    } else {
      const finalVisitedTotal = visitedCountries.filter(
        (visitedCountry) => visitedCountry !== country
      );
      setVisitedCountries(finalVisitedTotal);
    }
  };
  return (
    <div
      className={`border p-3 rounded-lg shadow-lg ${
        visited ? "bg-green-300" : "bg-gray-400"
      }`}
    >
      <div className="bg-cover mb-4">
        <img
          className="h-[250px] bg-cover rounded border w-full"
          src={country.flags.png}
          alt=""
        />
      </div>
      <h1>
        <span className="font-bold text-base">Country:</span>{" "}
        <span className="text-xl font-bold">{country.name.common}</span>
      </h1>
      <h1>
        <span className="font-bold text-base">Total Area:</span>{" "}
        <span className="text-xl font-bold">{country.area}</span> Sq.Km
      </h1>
      <p>
        <span className="font-bold text-base">Independent:</span>{" "}
        <span className="text-xl font-bold">
          {country.independent ? "Yes" : "No"}
        </span>{" "}
      </p>
      <p className="mb-2">
        <span className="font-bold text-base">Total Population:</span>{" "}
        <span className="text-xl font-bold">{country.population}</span>
      </p>
      <button
        className="px-3 py-1 text-white text-xl font-bold bg-blue-400 rounded-lg"
        onClick={() => handleVisited(country)}
      >
        {visited ? "Visited" : "Visit"}
      </button>
    </div>
  );
}

export default Country;
