import React from 'react'
import MenuList from './MenuList'

function NavBar() {
  const menuList = [
    // Name, Link
    ['Profile', '/'],
    ['Skills', '/skills'],
    ['Experiences', '/experiences'],
    ['Educations', '/educations'],
    ['Socials', '/socials'],
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
