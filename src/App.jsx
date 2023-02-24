import { useState } from "react";
import "./App.css";
import countriesJSON from "../src/countries";
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import CountryDetails from "./components/CountryDetails";
import { Routes, Route } from "react-router-dom";
import { useEffect } from 'react';

function App() {
  const [countries, setCountries] = useState(countriesJSON);
  const [countriesF, setCountriesF] = useState([]);


  useEffect(() => {    
      fetch('https://ih-countries-api.herokuapp.com/countries')  
      .then((response) => response.json())
       .then((data) => setCountriesF(data))      
    }, []);

  return (
    <div className="App">
      <Navbar />
    {countriesF.length > 0 && 
      <div class="bodyDiv">
        <CountriesList countries={countriesF} />
        <Routes>
          <Route
            path="/:id"
            element={<CountryDetails 
                      countries={countriesF} />}
          />
        </Routes>
      </div>
    }
    </div>
  );
}

export default App;
