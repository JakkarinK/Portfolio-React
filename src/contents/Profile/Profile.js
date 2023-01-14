import React from 'react'
import ProfilePic from './profile.jpg';
import './profile.css';
import Resume from './Resume_JakkarinK.pdf'

function Profile() {
    return (
        <section className='profile'>
            <div className='container'>
                <div className="detail">
                    <div className="topic">
                        <h1>Hi' my name is</h1>
                        <h2>Jakkarin Kerdthaidee</h2>
                        <p>I'm 3rd-year Software Engineering student,
                            at Thammasat University.<br />
                            This is my portfolio, Thank you for visited.
                        </p>
                        <a href={Resume}>Resume</a>
                    </div>
                    <img src={ProfilePic} alt="profile" />
                </div>
                
            </div>
        </section>
    )
}

export default Profile
