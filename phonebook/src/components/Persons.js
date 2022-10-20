import React from 'react'
import Person from './Person'

const Persons = ({ persons, deletePerson }) => {
    const listOfPersons = persons.map((p) => {
        return (
            <Person key={p.id} person={p} deletePerson={deletePerson} />
        )
    });
    return (
        <div>
            { listOfPersons }
        </div>
    )
}

export default Persons