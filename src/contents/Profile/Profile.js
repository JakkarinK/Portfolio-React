import React from 'react'
import ProfilePic from './profile.jpg';
import './profile.css';

function Profile() {
    return (
        <section className='profile'>
            <div className='container'>
                <div className="topic">
                    <h1>Hi' my name is</h1>
                    <h2>Jakkarin Kerdthaidee</h2>
                    <p>I'm 3rd-year Software Engineering student,
                    at Thammasat University.<br/>
                    This is my portfolio, Thank you for visited. 
                    </p>
                </div>
                    <img src={ProfilePic} alt="profile" />
            </div>
        </section>
    )
}

export default Profile
