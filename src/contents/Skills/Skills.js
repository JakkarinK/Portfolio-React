import React from 'react'
import './skills.css'
import SkillsList from './SkillsList'

function Skills() {
  const langSkills = [
    'HTML',
    'CSS',
    'JavaScript',
    'Dart',
    'Python',
    'MySQL'
  ]
  
  const frameWork = [
    'ReactJS',
    'Flutter',
  ]
  return (
    <section className='skills'>
      <div className="container">
        <div className="skills-detail">
          <h1>Programming Languages</h1>
          <ul>
            <SkillsList skillList={langSkills} />
          </ul>
        </div>

        <div className="skills-detail">
          <h1>Framework Languages</h1>
          <ul>
            <SkillsList skillList={frameWork} />
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Skills
