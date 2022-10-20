import React from 'react'

const Personform = ({ addPerson, handleNameChange, handleNumberChange }) => {
    return (
        <form onSubmit={ addPerson }>
            <div>
                name: <input onChange={ handleNameChange }/>
                number: <input onChange={ handleNumberChange }/>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default Personform