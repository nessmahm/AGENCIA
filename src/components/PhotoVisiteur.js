import React from 'react'
import visiteur1 from '../assets/images/visiteur1.jpg'
import visiteur2 from '../assets/images/visiteur2.jpg'
import visiteur3 from '../assets/images/visiteur3.jpg'
import visiteur4 from '../assets/images/visiteur4.jpg'
import visiteur5 from '../assets/images/visiteur5.jpg'
import visiteur6 from '../assets/images/visiteur6.jpg'
import visiteur7 from '../assets/images/visiteur7.jpg'
import visiteur8 from '../assets/images/visiteur8.jpg'
import visiteur9 from '../assets/images/visiteur9.jpg'
import visiteur10 from '../assets/images/visiteur10.jpg'
function PhotoVisiteur() {
  return (
    <div className='section-container photo-visiteur'>
        <p id='#photo-visiteur' className='section-title'>Photos de nos visiteurs</p>
        <div className='element-container'>
            <div className='column'> 
                <img src={visiteur1} alt="visiteur" />
                <img src={visiteur2} alt="visiteur" />
                <img src={visiteur3} alt="visiteur" />
                <img src={visiteur4} alt="visiteur" />
                <img src={visiteur5} alt="visiteur" />
            </div>
            <div className='column'>
                <img src={visiteur6} alt="visiteur" />
                <img src={visiteur7} alt="visiteur" />
                <img src={visiteur8} alt="visiteur" />
                <img src={visiteur9} alt="visiteur" />
                <img src={visiteur10} alt="visiteur" />
            </div>
        </div>

    </div>
  )
}

export default PhotoVisiteur