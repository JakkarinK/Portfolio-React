import React from 'react'
import CardExp from './CardExp'
import './experiences.css'
import DreamPic from './img/Dreamlendar.png'
import RoomraiPic from './img/Roomrai.png'
import PortPic from './img/Port.jpg'
import WebsitePic from './img/website.png'
import Velocity from './img/velocity.png'
import TeaPic from './img/Tea.png'
import BonikPic from './img/bonik.png'
import CoffeePic from './img/coffee.png'
function Experiences() {
    const expList = [
        //name, description, cover, use_lang
        [
            'CoffeeStyle',
            'Website shopping templete from webflow website, Create for learning and practice',
            CoffeePic,
            ['HTML', 'SCSS', 'JaveScript', 'ReactJS'],
            'https://jakkarink.github.io/Coffee-Style-Website/'
        ],
        [
            'Ecommerce-ReactJS',
            'Website shopping templete from Bonik website, Create for learning and practice',
            BonikPic,
            ['HTML', 'SCSS', 'JaveScript', 'ReactJS']
        ],
        [
            'Velocity Website Templete',
            'Blog website is a website me training to do, I do fullstack-developer.',
            Velocity,
            ['HTML', 'CSS', 'JavaScript', 'ReactJS'],
            'https://jakkarink.github.io/Velocity-Templete/'
            
        ],
        [
            'ChillAid Website',
            'Blog website is a website me training to do, I do fullstack-developer.',
            WebsitePic,
            ['HTML', 'CSS', 'JavaScript', 'ReactJS'],
            'https://jakkarink.github.io/ChillAid-React/'
            
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
                {expList.map((item, idx)=>{
                    return (<CardExp expList={item} />)
                })}
            </div>
        </section>
    )
}

export default Experiences
