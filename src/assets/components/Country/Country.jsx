import { useState } from 'react';
import './Country.css'
const Country = ({country,handleVisitedCountry,handleVisitedFlags}) => {
    console.log(country);
    const {name,flags,capital,continents,independent,area,population,region,subregion,unMember,cca3
    }=country;
    const [Visited,setVisited]=useState(false);
    const handleVisited=()=>{
    setVisited(!Visited);
    }
    return (
        <div className={`country ${Visited?'visited':'non-visited'}`}>
            <h3 style={{color:Visited?"purple":"black"}}>Name Common : {name?.common}</h3>
            <h3 style={{color:Visited?"purple":"black"}}>Name Offical : {name?.official}</h3>
            <img src={flags.png} alt="" srcset="" />
             <p>Capital: {capital}</p>
            <p>continents : {continents}</p>
             <p>independent: {independent?"Country is Independent" :"country is not Independent"}</p>
             <p>Population : {population}</p>
             <p>Region {region}</p>
             <p>Subregion:{subregion}</p>
             <p>UN Member :{unMember? "Country is Member of UN":"Country is not Member of UN"}</p>
             <p><small>CCA3: {cca3}</small></p>
             <button onClick={handleVisited}>Going</button>
             {Visited?"I have visitied This Country":"I Want to visit"};
             <br />
            <button onClick={()=>handleVisitedCountry(country)}>Mark as visited</button>
            <br />
            <button onClick={()=>handleVisitedFlags(country.flags.png)}>Add Visited Flag</button>

           
        </div>
    );
};

export default Country;