import React from 'react'
import styled from 'styled-components'
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';
import { useState } from 'react';
const ChamberImg = styled.div `
background-image: ${ (props) => `url(${props.bg})` };

`

function ChamberElement({chamber,index}) {
    const [ chamberimgIndex , setChamberimgIndex ] = useState(0);
    
    return (
    
    <div className='chamber-container'>

        <div className={  index%2==0 ? "article-title align-left" : "article-title align-right"  }>
            <p>{chamber.title}</p>
        </div>

        <div className='element-container chamber-element'>

            <ChamberImg className="background-img" bg={chamber.images[chamberimgIndex]}>
            <div className='leftArrow' onClick={()=> setChamberimgIndex ( chamberimgIndex-1 == -1 ? chamber.images.length-1 : chamberimgIndex-1 %chamber.images.length )  } > <IoIosArrowBack/></div> 
            <div className='rightArrow'  onClick={()=> setChamberimgIndex ( chamberimgIndex+1 == chamber.images.length ? 0 : chamberimgIndex+1 %chamber.images.length ) } ><IoIosArrowForward/></div> 
            </ChamberImg>

            <div className='article-container'>
                <div className='text '>
                    {chamber.description.map((i,index)=>
                    <p key={"chamber" + index } >{i}</p>
                    )}
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default ChamberElement