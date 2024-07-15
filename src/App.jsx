import React, { useEffect, useState } from 'react';
import './App.css';
//import 'mvp.css';
import CountryList from './CountryList';
import Search from './Search';
import Weather from './Weather';

function App() {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => setCountries(data));
  }, []);

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  const handleCountryClick = country => {
    setSelectedCountry(country);
  };

  const filteredCountries = countries.filter(country =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Country List</h1>
      <Search searchTerm={searchTerm} handleSearch={handleSearch} />
      <CountryList countries={filteredCountries} onCountryClick={handleCountryClick} selectedCountry={selectedCountry} />
      {selectedCountry && <Weather capital={selectedCountry.capital[0]} />}
    </div>
  );
}

export default App;