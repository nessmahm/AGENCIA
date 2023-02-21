import React from 'react'
import GoogleMaps from './GoogleMaps'
function Contact() {
    
  return (
    <div className="section-container contact scroll-bg" id="nous-contacter">
        <p className='section-title'>Nous contacter</p>

        <div className='element-container'>
            <div className='maps'>
               <GoogleMaps/>
            </div>
            
            <div className="adresses">
                <div className="adress">
                    <h3>ADRESSE</h3>
                    <p>17 rue de L'envolée</p>
                    <p>75002 Rochefort</p>
                </div>

                <div className="adress">
                    <h3>TELEPHONE </h3>
                    <p>12 33 44 55</p>
                </div>

                <div className="adress">
                    <h3>EMAIL</h3>
                    <p>agencia@gmail.com</p>
                </div>
            </div>
        </div>
    </div> 
       )
}

export default Contact