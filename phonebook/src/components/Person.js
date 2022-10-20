import React from 'react'


const Person = ({ person, deletePerson }) => {
    return (
        <div>
            
            { `${ person.name  } `  } { `${ person.number } `  } <button name = {person.name} id={person.id} onClick={deletePerson}>Delete</button>
    
        </div>
    )
}

export default Person