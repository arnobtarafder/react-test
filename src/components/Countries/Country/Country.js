import React from 'react';
import './Country.css'

const Country = (props) => {
    const {area, population, region, name, flags, capital, timezones, continents, currencies, languages} = props.country;
    console.log(props.country);
    return (
        <div className='country'>
            {/* <h2>Country Name: {props.country.name.common}</h2>
            <p>Population: {props.country.population}</p>
            <p>Area: {props.country.area}</p>
            <p>Region: {props.country.region}</p>
            <p>Special: {props.country.name.official}</p> */}
            
            <h3>Country Name: {name.common}</h3>
            <h4>Official Name: {name.official}</h4>
            <p>Population: {population}</p>
            {/* <p>Language: {languages}</p> */}
            <img src={flags.png} alt="" />
            {/* <p>Currency: {currencies}</p> */}
            <p>Area: {area}</p>
            <p>Region: {region}</p>
            <p>Continent: {continents}</p>
            <p>Capital: {capital}</p>
            {/* <p>timezones: {timezones}</p> */}
            {/* <p>Special: {area}</p> */}
        </div>
    );
};

export default Country;