import React from 'react'

function Copyright() {
    return (
        <div className='copyright'>
            <div className='container'>
                <article className="copytext">
                    <p>&#169;2022 Jakkarin Kerdthaidee</p>
                </article>

                <article className="credit">
                    <ul>
                        <li><a href="https://www.facebook.com/Earth.jakkarink/"><i class="fa-brands fa-square-facebook"></i></a></li>
                        <li><a href="https://www.instagram.com/w_earth.k/"><i class="fa-brands fa-instagram"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/jakkarink/"><i class="fa-brands fa-linkedin"></i></a></li>
                        <li><a href="https://github.com/JakkarinK"><i class="fa-brands fa-square-github"></i></a></li>
                    </ul>

                </article>
            </div>
            {/* End container */}
        </div>
    )
}

export default Copyright
