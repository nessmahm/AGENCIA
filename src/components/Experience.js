import React from 'react'
import {experience} from '../assets/data'
import ExperienceElement from './ExperienceElement'
function Experience() {
  return (
    <div className='section-container'>
          <p id='' className='section-title'>Le gîte de Rochefort c'est...</p>
          { experience.map((i)=>
          <ExperienceElement   article = {i} key={i.title}  />
          )
          }

    </div>
  )
}

export default Experience