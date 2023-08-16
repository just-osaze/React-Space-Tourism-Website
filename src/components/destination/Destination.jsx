import data from '../../data.json';
import { Link } from 'react-router-dom';



function Destination() {
  return (
   <div>
      {data.destinations.slice(0, 1).map((destination, index) => {
      return (
        <div key={index} className='px-4 text-center tablet:flex desktop:flex'>
          <div className=''>
            <p className='text-base uppercase text-white'><span className='text-bold text-base'>01 </span>Pick your destination</p>
          </div>
          
          <ul className='flex justify-center mt-8'>
            <li className='text-sm mr-4 hover:underline hover:underline-offset-8 hover:decoration-4 hover:text-white text-[#D0D6F9]'>
              {data.destinations.slice(0, 1).map((destination, index) => (
                <Link key={index} to={destination.name}>{destination.name}</Link>
              ))}
            </li>
            <li className='text-sm mr-4 hover:underline hover:underline-offset-8 hover:decoration-4 hover:text-white text-[#D0D6F9]'>
              {data.destinations.slice(1, 2).map((destination, index) => (
                <Link key={index} to={destination.name}>{destination.name}</Link>
              ))}
            </li>
            <li className='text-sm mr-4 hover:underline hover:underline-offset-8 hover:decoration-4 hover:text-white text-[#D0D6F9]'>
              {data.destinations.slice(2, 3).map((destination, index) => (
                <Link key={index} to={destination.name}>{destination.name}</Link>
              ))}
            </li>
            <li className='text-sm mr-4 hover:underline hover:underline-offset-8 hover:decoration-4 hover:text-white text-[#D0D6F9]'>
              {data.destinations.slice(3, 4).map((destination, index) => (
                <Link key={index} to={destination.name}>{destination.name}</Link>
              ))}
            </li>
          </ul>
          
          <h1 className='text-4xl uppercase text-[#D0D6F9] mt-4'>{destination.name}</h1>
          <h2 className='text-[#D0D6F9]  text-lg m-auto mt-4'>{destination.description}</h2>
          <p className='uppercase text-[#D0D6F9] mt-4'>Avg. Distance</p>
          <h2 className='text-sm text-[#D0D6F9]'>{destination.distance}</h2>
          <p className='uppercase text-[#D0D6F9] mt-4'>Travel</p>
          <h2 className='text-sm text-[#D0D6F9]'>{destination.travel}</h2>

        </div>
      )
    })}

   </div>
    
  )
}

export default Destination;