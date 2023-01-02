import React from 'react'
import CardExp from './CardExp'
import './experiences.css'

function Experiences() {
    const expList = [
        //name, description, cover, use_lang
        [
            'Portfolio Website',
            'Portfolio Website is my portfolio, I created for keep your memory.',
            'https://via.placeholder.com/250x200',
            ['HTML', 'CSS', 'JavaScript', 'ReactJS']
        ],
        [
            'Roomrai',
            'Roomrai is a navigate application for people can\'t find my room in universal, I do part backend-developer.',
            'https://via.placeholder.com/250x200',
            ['Dart', 'SQLite', 'Google Map API']
        ],
        [
            'Dreamlendar',
            'Dreamlendar is a calendar application, it have so many template to used you can customize by yourself, I do part backend-developer.',
            'https://via.placeholder.com/250x200',
            ['Dart', 'SQLite']
        ],
        [
            'Coffee Market',
            'Coffee Market is a store website online, you can buy coffee in my website, I do fullstack-developer.',
            'https://via.placeholder.com/250x200',
            ['HTML', 'CSS', 'JavaScript']
            
        ],
    ]
    return (
        <section className='experiences'>
            <div className="container">
                <CardExp expList={expList[0]}/> {/* Blog Website */}
                <CardExp expList={expList[1]}/> {/* Roomrai */}
                <CardExp expList={expList[2]}/> {/* Dreamlendar */}
                <CardExp expList={expList[3]}/> {/* Coffee Market */}
            </div>
        </section>
    )
}

export default Experiences
