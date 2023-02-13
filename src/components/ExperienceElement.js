import React from 'react'
import styled from 'styled-components'

const Button = styled.a`
background-color: ${props=>props.couleur || "white "};
max-width:200px;
`;
function ExperienceElement({article}) {
  return (
      <div className="element-container experience"  >
            <div className="img-container" >
              <img  src={article.image}/>
            </div>
 
            <div className='article-container'>
              <p className='article-title'> { article.title} </p>
              <div className='text'> {article.text.map((text,index)=>
                  <p key={index+"123" }> {text}</p>
                  )}
              </div>
              <Button className='button' href={'#'+article.link} couleur={article.buttoncolor} > <span className='experience-button'> {article.button}</span></Button>
            </div>

      </div>
    )
}

export default ExperienceElement