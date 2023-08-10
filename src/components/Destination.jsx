import React from 'react'
import data from '../data.json';

const image = (imgName) => {
   return require (`../assets/destination/image-mars.png`)
}
function Destination() {
  return (
   <div>
      {data.destinations.slice(1, 2).map((destination, index) => {
      return (
        <div key={index}>
          <h2 className='text-3xl'>{destination.name}</h2>
          <h2>{destination.description}</h2>
          <h2>{destination.distance}</h2>
          <h2>{destination.travel}</h2>
          <img src={image()} className='w-10 h-10' alt='mars'/>

        </div>
      )
    })}

   </div>
    
  )
}

export default Destination