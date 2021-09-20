import React, { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Api.css';

const LoadCountries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() =>{
        fetch('https://restcountries.eu/rest/v2/all')
        .then(Response => Response.json())
        .then(data => setCountries(data))
    },[])

    return(
        <div>
            <h2>Total Countries :{countries.length}</h2>
           <div className="grid">
               {      
                countries.map(country => <Country 
                                        key={country.population}
                                        eachCountry={country}>
                                        </Country>)
               }
           </div>
        </div>
    )

}

export default LoadCountries;

//pass country data as separet element
// return(
//     <div>
//         <h2>Countries Available : {countries.length}</h2>
//         {/* dynamic data must be into the carly brayses */}

//         {
//             countries.map(country => <Country

//                           flag={country.flag}
//                           name={country.name}
//                           capital={country.capital}
//                           population={country.population}>

//                           </Country>)
//         }
//     </div>
// )