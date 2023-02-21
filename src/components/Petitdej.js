import React from 'react'
import petitdej from '../assets/images/petit-dej1.jpg'
import petitdej2 from '../assets/images/petit-dej2.jpg'
import petitdej3 from '../assets/images/petit-dej3.jpg'
import petitdej4 from '../assets/images/petit-dej4.jpg'
import styled from 'styled-components'
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';
import { useState } from 'react';

const PetitdejImg = styled.div `
background-image: ${ (props) => `url(${props.bg})` };
background-position: center ;
background-repeat: no-repeat;
background-size: contain;
width:350px;
height:200px;
display:flex;
justify-content: space-between;
align-items:center;
`

function Petitdej() {
  const [ MenuimgIndex , setMenuimgIndex ] = useState(0);

  const images = [petitdej3, petitdej4,petitdej,petitdej2]
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

          <PetitdejImg  bg={images[MenuimgIndex]}>
            <div className='leftArrow' onClick={()=> setMenuimgIndex ( MenuimgIndex-1 == -1 ? images.length-1 : MenuimgIndex-1 %images.length )  } > <IoIosArrowBack/></div> 
            <div className='rightArrow'  onClick={()=> setMenuimgIndex ( MenuimgIndex+1 == images.length ? 0 : MenuimgIndex+1 %images.length ) } ><IoIosArrowForward/></div> 
            </PetitdejImg>

     </div>
   </div>  
  )}

export default Petitdej