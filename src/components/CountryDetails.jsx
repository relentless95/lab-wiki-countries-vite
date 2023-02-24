import React from "react";
import { Link, Routes, Route, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function CountryDetails({ countries }) {
  let userId = useParams();
  let currentCountryBorders = [...countries];
  const [currentCountryF, setCurrentCountryF] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `https://ih-countries-api.herokuapp.com/countries/${userId.id}`
      );
      setCurrentCountryF(response.data);
    }
    fetchData();
  }, [userId]);

  return (
    <div className="details">
      {currentCountryF &&
      <div>
        <img
          src={`https://flagpedia.net/data/flags/icon/72x54/${currentCountryF.alpha2Code.toLowerCase()}.png`}
          alt=""
        />
        <h1>{currentCountryF.name.common}</h1>
        <h5>Capital: {currentCountryF.capital[0]}</h5>
        <hr></hr>
        <h5>
          Area: {currentCountryF.area} km<sup>2</sup>
        </h5>
        <hr></hr>
        {currentCountryF.borders.map((border) => {
          let displayCurrent = currentCountryBorders.filter(
            (country) => country.alpha3Code === border
          );
          return (
            <div>
              <Link to={`/${displayCurrent[0].alpha3Code}`}>
                {displayCurrent[0].name.common}
              </Link>
            </div>
          );
        })}
      </div>
      }
    </div>
  );
}

export default CountryDetails;
