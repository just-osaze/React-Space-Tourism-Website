import Navbar from './appbar/Navbar';

function Home() {
  return (
    <div className='h-[100vh] relative'>
      <Navbar />
      <div className='flex text-center'>
      
        <div className='right'>
          <p className='mt-4 text-[#D0D6F9] text-base uppercase tracking-widest'>So, you want to travel to</p>
          <h1 className='my-7 text-7xl uppercase text-white'>Space</h1>
          <p className='w-[95%] m-auto text-lg leading-7 text-[#D0D6F9]'>
              Let’s face it; if you want to go to space, you might as well genuinely go to 
              outer space and not hover kind of on the edge of it. Well sit back, and relax 
              because we’ll give you a truly out of this world experience!
          </p>
        </div>

      </div>

      <div className='absolute bottom-10 ml-[30%] w-[40%] h-[150px] text-xl tracking-widest rounded-full bg-white flex items-center justify-center uppercase hover:cursor'>Explore</div>
    </div>
    
  )
}

export default Home