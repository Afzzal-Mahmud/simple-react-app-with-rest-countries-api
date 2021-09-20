import React from "react";

const imgWidth = {
    width: "180px",
    maxWidth: "100%"
}
//recive each country data as direct object
const Country = (props) =>{
    const country = props.eachCountry;
    const {name,capital,population,flag,borders} = country;
    return(
        <div>
            <img style={imgWidth} src={flag} alt="Country-Flag-Image" />
            <h2>Country Name : {name} </h2>
            <h3>Capital : {capital} </h3>
            <p>Population: {population} </p>
            <p>Borders : {borders.join(' ')}</p>
        </div>
    )
};

export default Country;

//recive each country data as an object
// const Country = (props) =>{
//     return(
//         <div>
//             <img style={imgWidth} src={props.flag} alt="countryFlag"/>
//             <h3>Country Name : {props.name}</h3>
//             <h4>Capital : {props.capital} and population : {props.population}</h4>
//         </div>
//     )
// }; 