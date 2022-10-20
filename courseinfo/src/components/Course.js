import React from 'react'

const Header = ({ name }) => {
    return(
        <h2>
            { name }
        </h2>
    )
}

const Content = ({ parts }) => {
    const partElements = parts.map(p =>
        <Part
            key={ p.id }
            part = { p }
        />
    );

    return(
        <p>
            { partElements }
        </p>
    )
}

const Part = ({ part }) => {
    return(
        <p>
            { part.name } { part.exercises }
        </p>
    )
}


const Total = ({ parts }) => {
    const total =  parts.reduce((s, p) => {
        console.log('what is happening', s, p)
        return { exercises: s.exercises + p.exercises }
    });

    return(
        <p>
            <strong>total of { total.exercises } exercises</strong> 
        </p>
    )
}

const Course = ({ course }) => {
    return (
        <div>
            <Header
                name = { course.name }
            />
            <Content
                parts = { course.parts }
            />
            <Total
                parts = { course.parts }
            />
        </div>
    )
}

export default Course