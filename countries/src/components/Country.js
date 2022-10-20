import React from 'react'

const Country = ({ country, handleFilterChange }) => {
    return (
        <li>
            { country.name.common }
            <button value={ country.name.common } onClick={ handleFilterChange }>show</button>
        </li>
    )
}

export default Country