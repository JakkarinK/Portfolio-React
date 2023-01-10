import React from 'react'
import './experiences.css'

function SkillsEXP(props) {
  return (
    <div className='skillsEXP'>
        {props.skills.map((skill)=>{
            return <li>{skill}</li>
        })}
    </div>
  )
}

export default SkillsEXP
