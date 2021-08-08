/* eslint-disable react/jsx-no-undef */
import React,{useEffect, useState} from 'react'
import Country from '../src/Components/Country/Country'

import './App.css';

function App() {
  const [countries, setCountries] = useState([])

  //Get data
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => setCountries(data))
  },[])
  console.log(countries)
  return (
   <div className="container-country">
     {
       countries.map(country => <Country {...country}></Country>)
     }
   </div>
  );
}

export default App;
