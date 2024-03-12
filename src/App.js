import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import Countries from "./components/Countries";
import Footer from "./components/Footer";

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      setCountries(data);
    };
    fetchData();
  }, []);

  return (
    <div className="bg-slate-300">
      <Navbar />
      <Countries countries={countries} setCountries={setCountries} />
      <div className="flex-1">
        <Footer />
      </div>
    </div>
  );
}

export default App;
