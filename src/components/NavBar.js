import React from 'react'
import MenuList from './MenuList'

function NavBar() {
  const menuList = [
    // Name, Link
    ['Profile', 'Portfolio-React/'],
    ['Skills', 'Portfolio-React/skills'],
    ['Experiences', 'Portfolio-React/experiences'],
    ['Educations', 'Portfolio-React/educations'],
    ['Socials', 'Portfolio-React/socials'],
  ]
  return (
    <div className='navbar'>
      <div className='container'>
        <h1>Portfolio</h1>
        <nav>
          <MenuList menuList={menuList}/>
        </nav>
      </div>
    </div>
  )
}

export default NavBar
