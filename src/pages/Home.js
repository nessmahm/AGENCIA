import React from 'react'
import Reserver from '../components/Reserver'
import Experience from '../components/Experience'
import ChambreSection from '../components/ChambreSection'
import Petitdej from '../components/Petitdej'
import Temoignages from '../components/Temoignages'
import PhotoVisiteur from '../components/PhotoVisiteur'
import Contact from '../components/Contact'
function Home() {
  return (
    <div className='home'>
       <Reserver/>
      <div className='elements'>        
      <Experience/>
      <ChambreSection />
      <Petitdej/>
      <Temoignages/>
      <PhotoVisiteur/>
      <Contact/>
      </div>
    </div>
  )
}

export default Home