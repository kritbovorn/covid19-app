import React from 'react';
import './CountryList.css'
import Country from '../Country/Country';

const CountryList = ({ stats }) => {
    return (
        <div className='countrylist'>
            { stats.map((country) => <Country stats={ (country)} key={ country.CountryCode}/>)}
        </div>
    );
}

export default CountryList;