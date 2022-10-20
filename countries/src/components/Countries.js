import React from 'react'

import CountryInfo from './CountryInfo'
import Country from './Country'

const Countries = ({ countries, filter, handleFilterChange }) => {

    let returnData =  ""
    if (countries.length > 10) {
        returnData = "Too many matches, specify another filter"
    }
    if (countries.length === 1) {
        returnData = <CountryInfo country= {countries[0]} />
    } else if (countries.length < 10){
        returnData = countries.map((event) => {
            return (
                <Country key= { event.numericCode }
                country={ event }
                handleFilterChange={ handleFilterChange }/>
            )
        })
    }
    if (countries.length === 0) {
        returnData = "no country"
    } 
    return (
        <div>
            { returnData }
        </div>
    )
}

export default Countries