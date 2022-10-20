import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';
import Countries from './components/Countries';
import Filter from './components/Filter';
const App = () => {

  const [data, setData] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then((response) => {
      setData(response.data);
    });
  }, []);

  const handleFilterChange = (event) => setFilter(event.target.value)
  const countriesToShow = data.filter((country) =>
    JSON.stringify(country.name)
      .toLowerCase()
      .includes(filter.toLowerCase().trim())
  );

  return ( 
    <div> 
      <Filter handleFilterChange = {(event) => {handleFilterChange(event)}}/>
      <Countries 
        filter = { filter }
        countries = {countriesToShow }
        handleFilterChange = {(event) => {handleFilterChange(event) }}
        />
    </div>
  );
}

export default App;
