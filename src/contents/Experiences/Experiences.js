import React from 'react'
import CardExp from './CardExp'
import './experiences.css'
import DreamPic from './img/Dreamlendar.png'
import RoomraiPic from './img/Roomrai.png'
import PortPic from './img/Port.jpg'
import WebsitePic from './img/website.png'
import TeaPic from './img/Tea.png'

function Experiences() {
    const expList = [
        //name, description, cover, use_lang
        [
            'Blog Website',
            'Blog website is a website me training to do, I do fullstack-developer.',
            WebsitePic,
            ['HTML', 'CSS', 'JavaScript', 'ReactJS']
            
        ],
        [
            'Portfolio Website',
            'Portfolio Website is my portfolio, I created for keep your memory.',
            PortPic,
            ['HTML', 'CSS', 'JavaScript', 'ReactJS']
        ],
        [
            'Roomrai',
            'Roomrai is a navigate application for people can\'t find my room in universal, I do part backend-developer.',
            RoomraiPic,
            ['Dart', 'Flutter', 'SQLite', 'Google Map API']
        ],
        [
            'Dreamlendar',
            'Dreamlendar is a calendar application, it have so many template to used you can customize by yourself, I do part backend-developer.',
            DreamPic,
            ['Dart', 'Flutter', 'SQLite']
        ],
        [
            'TEA Cafe',
            'TEA Cafe is a store website online, you can buy coffee in my website, I do fullstack-developer.',
            TeaPic,
            ['HTML', 'CSS', 'JavaScript']
            
        ],
    ]
    return (
        <section className='experiences'>
            <div className="container">
                <CardExp expList={expList[0]}/> {/* Blog Website */}
                <CardExp expList={expList[1]}/> {/* Portfolio */}
                <CardExp expList={expList[2]}/> {/* Roomrai  */}
                <CardExp expList={expList[3]}/> {/* Dreamlendar*/}
                <CardExp expList={expList[4]}/> {/* Coffee Market */}
            </div>
        </section>
    )
}

export default Experiences
