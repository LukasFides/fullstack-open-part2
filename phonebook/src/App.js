import { useState, useEffect } from 'react'
import personservice from './services/personservice'
import Personform from './components/Personform'
import Persons from './components/Persons'
import Filter from './components/Filter'
import Notification from './components/Notification'

import './index.css'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [ notificationMessage, setNotificationMessage] = useState(null)
  useEffect(() => {
    const dataHook = () => {
        personservice
            .getAll()
            .then(initialPersons => {
                setPersons(initialPersons)
            })
    }

    dataHook()
  }, []);

  const handleNameChange = (event) => 
    setNewName(event.target.value)
  
  const handleNumberChange = (event) =>
    setNewNumber(event.target.value)

  const handleFilterChange = (event) => setFilter(new RegExp(event.target.value, 'ig'))  
  const newPerson = {
      name: newName,
      number: newNumber
  }
  
  
  const filteredPersons = persons.filter((person) =>
  JSON.stringify(person.name)
    .toLowerCase()
    .includes(filter.toLowerCase().trim())
  );

  const addPerson = (event) => {
    event.preventDefault()
    const duplicatePerson = persons.find(person => person.name === newName);  

    
    const duplicatePersonMessage = `${ newName } is already added to phonebook, replace the old number with a new one?`
    console.log(newName)
    console.log(duplicatePerson)
    if (duplicatePerson === undefined){
      // add person
      personservice
        .create(newPerson)
        .then(returnedPerson => {
          setNotificationMessage({
            "text": `Added ${ returnedPerson.name }`,
            "type": "notification"
          })
          setTimeout(() => {
            setNotificationMessage(null)
        }, 2000)
          setPersons(persons.concat(returnedPerson))
        }
        )
    } else {
      // already in phonebook
      // sent duplicatePersonMessage 
      if (window.confirm(duplicatePersonMessage) === true) {
        //overwrite
        personservice
          .update(duplicatePerson.id, newPerson)
          .then(returnedPerson => {
           
            setNotificationMessage({
                "text": `${ returnedPerson.name } number got changed`,
                "type": "notification"
              })
              setTimeout(() => {
                setNotificationMessage(null)
              }, 1000) 
            setPersons(persons.map(person => person.id !== duplicatePerson.id ? person : returnedPerson))
          }).catch(error => {
            setNotificationMessage({
              "text": `Information of ${ newName } has already been removed from server`,
              "type": "error"
          })
          setTimeout(() => {
            setNotificationMessage(null)
          }, 2000)
        })
      } //else do nothing 
    }
  }
  const deletePerson = (person) => {

      const name = person.target.name
      const deleteMessage = `Delete ${ name }?`
      console.log(person.target.id)
      console.log(person)
      if (window.confirm(deleteMessage) === true) {
          personservice
              .deletePerson(Number(person.target.id))
              .then(deletedPerson => {
                setNotificationMessage({
                  "text": `Deleted ${ person.target.name }`,
                  "type": "error"
              })
              setTimeout(() => {
                setNotificationMessage(null)
              }, 2000)
                  setPersons(persons.filter(p => p.id !== Number(person.target.id)))
              }).catch(error => {
                setNotificationMessage({
                  "text": `Information of ${ person.target.name } has already been removed from server`,
                  "type": "error"
              })
              setTimeout(() => {
                setNotificationMessage(null)
              }, 2000)
            })
      }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      { notificationMessage !== null ? <Notification message={ notificationMessage } /> : null }
      <Filter handleFilterChange= {handleFilterChange}/>
      <h2> add a new </h2>
      <Personform addPerson={(event) => addPerson(event)}
      handleNameChange={(event) => handleNameChange(event)}
      handleNumberChange={(event) => handleNumberChange(event)}
      />
      <h2>Numbers</h2>
      <Persons persons={filteredPersons} deletePerson={(event) => deletePerson(event)}/>
    </div>
  )
}

export default App