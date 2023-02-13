import React from 'react'
import petitdej from '../assets/images/petit-dej1.jpg'
function Petitdej() {
  return (
  <div className="section-container pt-dej " id="pt-dej">
      <p id="petitdej" className='section-title'>Notre petit déjeuner</p>

      <div className='element-container petit-dej'>
          <div className='article-container'>
                <div className='article-title'>
                  <p>Au menu</p> 
                </div>

                <div className='text '>
                  <p>Crêpes traditionnelles avec sirop d'érable pur</p>
                  <p>Chaudrée de légumes gratinés et œuf poché</p>
                  <p>Verrine de yaourt et granola santé avec fruits frais</p>
                  <span>* Café et jus d'orange fraîchement pressé inclus.</span>
                  <span>** Plusieurs choix de confitures et garnitures.</span>
                </div>
          </div>

                <div className='img-container'>
                  <img src={petitdej}  alt="pt-dej"/>
                </div>

     </div>
   </div>  
  )}

export default Petitdej