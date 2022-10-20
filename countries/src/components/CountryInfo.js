import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Weather from './Weather'


const CountryInfo = ({ country }) => {
    return (
        <div>
            <h1>{ country.name.common }</h1>
            <div>capital { country.capital }</div>
            <div>area { country.area }</div>
            <h3>languages:</h3>
            {
                Object.entries(country.languages)
                .map( ([key, value]) => <ul key={value}>{value}</ul> )
            }
            <img style={{ width: "100px" }} src={country.flags.png} />
            <Weather city={country.capital} />
        </div>
    )
}

export default CountryInfo