import "../App.css";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

function CountriesList({ countries }) {  
  return (
    <div className="linksDiv">      
        {countries.map((country) => {
          return (
            <div className="flag">
            <Link to={country.alpha3Code}><img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt=""/></Link>
            </div>
          )
        })}      
    </div>
  );
}

export default CountriesList;
