import React from 'react'

function ChamberElement({chamber,index}) {
  return (
    <div className='chamber-container'>

        <div className={  index%2==0 ? "article-title align-left" : "article-title align-right"  }>
            <p>{chamber.title}</p>
        </div>

        <div className='element-container chamber-element'>

            <div className='chamber-image img-container'>
                <img src={chamber.images[0]}  alt={chamber.title}/>
            </div>

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