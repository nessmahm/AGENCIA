import React from 'react'
import {chambers} from '../assets/data'
import ChamberElement from './ChamberElement'
function ChambreSection() {
  return (
    <div className='section-container chamber-section'>
           <p id="chambres" className='section-title'>Nos chambres</p>

        {chambers.map((chambre,index)=>
            <ChamberElement chamber={chambre} index={index} key={chambre.title}/>
        )}

        <a className="button" href="#nous-contacter"><span>Nous Contacter</span></a>
    </div>
  )
}

export default ChambreSection