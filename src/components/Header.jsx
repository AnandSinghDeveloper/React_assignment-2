import React from 'react'

const Header = () => {
  return (
    <div className='bg-white '>
      <header className='header bg-white shadow-md z-10 w-full h-14 flex justify-between fixed items-center   px-10'>
        <span className=' w-40'>
          <img src="https://i.ibb.co/w0BJt1L/cg-logo.png" alt="logo" />
        </span>
        <div>
         <ul className='nav-item cursor-pointer flex justify-around items-center gap-5 ' >
         <li className='px-2 py-2 cursor-pointer hover:bg-[#2c65ba] hover:rounded-md text-sm font-light '>
            <a href="#">class 10</a>
            </li>
            <li className='px-2 py-2 cursor-pointer hover:bg-[#2c65ba] hover:rounded-md text-sm font-light  '>
            <a href="#">class 11-12</a>
            </li>
            <li className='px-2 py-2 cursor-pointer hover:bg-[#2c65ba] hover:rounded-md text-sm font-light '>
            <a href="#">counsellors</a>
            </li>
            <li className='px-2 py-2 cursor-pointer hover:bg-[#2c65ba] hover:rounded-md text-sm font-light '>
            <a href="#">Professionals</a> 
            </li>
            <li className='px-2 py-2 cursor-pointer hover:bg-[#2c65ba] hover:rounded-md text-sm font-light '>
            <a href="#">Psychometric Test</a> 
            </li>
            <li className='px-2 py-2 cursor-pointer hover:bg-[#2c65ba] hover:rounded-md text-sm font-light '>
            <a href="#">Pricing</a>
            </li>
            <li className='px-2 py-2 cursor-pointer hover:bg-[#2c65ba] hover:rounded-md text-sm font-light'>
            <a href="#">Courses</a>
            </li>

            
            
            <li className='text-blue-500'>
            <a href="#">918800442358</a>
            </li>
         </ul>

        
        </div>

        <div>
          <ul className='nav-item cursor-pointer flex justify-around items-center gap-5 ml-auto'>
            <li className='px-2 py-2 cursor-pointer hover:bg-blue-600 hover:rounded-md'>
            <a href="#">Sign In</a>
            
            </li>
            <li className='px-2 py-2 cursor-pointer hover:bg-blue-600 hover:rounded-md'>
            <a href="#">My Dashborad</a>
            
            </li>
          </ul>
        </div>
      </header>

      
      
      
    </div>
  )
}

export default Header
