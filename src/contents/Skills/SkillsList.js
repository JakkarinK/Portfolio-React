import React from 'react'
import './skills.css'

function SkillsList(props) {
  return (
    <div className='skills-list'>
      {props.skillList.map((skill)=>{
        return  <li>{skill}</li>
      })}
    </div>
  )
}

export default SkillsList
