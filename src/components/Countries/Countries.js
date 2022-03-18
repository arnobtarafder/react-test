import React, { useEffect, useState } from 'react';
import Country from './Country/Country';
import './Countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    console.log(countries, useState());
    // console.log(useState());
    // console.log(useState());

    useEffect( () => {
        fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])

    return (
        <div>
            <h2 className='text-secondary'>Mr. Countries: {countries.length} </h2>
            {/* <h2>Countries in other file.</h2> */}
            {/* <h2>Hello from Countries file</h2> */}
           <div className='countries-container'>
           {
                countries.map(country => <Country 
                    country = {country} key = {country.cca3}
                    // name = {country.name.common} population={country.population}
                    // area = {country.area}
                    // region = {country.region}
                    ></Country>)
            }
           </div>
        </div>
    );
};

export default Countries;<h2>Countries in other file.</h2>