import React from 'react'
import { Link } from 'react-router-dom'

function MenuList(props) {
  return (
    <div className='menulist'>
      {props.menuList.map((menu)=>{
        // Profile => /
        // Skills => /skills
        return <li><Link to={menu[1]}>{menu[0]}</Link></li>
      })}
    </div>
  )
}

export default MenuList
