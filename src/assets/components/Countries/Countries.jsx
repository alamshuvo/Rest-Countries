import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'


const Countries = () => {
    const [countries,setCountries]=useState([]);
    const [visitedCountries,setVisitedCountries]=useState([]);
    const [visitedFlags,setVisitedFlags]=useState([]);
  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then (res => res.json())
    .then (data=>setCountries(data))
  },[])
  const handleVisitedCountry=(country)=>{
    console.log(country);
    const newVisitedCountry=[...visitedCountries,country];
    setVisitedCountries(newVisitedCountry);
  };
  const handleVisitedFlags=(flags)=>{
    console.log("flags ading");
    const newAddedFlag=[...visitedFlags,flags];
    setVisitedFlags(newAddedFlag);
  }
    return (
        <div>
            <h2>Countries : {countries.length}</h2>
            <div>
                <h5>Visited Countries : {visitedCountries.length}</h5>
                <ol>
                  {
                    visitedCountries.map(country=>(
                      <li key={country.cca3}>{country.name.common}</li>
                    ))
                  }
                </ol>
                
            </div>
            <div className="flag-container">
                  {
                    visitedFlags.map((flag,idx)=>(<img key={idx} src={flag}/>))
                  }
            </div>
            <div className="countries">
            
            {
              countries.map(country=>  <Country key={country.cca3} country={country} handleVisitedCountry={handleVisitedCountry} handleVisitedFlags={handleVisitedFlags}></Country>
                )
            }
            </div>
        </div>
    );
};

export default Countries;