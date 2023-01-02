import React from 'react'
import './educations.css'
import CardEdu from './CardEdu'

function Educations() {

    const educationsList = [
        // Name, From, To, Major, Position
        ['Thammarsart University', '2020', 'Present', 'Software Engineer', 'Pathumthani, 12120'],
        ['Suankularbwittayalai Rangsit School', '2014', '2020', 'Science and Mathematics', 'Pathumthani, 12120']
    ]

    return (
        <section className='educations'>
            <div className="container">
                <CardEdu educationsList={educationsList}/>
            </div>
        </section>
    )
}

export default Educations
