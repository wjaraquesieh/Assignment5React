import React from 'react';

const CountryList = ({ countries, onCountryClick, selectedCountry }) => {
  return (
    <ul>
      {countries.map((country, index) => (
        <li
          key={index}
          onClick={() => onCountryClick(country)}
          style={{
            backgroundColor: selectedCountry && selectedCountry.name.common === country.name.common ? 'lightblue' : '#f9f9f9',
            color: selectedCountry && selectedCountry.name.common === country.name.common ? 'white' : 'black',
          }}
        >
          {country.name.common}
        </li>
      ))}
    </ul>
  );
};

export default CountryList;
